"use client";
import axios from "axios";
import { useEffect } from "react";
export default  function Home() {
  const getCookie = async()=>{
    try{
      const name = "hello"
      const response = await axios.post("https://back-cookie.onrender.com/post",{name},{withCredentials:true});
      console.log(response.data);
    }catch(err:any){console.log(err.message)};
  }

  const checkCookie=async()=>{
   const response = await axios.get("https://back-cookie.onrender.com/cookie",{withCredentials:true});
    console.log("response data",response.data);
  }

  useEffect(()=>{
  getCookie();
    checkCookie();
  });
  return (
    <div>
      cookie
    </div>
  )
}

