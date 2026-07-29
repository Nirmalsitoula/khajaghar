import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App"; // Adjust if your serverUrl is in another file

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // Send OTP
  const handelSendOtp = async () => {
    if (!email) {
      return alert("Please enter your email.");
    }

    try {
      setLoading(true);

      const result = await axios.post(
        `${serverUrl}/api/auth/send-otp`,
        { email },
        { withCredentials: true }
      );

      console.log(result.data);

      alert(result.data.message || "OTP sent successfully.");

      setStep(2);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong while sending OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handelVerifyOtp = async () => {
    if (!otp) {
      return alert("Please enter OTP.");
    }

    try {
      setLoading(true);

      const result = await axios.post(
        `${serverUrl}/api/auth/verify-otp`,
        { email, otp },
        { withCredentials: true }
      );

      console.log(result.data);

      alert(result.data.message || "OTP verified.");

      setStep(3);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Invalid OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  // Reset Password
  const handelResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      return alert("Please fill all fields.");
    }

    if (newPassword !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
      setLoading(true);

      const result = await axios.post(
        `${serverUrl}/api/auth/reset-password`,
        {
          email,
          newPassword,
        },
        {
          withCredentials: true,
        }
      );

      console.log(result.data);

      alert(result.data.message || "Password reset successful.");

      navigate("/signin");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fff9f6] p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <div className="flex items-center gap-4 mb-6">
          <IoMdArrowRoundBack
            size={30}
            className="cursor-pointer text-[#ff4d2d]"
            onClick={() => navigate("/signin")}
          />

          <h1 className="text-2xl font-bold text-[#ff4d2d]">
            Forgot Password
          </h1>
        </div>

        {step === 1 && (
          <>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 mb-4 outline-none focus:border-orange-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handelSendOtp}
              disabled={loading}
              className="w-full bg-[#ff4d2d] text-white py-2 rounded-lg hover:bg-[#e64323]"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label className="block mb-2 font-medium">
              OTP
            </label>

            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 mb-4 outline-none focus:border-orange-500"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={handelVerifyOtp}
              disabled={loading}
              className="w-full bg-[#ff4d2d] text-white py-2 rounded-lg hover:bg-[#e64323]"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <label className="block mb-2 font-medium">
              New Password
            </label>

            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 mb-4 outline-none focus:border-orange-500"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 mb-4 outline-none focus:border-orange-500"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              onClick={handelResetPassword}
              disabled={loading}
              className="w-full bg-[#ff4d2d] text-white py-2 rounded-lg hover:bg-[#e64323]"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;