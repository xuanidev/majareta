export interface Plato {
  id: number;
  name: string;
  src: string;
  alt: string;
  price: { name: string; value: string }[];
  description: string;
  allergens: string[];
  type: string; 
}
