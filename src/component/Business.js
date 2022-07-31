import { useState,useEffect} from "react";
import axios from "axios";

export default function Business() {
  // const [business, setBusiness] = useState();

  // const detailsbusiness = async() => {
  //   let business;
  //   try {
  //     const res = await axios
  //       .get(
  //         "https://meetings-test.herokuapp.com/business/6d720e93-d827-4340-a0bc-147ed8f62776"
  //       )
  //       .then(() => {
  //         business = res.data;
  //         console.log(business);
  //         if (business!=undefined){
  //           return Object.keys(business).map(function (keyName, keyIndex) {
  //             <p>{keyName}</p>;
  //             <p>{business[keyName]}</p>;
  //           });
  //         }
  //         debugger;
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };



 
    async function detailsbusiness() {
      let business;
      debugger;
      try {
        debugger;
        const res = await axios
          .get(
            "https://meetings-test.herokuapp.com/business/6d720e93-d827-4340-a0bc-147ed8f62776"
          )
          .then((res) => {
            debugger;
            business = res.data;
            console.log("inserted: " + res.data);
          });
      } catch (err) {
        console.log(err);
      }
    }

 



  const changebusiness = (async) => {
    let business;
    try {
      const res = axios
        .put(
          "https://meetings-test.herokuapp.com/business/6d720e93-d827-4340-a0bc-147ed8f62776"
        )
        .then(() => {
          business = res.data;
          debugger;
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Business</h1>
      <div>
        <button onClick={  detailsbusiness}>details of the business</button>
        <button onClick={changebusiness}>to change the details</button>
        {/* <button onClick={changemeetings()}>to change the meetings</button> */}
      </div>
    </>
  );
}
