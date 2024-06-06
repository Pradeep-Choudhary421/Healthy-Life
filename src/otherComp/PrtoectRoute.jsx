import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { hideLoading, showLoading } from "../Redux/Features/alertSlice";
import { setUser } from "../Redux/Features/userSlice";

const PrtoectRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:7082/api/getUser",
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        <Navigate to="/" />;
        localStorage.clear();
      }
    } catch (err) {
      dispatch(hideLoading());
      console.log(err);
      localStorage.clear();
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrtoectRoute;
