const LinkedRecordsTable = ({ data }) => {
  const database = data.reduce((acc, curr) => {
    acc = [
      ...acc,
      {
        _id: curr._id.$oid,
        link: curr.Linked,
        patientID: curr.PatientHealthId,
        patientRefNumber: curr.LinkedHealthRecords[0].patientRefNumber,
        patientDisplay: curr.LinkedHealthRecords[0].patientDisplay,
        careContextRefNumber: curr.LinkedHealthRecords[0].careContextRefNumber,
        careContextDisplay: curr.LinkedHealthRecords[0].careContextDeisplay,
      },
    ];
    return acc;
  }, []);
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
              <th className="th">Linked</th>
            </tr>
          </thead>
          <tbody>
            {database?.map((item, index) => (
              <tr key={item._id} className="cursor-pointer">
                <td className="font-bold text-gray-400 "> {index + 1}</td>
                <td className=" td">{item.patientID}</td>
                <td className=" td">{item.patientRefNumber}</td>
                <td className="">
                  <div className="flex items-center td">
                    {item.patientDisplay}
                  </div>
                </td>
                <td className="">
                  <div className="flex items-center td">
                    {item.careContextRefNumber}
                  </div>
                </td>
                <td className="">
                  <div className="flex items-center td">
                    {item.careContextDisplay}
                  </div>
                </td>
                <td className="td link">
                <div className="flex items-center td">
                    {item.link}
                  </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default LinkedRecordsTable;