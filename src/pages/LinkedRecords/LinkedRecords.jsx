import { useState } from "react";
import LinkedRecordsTable from "../../components/LinkedRecordsTable";
const Consent = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-auto h-auto">
      {show ? (
        <LinkedRecordsTable />
      ) : (
        <div className="w-full h-[80vh] flex  justify-center items-center">
          <button
            onClick={() => setShow((prev) => true)}
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
