import { createSlice } from "@reduxjs/toolkit";

interface FormState {
  currentPage: number;
  formData: any;
}

const initialState: FormState = {
  currentPage: 1,
  formData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextPage(state) {
      state.currentPage += 1;
    },
    prevPage(state) {
      state.currentPage -= 1;
    },
  },
});

export const { nextPage, prevPage } = formSlice.actions;
export default formSlice.reducer;
