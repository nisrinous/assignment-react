export type Product = {
  id: number;
  name: string;
  price: number;
  weight: number;
  width: number;
  length: number;
  category: number;
  discount: number;
  caseDetail: string;
  dial: string;
  hand: string;
  material: string;
  importantNote: string;
  movement: string;
  model: {
    name: string;
    qty: number;
    photos: string[];
  }[];
};
