import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductState {
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
}

// const initialState: ProductState = {
//   id: 0,
//   name: "",
//   price: 0,
//   weight: 0,
//   width: 0,
//   length: 0,
//   category: 0,
//   discount: 0,
//   caseDetail: "",
//   dial: "",
//   hand: "",
//   material: "",
//   importantNote: "",
//   movement: "",
//   model: [],
// };

const productSlice = createSlice({
  name: "product",
  initialState: {} as ProductState,
  reducers: {
    setAttribute: (state, action: PayloadAction<Partial<ProductState>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setAttribute } = productSlice.actions;
export default productSlice.reducer;
