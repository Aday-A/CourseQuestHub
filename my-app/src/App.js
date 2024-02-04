import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage, HomePage, Navbar} from "./Components";
import { SignupPage } from "./Components/Pages/SignupPage";
import { LoginPage } from "./Components/Pages/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
        <Route path="/SignupPage" element={<SignupPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
