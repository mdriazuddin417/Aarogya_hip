import axios from "axios";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-hot-toast";
const VerifyOTPModal = () => {
  const [otp, setOtp] = useState("");
  const handleOTP = async () => {
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/verifyOtp`, {
        otp: otp,
      })
      .then((response) => {
        if (response.status === 202) {
          console.log(response.data.message);
          toast.success("OTP successfully verify!");
          window.verify_otp.showModal();
        }
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Invalid OTP ");
        console.log("inside error function");
        console.error("this is the error", error);
      });
  };
  return (
    <div>
      <dialog id="verify_otp" className="modal">
        <form method="dialog" className="modal-box md:w-2/6 max-w-5xl">
          <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-xl font-medium my-2">Verify OTP</h2>
            <div>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  border: "1px solid red",
                  width: "50px",
                  height: "70px",
                  borderRadius: "5px",
                  color: "black",
                  fontSize: "22px",
                }}
                containerStyle={{
                  gap: 10,
                }}
              />
            </div>
          </div>

          <div className="modal-action flex justify-center flex-row items-center mt-5">
            <button
              disabled={!otp}
              onClick={handleOTP}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default VerifyOTPModal;
