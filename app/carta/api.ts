import { Plato } from '@/models'; 

export const fetchPlatos = async (setPlatos: React.Dispatch<React.SetStateAction<Plato[]>>): Promise<Plato[] | undefined> => {
    try {
        const response = await fetch('/api/platos');
        if (!response.ok) {
            throw new Error('Error al recuperar los platos');
        }
        const data: Plato[] = await response.json();
        console.log(data);
        setPlatos(data); 
        return data; // Devuelve los datos también
    } catch (error) {
        console.error(error);
    }
};
