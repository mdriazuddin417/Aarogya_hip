import React, { useEffect, useState } from "react";
import CustomInput2 from "../utils/CustomInput2";
import { useSelector } from "react-redux";
import axios from "axios";

const InitiateAuthModal = ({ oldValue }) => {
  const [auth, setAuth] = useState("");

  const mode = useSelector((state) => state.mode.userModes[0]);
  console.log("value of mode", mode);
  const body = {
    ...oldValue,
    authMode: auth,
  };
  console.log("body from initiaAuth", body);

  const handleSubmit = async () => {
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/initiateAuth`, {
        ...body,
      })
      .then((response) => {
        if (response.status === 202) {
          console.log(response.data.message);
          window.verify_otp.showModal();
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log("inside error function");
        console.error("this is the error", error);
      });
    console.log(body);
  };

  return (
    <div>
      <dialog id="initiate_auth" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
            ✕
          </button>

          {mode ? (
            <div>
              <div className="lg:py-5 md:py-5 lg:px-20 md:px-10 p-5 space-y-10">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h1 className="md:text-2xl text-lg font-semibold ">
                    Initiate User Models
                  </h1>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1">
                  <div className=" lg:w-[60%]">
                    <h3 className="text-lg font-semibold">Health ID</h3>
                    <p className="desc">
                      This will be used for reference only by yourself and the
                      health id.
                    </p>
                  </div>
                  <div>
                    <CustomInput2 value={mode ? mode.healthID : "No value"} />
                  </div>
                </div>
                <hr />

                <div className="grid md:grid-cols-2 grid-cols-1">
                  <div className=" lg:w-[60%]">
                    <h3 className="text-lg font-semibold">Auth Mode </h3>
                    <p className="desc">
                      This will be used for reference only by yourself and the
                      Auth Mode.
                    </p>
                  </div>
                  <div>
                    <select
                      onChange={(e) => setAuth(e.target.value)}
                      className="select select-bordered w-full "
                    >
                      <option disabled selected>
                        Choose auth modes
                      </option>
                      {mode &&
                        mode.authModes.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end items-center ">
                  <button
                    onClick={handleSubmit}
                    className="modal-action px-8 py-2 rounded-md text-white bg-primary shadow hover:scale-95 disabled:bg-gray-300  transform duration-200"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-[400px]">
              <p className="text-sm ">Loading....</p>
            </div>
          )}
        </form>
      </dialog>
    </div>
  );
};

export default InitiateAuthModal;
