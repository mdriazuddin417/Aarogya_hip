import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";
import CustomInput2 from "../../utils/CustomInput2";
const init = {
  patientHealthId: "",
  patientRefNumber: "",
  patientDisplay: "",
  careContextRefNumber: "",
  careContextDeisplay: "",
};
const AddHealthRecord = () => {
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
    // await axios
    //   .post(`${import.meta.env.VITE_BASE_URL}/linkRecord`, {
    //     ...state,
    //   })
    //   .then((response) => {
    //     if (response.status === 202) {
    //       console.log(response.data.message);
    //       //window.verify_otp.showModal();
    //     }
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     toast.error("Something wrong ? ");
    //     console.log("inside error function");
    //     console.error("this is the error", error);
    //   });
    setState({ ...init });
  };

  useEffect(() => {
    const isValid =
      state.patientHealthId &&
      state.patientRefNumber &&
      state.patientDisplay &&
      state.careContextRefNumber &&
      state.careContextDeisplay;
    setIsFormValid(isValid);
  }, [state]);

  return (
    <div>
   
        <div className="modal-box w-11/12 max-w-5xl">
         
          <div>
            <div className="lg:py-5 md:py-5 lg:px-20 md:px-10 p-5 space-y-10">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h1 className="md:text-2xl text-lg font-semibold ">
                  Add new health records
                </h1>
              </div>
              <div className="space-y-3 w-full">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">
                      Patient Health Id
                    </h3>
                    <div>
                      <CustomInput2
                        value={state.patientHealthId}
                        name={"patientHealthId"}
                        onChange={handleInput}
                      />
                    </div>
                  </div>

                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">
                      Patient RefNumber{" "}
                    </h3>
                    <div>
                      <CustomInput2
                        value={state.patientRefNumber}
                        name={"patientRefNumber"}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">
                      {" "}
                      Patient Display
                    </h3>
                    <div>
                      <CustomInput2
                        value={state.patientDisplay}
                        name={"patientDisplay"}
                        onChange={handleInput}
                      />
                    </div>
                  </div>

                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">
                      CareContext RefNumber
                    </h3>
                    <div>
                      <CustomInput2
                        value={state.careContextRefNumber}
                        name={"careContextRefNumber"}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                  <div className="">
                    <h3 className="text-lg font-semibold mb-2">
                      CareContext Display
                    </h3>
                    <div>
                      <CustomInput2
                        value={state.careContextDeisplay}
                        name={"careContextDeisplay"}
                        onChange={handleInput}
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
        </div>
      </div>

  );
};

export default AddHealthRecord;
