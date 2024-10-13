import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Nopage from "./Nopage";
import Navbar from "./Navbar";
import Myai from "./myai";
import SignupForm from "./singup";
import AIInfo from "./AiInfo";
import Topai from './Topai'
import Usefulai from './useful'
import Login from "./login";
function Main() {
  return (
    <div>
      <Router>
        <div className="main-route">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ai10" element={<Topai />} />
          <Route path="usefulai" element={<Usefulai />} />

          <Route path="Contact" element={<Contact />} />
          <Route path="myai" element={<Myai />} />
          <Route path="AiInfo/:name" element={<AIInfo />} />
          <Route path="singup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<Nopage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Main;
