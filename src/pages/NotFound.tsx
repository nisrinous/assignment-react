import { useNavigate } from "react-router-dom";

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold text-[#D84727]">
              404
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <div className="my-11">
              <p>
                Have an account?{" "}
                <span
                  onClick={() => navigate("/")}
                  className="font-semibold hover:cursor-pointer"
                >
                  Log In here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
