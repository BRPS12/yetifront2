import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import PersonImage from "../../Images/ContactUs.jpg";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import "./ContactUs.css"
export const ContactUs = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <Header
        backgroundImage={PersonImage}
        title="Contact Us"
        isMounted={isMounted}
        repeat="no-repeat"
        bgSize="cover"
      />
      <div
        className="contactUsCont">
        <div
          className="contactUsInfoCont">
          <p className="xolboobarix">
            Бидэнтэй холбоо барих
          </p>
          <p
            className="contactUsInfo">
            Утасны дугаар : <span>7202 3719 , 8605 3719 , 9191 3719</span>
          </p>
          <p className="contactUsInfo">
            Хаяг : <span>Багшийн дээд UBH төв, <br /> 15 давхар 1513 тоот</span>
            <p style={{marginTop : "3vh"}}>Ulaanbaatar, Mongolia</p>
          </p>
          <p className="contactUsInfo">
            Э-майл :<span>yetischool.e@gmail.com</span>
          </p>
          <div className="contactUsInfo">
            <a href="https://www.facebook.com/Yetieducationalacademy">
              <img
                src={require("../../Images/facebook.jpg")}
                className="logos"
              />
            </a>
            <a href="https://www.instagram.com/yetiacademyy/?theme=dark">
              <img
                src={require("../../Images/ig.jpg")}
               className="logos2"
              />
            </a>
            <a href="https://www.youtube.com/@yetischool8633">
              <img
                src={require("../../Images/youtube.jpg")}
                className="logos"
              />
            </a>
          </div>
        </div>
        <div
          className="contactSecondCont">
          <p
            className="yetiName">
            Youth Educational Training Institute
          </p>
          <img
            src={require("../../Images/YetiGazar.jpg")}
            className="yetiImage"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
