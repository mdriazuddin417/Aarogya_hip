const HealthRecordsData = ({ data }) => {
  return (
    <div>
      <dialog id="health_records" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div>
            <div className="flex flex-wrap gap-5 justify-start">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="shadow rounded  bg-slate-100 flex justify-center items-start gap-3 flex-col w-[210px] px-2 py-4"
                >
                  <h3 className="text-[12px] text-gray-700 font-semibold">
                    Patient Ref :
                    <span className="text-gray-500 font-medium">
                      {" "}
                      {item?.patientRefNumber}
                    </span>
                  </h3>
                  <h3 className="text-[12px] text-gray-700 font-semibold">
                    Patient Display :
                    <span className="text-gray-500 font-medium">
                      {" "}
                      {item?.patientDisplay}
                    </span>
                  </h3>
                  <h3 className="text-[12px] text-gray-700 font-semibold">
                    CareContext Ref :
                    <span className="text-gray-500 font-medium">
                      {" "}
                      {item?.careContextRefNumber}
                    </span>
                  </h3>
                  <h3 className="text-[12px] text-gray-700 font-semibold">
                    CareContext Display :
                    <span className="text-gray-500 font-medium">
                      {" "}
                      {item?.careContextDeisplay}
                    </span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default HealthRecordsData;
