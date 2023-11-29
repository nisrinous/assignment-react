import MainHeadline from "./MainHeadline";

export default function AddProductContent(): JSX.Element {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col items-left justify-start p-8 rounded-xl border-stone-100 border-2">
          <MainHeadline title="Model" isSupportingContent={false} />

          <div className="mx-6">
            <h1 className="text-sm sm:text-lg font-semibold">
              Top up from Credit Card
            </h1>
          </div>
          <div className="mx-6">
            <h1 className="text-sm sm:text-lg font-semibold">
              13 November 2023{" "}
            </h1>
          </div>
          <span className="block text-green-500 font-semibold">
            IDR 250,000
          </span>
        </div>
      </div>
    </>
  );
}
