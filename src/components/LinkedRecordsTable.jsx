import { useState } from "react";
import HealthRecordsData from "./HealthRecordsData";

const LinkedRecordsTable = ({ data }) => {
  const [healthRecords, setHealthRecords] = useState([]);

  return (
    <div className="">
      <div className="overflow-x-auto ">
        <table className="table table-auto table-compact table-zebra  ">
          <thead>
            <tr className="bg-primary">
              <th className="th"></th>
              <th className="th">Patient ID</th>
              <th className="th">View Health Records</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id}>
                <td className="font-bold text-gray-400 "> {index + 1}</td>
                <td className=" td">{item.PatientHealthId}</td>
                <td
                  className=" link td"
                  onClick={() => {
                    setHealthRecords(item.LinkedHealthRecords);
                    return window.health_records.showModal();
                  }}
                >
                  View Records
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <HealthRecordsData data={healthRecords} />
    </div>
  );
};
export default LinkedRecordsTable;
