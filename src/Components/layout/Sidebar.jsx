import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logOut = async () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Log Out Successfully");
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {user?.isAdmin ? (
        <div className="bg-gray-900 h-full ">
          <div className="flex justify-content-center">
            <div className="flex justify-content-center px-6 py-8">
              <span
                className="text-white text-4xl top-5 left-4 cursor-pointer"
                onClick={toggleSidebar}
              >
                <i className="fa-solid fa-bars px-2 rounded-md text-black outline-none"></i>
              </span>
            </div>
            <div className=" h-full py-8 px-12"></div>
          </div>
          <div
            className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[320px] overflow-y-auto text-center bg-gray-900 transition-transform duration-300 lg:block ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-gray-100 text-xl">
              <div className="p-2.5 mt-1 flex items-center ">
                <h1 className="font-bold text-gray-200  text-1xl lg:text-3xl ml-3 py-4 lg:px-4  ">
                  Healthy Life
                </h1>
                <i
                  className="fa-solid fa-xmark cursor-pointer ml-28 lg:hidden"
                  onClick={toggleSidebar}
                ></i>
              </div>
              <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <Link to="/home">
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-house"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Home
                </span>
              </div>
            </Link>
            <Link to="/users">
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-list"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Users
                </span>
              </div>
            </Link>
            <Link to="/doctors">
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-user-doctor"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Doctor
                </span>
              </div>
            </Link>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="fa-solid fa-user"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Profile
              </span>
            </div>
            <div className="my-4 bg-gray-600 h-[1px]"></div>

            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span
                className="text-[15px] ml-4 text-gray-200 font-bold"
                onClick={logOut}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-900 h-full ">
          <div className="flex justify-content-center">
            <div className="flex justify-content-center px-6 py-8">
              <span
                className="text-white text-4xl top-5 left-4 cursor-pointer"
                onClick={toggleSidebar}
              >
                <i className="fa-solid fa-bars px-2 rounded-md text-black outline-none"></i>
              </span>
            </div>
            <div className=" h-full py-8 px-12">
              {/* <input type="text" className="rounded py-2 px-20 mx-4"  /> */}
              {/* <label htmlFor="" className="px-6 py-2 cursor-pointer text-2xl bg-red-500 rounded-2xl">Search</label> */}
            </div>
          </div>
          <div
            className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[320px] overflow-y-auto text-center bg-gray-900 transition-transform duration-300 lg:block ${
              isSidebarOpen ? "hidden" : ""
            }`}
          >
            <div className="text-gray-100 text-xl">
              <div className="p-2.5 mt-1 flex items-center ">
                <h1 className="font-bold text-gray-200  text-1xl lg:text-3xl ml-3 py-4 lg:px-4  ">
                  Healthy Life
                </h1>
                <i
                  className="fa-solid fa-xmark cursor-pointer ml-28 lg:hidden"
                  onClick={toggleSidebar}
                ></i>
              </div>
              <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>

            <Link to="/home">
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-house"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Home
                </span>
              </div>
            </Link>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="fa-solid fa-list"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Appointment
              </span>
            </div>
            <Link to="/docapply">
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-user-doctor"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Apply Doctor
                </span>
              </div>{" "}
            </Link>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="fa-solid fa-user"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Profile
              </span>
            </div>
            <div className="my-4 bg-gray-600 h-[1px]"></div>

            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span
                className="text-[15px] ml-4 text-gray-200 font-bold"
                onClick={logOut}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
