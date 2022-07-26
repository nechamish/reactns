// import './App.css';
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./component/Nav";
import ManagerServicesActive from "./component/manager activity/managerServicesActive";
import SignIn from "./component/SignIn";
import User from "./component/User";
import Manager from "./component/Manager";
import UpdateService from "./component/manager activity/updateService";
import Business from "./component/Business";
import SignUpToServices from "./component/SignUpToServices";

function App() {

  return (
    <>
      <div className="App">
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/admin" element={<ManagerServicesActive />} />
                <Route path="/" element={<Nav />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUpToServices />} />
                <Route path="/user" element={<User />} />
                <Route path="/manager" element={<Manager />}/>
                <Route path="/updateService" element={<UpdateService />}/>
                <Route path="/business" element={<Business />}/>
              </Routes>
            </Suspense>
        </Router>
      </div>
    </>
  );
}
export default App;
