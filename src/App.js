// import './App.css';
import * as React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import Nav from "./component/Nav";
import Signiin from "./component/Signin";
import User from "./component/User";
import Manager from "./component/Manager";
import Business from "./component/Business";
function App() {
  return (
  // <Signiin></Signiin>
  <Manager></Manager>

    // <Business></Business>
    // <div className="App">
    //   <Router>
    //     <Signiin>
    //       <Routes>
    //         {/* <Route path="/" element={<Signiin />} ></Route> */}
    //         <Route path="/User" element={<User/>}></Route>
    //         <Route path="/Manager" element={<Manager/>}></Route>
    //       </Routes>
    //     </Signiin>
    //   </Router>
    // </div>
  );
}
export default App;
