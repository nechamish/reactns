import react from "react";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


export default function SignIn() {

  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const [manager, setManager] = useState();
  const navigate=useNavigate();

  const login = async () => {
    try {
      await axios
        .get(
          "https://meetings-test.herokuapp.com/user/5e8da483-0a02-4131-b52f-648cf5e4c974"
        )
        .then((res) => {
          setManager(res.data);
          if (res.data.id === id && res.data.username === username) {
            navigate('/manager');
            console.log("i am manager");
          }
          console.log(manager);
          debugger;
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <p>enter password</p>
        <input onChange={(e) => setId(e.target.value)}></input>
        <p>enter username</p>
        <input onChange={(e) => setUsername(e.target.value)}></input>
        <button onClick={login}>sginin</button>
      </div>
    </>
  );
}
