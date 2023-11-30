import MainHeadline from "./MainHeadline";
import ButtonPagination from "./ButtonPagination";

import { useDispatch } from "react-redux";
import { prevPage } from "../store/slices/formSlice";

export default function AddProductDetail(): JSX.Element {
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(prevPage());
  };

  const handleSubmitProduct = () => {
    console.log("submitted");
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col items-left justify-start rounded-xl">
          <MainHeadline title="Detail" isSupportingContent={false} />
          <form onSubmit={handleSubmitProduct}>
            <div className="my-6">
              <label className="block text-[#666]">Material</label>
              <textarea
                minLength={5}
                maxLength={500}
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
            <div className="my-6">
              <label className="block text-xl text-[#666]">Case</label>
              <textarea
                minLength={5}
                maxLength={500}
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
            <div className="my-6">
              <label className="block text-xl text-[#666]">Movement</label>
              <textarea
                minLength={5}
                maxLength={500}
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
            <div className="my-6">
              <label className="block text-xl text-[#666]">Dial</label>
              <textarea
                minLength={5}
                maxLength={500}
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
            <div className="my-6">
              <label className="block text-xl text-[#666]">Hand</label>
              <textarea
                minLength={5}
                maxLength={500}
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
            <div className="my-6">
              <label className="block text-xl text-[#666]">
                Important Note
              </label>
              <textarea
                minLength={5}
                maxLength={500}
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
            <ButtonPagination
              left="Prev"
              right="Submit"
              actionLeft={handlePrev}
            />
          </form>
        </div>
      </div>
    </>
  );
}
