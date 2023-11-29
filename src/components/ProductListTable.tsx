export default function ProductListTable(): JSX.Element {
  return (
    <>
      <section>
        <div className="w-full">
          <div className="relative flex flex-col min-w-0  w-full rounded">
            <div className="rounded-t mb-0 px-4 py-3">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-[#D84727] text-white active:bg-indigo-600 text-xs px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr className="text-[#1A1A1A]">
                    <th className="px-6 bg-blueGray-50 text-blueGray-500  border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      ID
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500  border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500  border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Category
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500  border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Prices
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500  border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Discount
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500  border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      {" "}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="align-left">
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      1374
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Singo Ebony
                    </td>
                    <td className="border-t-0 px-6 text-right  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      $854.08
                    </td>
                    <td className="border-t-0 px-6 text-right  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      $854.08
                    </td>
                    <td className="border-t-0 px-6 text-right  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      0%
                    </td>
                    <td className="border-t-0 px-6 text-right  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      0%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
