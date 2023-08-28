import { useState } from "react";
import LinkedRecordsTable from "../../components/LinkedRecordsTable";
import axios from "axios";
const Consent = () => {
  const [data, setdata] = useState([]);
  const handlinkedRecords = async() => {
    //window.link_records.showModal();
    await axios
    .post("http://localhost:3000/showLinkedRecord")
    .then((response) => {
      if(response.status === 202){
        console.log(response.data.message);
        setdata(response.data.message);
        //window.verify_otp.showModal();
      }
      console.log(response.data);
    })
    .catch((error) => {
      console.log("inside error function");
      console.error("this is the error", error);

    });

  };
  return (
    <div className="w-auto h-auto">
      {data.length > 0 ? (
        <LinkedRecordsTable data={data}/>
      ) : (
        <div className="w-full h-[80vh] flex  justify-center items-center">
          <button
            onClick={handlinkedRecords}
            className="btn btn-primary btn-md font-bold flex gap-3 ml-5 "
          >
            Show linked records
          </button>
        </div>
      )}
    </div>
  );
};

export default Consent;
