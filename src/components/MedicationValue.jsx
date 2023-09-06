import React, { useState } from "react";
import CustomInput2 from "../utils/CustomInput2";
import { MdDelete } from "react-icons/md";

const MedicationValue = ({ medications, setMedications, init }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMedications = [...medications];
    updatedMedications[index] = {
      ...updatedMedications[index],
      [name]: value,
    };
    setMedications(updatedMedications);
  };

  const addMedication = () => {
    setMedications([...medications, init]);
  };

  const removeMedication = (index) => {
    const updatedMedications = [...medications];
    updatedMedications.splice(index, 1);
    setMedications(updatedMedications);
  };

  return (
    <div>
      <div className="flex justify-end">
        <div
          className="w-[130px] flex justify-center py-1 rounded bg-black text-white text-sm cursor-pointer hover:scale-95 transform duration-200"
          onClick={addMedication}
        >
          add medication +
        </div>
      </div>
      <div className="space-y-3">
        {medications.map((item, index) => (
          <div
            key={index}
            className="relative grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3 shadow-lg rounded border border-gray-200 mt-2 p-5"
          >
            <div className="sm:w-auto w-full flex-grow md:flex-grow-0">
              <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                Medication Name
              </h1>
              <CustomInput2
                placeholder={"medication name"}
                name={"medicationName"}
                onChange={(e) => handleChange(e, index)}
                value={item.medicationName}
              />
            </div>
            <div className="sm:w-auto w-full flex-grow md:flex-grow-0">
              <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                Dosage
              </h1>
              <CustomInput2
                placeholder={"dosage"}
                name={"dosage"}
                onChange={(e) => handleChange(e, index)}
                value={item.dosage}
              />
            </div>
            <div className="sm:w-auto w-full flex-grow md:flex-grow-0">
              <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                Doctor Name
              </h1>
              <CustomInput2
                placeholder={"doctor name"}
                name={"doctorName"}
                onChange={(e) => handleChange(e, index)}
                value={item.doctorName}
              />
            </div>
            <div className="sm:w-auto w-full flex-grow md:flex-grow-0">
              <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                Doctor ID
              </h1>
              <CustomInput2
                placeholder={"doctor id"}
                name={"doctorId"}
                onChange={(e) => handleChange(e, index)}
                value={item.doctorId}
              />
            </div>
            <div className="sm:w-auto w-full flex-grow ">
              <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
                Authored Time
              </h1>
              <CustomInput2
                placeholder={"Authored time"}
                name={"authoredOn"}
                onChange={(e) => handleChange(e, index)}
                value={item.authoredOn}
                type={"date"}
              />
            </div>
            {medications.length > 1 && (
              <div
                onClick={() => removeMedication(index)}
                className=" absolute top-2 right-2"
              >
                <MdDelete className="text-red-600 cursor-pointer text-xl" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationValue;
