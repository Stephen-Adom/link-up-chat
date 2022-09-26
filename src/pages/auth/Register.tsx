import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section
      id="Register-section"
      className="w-full max-h-screen h-screen bg-primaryColor sm:bg-primaryColor md:bg-gradient"
    >
      <div className="register-form w-full p-6 md:p-0 md:w-[80%] lg:w-[50%] h-screen mx-auto flex flex-col items-center justify-center">
        <span className="inline-block text-center">
          <img
            src={require("../../assets/logo/link-up.png")}
            className="invert w-[10%] mx-auto"
            alt=""
          />
        </span>
        <h1 className="font-bold text-white text-4xl mt-3">
          Welcome to Link-Up
        </h1>

        <form action="" className=" w-full md:w-[80%] lg:w-[60%] mx-auto mt-6">
          <section className="mb-4">
            <div className="form-group">
              <label htmlFor="name">Enter Your Name</label>
              <input
                type="text"
                className="form-control bg-transparent"
                placeholder="Enter your name"
                id="name"
              />
            </div>
          </section>

          <section className="grid grid-cols-2 space-x-4 mb-3">
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
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                className="form-control bg-transparent"
                placeholder="Enter your phone"
                id="phone"
              />
            </div>
          </section>

          <section className="grid grid-cols-2 space-x-4 mb-3">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control bg-transparent"
                placeholder="Enter your password"
                id="password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control bg-transparent"
                placeholder="Confirm Password"
                id="confirmPassword"
              />
            </div>
          </section>

          <button
            type="button"
            className="btn-block bg-secondaryColor text-white font-normal text-lg py-4 mt-3 hover:bg-secondaryColor-dark transition duration-300 ease-out tracking-wider"
          >
            Register
          </button>

          <Link to="/login" className="text-white italic mt-3 block text-md">
            Already have an account, Go to Login
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
