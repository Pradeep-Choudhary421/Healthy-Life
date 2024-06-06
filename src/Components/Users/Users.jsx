import React, { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../Redux/Features/alertSlice";
const Users = () => {
  const [allUser, setAllUser] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const url = "http://localhost:7082/admin/getAllUsers";
  const getAllUsers = async () => {
    try {
      dispatch(showLoading());
      await axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setAllUser(res?.data?.data);
          console.log(res?.data?.data);
        });
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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
        <div className=" w-100 h-full ml-0 lg:ml-80 px-2 bg-white">
          <h1 className="text-center my-6 text-2xl font-semibold">List Of All Users</h1>
          
          <table className=' table-autoborder-separate border-spacing-2 border-2 row-gap-5 ml-36'>
                    <thead className='border-2'>
                        <tr>
                            <th className='pl-8 py-2'>Index</th>
                            <th className='pl-40 py-2'>Name</th>
                            <th className='pl-40 py-2'>Email</th>
                            <th className='pl-40 py-2 pr-8'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='border-2 '>
                        
                    {allUser?.map((user, index) => (
                        <tr key={index} >
                            <td className='pl-8 py-2'>{index + 1}.</td>
                            <td className='pl-40 py-2'>{user?.name}</td>
                            <td className='pl-40 py-2'>{user?.email}</td>
                            <td className='pl-40 py-2 pr-8'><span className='bg-gray-600 py-1 px-2 rounded-[10px] flec justify-content-center cursor-pointer text-white'>Delete User</span></td>
                        </tr>
                ))} 
                        
                        
                    </tbody>
                </table>
        </div>
      </div>
    </>
  );
};

export default Users;
