import react from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Manager() {
  const [manager, setManager] = useState();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

useEffect(() => {
  const detailsmanager = async () => {
    try {
      const res = await axios
        .get(
          "https://meetings-test.herokuapp.com/user/5e8da483-0a02-4131-b52f-648cf5e4c974"
        )
        .then((res) => {
          setManager(res.data);
          console.log(manager);
          debugger;
        });
    } catch (err) {
      console.log(err);
    }
  };
    detailsmanager();
}, []);


  const deletemanager = async () => {
    try {
      const res = await axios
        .delete(
          "https://meetings-test.herokuapp.com/user/5e8da483-0a02-4131-b52f-648cf5e4c974"
        )
        .then((res) => {
          manager = res.data;
          console.log(manager);
          debugger;
        });
    } catch (err) {
      console.log(err);
    }
  };

     const updateCustomer = async (e) => {
       e.preventDefault();
       const customer = {
         user: {
           username,
           password,
         },
       };
       console.log(customer);
       try {
         const res = await axios
           .put(
             ("https://meetings-test.herokuapp.com/user/5e8da483-0a02-4131-b52f-648cf5e4c974",
             customer)
           )
           .then((res) => {
             console.log(res);
             debugger;
           });
       } catch (err) {
         console.log(err);
       }
     };

  return (
    <>
      <div>
        <h1>Manager</h1>
        <button onClick={deletemanager} type="button">
          deletemanager
        </button>
      </div>
      {manager != undefined ? (
        <div>
          <h1>Manager</h1>
          <p>id: {manager.id}</p>
          <p>password: {manager.password}</p>
          <p>username: {manager.username}</p>
        </div>
      ) : (
        <div></div>
      )}
      <h1>Add User</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <button onClick={updateCustomer}>update user</button>
    </>
  );
}
