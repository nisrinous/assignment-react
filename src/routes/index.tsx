import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import EditProduct from "@/pages/EditProduct";

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
      path: "/product/add",
      element: <AddProduct />,
    },
    {
      path: "/product/:id/edit",
      element: <EditProduct />,
    },
  ]);
  return <>{routes}</>;
};
