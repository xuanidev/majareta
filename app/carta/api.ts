import { Plato } from '@/models'; 
import dotenv from 'dotenv';

dotenv.config();

export const fetchPlatos = async (setPlatos: React.Dispatch<React.SetStateAction<Plato[]>>): Promise<Plato[] | undefined> => {
    try {
        const response = await fetch('/api/platos', {
            headers: {
                'x-server-request': process.env.NEXT_PUBLIC_SERVER_SECRET || '',
            },
        });
        if (!response.ok) {
            throw new Error('Error al recuperar los platos');
        }
        const data: Plato[] = await response.json();
        setPlatos(data); 
        return data;
    } catch (error) {
        console.error(error);
    }
};
