import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import courseImage from "../../Images/mentornship.jpg";
import { Footer } from "../../components/Footer";
import "./Course1.css";
import {
  TextField,
  Button,
  Grid,
  Modal,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { instance } from "../../App";
export const Course1 = () => {
  const user_id = window.localStorage.getItem("user_id");
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [file, setFile] = useState(null);
  const [courseContent, setCourseContent] = useState("");
  const [courses , setCourses] = useState([])
  const getUser = async () => {
    const res = await instance.get(`/users/${user_id}`);
    setUser(res.data.data);
  };
  const handleEdit = () => {
    setEditing(true);
  };

  const handleClose = () => {
    setEditing(false);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Get the selected file
  };
  const getCourse1 = async () => {
    const res = await instance.get("/courses/1")
    setCourses(res.data.data)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await instance.post("/courses/1", {
        content : courseContent,
        image : file
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res)
      setFile(null);
      setCourseContent("");
      window.location.reload();
    } catch (error) {
      console.error("Error creating news:", error);
    }
  };
  useEffect(() => {
    setIsMounted(true);
    getUser();
    getCourse1()
  }, []);

  return (
    <div className="fontFamily">
      <Header
        backgroundImage={courseImage}
        title="Mentorship Program"
        isMounted={isMounted}
        repeat="no-repeat"
        bgSize="cover"
      />
      
      <div className="addButtonCont">
      {user.role === "admin" ? <button class="course1Add" onClick={handleEdit}>Add</button> : <></>}
      </div>
      <div className="background">
        <div className="firstContainer">
          <p className="course1Title">
            Хэлний оноотой залууст тэтгэлгийн зөвлөгөө, чиглүүлэг өгнө.
          </p>
        </div>
        <div className="firstRow">
          <div className="contForText">
            <p className="firstParagraph">
              Mentorship програм нь англи хэлний олон улсын шалгалтын оноотой
              залууст зориулсан хөтөлбөр юм.
              <p>
                Хөтөлбөрийн турш бид зарлагдсан тэтгэлгийн мэдээ мэдээллийг цаг
                алдалгүй хүргэж, тэтгэлэгт өргөдөл илгээх үед шаардлагатай бүх
                төрлийн зөвлөгөө чиглүүлгийг олгоно.
              </p>
            </p>
          </div>
          <div className="secondCont">
            <p className="secondContParagraph">
              <p>
                ✅ Хөтөлбөрийн хүрээнд 7 хоног бүр IELTS&TOEFL жишиг шалгалт
                авна.{" "}
              </p>
              <p>✅ Сайн дурын үйл ажиллагаанд оролцох боломж </p>{" "}
              <p>✅ Их сургууль, тэтгэлгийн эсээнүүд бичих зөвлөгөө </p>
              <p>✅ Баталгаат орчуулга</p>
            </p>
          </div>
        </div>
        <div className="secondRow">
          <div className="thirdCont">
            <p className="thridContParagraph">
              <p>⭐ Визний болон тэтгэлгийн ярилцлагын зөвлөгөө </p>
              <p>
                ⭐ Стандартад нийцсэн тодорхойлох захиа бичих зөвлөгөө{" "}
              </p>{" "}
              <p>⭐ CV бичих зөвлөгөө</p>
              <p>⭐ Бямба гариг бүр SAT клуб</p>
              <p>⭐ Спорт зааланд тоглох боломж</p>
            </p>
          </div>
          <img
            src={require("../../Images/Shureebagsh3.jpg")}
            className="image"
          />
        </div>
      </div>
      <Modal
          open={editing}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box
            className="createSection"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              borderRadius: "20px",
              height: "auto",
            }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1vh",
              }}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ fontFamily: "Georgia", fontWeight: "bold" }}>
                Add Features
              </Typography>
              <IconButton onClick={handleClose} style={{ marginLeft: "auto" }}>
                <ClearIcon />
              </IconButton>
            </div>
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="news-form">
              <div className="form-group">
                <label htmlFor="news-content">Content:</label>
                <input
                  type="text"
                  id="news-title"
                  placeholder="Enter news title"
                  value={courseContent}
                  onChange={(e) => setCourseContent(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>
              <button type="submit" className="submit-btn">
                Create News
              </button>
            </form>
          </Box>
        </Modal>
      <Footer />
    </div>
  );
};
