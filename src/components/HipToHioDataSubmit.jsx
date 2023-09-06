import React, { useEffect, useState } from "react";
import CustomInput2 from "../utils/CustomInput2";
import axios from "axios";
import MedicationValue from "./MedicationValue";
import PractitionerValue from "./PractitionerValue";
import PatientValue from "./PatientValue";
import { toast } from "react-toastify";

const medicationInit = {
  medicationName: "",
  dosage: "",
  doctorName: "",
  doctorId: "",
};

const patientInit = {
  name: "",
  gender: "",
  DOB: "",
  ID: "",
};
const practitionerInit = {
  doctorName: "",
  doctorId: "",
  authoredOn: "",
};

const HipToHioDataSubmit = ({ consentID }) => {
  const [medications, setMedications] = useState([medicationInit]);
  const [state, setState] = useState({ ...patientInit });
  const [practitioner, setPractitioner] = useState([practitionerInit]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const body = {
    consentID: consentID,
    medication: medications,
    patient: state,
    Practitioner: practitioner,
  };
  const handleSubmit = async () => {
    console.log(body);
    setLoading(true);
    toast.success("successfully!");
    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/datapush`, { ...body })
      .then((response) => {
        console.log(response.data);
        toast.success("successfully!");

        setLoading(false);
      })
      .catch((error) => {
        console.error("this is the error", error);
        toast.error("Something wrong ? ");
        setLoading(false);
      });
    setLoading(false);

    clear();
  };

  useEffect(() => {
    const isDisabled =
      medications.some((med) =>
        Object.values(med).some((value) => value === "")
      ) ||
      practitioner.some((med) =>
        Object.values(med).some((value) => value === "")
      ) ||
      Object.values(state).some((value) => value === "");

    setIsSubmitDisabled(isDisabled);
  }, [medications, state, practitioner]);
  const clear = () => {
    setMedications([medicationInit]);
    setState({ ...patientInit });
    setPractitioner([practitionerInit]);
  };

  return (
    <div>
      <dialog id="hip_data" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <div>
            <div className="lg:py-5 md:py-5  md:px-8 p-5 space-y-10">
              <div className="flex justify-center items-center flex-wrap gap-2">
                <h1 className="md:text-2xl text-lg font-semibold ">
                  HIU Details
                </h1>
              </div>

              <div className="space-y-5">
                <MedicationValue
                  medications={medications}
                  setMedications={setMedications}
                  init={medicationInit}
                />
                <PatientValue state={state} setState={setState} />
                <PractitionerValue
                  practitioner={practitioner}
                  setPractitioner={setPractitioner}
                  init={practitionerInit}
                />
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
        </form>
      </dialog>
    </div>
  );
};

export default HipToHioDataSubmit;
