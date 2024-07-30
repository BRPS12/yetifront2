import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { News } from "./Pages/News/News";
import { About } from "./Pages/About";
import { useState, useEffect } from "react";
import { Course1 } from "./Pages/Courses/Course1";
import { Course2 } from "./Pages/Courses/Course2";
import { Course3 } from "./Pages/Courses/Course3";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import { Benefits } from "./Pages/Benefits/Benefits";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Login } from "./Pages/Login/Login";
import axios from "axios"
import  Profile  from "./Pages/Profile/Profile";
export const instance = axios.create({
  baseURL: "https://yetiback.onrender.com",
  // baseURL: "http://localhost:9911/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div style={{ overflow : "hidden"}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/course/1" element={<Course1 />} />
            <Route path="/course/2" element={<Course2 />} />
            <Route path="/course/3" element={<Course3 />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/benefits" element={<Benefits/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};
