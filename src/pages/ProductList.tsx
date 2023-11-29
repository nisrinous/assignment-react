import Aside from "../components/Aside";
import MainHeader from "../components/MainHeader";
import MainLayout from "../components/MainLayout";
import ProductListTable from "../components/ProductListTable";

export default function ProductList(): JSX.Element {
  return (
    <>
      <Aside />
      <MainLayout>
        <MainHeader title="PRODUCT LIST" />
        <ProductListTable />
      </MainLayout>
    </>
  );
}
