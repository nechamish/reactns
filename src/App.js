// import './App.css';
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./component/Nav";
import ManagerServicesActive from "./component/manager activity/managerServicesActive";
import SignIn from "./component/Signin";
import User from "./component/User";
import Manager from "./component/Manager";
import UpdateService from "./component/manager activity/updateService";
function App() {

  return (
    <>
      <div className="App">
        <Router>
          {/* <Nav> */}
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/admin" element={<ManagerServicesActive />} />
                <Route path="/" element={<Nav />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/user" element={<User />} />
                <Route path="/manager" element={<Manager />}/>
                <Route path="/updateService" element={<UpdateService />}/>
              </Routes>
            </Suspense>
          {/* </Nav> */}
        </Router>
      </div>
    </>
  );
}
export default App;
