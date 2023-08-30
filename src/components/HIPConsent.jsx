/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState } from "react";

const HIPConsent = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [selectConsent, setSelectConsent] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:3000/datapush", {
        consentID: selectConsent,
      })
      .then((response) => {
        console.log(response.data);
        console.log("this is consent",selectConsent);
        setLoading(false);
      })
      .catch((error) => {
        console.error("this is the error", error);
        setLoading(false);
      });
    setLoading(false);
  };

  let content;
  if (selectConsent) {
    content = data.filter((it) => it.consentId === selectConsent)[0];
  } else {
    content = data[0];
  }
  console.log(content);
  return (
    <div>
      <div className="flex justify-end items-center my-5">
        <select
          defaultValue={content.consentId}
          className="select select-primary w-[500px]"
          onChange={(e) => setSelectConsent(e.target.value)}
        >
          <option disabled selected>
            choose consent ID
          </option>
          {data.length > 0 &&
            data.map((item, index) => (
              <option key={index} value={item.consentId}>
                {item.consentId}({item?.patientId})
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-wrap gap-5 justify-start">
        {content?.careContexts?.map((item, index) => (
          <div
            key={index}
            className="shadow rounded  bg-slate-100 flex justify-center items-start gap-3 flex-col w-[210px] p-5"
          >
            <h3 className="text-[12px] text-gray-700 font-semibold">
              Patient ID : {content.patientId}
            </h3>
            <h3 className="text-sm text-gray-700 font-semibold">
              Status:{" "}
              <span className="text-green-500 font-medium">
                {content.status}
              </span>
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center md:mt-10 mt-5">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn btn-primary btn-md font-bold flex gap-3 ml-5 disabled:bg-gray-200"
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
