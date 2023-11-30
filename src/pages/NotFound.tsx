import { useNavigate } from "react-router-dom";

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-screen bg-white flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-[#666]">
          <div className="max-w-md">
            <h1 className="text-6xl font-dark font-bold text-[#D84727]">404</h1>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <div className="my-11">
              <p>
                Have an account?{" "}
                <span
                  onClick={() => navigate("/auth/login")}
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
