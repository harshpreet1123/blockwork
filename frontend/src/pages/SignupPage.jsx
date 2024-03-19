import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const handleSignup = async () => {
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    if (confirmPassword == password) {
      setConfirmPassword(false);
      try {
        const response = await axios.post("http://localhost:5000/cl/register", {
          email: email,
          password: password,
        });
        console.log(response.body);
      } catch (e) {
        console.log("error", e);
      }
    } else {
      setPasswordMismatch(true);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mt-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          BlocWork
        </div>
        <div className="mt-10 text-center justify-between text-xl leading-9 tracking-tight text-purple-600">
          SignUp here
        </div>
      </div>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm ">
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            Email Address
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full shadow-sm focus:border-indigo-600 focus:ring-purple-600 focus:ring-opacity-50 py-2 placeholder-gray-400 focus:outline-none focus:ring-2  sm:text-sm border-solid border-2 p-2 border-purple-300 rounded-md "
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
          </div>
          <div className="mt-2">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
          <div className="flex items-center justify-between ">
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
          </div>
          <div className="mt-2">
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              required
              className="block border-solid border-2  border-purple-300 rounded-md  w-full shadow-sm focus:border-indigo-600 focus:ring-purple-600 focus:ring-opacity-50 py-2 placeholder-gray-400 focus:outline-none focus:ring-2  sm:text-sm"
            />
          </div>
        </div>
        {passwordMismatch ? (
          <p>Password and confirmPassword donot match</p>
        ) : (
          <p></p>
        )}
        <div>
          <button
            onClick={handleSignup}
            className=" w-full h-full text-purple-500 text-xl font-bold border-solid border-2 p-2 border-purple-300 rounded-md py-1 hover:bg-purple-400 hover:text-white"
          >
            Register
          </button>
        </div>
        <p className="mt-3 text-center text-md text-gray-500">
          Already have an account?{" "}
          <Link to="/category">
            <a className="font-medium text-lg text-purple-600 hover:text-purple-800">
              Log in
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
