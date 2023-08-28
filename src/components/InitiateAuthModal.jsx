import React, { useEffect, useState } from "react";
import CustomInput2 from "../utils/CustomInput2";
import { useNavigate } from "react-router-dom";

const init = {
  healthId: "",
  purpose: "",
  HipId: "",
  authMode: "",
};

const InitiateAuthModal = () => {
  const navigation = useNavigate();

  const [state, setState] = useState({ ...init });
  const [isFormValid, setIsFormValid] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    window.verify_otp.showModal();

    setState({ ...init });
  };
  useEffect(() => {
    const isValid =
      state.healthId && state.purpose && state.HipId && state.authMode;
    setIsFormValid(isValid);
  }, [state]);

  return (
    <div>
      <dialog id="initiate_auth" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div>
            <div className="lg:py-5 md:py-5 lg:px-20 md:px-10 p-5 space-y-10">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h1 className="md:text-2xl text-lg font-semibold ">
                  Initiate User Models
                </h1>
              </div>
              <div className="space-y-5 w-full">
                <div className="grid md:grid-cols-2 grid-cols-1">
                  <div className=" lg:w-[60%]">
                    <h3 className="text-lg font-semibold">Health ID</h3>
                    <p className="desc">
                      This will be used for reference only by yourself and the
                      health id.
                    </p>
                  </div>
                  <div>
                    <CustomInput2
                      value={state.healthId}
                      name={"healthId"}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <hr />
                <div className="grid md:grid-cols-2 grid-cols-1">
                  <div className=" lg:w-[60%]">
                    <h3 className="text-lg font-semibold">Purpose</h3>
                    <p className="desc">
                      This will be used for reference only by yourself and the
                      Purpose.
                    </p>
                  </div>
                  <div>
                    <CustomInput2
                      value={state.purpose}
                      name={"purpose"}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="grid md:grid-cols-2 grid-cols-1">
                <div className=" lg:w-[60%]">
                  <h3 className="text-lg font-semibold">HIP ID </h3>
                  <p className="desc">
                    This will be used for reference only by yourself and the HIP
                    ID.
                  </p>
                </div>
                <div>
                  <CustomInput2
                    value={state.HipId}
                    name={"HipId"}
                    onChange={handleInput}
                  />
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
                  <CustomInput2
                    value={state.authMode}
                    name={"authMode"}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="flex justify-end items-center ">
                <button
                  disabled={!isFormValid}
                  onClick={handleSubmit}
                  className="modal-action px-8 py-2 rounded-md text-white bg-primary shadow hover:scale-95 disabled:bg-gray-300  transform duration-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default InitiateAuthModal;
