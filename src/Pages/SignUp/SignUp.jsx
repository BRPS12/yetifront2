import "./SignUp.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../../App";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";
export const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [code, setCode] = useState(0);
  const images = [
    "https://i.pinimg.com/736x/dc/6c/b0/dc6cb0521d182f959da46aaee82e742f.jpg",
    "https://i.pinimg.com/236x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
    "https://i.pinimg.com/236x/57/f4/f9/57f4f9c197af8a9958f13e8ec68f73a9.jpg",
    "https://i.pinimg.com/236x/85/04/a2/8504a25c5c95a756fe9de7c72c90bdb7.jpg",
    "https://i.pinimg.com/236x/b0/69/d3/b069d3bd78a81e7bd800897e75af6f17.jpg",
    "https://i.pinimg.com/236x/d7/66/5d/d7665dd30e6429a17dd8e967c9cda6dc.jpg",
  ];
  const signUp = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("age", age);
      formData.append(
        "profile",
        images[Math.floor(Math.random() * images.length)]
      );
      formData.append("role", "normal");
      const res = await instance.post("/users/signup", formData);
      toast.success("Амжилттай бүртгэгдлээ");
    } catch (error) {
      toast.error("Амжилтгүй");
    }
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedFile(file);
  //   console.log("profile : ", file);
  // };

  return (
    <div className="signUpCont">
      <ToastContainer />
      <main>
        <div className="signUpBox">
          <div className="logotitle">
            <img
              src={require("../../Images/YetiLogo.jpg")}
              alt=""
              className="signYetiLogo"
            />
            <p className="burtguuleh">
              Бүртгүүлэх
            </p>
            <Link className="login-link" to="/">
              <p>Нүүр хуудас</p>
            </Link>
          </div>

          <div className="seperatedDiv">
            <div className="signup-form-group">
              <label htmlFor="username" className="signup-label">
                <p style={{ color: "white" }}>Username</p>
              </label>
              <input
                type="text"
                name="username"
                className="signup-input"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signup-form-group" style={{ marginTop: "20px" }}>
              <label htmlFor="email" className="signup-label">
                <p style={{ color: "white" }}>Email</p>
              </label>
              <input
                type="text"
                name="email"
                className="signup-input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="signup-form-group" style={{ marginTop: "20px" }}>
              <label htmlFor="password" className="signup-label">
                <p style={{ color: "white" }}>Password</p>
              </label>
              <input
                type="password"
                name="password"
                className="signup-input"
                placeholder="••••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="signup-form-group" style={{ marginTop: "20px" }}>
              <label htmlFor="age" className="signup-label">
                <p style={{ color: "white" }}>Age</p>
              </label>
              <input
                type="number"
                name="age"
                className="signup-input"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="signup-btn"
              onClick={signUp}
              style={{ marginTop: "30px", cursor: "pointer" }}>
              Бүртгүүлэх
            </button>
            <Link
              className="login-link"
              to="/login">
              <p style={{ marginTop: "7px", paddingBottom: "30px" }}>Нэвтрэх</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
