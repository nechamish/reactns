import react from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Manager() {
  const [manager, setManager] = useState();
  const detailsmanager = async () => {
    try {
      const res = await axios
        .get(
          "https://meetings-test.herokuapp.com/user/d0bed1c9-ead8-4527-acf9-f8bf84efba6c"
        )
        .then((res) => {
          setManager(res.data);
          console.log(manager);
          // if (manager != undefined) {
          //   return (Object.keys(manager).map(function (keyName, keyIndex) {
          //     <p>{keyName}</p>;
          //     <p>{manager[keyName]}</p>;
          //   }));
          // }
          debugger;
        });
    } catch (err) {
      console.log(err);
    }
  };

  const changemanager = async () => {
    let manager;
    try {
      const res = await axios
        .put(
          "https://meetings-test.herokuapp.com/user/d0bed1c9-ead8-4527-acf9-f8bf84efba6c"
        )
        .then((res) => {
          manager = res.data;
          console.log(manager);
          //  if (manager != undefined) {
          //    return Object.keys(manager).map(function (
          //      keyName,
          //      keyIndex
          //    ) {
          //      <p>{keyName}</p>;
          //      <p>{manager[keyName]}</p>;
          //    });
          //  }
          debugger;
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deletemanager = async () => {
    let manager;
    try {
      const res = await axios
        .delete(
          "https://meetings-test.herokuapp.com/user/d0bed1c9-ead8-4527-acf9-f8bf84efba6c"
        )
        .then((res) => {
          manager = res.data;
          console.log(manager);
          if (manager != undefined) {
            return Object.keys(manager).map(function (keyName, keyIndex) {
              <p>{keyName}</p>;
              <p>{manager[keyName]}</p>;
            });
          }
          debugger;
        });
    } catch (err) {
      console.log(err);
    }
  };

  // const navigate = useNavigate();

  // const business=(async)=>{
  //   navigate('/Business');
  // }

  // const services = (async) => {
  //   navigate("/Business");
  // };

  // const meetings = (async) => {
  //     navigate("/Business");
  // };

  return (
    <>
      <div>
        <button type="button" onClick={detailsmanager}>
          the detailes
        </button>
        <button onClick={changemanager()} type="button">
          to change the detailes
        </button>
        <button onClick={deletemanager()} type="button">
          to change
        </button>
      </div>
      {manager != undefined ? (
        <div>
          <p>{manager.id}</p>
          <p>{manager.password}</p>
          {Object.keys(manager).map(function (keyName, keyIndex) {
            <p>hbcjknlc;;</p>;
            <p>keyName</p>;
            <p>{manager[keyName]}</p>;
          })}
        </div>
      ) : (
        <div></div>
      )}

      {/* <button onClick={business()}>To business</button>
    <button onClick={services()}>To services</button>
    <button onClick={meetings()}>To meetings</button> */}
    </>
  );
}
