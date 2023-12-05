import { useState, useEffect } from "react";
import ButtonRounded from "./ButtonRounded";
import toast from "react-hot-toast";
import MainHeader from "./MainHeader";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
}

export default function ProductListTable(): JSX.Element {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [visible, setVisible] = useState<boolean>(false);
  const [indexToDelete, setIndexToDelete] = useState<number>(-1);
  const [productNameToDelete, setProductNameToDelete] = useState<string>("");

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        return products;
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      toast.error("" + error);
    }
  };

  const handleFilterByName = (searchValue: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSortByName = () => {
    const sortedProducts = [...filteredProducts]; // Create a copy to avoid mutating state directly

    sortedProducts.sort((currentElement, nextElement) => {
      const current = currentElement.name.toLowerCase();
      const next = nextElement.name.toLowerCase();

      if (sortOrder === "asc") {
        if (current < next) return -1;
        if (current > next) return 1;
        return 0;
      } else {
        if (current > next) return -1;
        if (current < next) return 1;
        return 0;
      }
    });

    setFilteredProducts(sortedProducts);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleDetailProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const onDelete = (productIndex: number, productName: string) => {
    setProductNameToDelete(productName);
    setVisible(true);
    setIndexToDelete(productIndex);
  };

  const deleteConfirmed = () => {
    setVisible(false);
    handleDeleteProduct(indexToDelete);
  };

  const deleteCanceled = () => {
    setVisible(false);
  };

  const handleDeleteProduct = async (productId: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        await fetchProducts();
        toast.success("Product deleted successfully");
      } else {
        throw new Error("Failed to delete product");
      }
    } catch (error) {
      toast.error("" + error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {visible && (
        <div
          className="fixed w-screen h-screen first-letter:right-0 m-auto z-10 bg-gray-200/80 duration-150 ease-in-out"
          id="modal"
        >
          <div role="alert" className="container mx-auto z-50">
            <div className="absolute top-1/3 left-1/4 rounded-xl bg-white px-5 pt-3 shadow-md md:px-10">
              <h1 className="font-medium mt-1 mb-4 border-b pb-2 leading-tight tracking-normal text-[#D84727] ">
                Confirm delete
              </h1>
              <p className="my-10 text-sm leading-tight tracking-normal text-gray-800">
                Are you sure want to delete{" "}
                <span className="text-[#D84727]">{productNameToDelete} </span>?
              </p>

              <div className="flex w-full items-center justify-end border-t-2 pt-1">
                <button
                  className="my-2 rounded-lg border-2 border-[#D84727] bg-[#D84727] px-8 py-1 text-sm text-white"
                  onClick={deleteConfirmed}
                >
                  Yes
                </button>
                <button
                  className="ml-3 rounded-lg border-2 border-[#D84727] text-[#D84727] bg-white px-8 py-1 text-sm"
                  onClick={deleteCanceled}
                >
                  No
                </button>
              </div>
              <button
                className="absolute right-0 top-0 mr-5 mt-4 cursor-pointer rounded text-gray-400"
                aria-label="close modal"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="#D84727"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <MainHeader>
        <div className="flex p-10 md:px-28 flex-row items-center justify-between">
          <div className="text-2xl">PRODUCT LIST</div>
          <div className="flex gap-2 items-center">
            <div className="relative w-full h-full max-w-full flex-grow text-right">
              <ButtonRounded text="Add Product" target="/product/add" />
            </div>
            <input
              type="text"
              placeholder="Search by name..."
              onChange={(e) => handleFilterByName(e.target.value)}
              className="px-3 py-1 rounded-xl my-2 bg-white border-2 text-base font-normal"
            />
          </div>
        </div>
      </MainHeader>
      <section>
        <div className="w-full p-10 md:px-28">
          <div className="relative flex flex-col min-w-0 w-full rounded">
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse rounder-lg border">
                <thead>
                  <tr className="text-[#1A1A1A]">
                    <th className="px-6 bg-white text-blueGray-500  border border-solid border-blueGray-100 py-3 text-medium font-semibold text-left">
                      ID
                    </th>
                    <th
                      className="flex flex-row justify-between px-6 align-middle bg-white text-blueGray-500 py-3 text-medium font-semibold text-left"
                      onClick={handleSortByName}
                    >
                      Name
                      {sortOrder === "asc" ? (
                        <MdKeyboardArrowDown size={25} />
                      ) : (
                        <MdKeyboardArrowUp size={25} />
                      )}
                    </th>
                    <th className="px-6 bg-white text-blueGray-500  border border-solid border-blueGray-100 py-3 text-medium font-semibold text-left">
                      Category
                    </th>
                    <th className="px-6 bg-white text-blueGray-500  border border-solid border-blueGray-100 py-3 text-medium font-semibold text-left">
                      Prices
                    </th>
                    <th className="px-6 bg-white text-blueGray-500  border border-solid border-blueGray-100 py-3 text-medium font-semibold text-left">
                      Discount
                    </th>
                    <th className="px-6 bg-white text-blueGray-500 border-b-[1px] py-3 text-medium font-semibold text-left">
                      {" "}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredProducts.map((product) => (
                    <tr className="align-left" key={product.id}>
                      <td className=" px-6 text-base p-4 text-left border border-blueGray-100">
                        {product.id}
                      </td>
                      <td className=" px-6 text-base p-4 text-left border border-blueGray-100">
                        {product.name}
                      </td>
                      <td className=" px-6 text-right text-base p-4 border border-blueGray-100">
                        {product.category}
                      </td>
                      <td className=" px-6 text-right text-base p-4 border border-blueGray-100">
                        {`$${product.price}`}
                      </td>
                      <td className=" px-6 text-right text-base p-4 border border-blueGray-100">
                        {`${product.discount}%`}
                      </td>
                      <td className="flex justify-evenly px-6 text-base p-4 border-b-[1px] border-solid border-blueGray-100">
                        <button className="border-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 20H21"
                              stroke="#D84727"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.5 3.50023C16.8978 3.1024 17.4374 2.87891 18 2.87891C18.2786 2.87891 18.5544 2.93378 18.8118 3.04038C19.0692 3.14699 19.303 3.30324 19.5 3.50023C19.697 3.69721 19.8532 3.93106 19.9598 4.18843C20.0665 4.4458 20.1213 4.72165 20.1213 5.00023C20.1213 5.2788 20.0665 5.55465 19.9598 5.81202C19.8532 6.06939 19.697 6.30324 19.5 6.50023L7 19.0002L3 20.0002L4 16.0002L16.5 3.50023Z"
                              stroke="#D84727"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => onDelete(product.id, product.name)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3 6H5H21"
                              stroke="#D84727"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                              stroke="#D84727"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 11V17"
                              stroke="#D84727"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 11V17"
                              stroke="#D84727"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button onClick={() => handleDetailProduct(product.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              fill="#1A1A1A"
                              stroke="#1A1A1A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              fill="#BDBCDB"
                              stroke="#1A1A1A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              fill="#1A1A1A"
                              stroke="#1A1A1A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
