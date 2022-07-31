import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
// import useNavigate from "use-navigate";

export default function Signiin() {
  let user;
  const navigate = useNavigate();
  const [password, setPassword] = useState();

  const sendToDb = (async) => {
    try {
      const res = axios
        .get("https://meetings-test.herokuapp.com/user/signin")
        .then(() => {
          user = res.data;
          debugger;
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <p>enter username</p>
      <input></input>
      <p>enter password</p>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        id="password"
        name="password"
        type="password"
      ></input>
      <button onSubmit={sendToDb()}>sginin</button>
    </>
  );
}
