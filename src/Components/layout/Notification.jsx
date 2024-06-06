import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../../Redux/Features/alertSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showUnread, setShowUnread] = useState(true);

  const handleHide = (tab) => {
    setShowUnread(tab === 'unread');
  };

  const handleMarkRead = async () => {
    try {
      dispatch(showLoading());
      await axios.post(
        'https://healthy-life-backend-5id9.onrender.com/api/getAllNotification',
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      window.location.reload(false);
      dispatch(hideLoading());
      toast.success('All notifications are marked as Read');
    } catch (err) {
      dispatch(hideLoading());
      console.log(err.message);
    }
  };
  const handleDelete = () =>{
    dispatch(showLoading());
    try{
      axios.post('https://healthy-life-backend-5id9.onrender.com/api/deleteNotification',{
        userId: user._id
      },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      window.location.reload(false);
    dispatch(hideLoading());
    toast.success('All notifications are deleted');

  } catch (err) {
    dispatch(hideLoading());
    console.log(err.message);
  }
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
        <div className="w-100 h-full ml-0 lg:ml-80 px-4 bg-white pt-4">
          <div className="flex justify-content-center ">
            <h1 className="flex justify-content-center text-3xl font-semi-bold">Applications For Doctors</h1>
          </div>
          <div className="flex gap-6 py-4">
            <button
              className='bg-gray-800 border-2 text-gray-100 p-2 rounded-lg cursor-pointer '
              onClick={() => handleHide('unread')}
            >
              Unread
            </button>
            <button
              className='bg-gray-800 border-2 text-gray-100 p-2 rounded-lg cursor-pointer'
              onClick={() => handleHide('read')}
            >
              Read
            </button>
            <button
              className="bg-gray-800 border-2 text-gray-100 p-2 rounded-lg ml-auto cursor-pointer"
              onClick={showUnread?handleMarkRead:handleDelete}

            >{
              showUnread?
              "Mark All As Read":"Delete All"
            }
            </button>
          </div>
          <div className={showUnread ? 'block' : 'hidden'}>
            {user?.notification.map((alertMsg, index) => (
              <div key={index}>
                <ul>
                  <li className="flex">
                    <span className="pr-8">{index + 1}.</span>
                    <span className="cursor-pointer" onClick={() => navigate(alertMsg.onClickPath)}>
                      {alertMsg?.message}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className={showUnread ? 'hidden' : 'block'}>
            {user?.seennotification.map((alertMsg, index) => (
              <div key={index}>
                <ul>
                  <li className="flex">
                    <span className="pr-8">{index + 1}.</span>
                    <span className="cursor-pointer" onClick={() => navigate(alertMsg.onClickPath)}>
                      {alertMsg?.message}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
