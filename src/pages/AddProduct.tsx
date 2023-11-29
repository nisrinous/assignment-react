import MainLayout from "../components/MainLayout";
import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { nextPage, prevPage } from "../store/slices/formSlice";

import AddProductContentNew from "../components/AddProductContentNew";
import AddProductContentModel from "../components/AddProductContentModel";
import AddProductContentDetail from "../components/AddProductContentDetail";
import ButtonPagination from "../components/ButtonPagination";

const AddProduct = (): JSX.Element => {
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
            <AddProductContentNew />
            <ButtonPagination right="Next" actionRight={handleNext} />
          </>
        )}
        {currentPage === 2 && (
          <>
            <AddProductContentModel />
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
            <AddProductContentDetail />{" "}
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

export default AddProduct;
