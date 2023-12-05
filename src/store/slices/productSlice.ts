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

const productSlice = createSlice({
  name: "product",
  initialState: {} as ProductState,
  reducers: {
    setAttribute: (state, action: PayloadAction<Partial<ProductState>>) => {
      Object.assign(state, action.payload);
    },
    setModelAttribute: (
      state,
      action: PayloadAction<{
        index: number;
        updatedModel: Partial<ProductState["model"][number]>;
      }>
    ) => {
      const { index, updatedModel } = action.payload;
      state.model[index] = { ...state.model[index], ...updatedModel };
    },
  },
});

export const { setAttribute, setModelAttribute } = productSlice.actions;
export default productSlice.reducer;
