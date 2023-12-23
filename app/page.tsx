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
  return (
    <div>
      cookie
      <button className="text-white bg-yellow px-5 py-2" onClick={getCookie}>click me</button>
    </div>
  )
}

