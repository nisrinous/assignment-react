import MainHeadline from "./MainHeadline";
import ButtonSecondary from "./ButtonSecondary";
import ButtonPagination from "./ButtonPagination";

import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../store/slices/formSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { setAttribute } from "../store/slices/productSlice";
import { RootState } from "../store/store";

export default function AddProductModel(): JSX.Element {
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [modelCount, setModelCount] = useState<number>(1);
  const { model } = useSelector((state: RootState) => state.product);

  const handleNext = () => {
    dispatch(nextPage());
  };
  const handlePrev = () => {
    dispatch(prevPage());
  };

  const addModel = () => {
    setModelCount(modelCount + 1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileList = Array.from(files);
      if (selectedFiles.length + fileList.length > 5) {
        toast.error("Maximum 5 files reached");
      } else {
        const updatedFiles = [
          ...selectedFiles,
          ...fileList.slice(0, 5 - selectedFiles.length),
        ];

        setSelectedFiles(updatedFiles);

        const photos: string[] = updatedFiles.map((file) =>
          URL.createObjectURL(file)
        );
        const updatedModel = model.map((item, index) => {
          if (index === 0) {
            return {
              ...item,
              photos,
            };
          }
          return item;
        });

        dispatch(setAttribute({ model: updatedModel }));
      }
    }
  };

  const setModelName = (index: number, name: string) => {
    const updatedModel = model.map((item, i) =>
      i === index ? { ...item, name } : item
    );

    dispatch(setAttribute({ model: updatedModel }));
  };

  const setModelQty = (index: number, qty: number) => {
    const updatedModel = model.map((item, i) =>
      i === index ? { ...item, qty } : item
    );

    dispatch(setAttribute({ model: updatedModel }));
  };

  return (
    <>
      <div className="overflow-x-auto">
        <form onSubmit={handleNext}>
          {[...Array(modelCount)].map((_, index) => (
            <div
              key={index}
              id={`model-${index + 1}`}
              className="flex flex-col items-left justify-start p-8 rounded-xl border-stone-100 border-2 my-10"
            >
              <MainHeadline title="Model" isSupportingContent={false} />

              <div className="my-6">
                <label className="block text-[#666]">Model Name</label>
                <input
                  type="text"
                  minLength={10}
                  name=""
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  onChange={(e) => setModelName(index, e.target.value)}
                  required
                />
              </div>
              <div className="my-6">
                <label className="block text-xl text-[#666]">
                  Product Image
                </label>
                <input
                  type="file"
                  multiple
                  accept=".png, .jpeg"
                  onChange={handleFileChange}
                  disabled={selectedFiles.length >= 5}
                ></input>
                <div>
                  {selectedFiles.map((file, index) => (
                    <div key={index}>{file.name}</div>
                  ))}
                </div>
              </div>
              <div className="my-6">
                <label className="block text-[#666]">Stock</label>
                <input
                  type="number"
                  min={1}
                  max={999}
                  name=""
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  onChange={(e) => setModelQty(index, Number(e.target.value))}
                  required
                />
              </div>
            </div>
          ))}

          <div className="flex justify-end">
            <ButtonSecondary text="Add Model" action={addModel} />
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
