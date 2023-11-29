import MainHeadline from "./MainHeadline";
import ButtonSecondary from "./ButtonSecondary";

export default function AddProductContentModel(): JSX.Element {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col items-left justify-start p-8 rounded-xl border-stone-100 border-2 my-10">
          <MainHeadline title="Model" isSupportingContent={false} />
          <form action="#" method="POST">
            <div className="my-6">
              <label className="block text-[#666]">Model Name</label>
              <input
                type="email"
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
          </form>
        </div>
        <div className="flex justify-end">
          <ButtonSecondary text="Add Model" />
        </div>
      </div>
    </>
  );
}
