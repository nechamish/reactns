// import './App.css';
import * as React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import Nav from "./component/Nav";
import Signiin from "./component/Signin";
import User from "./component/User";
import Manager from "./component/Manager";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Routes>
            <Route path="/" element={<Signiin />} ></Route>
            <Route path="/User" element={<User/>}></Route>
            <Route path="/Manager" element={<Manager/>}></Route>
          </Routes>
        </Nav>
      </Router>
    </div>
  );
}
export default App;
