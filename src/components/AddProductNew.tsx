import { useDispatch } from "react-redux";
import { nextPage } from "../store/slices/formSlice";
import ButtonPagination from "./ButtonPagination";

export default function AddProductNew(): JSX.Element {
  const categories = ["Digital Watches", "Classic Watches", "Smart Watches"];
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextPage());
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col items-left justify-start rounded-xl">
          <form onSubmit={handleNext}>
            <div className="my-6">
              <label className="block text-[#666]">Product Name</label>
              <input
                type="text"
                minLength={10}
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
            <div className="my-6 flex flex-row justify-between gap-5">
              <div className="flex-1">
                <label className="block text-xl text-[#666]">Price</label>
                <input
                  type="number"
                  min={100}
                  max={999999999}
                  name="price"
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
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
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="border-0">
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
