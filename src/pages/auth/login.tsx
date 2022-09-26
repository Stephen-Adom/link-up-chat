import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section id="login-section" className="w-full max-h-screen h-screen">
      <div className="login-form w-full p-6 md:p-0 md:w-[80%] lg:w-[50%] h-screen mx-auto flex flex-col items-center justify-center">
        <span className="inline-block text-center">
          <img
            src={require("../../assets/logo/link-up.png")}
            className="invert w-[10%] mx-auto"
            alt=""
          />
        </span>
        <h1 className="font-bold text-white text-4xl mt-3">
          Sign-In to Link-Up
        </h1>

        <section className="social-signup flex items-center justify-center mt-4 space-x-4">
          <div className="facebook-signup ">
            <FontAwesomeIcon
              icon={["fab", "facebook-f"]}
              className="text-white text-xl"
            />
          </div>

          <div className="google-signup ">
            <FontAwesomeIcon
              icon={["fab", "google"]}
              className="text-red-600 text-xl"
            />
          </div>

          <div className="twitter-signup ">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="text-white text-xl"
            />
          </div>
        </section>

        <form action="" className=" w-full md:w-[80%] lg:w-[60%] mx-auto mt-6">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control bg-transparent"
              placeholder="Enter your email"
              id="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control bg-transparent"
              placeholder="Enter your password"
              id="password"
            />
          </div>

          <button
            type="button"
            className="btn-block bg-secondaryColor text-white font-normal text-lg py-4 mt-3 hover:bg-secondaryColor-dark transition duration-300 ease-out tracking-wider"
          >
            Login
          </button>

          <Link to="/register" className="text-white italic mt-3 block text-md">
            Don't have an account, Register Now
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
