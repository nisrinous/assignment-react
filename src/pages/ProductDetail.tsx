import { useParams } from "react-router-dom";
import MainHeadline from "../components/MainHeadline";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import toast from "react-hot-toast";
import Aside from "../components/Aside";
import MainLayout from "../components/MainLayout";

export default function ProductDetail(): JSX.Element {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          throw new Error("Failed to fetch product");
        }
      } catch (error) {
        toast.error("" + error);
      }
    };

    fetchProduct();
  }, [id]);

  const formatToRupiah = (amount: number): string => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });

    return formatter.format(amount);
  };

  let totalQty = 0;
  product?.model?.forEach((m) => (totalQty += m.qty));

  return (
    <>
      <Aside />
      <MainLayout>
        <div className="overflow-x-auto">
          <div className="flex flex-col items-left justify-start rounded-xl">
            <button className="absolute top-16 right-14 border-[1px] rounded-lg border-[#D84727] text-[#D84727] py-1 px-4">
              back
            </button>
            {product && (
              <>
                <div className="flex flex-col text-right justify-end mt-20">
                  <h1 className="text-5xl">{product.name.toUpperCase()}</h1>
                  <h6 className="text-sm text-[#666]">
                    disc {`${product.discount}`}%
                  </h6>
                  <h4 className="text-xl">
                    {formatToRupiah(Number(product.price))}
                  </h4>
                  <h6 className="text-xm text-[#666]">
                    quantity {totalQty}{" "}
                    <span className="text-[#D84727]">pcs</span>
                  </h6>
                </div>
                <h3 className="block text-xl font-semibold text-[#D84727]">
                  Detail
                </h3>
                <div className="my-6">
                  <h5 className="block text-[#666]">Material</h5>
                  <p className="leading-loose">{product.material}</p>
                </div>
                <div className="my-6">
                  <h5 className="block text-xl text-[#666]">Case</h5>
                  <p className="leading-loose">{product.caseDetail}</p>
                </div>
                <div className="my-6">
                  <h5 className="block text-xl text-[#666]">Movement</h5>
                  <p className="leading-loose">{product.movement}</p>
                </div>
                <div className="my-6">
                  <h5 className="block text-xl text-[#666]">Dial</h5>
                  <p className="leading-loose">{product.dial}</p>
                </div>
                <div className="my-6">
                  <h5 className="block text-xl text-[#666]">Hand</h5>
                  <p className="leading-loose">{product.hand}</p>
                </div>
                <div className="my-6">
                  <h5 className="block text-xl text-[#666]">Important Note</h5>
                  <p className="leading-loose">{product.importantNote}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
