import { Outlet, useNavigate } from "react-router-dom";
import SideImage from "../components/SideImage";
import Brand from "../components/Brand";

import sideImage from "../assets/image.png";
import logo from "../assets/image 5.png";

const Register = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <SideImage src={sideImage} />
        <div className="bg-white px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 h-screen flex items-center justify-center">
          <div className="h-100 max-w-sm md:w-full md:mx-5">
            <Brand src={logo} />
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Sign Up
            </h1>
            <form className="mt-6" action="#" method="POST">
              <div className="mt-6">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your full name here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  required
                />
              </div>
              <div className="mt-6">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Your password here.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  required
                />
              </div>
              <div className="mt-6">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Confirmation password.."
                  className="w-full px-4 py-3 rounded-lg mt-2 border"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full block bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-3 mt-11"
              >
                Log In
              </button>
            </form>
            <div className="my-11">
              <p>
                Have an account?{" "}
                <a
                  onClick={() => navigate("/")}
                  className="font-semibold hover:cursor-pointer"
                >
                  Log In here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Register;
