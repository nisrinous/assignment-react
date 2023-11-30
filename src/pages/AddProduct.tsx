import MainLayout from "../components/MainLayout";
import Aside from "../components/Aside";
import MainHeader from "../components/MainHeader";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../store/store";

import AddProductNew from "../components/AddProductNew";
import AddProductModel from "../components/AddProductModel";
import AddProductDetail from "../components/AddProductDetail";

const AddProduct = (): JSX.Element => {
  const currentPage = useSelector((state: RootState) => state.form.currentPage);

  return (
    <>
      <Aside />
      <MainLayout>
        <MainHeader>ADD NEW PRODUCT {currentPage}/3</MainHeader>
        {currentPage === 1 && (
          <>
            <AddProductNew />
          </>
        )}
        {currentPage === 2 && (
          <>
            <AddProductModel />
          </>
        )}
        {currentPage === 3 && (
          <>
            <AddProductDetail />{" "}
          </>
        )}
      </MainLayout>
      <Outlet />
    </>
  );
};

export default AddProduct;
