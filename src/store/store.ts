import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
