import { Outlet, useNavigate } from "react-router-dom";
import SideImage from "../components/SideImage";
import Brand from "../components/Brand";

import sideImage from "../assets/image.png";
import logo from "../assets/image 5.png";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <SideImage src={sideImage} />
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="h-100 max-w-sm md:w-full md:mx-5">
            <Brand src={logo} />
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-[#333333]">
              Log In
            </h1>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-[#666666]">Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-[#666666]">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Your password here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  required
                />
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-[#666666] ">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-[#D84727] hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-3 mt-11"
              >
                Log In
              </button>
            </form>
            <div className="my-11 text-[#333333]">
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="font-semibold cursor-pointer"
                >
                  Sign Up here
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Login;
