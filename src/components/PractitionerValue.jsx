import React, { useState } from "react";
import CustomInput2 from "../utils/CustomInput2";
import { MdDelete } from "react-icons/md";

const PractitionerValue = ({
  practitioner,
  setPractitioner,
  init,
  medications,
}) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMedications = [...practitioner];
    updatedMedications[index] = {
      ...updatedMedications[index],
      [name]: value,
    };
    setPractitioner(updatedMedications);
  };

  const addMedication = () => {
    setPractitioner([...practitioner, init]);
  };

  const removeMedication = (index) => {
    const updatedMedications = [...practitioner];
    updatedMedications.splice(index, 1);
    setPractitioner(updatedMedications);
  };

  return (
    <div>
      <div className="flex justify-end">
        <div
          className="w-[130px] flex justify-center py-1 rounded bg-black text-white text-sm cursor-pointer hover:scale-95 transform duration-200"
          onClick={addMedication}
        >
          add practitioner +
        </div>
      </div>
      <div className="space-y-3">
        {practitioner.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-center gap-5 flex-wrap w-auto"
          >
            <div className="sm:w-auto w-full flex-grow ">
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
            <div className="sm:w-auto w-full flex-grow ">
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

            {practitioner.length > 1 && (
              <div
                onClick={() => removeMedication(index)}
                className=" mt-[20px] "
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

export default PractitionerValue;
