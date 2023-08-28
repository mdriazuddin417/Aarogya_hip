import React from "react";
import { consentList } from "../constant/consentLists";
import { AiOutlineRight } from "react-icons/ai";
const LinkedRecordsTable = () => {
  return (
    <div className="">
      <div className="overflow-x-auto ">
        <table className="table table-auto table-compact table-zebra  ">
          <thead>
            <tr className="bg-primary">
              <th className="th"></th>
              <th className="th">Patient ID</th>
              <th className="th">Patient RefNumber</th>
              <th className="th">Patient Display</th>
              <th className="th">CareContext RefNumber</th>
              <th className="th">CareContext Display</th>
              <th className="th">Consent expire on</th>
              <th className="th">Linked</th>
            </tr>
          </thead>
          <tbody>
            {consentList?.map((item, index) => (
              <tr key={item.id} className="cursor-pointer">
                <td className="font-bold text-gray-400 "> {index + 1}</td>
                <td className=" td">{item.name}</td>
                <td className=" td">{item.jataayaId}</td>
                <td className="">
                  <div className="flex items-center td">
                    {item.request_status}
                  </div>
                </td>
                <td className="">
                  <div className="flex items-center td">
                    {item.consent_create}
                  </div>
                </td>
                <td className="">
                  <div className="flex items-center td">
                    {item.consent_granted}
                  </div>
                </td>
                <td className="">
                  <div className="flex items-center td">
                    {item.consent_expire}
                  </div>
                </td>
                <td className="td link "></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LinkedRecordsTable;
