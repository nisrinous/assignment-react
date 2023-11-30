import Aside from "../components/Aside";
import ListLayout from "../components/ListLayout";
import ProductListTable from "../components/ProductListTable";

export default function ProductList(): JSX.Element {
  return (
    <>
      <Aside />
      <ListLayout>
        <ProductListTable />
      </ListLayout>
    </>
  );
}
