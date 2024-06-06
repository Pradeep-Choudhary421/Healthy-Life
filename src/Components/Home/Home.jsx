import React, { useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import axios from "axios";

const Home = () => {
  const getUserData = async () =>{
    try{
      const res = await axios.post(
        "http://localhost:7082/api/getUser",{},{
          headers:{
            Authorization: "Bearer"+localStorage.getItem("token")
          }
        }
      )

    }
    catch(err){
      console.log(err);
    }
  }

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
        <div className="border-2 w-100 h-full ml-0 lg:ml-80 px-2 bg-white">svhvh</div>
      </div>
      {/* <div className="flex overflow-x-hidden bg-black lg:h-full">
        <div>
          <Sidebar />
        </div>
        <div>
          <Header />
        </div>
      </div>
      <div>
        <div className="border-2 w-100 h-full ml-0 lg:ml-80 px-2 bg-white">svhvh</div>
      </div> */}
    </>
  );
};

export default Home;
