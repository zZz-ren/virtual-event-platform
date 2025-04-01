import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useVerifyOtpMutation } from "../../services/api";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setUser } from "../../store/slices/authslice";

const OTPForm = () => {
  const [otp, setOtp] = useState<string>("");

  const navigate = useNavigate();
  const location = useLocation();
  const AppDispatcher = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const userId = location.state?.userId;
  if (!userId) {
    navigate("/login");
  }
  if (isAuthenticated) {
    navigate("/");
  }

  const [verifyOTPfn] = useVerifyOtpMutation();

  const handleOtpVerification = async () => {
    try {
      console.log(otp);

      const response = await verifyOTPfn({ userId, otp }).unwrap();
      const user = response.user;
      if (user) {
        AppDispatcher(setUser(user));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form">
      <h2 className="my-3 text-2xl md:text-5xl">Verify OTP</h2>
      <h4 className="my-3 text-sm md:text-base">
        <form action={handleOtpVerification}>
          <div className="grid grid-cols-12">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
              placeholder="Enter OTP here"
            />
            <button className="mb-5 cursor-pointer col-span-12 bg-ocean px-1 md:px-4 py-3 rounded-xl">
              Verify Now
            </button>
          </div>
        </form>
      </h4>
    </div>
  );
};

export default OTPForm;
