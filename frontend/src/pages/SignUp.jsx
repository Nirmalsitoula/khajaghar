import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

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
          Create an account to get started with the Delicious food Deliveries
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-1"
          >
            Full Name
          </label>

          <input
            type="text"
            id="fullName"
            className="w-full rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
            placeholder="Enter your Name"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>

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
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-gray-700 font-medium mb-1"
          >
            Mobile Number
          </label>

          <input
            type="tel"
            id="mobile"
            className="w-full rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
            placeholder="Enter your mobile number"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
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

        {/* Role */}
        <div className="mb-6">
          <label
            htmlFor="role"
            className="block text-gray-700 font-medium mb-2"
          >
            Role
          </label>

          <div className="flex gap-2">
            {["user", "owner", "deliveryBoy"].map((r) => (
              <button
                key={r}
                type="button"
                className="flex-1 rounded-lg px-3 py-2 text-center font-medium transition-colors cursor-pointer"
                onClick={() => setRole(r)}
                style={
                  role === r
                    ? {
                        backgroundColor: primaryColor,
                        color: "#fff",
                        border: `1px solid ${primaryColor}`,
                      }
                    : {
                        backgroundColor: "#fff",
                        color: "#333",
                        border: `1px solid ${borderColor}`,
                      }
                }
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg text-white font-semibold transition-colors cursor-pointer"
          style={{ backgroundColor: primaryColor }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = hoverColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = primaryColor)
          }
        >
          Sign Up
        </button>

        {/* Google Sign Up Button */}
        <button
          type="button"
          className="w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 border-gray-400 hover:bg-gray-200 cursor-pointer"
        >
          <FcGoogle size={20} />
          <span>Sign Up with Google</span>
        </button>

        {/* Sign In Link */}
        <p
          className="text-center mt-6 cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Already have an account?{" "}
          <span className="text-[#ff4d2d] font-medium">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;