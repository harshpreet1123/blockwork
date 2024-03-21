import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import animation from "../animations/done.json";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSignup = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/${state.userType}/register`,
        {
          email: email,
          password: password,
        }
      );
      console.log(response.body);
      if (response.status === 200) {
        navigate("/animation", { state: { animationData: animation } });
      }
    } catch (e) {
      console.log("error", e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 justify-center items-center bg-white">
        <div className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Aloha!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Register yourself as{" "}
            {state.userType == "cl" ? "Client" : "Freelancer"}
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="pl-2 outline-none border-none"
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="pl-2 outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
              required
            />
          </div>
          {error == "" ? <p></p> : <p className="text-red-500">{error}</p>}
          <button
            onClick={handleSignup}
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            {!isLoading ? "Sign Up" : "Loading..."}
          </button>
        </div>
      </div>
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">BlockWork</h1>
          <p className="text-white mt-1">The Decentrlized Workplace.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
