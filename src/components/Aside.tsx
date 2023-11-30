import ButtonPrimary from "./ButtonPrimary";

export default function Aside(): JSX.Element {
  return (
    <div className="fixed">
      <div className="flex items-center max-w-64 h-screen bg-white border-none">
        <div className="md:hidden flex flex-col items-center w-24 h-full overflow-hidden text-[#333] rounded-tr-2xl rounded-br-xl bg-[#F1DDC9]">
          <a className="flex items-center w-full h-20 px-3" href="/">
            <span className="ml-2 text-sm font-bold border-b-[#D84727] border text-[#333] text-center">
              Matoa Admin
            </span>
          </a>
          <div className="flex flex-col items-center w-full">
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded "
              href="/"
            >
              <span className="text-xs font-bold text-[#333] hover:text-[#D84727]">
                PRODUCT
              </span>
            </a>
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded "
              href="/"
            >
              <span className="text-xs font-bold text-[#333] hover:text-[#D84727]">
                REVENUE
              </span>
            </a>
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded "
              href="/"
            >
              <span className="text-xs font-bold text-[#333] hover:text-[#D84727]">
                CATEGORIES
              </span>
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center w-64 h-full overflow-hidden text-[#333] rounded-tr-2xl rounded-br-xl bg-[#F1DDC9]">
          <a
            className="flex items-center justify-center w-full h-20 px-3 my-10"
            href="/"
          >
            <span className="ml-2 text-2xl border-b-[#D84727] border text-[#333] ">
              Matoa Admin
            </span>
          </a>
          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full">
              <a
                className="flex items-center justify-center w-full h-12 px-3 rounded "
                href="/"
              >
                <span className="ml-5 text-medium font-bold  text-[#333] hover:text-[#D84727]">
                  PRODUCT
                </span>
              </a>
              <a
                className="flex items-center justify-center w-full h-12 px-3 -2 rounded "
                href="/"
              >
                <span className="ml-5 text-medium font-bold  text-[#333] hover:text-[#D84727]">
                  REVENUE
                </span>
              </a>
              <a
                className="flex items-center justify-center w-full h-12 px-3 -2 rounded "
                href="/"
              >
                <span className="ml-5 text-medium font-bold  text-[#333] hover:text-[#D84727]">
                  CATEGORIES
                </span>
              </a>
            </div>
          </div>
          <ButtonPrimary text="LOGOUT" />
        </div>
      </div>
    </div>
  );
}
