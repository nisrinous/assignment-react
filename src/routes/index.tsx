import { Navigate, useRoutes } from "react-router-dom";
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
      element: email ? <AddProduct /> : <Navigate to="/" replace />,
    },
    {
      path: "/product/:id/edit",
      element: email ? <EditProduct /> : <Navigate to="/" replace />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <>{routes}</>;
};
