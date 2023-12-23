"use client";
import axios from "axios";
import { useEffect } from "react";
export default async function Home() {
  const getCookie = async()=>{
    const response = await axios.post("https://back-cookie.onrender.com",{name:"hola"},{withCredentials:true});
    console.log(response.data);
  }
  useEffect(()=>{
getCookie();
  })
  return (
    <div>
      cookie
    </div>
  )
}
