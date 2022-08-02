import { useState,useEffect} from "react";
import axios from "axios";

export default function Business() {
  const [business, setBusiness] = useState();

  async function detailsbusiness() {
      debugger;
      try {
        debugger;
        await axios
          .get(
            "https://meetings-test.herokuapp.com/business/5e8da483-0a02-4131-b52f-648cf5e4c974"
          )
          .then((res) => {
            setBusiness(res.data); 
            console.log("inserted: " + res.data);
          });
      } catch (err) {
        console.log(err);
      }
    }

 



  const changebusiness = (async) => {
    try {
      const res = axios
        .put(
          "https://meetings-test.herokuapp.com/business/5e8da483-0a02-4131-b52f-648cf5e4c974"
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
        <button onClick={detailsbusiness}>details of the business</button>
        <button onClick={changebusiness}>to change the details</button>
        {/* <button onClick={changemeetings()}>to change the meetings</button> */}
      </div>
      {business != undefined ? (
        <div>
          <h2>details business</h2>
          <p>{business.businessName}</p>
          <p>{business.id}</p>
          <p>{business.ownersName}</p>
          <div>
            <img src={business.img} alt="car" />
          </div>
          <p>{business.img}</p>
          <p>
            {business.services.forEach((element) => {
              <p>{element.name}</p>;
              <p>{element.cost}</p>;
            })}
          </p>
          ;
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
