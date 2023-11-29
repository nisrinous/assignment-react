export default function EditProductContentNew(): JSX.Element {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col items-left justify-start rounded-xl">
          <form action="#" method="POST">
            <div className="my-6">
              <label className="block text-[#666666]">Product Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              />
            </div>
            <div className="my-6 flex flex-row justify-between">
              <div>
                <label className="block text-xl text-[#666666]">Price</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-xl text-[#666666]">Discount</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  required
                />
              </div>
            </div>
            <div className="my-6 flex flex-row justify-between">
              <div>
                <label className="block text-xl text-[#666666]">Weight</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-xl text-[#666666]">Length</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  required
                />
              </div>
              <div>
                <label className="block text-xl text-[#666666]">Width</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="ex: kayu jati mod"
                  className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                  required
                />
              </div>
            </div>
            <div className="my-6">
              <label className="block text-[#666666]">Category</label>
              <select
                name=""
                id=""
                placeholder="ex: kayu jati mod"
                className="w-full px-4 py-3 rounded-lg mt-2 bg-[#F1F1F1]"
                required
              >
                Choose Category
                <option></option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
