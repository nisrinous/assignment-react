import ButtonPrimary from "./ButtonPrimary";

export default function Aside(): JSX.Element {
  return (
    <div className="fixed">
      <div className="flex items-center max-w-64 h-screen bg-white">
        <div className="md:hidden flex flex-col items-center w-24 h-full overflow-hidden text-gray-700 rounded-tr-2xl rounded-br-xl bg-[#F1DDC9]">
          <a className="flex items-center w-full h-20 px-3" href="/">
            <span className="ml-2 text-sm font-bold border-b-[#D84727] text-[#333] ">
              Matoa Admin
            </span>
          </a>
          <div className="flex flex-col items-center top-0 bottom-0 mt-auto mb-auto ">
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded "
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  d="M20 14V2H2V14H20ZM20 0C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2V14C22 14.5304 21.7893 15.0391 21.4142 15.4142C21.0391 15.7893 20.5304 16 20 16H13V18H15V20H7V18H9V16H2C0.89 16 0 15.1 0 14V2C0 0.89 0.89 0 2 0H20ZM4 4H13V9H4V4ZM14 4H18V6H14V4ZM18 7V12H14V7H18ZM4 10H8V12H4V10ZM9 10H13V12H9V10Z"
                  fill="#95999E"
                />
              </svg>
            </a>
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded "
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M5 6.75H23V18.75H5V6.75ZM14 9.75C14.7956 9.75 15.5587 10.0661 16.1213 10.6287C16.6839 11.1913 17 11.9544 17 12.75C17 13.5456 16.6839 14.3087 16.1213 14.8713C15.5587 15.4339 14.7956 15.75 14 15.75C13.2044 15.75 12.4413 15.4339 11.8787 14.8713C11.3161 14.3087 11 13.5456 11 12.75C11 11.9544 11.3161 11.1913 11.8787 10.6287C12.4413 10.0661 13.2044 9.75 14 9.75ZM9 8.75C9 9.28043 8.78929 9.78914 8.41421 10.1642C8.03914 10.5393 7.53043 10.75 7 10.75V14.75C7.53043 14.75 8.03914 14.9607 8.41421 15.3358C8.78929 15.7109 9 16.2196 9 16.75H19C19 16.2196 19.2107 15.7109 19.5858 15.3358C19.9609 14.9607 20.4696 14.75 21 14.75V10.75C20.4696 10.75 19.9609 10.5393 19.5858 10.1642C19.2107 9.78914 19 9.28043 19 8.75H9ZM1 10.75H3V20.75H19V22.75H1V10.75Z"
                  fill="#95999E"
                />
              </svg>
            </a>
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded "
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M6.66667 0.5C5.95942 0.5 5.28115 0.81607 4.78105 1.37868C4.28095 1.94129 4 2.70435 4 3.5V9.5H6.66667V3.5H17.3333V8H14L18.6667 13.25L23.3333 8H20V3.5C20 2.70435 19.719 1.94129 19.219 1.37868C18.7189 0.81607 18.0406 0.5 17.3333 0.5H6.66667ZM0 12.5V15.5H10.6667V12.5H0ZM0 17V20H10.6667V17H0ZM13.3333 17V20H24V17H13.3333ZM0 21.5V24.5H10.6667V21.5H0ZM13.3333 21.5V24.5H24V21.5H13.3333Z"
                  fill="#95999E"
                />
              </svg>
            </a>
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded "
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M18 15.1071V18.5357H14.4V20.8214H18V24.25H20.4V20.8214H24V18.5357H20.4V15.1071H18ZM12.312 21.6671L10.8 23.1071L9 21.3929L7.2 23.1071L5.4 21.3929L3.6 23.1071L1.8 21.3929L0 23.1071V0.25L1.8 1.96429L3.6 0.25L5.4 1.96429L7.2 0.25L9 1.96429L10.8 0.25L12.6 1.96429L14.4 0.25L16.2 1.96429L18 0.25L19.8 1.96429L21.6 0.25V13.2214C20.844 12.97 20.04 12.8214 19.2 12.8214V3.67857H2.4V19.6786H12C12 20.33 12.12 21.0729 12.312 21.6671ZM13.848 15.1071C13.2 15.77 12.732 16.5357 12.42 17.3929H3.6V15.1071H13.848ZM3.6 10.5357H18V12.8214H3.6V10.5357ZM3.6 5.96429H18V8.25H3.6V5.96429Z"
                  fill="#95999E"
                />
              </svg>
            </a>
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded "
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 3H5C3.89 3 3 3.89 3 5V9H5V5H19V19H5V15H3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3ZM10.08 15.58L11.5 17L16.5 12L11.5 7L10.08 8.41L12.67 11H3V13H12.67L10.08 15.58Z"
                  fill="#95999E"
                />
              </svg>
            </a>
          </div>
          <a
            className="flex items-center justify-center w-16 h-16 mt-auto"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M2.7 0H0V27H2.7V14.85H21.8295L14.4045 22.275L16.308 24.192L27 13.5L16.308 2.808L14.4045 4.725L21.8295 12.15H2.7V0Z"
                fill="#95999E"
              />
            </svg>
          </a>
        </div>
        <div className="hidden md:flex flex-col items-center w-64 h-full overflow-hidden text-gray-700 rounded-tr-2xl rounded-br-xl bg-[#F1DDC9]">
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
                  {" "}
                  PRODUCT
                </span>
              </a>

              <a
                className="flex items-center justify-center w-full h-12 px-3 -2 rounded "
                href="/"
              >
                <span className="ml-5 text-medium font-bold  text-[#333] hover:text-[#D84727]">
                  {" "}
                  REVENUE
                </span>
              </a>
              <a
                className="flex items-center justify-center w-full h-12 px-3 -2 rounded "
                href="/"
                // onClick={logout}
              >
                <span className="ml-5 text-medium font-bold  text-[#333] hover:text-[#D84727]">
                  {" "}
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
