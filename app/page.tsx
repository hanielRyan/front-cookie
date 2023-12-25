"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect,useState } from "react";
export default  function Home() {
  const [img,setImg]=useState<any>();
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
    <Image src={URL.createObjectURL(img)} alt="" height={200} width={200}/>
    <input type="file" onChange={(e)=>{
        const file = e.target?.files![0];
     console.log(file);
     setImg(file);
    }} />
</div>
  )
}

