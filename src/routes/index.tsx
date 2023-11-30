import { Navigate, useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import ProductList from "../pages/ProductList";
import EditProduct from "../pages/EditProduct";
import { useAuth } from "../stores/AuthContext";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";

export const AppRoute = (): JSX.Element => {
  const { token } = useAuth();
  const localToken = localStorage.getItem("token");

  const routes = useRoutes([
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
      element: <ProductList />,
    },
    {
      path: "/product/add",
      element:
        token !== null ? <AddProduct /> : <Navigate to="/auth/login" replace />,
    },
    {
      path: "/product/:id",
      element:
        token !== null ? (
          <ProductDetail />
        ) : (
          <Navigate to="/auth/login" replace />
        ),
    },
    {
      path: "/product/:id/edit",
      element:
        token !== null ? (
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
