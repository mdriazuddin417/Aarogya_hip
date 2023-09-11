import { BiHomeAlt, BiReceipt, BiTask } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/shared/Header";

const Home = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Header />
          {/* Page content here */}
          <hr />
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu lg:p-5 md:p-4 p-3  w-[50%] lg:w-full  bg-[#F8FAFB] space-y-3 text-[16px] font-semibold text-[#44566C] h-screen">
            <div className=" flex justify-center items-center my-3">
              <h1 className="text-2xl font-bold text-primary select-none">
                Aarogya ID (HIP)
              </h1>
            </div>
            {/* <!-- Sidebar content here --> */}
            <li id="sidebar">
              <NavLink to={"/"}>
                <span>
                  <BiHomeAlt className="text-xl" />
                </span>
                HIP Initiated Link
              </NavLink>
            </li>
            <li id="sidebar">
              <NavLink to={"/linked_records"}>
                <span>
                  <BiReceipt className="text-xl" />
                </span>
                Linked Records
              </NavLink>
            </li>
            <li id="sidebar">
              <NavLink to={"/data_transfer"}>
                <span>
                  <BiTask className="text-xl" />
                </span>
                Data Transfer
              </NavLink>
            </li>
            <li id="sidebar">
              <NavLink to={"/add_health_records"}>
                <span>
                  <BiTask className="text-xl" />
                </span>
                Add Health Records
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
