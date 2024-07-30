import "./Login.css"
import { Link } from "react-router-dom";
import { useState , useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../../App";
export const Login = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const Login = async () => {
    try {
      const res = await instance.post(`/users/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data.data)
      window.localStorage.setItem("user_id", res.data.data.id);
      if (res) {
        window.location.replace("/");
      }
    } catch (error) {
      toast.error("Амжилтгүй");
    }
  };
  return (
      <div className="loginContainer">
          <ToastContainer />
          <div className="loginBox">
            <Link to="/" style={{textDecoration : "none"}}>
            <img src={require("../../Images/YetiLogo.jpg")} alt="" className="logo"/>
            </Link>
            <p className="boginooP">Нэвтрэх</p>
            <div className="boxThree">
              <label htmlFor="email" className="labels">
                <p style={{ color: "white" , marginBottom : "1vh" }}>Цахим хаяг </p>
              </label>
              <input
                type="text"
                name="email"
                className="inps"
                placeholder="name@mail.domain"
                ref={emailRef}
              />
            </div>

            <div className="boxThree">
              <label htmlFor="pass" className="labels">
                <p style={{ color: "white" , marginBottom : "1vh"}}> Нууц үг</p>
              </label>
              <input
                type="password"
                name="pass"
                className="inps"
                placeholder="••••••••••"
                ref={passwordRef}
              />
            </div>
            
            <div className="boxTwo">
              <div>
                <input type="checkbox" name="check" className="checkBox" />
                <label htmlFor="check" className="checkLabel" style={{marginLeft : "1vh"}}>
                  Намайг санаx
                </label>
              </div>
              <Link to={"/forgot"} className="linkStyle">
                Нууц үгээ мартсан
              </Link>
            </div>
            <button type="submit" className="clickGreen" onClick={Login} style={{cursor : "pointer"}}>
              Нэвтрэх
            </button>
            <Link to={"/signUp"} className="newUser">
              Шинэ хэрэглэгч бол энд дарна уу?
            </Link>
          </div>
     
      </div>
  );
};
