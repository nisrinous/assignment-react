import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../store/slices/formSlice";
import ButtonPagination from "./ButtonPagination";
import { RootState } from "../store/store";
import { setAttribute } from "../store/slices/productSlice";

export default function AddProductNew(): JSX.Element {
  const categories = ["Digital Watches", "Classic Watches", "Smart Watches"];
  const dispatch = useDispatch();
  const { name, price, discount, weight, length, width, category } =
    useSelector((state: RootState) => state.product);

  const handleNext = () => {
    dispatch(nextPage());
  };

  const setName = (input: string) => {
    dispatch(setAttribute({ name: input }));
    console.log(name);
  };

  const setPrice = (input: number) => {
    dispatch(setAttribute({ price: input }));
    console.log(price);
  };

  const setDiscount = (input: number) => {
    dispatch(setAttribute({ discount: input }));
    console.log(discount);
  };

  const setWeight = (input: number) => {
    dispatch(setAttribute({ weight: input }));
    console.log(weight);
  };

  const setLength = (input: number) => {
    dispatch(setAttribute({ length: input }));
  };

  const setWidth = (input: number) => {
    dispatch(setAttribute({ width: input }));
  };

  const setCategory = (input: number) => {
    dispatch(setAttribute({ category: input }));
    console.log(category);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col items-left justify-start rounded-xl">
          <form onSubmit={handleNext}>
            <div className="my-6">
              <label className="block text-[#666]">Product Name</label>
              <input
                value={name}
                type="text"
                minLength={10}
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="my-6 flex flex-row justify-between gap-5">
              <div className="flex-1">
                <label className="block text-xl text-[#666]">Price</label>
                <input
                  type="number"
                  first
                  min={100}
                  max={999999999}
                  name="price"
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  onChange={(e) => setPrice(Number(e.target.value))}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-xl text-[#666]">Discount</label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  name="discount"
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  onChange={(e) => setDiscount(Number(e.target.value))}
                  required
                />
              </div>
            </div>
            <div className="my-6 flex flex-row justify-between gap-5">
              <div className="flex-1">
                <label className="block text-xl text-[#666]">Weight</label>
                <input
                  type="number"
                  min={1}
                  max={99}
                  name="weight"
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  onChange={(e) => setWeight(Number(e.target.value))}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-xl text-[#666]">Length</label>
                <input
                  type="number"
                  min={1}
                  max={99}
                  name="length"
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  onChange={(e) => setLength(Number(e.target.value))}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-xl text-[#666]">Width</label>
                <input
                  type="number"
                  min={1}
                  max={99}
                  name="width"
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  onChange={(e) => setWidth(Number(e.target.value))}
                  required
                />
              </div>
            </div>
            <div className="my-6">
              <label className="block text-[#666]">Category</label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1] border-0"
                onChange={(e) => setCategory(e.target.selectedIndex)}
              >
                <option className="border-0" disabled selected>
                  Choose Category
                </option>
                {categories.map((cat) => (
                  <option key={cat} className="border-0">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <ButtonPagination right="Next" typeRight="submit" />
          </form>
        </div>
      </div>
    </>
  );
}
