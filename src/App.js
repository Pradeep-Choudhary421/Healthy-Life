import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Spin from "./otherComp/Spin";
import PrtoectRoute from "./otherComp/PrtoectRoute";
import PublicRoute from "./otherComp/PublicRoute";
import DocApply from "./Components/ApplyDoc/DocApply";
import Notification from "./Components/layout/Notification";
import Users from "./Components/Users/Users";
import Doctor from "./Components/Doctors/Doctor";

const App = () => {
  const isLoading = useSelector((state) => state.alert);

  return (
    <>
      <BrowserRouter>
        {isLoading && <Spin />}
        <ToastContainer />
        <Routes>
          <Route
            path="/home"
            element={
              <PrtoectRoute>
                <Home />
              </PrtoectRoute>
            }
          />
          <Route
            path="/docapply"
            element={
              <PrtoectRoute>
                <DocApply/>
              </PrtoectRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrtoectRoute>
                <Users/>
              </PrtoectRoute>
            }
          />
          <Route
            path="/doctors"
            element={
              <PrtoectRoute>
                <Doctor/>
              </PrtoectRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="/notification" element={
          <PrtoectRoute>
          <Notification/>
        </PrtoectRoute>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
