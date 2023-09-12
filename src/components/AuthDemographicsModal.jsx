import React, { useEffect, useState } from "react";
import CustomInput2 from "../utils/CustomInput2";
import axios from "axios";
import { toast } from "react-hot-toast";
const init = {
  name: "",
  gender: "",
  dateOfBirth: "",
};
const AuthDemographicsModal = () => {
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
      .post(`${import.meta.env.VITE_BASE_URL}/verifyDemographic`, {
        ...state,
      })
      .then((response) => {
        if (response.status === 202) {
          console.log(response.data.message);
          window.verify_otp.showModal();
          toast.success("successfully!");
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
    const isValid = state.name && state.gender && state.dateOfBirth;
    setIsFormValid(isValid);
  }, [state]);

  return (
    <div>
      <dialog id="auth_demographic" className="modal">
        <form method="dialog" className="modal-box   max-w-2xl">
          <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div>
            <div className="lg:py-5 md:py-5 lg:px-20 md:px-10 p-5 space-y-10">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h1 className="md:text-2xl text-lg font-semibold ">
                  Patient Details
                </h1>
              </div>
              <div className="space-y-3 w-full">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">Name</h3>
                    <div>
                      <CustomInput2
                        value={state.name}
                        name={"name"}
                        onChange={handleInput}
                        placeholder={"Name"}
                      />
                      <h3 className="text-xs font-normal mb-2">
                        First and Last name first character should be capital
                        letter
                      </h3>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">HIP ID</h3>
                    <div>
                      <CustomInput2
                        value={state.dateOfBirth}
                        name={"dateOfBirth"}
                        onChange={handleInput}
                        placeholder={"YYYY-MM-DD"}
                      />
                    </div>
                    <h3 className="text-xs font-normal mb-2">
                      Birth date formate yyyy-mm-dd
                    </h3>
                  </div>

                  <div className="sm:w-auto w-full flex-grow">
                    <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                      Gender
                    </h1>
                    <div className="flex justify-start gap-5">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="M"
                          onChange={handleInput}
                          checked={state?.gender === "M"}
                          className="mr-1"
                        />
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="F"
                          onChange={handleInput}
                          checked={state?.gender === "F"}
                          className="mr-1"
                        />
                        Female
                      </label>
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

export default AuthDemographicsModal;
