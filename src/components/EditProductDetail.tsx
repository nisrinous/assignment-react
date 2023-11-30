import MainHeadline from "./MainHeadline";

export default function EditProductDetail(): JSX.Element {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col items-left justify-start rounded-xl">
          <MainHeadline title="Detail" isSupportingContent={false} />
          <form action="#" method="POST">
            <div className="my-6">
              <label className="block text-[#666]">Material</label>
              <textarea
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
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
