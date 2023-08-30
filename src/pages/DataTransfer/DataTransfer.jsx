import axios from "axios";
import { useState } from "react";

import { hiUConsent } from "../../constant/data";
import HIPConsent from "../../components/HIPConsent";
const DataFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    await axios
      .post(` ${import.meta.env.VITE_BASE_URL}/fetchConsentIDHIP`)
      .then((response) => {
        if (response.status === 202) {
          setData(response.data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("this is the error", error);
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <>
      <div className="w-full p-5">
        {data.length > 0 ? (
          <HIPConsent data={data} />
        ) : (
          <div className="h-[80vh] flex  justify-center items-center w-full">
            <button
              onClick={getData}
              disabled={loading}
              className="btn btn-primary btn-md font-bold flex gap-3 ml-5 disabled:bg-gray-200 "
            >
              {loading ? (
                <div className="flex items-center gap-4">
                  <span className="loading loading-spinner loading-sm"></span>
                  <p>Loading...</p>
                </div>
              ) : (
                "Show Data Transfer"
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DataFetch;
