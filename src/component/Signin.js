import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import useNavigate from "use-navigate";
export default function Signiin() {

    let navigate = useNavigate();
const [password, setPassword] = useState();
 const sendToDb = async () => {
    console.log(password);
    const promise = axios.post(
      "https://meetings-test.herokuapp.com/user/signin",
      {
        Password: password,
      }
    );
    const res = await promise;
    console.log(res.data);
    debugger;
    return res.data;
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
      <input id="password" name="password" type="password"></input>
      <button  onclick={handleSubmit()}>sginin</button>
    </>
  );
}
