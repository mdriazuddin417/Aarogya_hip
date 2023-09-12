import { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";
import CustomInput2 from "../../utils/CustomInput2";
import { MdDelete } from "react-icons/md";
import NotifyPatientModal from "../../components/NotifyPatientModal";
const init = {
  patientHealthId: "",
  patientRefNumber: "",
  patientDisplay: "",
  careContextRefNumber: "",
  careContextDeisplay: "",
};
const AddHealthRecord = () => {
  const [state, setState] = useState([init]);
  const [loading, setLoading] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedState = [...state];
    updatedState[index] = {
      ...updatedState[index],
      [name]: value,
    };
    setState(updatedState);
  };

  const addState = () => {
    setState([...state, init]);
  };

  const removeState = (index) => {
    const updatedstate = [...state];
    updatedstate.splice(index, 1);
    setState(updatedstate);
  };

  const body = {
    LinkedHealthRecords: state,
  };
  useEffect(() => {
    const isDisabled = state.some((it) =>
      Object.values(it).some((value) => value === "")
    );

    setIsSubmitDisabled(isDisabled);
  }, [state]);

  const handleSubmit = async () => {
    console.log(body);
    setLoading(true);

    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/createHealthRecord`, {
        ...body,
      })
      .then((response) => {
        if (response.status === 202) {
          console.log(response.data.message);
          window.notify_patient.showModal();
          setLoading(false);
          toast.success("health record saved");
        }
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);

        toast.error("Invalid Information ");
        console.log("inside error function");
        console.error("this is the error", error);
      });
    setState([init]);
  };

  return (
    <div>
      <div className="">
        <div>
          <div className="lg:py-5 md:py-5 lg:px-20 md:px-10 p-5 space-y-10">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h1 className="md:text-2xl text-lg font-semibold ">
                Add new health records
              </h1>
              <div
                className="w-[120px] flex justify-center py-1 rounded bg-black text-white text-sm cursor-pointer hover:scale-95 transform duration-200"
                onClick={addState}
              >
                New Record +
              </div>
            </div>
            <div className="space-y-3">
              {state.map((item, index) => (
                <div
                  key={index}
                  className="relative grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3 shadow-lg rounded border border-gray-200 mt-2 p-5"
                >
                  <div className="sm:w-auto w-full flex-grow md:flex-grow-0">
                    <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                      Patient Health Id
                    </h1>
                    <CustomInput2
                      placeholder={"health Id"}
                      name={"patientHealthId"}
                      onChange={(e) => handleChange(e, index)}
                      value={state[0].patientHealthId}
                    />
                  </div>
                  <div className="sm:w-auto w-full flex-grow md:flex-grow-0">
                    <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                      PatientRef Number
                    </h1>
                    <CustomInput2
                      placeholder={"patientRef number"}
                      name={"patientRefNumber"}
                      onChange={(e) => handleChange(e, index)}
                      value={item.patientRefNumber}
                    />
                  </div>
                  <div className="sm:w-auto w-full flex-grow md:flex-grow-0">
                    <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                      Patient Display
                    </h1>
                    <CustomInput2
                      placeholder={"patient display"}
                      name={"patientDisplay"}
                      onChange={(e) => handleChange(e, index)}
                      value={item.patientDisplay}
                    />
                  </div>
                  <div className="sm:w-auto w-full flex-grow md:flex-grow-0">
                    <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                      CareContextRef Number
                    </h1>
                    <CustomInput2
                      placeholder={"careContextRef Number"}
                      name={"careContextRefNumber"}
                      onChange={(e) => handleChange(e, index)}
                      value={item.careContextRefNumber}
                    />
                  </div>
                  <div className="sm:w-auto w-full flex-grow md:flex-grow-0">
                    <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                      careContext Display
                    </h1>
                    <CustomInput2
                      placeholder={"careContext display"}
                      name={"careContextDeisplay"}
                      onChange={(e) => handleChange(e, index)}
                      value={item.careContextDeisplay}
                    />
                  </div>

                  {state.length > 1 && (
                    <div
                      onClick={() => removeState(index)}
                      className=" absolute top-2 right-2"
                    >
                      <MdDelete className="text-red-600 cursor-pointer text-xl" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end items-center ">
              <button
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
                className="modal-action px-8 py-2 rounded-md text-white bg-primary shadow hover:scale-95 disabled:bg-gray-300  transform duration-200"
              >
                {loading ? (
                  <div className="flex items-center gap-4">
                    <span className="loading loading-spinner loading-sm"></span>
                    <p>Loading...</p>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <NotifyPatientModal />
    </div>
  );
};

export default AddHealthRecord;
