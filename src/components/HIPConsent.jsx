import axios from "axios";
import React, { useState } from "react";

const HIPConsent = ({ data }) => {
  const [loading, setLoading] = useState(false);

  console.log(data);

  const { careContexts, patientId, status, consentId } = data;

  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/datapush`, {
        consentID: consentId,
      })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("this is the error", error);
        setLoading(false);
      });
    setLoading(false);
  };
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {careContexts?.map((item, index) => (
          <div
            key={index}
            className="shadow rounded h-[150px] bg-slate-100 flex justify-center items-start gap-3 flex-col w-full p-5"
          >
            <h3 className="text-sm text-gray-700 font-semibold">
              {item.patientReference}
            </h3>
            <h3 className="text-xl text-gray-700 font-semibold">
              {item.careContextReference}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center md:mt-10 mt-5">
        <button
          onClick={handleSubmit}
          className="btn btn-primary btn-md font-bold flex gap-3 ml-5 "
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
  );
};

export default HIPConsent;
