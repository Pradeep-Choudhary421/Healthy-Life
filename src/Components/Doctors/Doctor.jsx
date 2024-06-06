import React, {useEffect, useState} from 'react'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../Redux/Features/alertSlice'

const Doctor = () => {
    const [allDoctors, setAllDoctors] = useState();
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.user)
  const url = "https://healthy-life-backend-5id9.onrender.com/admin/getAllDoctors";
    const getAllUsers = async () =>{
        try {
            dispatch(showLoading());
            await axios.get(
                url,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
              }
            ).then((res)=>{
                setAllDoctors(res?.data?.data)
            })
            dispatch(hideLoading());
          } catch (err) {
            dispatch(hideLoading());
            console.log(err.message);
          }
    }
    const approveRequest = async (doctor, status) =>{
        try{
            await axios.post("https://healthy-life-backend-5id9.onrender.com/admin/changeAccountStatus",
                { doctorId : doctor._id, userId:doctor.userId, status:status},
                {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            )
        }catch(err){
            console.log(err.message)
            console.log("error bye")
        }
    }
    useEffect(()=>{getAllUsers()},[])

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
            <h1 className='text-center text-2xl font-semibold my-6'> All Doctor Application</h1>
                <table className=' table-autoborder-separate border-spacing-2 border-2 row-gap-5 ml-8'>
                    <thead className='border-2'>
                        <tr>
                            <th className='pl-8 py-2'>Index</th>
                            <th className='pl-40 py-2'>Name</th>
                            <th className='pl-40 py-2'>Email</th>
                            <th className='pl-40 py-2'>Status</th>
                            <th className='pl-40 py-2 pr-8'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='border-2 '>
                        
                    {allDoctors?.map((doctor, index) => (
                        <tr key={index} >
                            <td className='pl-8 py-2'>{index + 1}.</td>
                            <td className='pl-40 py-2'>{doctor?.firstName}</td>
                            <td className='pl-40 py-2'>{doctor?.email}</td>
                            <td className='pl-40 py-2'>{doctor?.status}</td>
                            <td className='pl-40 py-2 pr-8'><span className='bg-gray-600 py-1 px-2 rounded-[10px] flec justify-content-center cursor-pointer text-white' onClick={
                                approveRequest
                            }>Approve</span></td>
                        </tr>
                ))} 
                        
                        
                    </tbody>
                </table>
                </div>
      </div>
    </>
  )
}

export default Doctor
