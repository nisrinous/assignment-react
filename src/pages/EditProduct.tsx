import MainLayout from "../components/MainLayout";
import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { nextPage, prevPage } from "../store/slices/formSlice";

import ButtonPagination from "../components/ButtonPagination";
import EditProductNew from "../components/EditProductNew";
import EditProductModel from "../components/EditProductModel";
import EditProductDetail from "../components/EditProductDetail";

const EditProduct = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.form.currentPage);

  const handleNext = () => {
    dispatch(nextPage());
  };
  const handlePrev = () => {
    dispatch(prevPage());
  };

  const handleSubmitProduct = () => {
    console.log("submitted");
  };
  return (
    <>
      <Aside />
      <MainLayout>
        <MainHeader>ADD NEW PRODUCT {currentPage}/3</MainHeader>
        {currentPage === 1 && (
          <>
            <EditProductNew />
            <ButtonPagination right="Next" actionRight={handleNext} />
          </>
        )}
        {currentPage === 2 && (
          <>
            <EditProductModel />
            <ButtonPagination
              left="Prev"
              right="Next"
              actionLeft={handlePrev}
              actionRight={handleNext}
            />
          </>
        )}
        {currentPage === 3 && (
          <>
            <EditProductDetail />{" "}
            <ButtonPagination
              left="Prev"
              right="Submit"
              actionLeft={handlePrev}
              actionRight={handleSubmitProduct}
            />
          </>
        )}
      </MainLayout>
      <Outlet />
    </>
  );
};

export default EditProduct;
