import MainLayout from "../components/MainLayout";
import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";

const AddProduct = (): JSX.Element => {
  return (
    <>
      <Aside />
      <MainLayout />
      <Outlet />
    </>
  );
};

export default AddProduct;
