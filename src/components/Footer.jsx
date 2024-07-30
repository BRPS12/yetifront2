import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="firstRoww">
          <p className="FooterTitle">
            Youth Educational Training Institute
          </p>
          <p className="infotexts">
            Багшийн дээд UBH төв, 15 давхар 1513 тоот{" "}
          </p>
          <p className="infotexts">Mongolia, Ulaanbaatar</p>
          <p className="contact-info">
            Phone:
            <div>
              <span style={{ textDecoration: "none" }}>+976 7202 3719</span>
              <br />
              <span style={{ textDecoration: "none" }}>+976 8905 3719</span>
              <br />
              <span style={{ textDecoration: "none" }}>+976 9191 3719</span>
            </div>
          </p>
          <p
            className="contact-info">
            Email: <span>yetischool.e@gmail.com</span>
          </p>
        </div>

        <div style={{ width: "400px", marginTop: "2 0px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              height: "20vh",
            }}>
            <NavLink
              className="pagesText"
              activeClassName="active"
              exact
              to="/">
              Home Page
            </NavLink>
            <NavLink className="pagesText" exact to="/news">
              News
            </NavLink>
            <NavLink className="pagesText" exact to="/about">
              About Us
            </NavLink>
            <NavLink className="pagesText" exact to="/contactus">
              Contact Us
            </NavLink>
          </div>

          <p className="pagesText">Follow Us:</p>
          <div className="social-icons" style={{ marginTop: "20px" }}>
            <SocialIcon url="https://www.facebook.com/Yetieducationalacademy" />
            <SocialIcon
              url="https://www.instagram.com/yetiacademyy/?theme=dark"
              style={{ marginLeft: "10px" }}
            />
            <SocialIcon
              url="https://www.youtube.com/yetiacademyy/?theme=dark"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
