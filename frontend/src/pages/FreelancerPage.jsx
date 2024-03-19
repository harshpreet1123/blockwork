import { Link } from "react-router-dom";

const FreelancerPage = () => {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            BlockWork
          </div>
          <div className="mt-10 text-center justify-between text-xl leading-9 tracking-tight text-purple-600">
            Sign in as a FreeLancer
          </div>
        </div>
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6 border-solid border-2 p-2 border-purple-300 ring-2 ring-purple-300 rounded-md" action="#" method="POST">
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
                  className="block w-full  shadow-sm focus:border-indigo-600 focus:ring-purple-600 focus:ring-opacity-50 py-2 placeholder-gray-400 focus:outline-none focus:ring-2  sm:text-sm border-solid border-2 p-2 border-purple-300 rounded-md "
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
                  className="block border-solid border-2  border-purple-300 rounded-md  w-full shadow-sm focus:border-indigo-600 focus:ring-purple-600 focus:ring-opacity-50 py-2 placeholder-gray-400 focus:outline-none focus:ring-2  sm:text-sm"
                />
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className=" w-full h-full text-purple-500 text-xl font-bold border-solid border-2 p-2 border-purple-300 rounded-md hover:bg-purple-400 hover:text-white py-1"
              >
                Log in
              </button>
            </div>
          </form>
          <p className="mt-5 text-center text-md text-gray-500">
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
  
  export default FreelancerPage;
  