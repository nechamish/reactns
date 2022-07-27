import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
// import useNavigate from "use-navigate";

export default function Signiin() {
let navigate = useNavigate();
const [password, setPassword] = useState();
 const sendToDb = async  => {
    console.log(password);
    console.log(parseInt(password));
    if(parseInt(password)===100){
      console.log("i am manager");
    }
    else{
         try {
       const res = axios.get("https://meetings-test.herokuapp.com/user/signin")
         .then(() => {
         business = res.data;
         debugger;
            });
          } catch (err) {  console.log(err);}
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (parseInt(data.get("password")) === 100) {
      console.log("manager");
       return navigate("/Manager");
    }
    //אם הוא עובד קיים
    const user = await sendToDb();
    // console.log(user);
    if (user.userid) {
      console.log("i am user");
       navigate("/User", { state: { user } });
    }
   }

  return (
    <>
      <p>enter username</p>
      <input></input>
      <p>enter password</p>
      <input onChange={e=>{setPassword(e.target.value)}} id="password" name="password" type="password"></input>
      <button onSubmit={sendToDb()}>sginin</button>
    </>
  );
}
