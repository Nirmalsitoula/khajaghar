import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";
import axios from "axios";

const SignIn = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handelSignIn = async () => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/signin`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]"
        style={{
          border: `1px solid ${borderColor}`,
        }}
      >
        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: primaryColor }}
        >
          Khaja Ghar
        </h1>

        <p className="text-gray-600 mb-8">
          Sign in to continue to Khaja Ghar
        </p>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            className="w-full rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
            placeholder="Enter your email"
            style={{ border: `1px solid ${borderColor}` }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full rounded-lg px-3 py-2 pr-10 focus:outline-none focus:border-orange-500"
              placeholder="Enter your password"
              style={{ border: `1px solid ${borderColor}` }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <IoEyeOff />}
            </button>
          </div>
        </div>
        <div className='text-right mb-4 cursor-pointer text-[#ff4d2d]'onClick={()=>
        navigate("/forgot-password")}>
          Forgot Password
        </div>

        {/* Sign In Button */}
        <button
          type="button"
          className="w-full py-3 rounded-lg text-white font-semibold transition-colors cursor-pointer"
          style={{ backgroundColor: primaryColor }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = hoverColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = primaryColor)
          }
          onClick={handelSignIn}
        >
          Sign In
        </button>

        {/* Google Sign In Button */}
        <button
          type="button"
          className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 border-gray-400 hover:bg-gray-200 cursor-pointer"
        >
          <FcGoogle size={20} />
          <span>Sign In with Google</span>
        </button>

        {/* Sign Up Link */}
        <p
          className="text-center mt-6 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Don't have an account?{" "}
          <span className="text-[#ff4d2d] font-medium">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;