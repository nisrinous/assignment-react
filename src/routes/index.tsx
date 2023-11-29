import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import ProductList from "../pages/ProductList";
import EditProduct from "../pages/EditProduct";
import { useAuth } from "../stores/AuthContext";
import NotFound from "../pages/NotFound";

export const AppRoute = (): JSX.Element => {
  const { email } = useAuth();
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
      element: email && <AddProduct />,
    },
    {
      path: "/product/:id/edit",
      element: email && <EditProduct />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <>{routes}</>;
};
