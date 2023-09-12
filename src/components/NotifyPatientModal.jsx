import React, { useEffect, useState } from "react";
import CustomInput2 from "../utils/CustomInput2";
import axios from "axios";
import { toast } from "react-hot-toast";
const init = {
  mobileNumber: "",
  HIPname: "",
  HIPId: "",
};
const NotifyPatientModal = () => {
  const [state, setState] = useState({ ...init });
  const [isFormValid, setIsFormValid] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log(state);
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/notifyPatient`, {
        ...state,
      })
      .then((response) => {
        if (response.status === 202) {
          console.log(response.data.message);
          toast.success("Patient will receive message in some time");
        }
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Invalid information ");
        console.log("inside error function");
        console.error("this is the error", error);
      });
    setState({ ...init });
  };

  useEffect(() => {
    const isValid = state.mobileNumber && state.HIPname && state.HIPId;
    setIsFormValid(isValid);
  }, [state]);

  return (
    <div>
      <dialog id="notify_patient" className="modal">
        <form method="dialog" className="modal-box   max-w-2xl">
          <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div>
            <div className="lg:py-5 md:py-5 lg:px-20 md:px-10 p-5 space-y-10">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h1 className="md:text-2xl text-lg font-semibold ">
                  Patient notification
                </h1>
              </div>
              <div className="space-y-3 w-full">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">
                      Mobile Number
                    </h3>
                    <div>
                      <CustomInput2
                        value={state.mobileNumber}
                        name={"mobileNumber"}
                        onChange={handleInput}
                        placeholder={"mobile number"}
                      />
                    </div>
                  </div>

                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">HIP Name</h3>
                    <div>
                      <CustomInput2
                        value={state.HIPname}
                        name={"HIPname"}
                        onChange={handleInput}
                        placeholder={"hip name"}
                      />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">HIP ID</h3>
                    <div>
                      <CustomInput2
                        value={state.HIPId}
                        name={"HIPId"}
                        onChange={handleInput}
                        placeholder={"HIP Id"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center ">
                <button
                  disabled={!isFormValid}
                  onClick={handleSubmit}
                  className="modal-action px-8 py-2 disabled:bg-gray-300 rounded-md text-white bg-primary shadow hover:scale-95  transform duration-200"
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

export default NotifyPatientModal;
