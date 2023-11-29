import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import ProductList from "../pages/ProductList";

export const AppRoute = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/product",
      element: <ProductList />,
    },
    {
      path: "/product/add",
      element: <AddProduct />,
    },
  ]);
  return <>{routes}</>;
};
