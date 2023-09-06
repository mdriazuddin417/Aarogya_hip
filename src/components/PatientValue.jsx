import React, { useState } from "react";
import CustomInput2 from "../utils/CustomInput2";

const PatientValue = ({ state, setState }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="space-y-3">
        <div className="relative grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3 shadow-lg rounded border border-gray-200 mt-2 p-5">
          <div className="sm:w-auto w-full flex-grow">
            <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
              Patient Name
            </h1>
            <CustomInput2
              placeholder={"Patient Name"}
              name={"name"}
              onChange={handleChange}
              value={state?.name}
            />
          </div>
          <div className="sm:w-auto w-full flex-grow">
            <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
              Gender
            </h1>
            <div className="flex justify-start gap-3">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={state?.gender === "male"}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={state?.gender === "female"}
                />
                Female
              </label>
            </div>
          </div>
          <div className="sm:w-auto w-full flex-grow">
            <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
              Date of Birth
            </h1>
            <CustomInput2
              type="date"
              name={"DOB"}
              onChange={handleChange}
              value={state?.DOB}
            />
          </div>
          <div className="sm:w-auto w-full flex-grow">
            <h1 className="text-[14px] mb-1 text-gray-700 font-medium">
              Patient ID
            </h1>
            <CustomInput2
              placeholder={"Patient ID"}
              name={"ID"}
              onChange={handleChange}
              value={state?.ID}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientValue;
