import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          BlockWork
        </div>
        <div className="mt-10 text-center text-xl leading-9 tracking-tight text-purple-600">
          Sign in as a Client
        </div>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full  shadow-sm focus:border-indigo-600 focus:ring-purple-600 focus:ring-opacity-50 py-2 placeholder-gray-400 focus:outline-none focus:ring-2  sm:text-sm border-solid border-2 p-2 border-purple-500 rounded-md "
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between ">
              <label
                htmlFor="password"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-purple-600 text-md hover:text-purple-800"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block border-solid border-2  border-purple-500 rounded-md  w-full shadow-sm focus:border-indigo-600 focus:ring-purple-600 focus:ring-opacity-50 py-2 placeholder-gray-400 focus:outline-none focus:ring-2  sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className=" w-full h-full text-purple-600 text-xl font-bold border-solid border-2 p-2 border-purple-500 rounded-md py-1"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-md text-gray-500">
          don&apos;t have an account?{" "}
          <Link to='/SignupPage'>
            <a
              href="#"
              className="font-medium text-lg text-purple-600 hover:text-purple-800"
            >
              Sign Up
            </a>
            </Link>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
