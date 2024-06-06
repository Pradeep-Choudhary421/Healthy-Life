import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import axios from "axios";
// import dayjs from "dayjs";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { TimeField } from "@mui/x-date-pickers/TimeField";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../Redux/Features/alertSlice";

const DocApply = () => {
  // const [value, setValue] = useState(dayjs("2022-04-17T15:30"));
  const [docData, setDocData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    specialization: "",
    experience: "",
    feesPerConsultation: "",
    // timing:{
    //   start: dayjs(),
    //   end: dayjs()
    // }
  });

  const url = "http://localhost:7082/api/applyDoctor";
  const dispatch = useDispatch();

  const onApply = async () => {
    try {
      dispatch(showLoading());
      await axios.post(url, docData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setDocData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        website: "",
        address: "",
        specialization: "",
        experience: "",
        feesPerConsultation: "",
        // timing: {
        //   start: "",
        //   end: "",
        // },
      });
      dispatch(hideLoading());
      toast.success("Successfully Applied");
    } catch (err) {
      dispatch(hideLoading());
      toast.error("Apply Failed");
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocData({ ...docData, [name]: value });
  };

  const handleTimingChange = (newValue, field) => {
    setDocData({
      ...docData,
      timing: { ...docData.timing, [field]: newValue },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply();
  };

  return (
    <>
      <div className="flex overflow-x-hidden bg-black lg:h-full">
        <div>
          <Sidebar />
        </div>
        <div>
          <Header />
        </div>
      </div>
      <div>
        <div className=" w-100 h-full ml-0 md:ml-80 px-2 bg-white">
          <div className="pl-8 md:px-4 pt-12 overflow-hidden">
            <form action="" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 h-full">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="block border-2 mt-2 p-4"
                    value={docData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="block border-2 mt-2 p-4"
                    value={docData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone No.</label>
                  <input
                    type="number"
                    name="phone"
                    className="block border-2 mt-2 p-4"
                    value={docData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="block border-2 mt-2 p-4"
                    value={docData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    name="website"
                    className="block border-2 mt-2 p-4"
                    value={docData.website}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="block border-2 mt-2 p-4"
                    value={docData.address}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="specialization">Specialization</label>
                  <input
                    type="text"
                    name="specialization"
                    className="block border-2 mt-2 p-4"
                    value={docData.specialization}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="experience">Experience</label>
                  <input
                    type="number"
                    name="experience"
                    className="block border-2 mt-2 p-4"
                    value={docData.experience}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="feesPerConsultation">Fees</label>
                  <input
                    type="number"
                    name="feesPerConsultation"
                    className="block border-2 mt-2 p-4"
                    value={docData.feesPerConsultation}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label htmlFor="timing">Timing</label>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimeField", "TimeField"]}>
                      <TimeField
                        label="Start"
                        value={docData.timing.start}
                        onChange={(newValue) => handleTimingChange(newValue, "start")}
                      />
                      <TimeField
                        label="End"
                        value={docData.timing.end}
                        onChange={(newValue) => handleTimingChange(newValue, "end")}
                      />
                    </DemoContainer>
                  </LocalizationProvider> */}
                </div>
                <button
                  type="submit"
                  className="bg-gray-800 text-white py-3 px-4 mt-6 rounded-2xl cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocApply;
