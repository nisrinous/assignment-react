import Aside from "../components/Aside";
import MainLayout from "../components/MainLayout";
import ProductListTable from "../components/ProductListTable";

export default function ProductList(): JSX.Element {
  return (
    <>
      <Aside />
      <MainLayout>
        <ProductListTable />
      </MainLayout>
    </>
  );
}
