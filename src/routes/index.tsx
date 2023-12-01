import { Navigate, useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import ProductList from "../pages/ProductList";
import EditProduct from "../pages/EditProduct";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";

export const AppRoute = (): JSX.Element => {
  const localToken = localStorage.getItem("token");

  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/product" />,
    },
    {
      path: "/auth/login",
      element:
        localToken === null ? <Login /> : <Navigate to="/product" replace />,
    },
    {
      path: "/auth/signup",
      element:
        localToken === null ? <Register /> : <Navigate to="/product" replace />,
    },
    {
      path: "/product",
      element: localToken ? (
        <ProductList />
      ) : (
        <Navigate to="/auth/login" replace />
      ),
    },
    {
      path: "/product/add",
      element: localToken ? (
        <AddProduct />
      ) : (
        <Navigate to="/auth/login" replace />
      ),
    },
    {
      path: "/product/:id",
      element: localToken ? (
        <ProductDetail />
      ) : (
        <Navigate to="/auth/login" replace />
      ),
    },
    {
      path: "/product/:id/edit",
      element: localToken ? (
        <EditProduct />
      ) : (
        <Navigate to="/auth/login" replace />
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <>{routes}</>;
};
