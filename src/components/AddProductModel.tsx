import MainHeadline from "./MainHeadline";
import ButtonSecondary from "./ButtonSecondary";
import ButtonPagination from "./ButtonPagination";

import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../store/slices/formSlice";

export default function AddProductModel(): JSX.Element {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextPage());
  };
  const handlePrev = () => {
    dispatch(prevPage());
  };

  return (
    <>
      <div className="overflow-x-auto">
        <form onSubmit={handleNext}>
          <div className="flex flex-col items-left justify-start p-8 rounded-xl border-stone-100 border-2 my-10">
            <MainHeadline title="Model" isSupportingContent={false} />
            <div className="my-6">
              <label className="block text-[#666]">Model Name</label>
              <input
                type="email"
                minLength={10}
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
            <div className="my-6">
              <label className="block text-xl text-[#666]">Product Image</label>
              <input type="file"></input>
            </div>
            <div className="my-6">
              <label className="block text-[#666]">Stock</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <ButtonSecondary text="Add Model" />
          </div>
          <ButtonPagination
            left="Prev"
            right="Next"
            actionLeft={handlePrev}
            typeRight="submit"
          />
        </form>
      </div>
    </>
  );
}
