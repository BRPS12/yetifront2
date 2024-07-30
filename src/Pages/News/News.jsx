import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PersonImage from "../../Images/news.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image1 from "../../Images/a.jpg";
import Image2 from "../../Images/a2.jpg";
import Image3 from "../../Images/a3.jpg";
import Image4 from "../../Images/a4.jpg";
import Image5 from "../../Images/a5.jpg";
import Image6 from "../../Images/a6.jpg";
import Image7 from "../../Images/a7.jpg";
import Image8 from "../../Images/1.jpg";
import Image9 from "../../Images/2.jpg";
import Image10 from "../../Images/3.jpg";
import Image11 from "../../Images/4.jpg";
import Image12 from "../../Images/5.jpg";
import Image13 from "../../Images/6.jpg";
import Image14 from "../../Images/7.jpg";
import { Footer } from "../../components/Footer";
import { instance } from "../../App";
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
import "./News.css";
export const News = () => {
  const user_id = window.localStorage.getItem("user_id");
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [newsImage, setNewsImage] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");

  const getUser = async () => {
    try {
      const response = await instance.get(`/users/${user_id}`);
      setUser(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoading(false);
    }
  };
  const deleteNews = async (id) => {
    try {
      await instance.delete(`/news/${id}`);
      getAllNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };
  const getAllNews = async () => {
    const response = await instance.get("/news");
    const newsData = response.data.data;
    setNews(newsData);
    setIsLoading(false);
    // const imageUrl = newsData[0].image;
    // const formattedImageUrl = imageUrl.replace('Images/', ''); // remove "Images/"
    // setNewsImage(formattedImageUrl);
    // console.log(newsImage)
  };
  // const createNews = async () => {
  //   try {
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append("title", title);
  //     formData.append("paragraph", paragraph);
  //     formData.append("image", picture);

  //     const response = await instance.post("/news/createNews", formData);
  //     const newNewsItem = response.data.data;

  //     setNews([...news, newNewsItem]);
  //     setTitle("");
  //     setParagraph("");
  //     setPicture("");
  //     setImage(null);
  //     setEditing(false);
  //   } catch (error) {
  //     console.error("Error creating news:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleEdit = () => {
    setEditing(true);
  };

  const handleClose = () => {
    setEditing(false);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Get the selected file
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const formData = new FormData();
    formData.append("image", file); // Append the file to the form data
    formData.append("title", newsTitle); // Append the title to the form data
    formData.append("content", newsContent); // Append the content to the form data
  
    try {
      const res = await instance.post("/news/createNews", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setNews((prevNews) => [...prevNews, res.data.data]);
      setFile(null);
      setNewsTitle("");
      setNewsContent("");
      window.location.reload()
    } catch (error) {
      console.error("Error creating news:", error);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    getUser();
    getAllNews();
  }, []);

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const images2 = [Image8, Image9, Image10, Image11, Image12, Image13, Image14];
  return (
    <div>
      <Header
        backgroundImage={PersonImage}
        title="Our latest News"
        isMounted={isMounted}
        repeat="repeat"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <div>
          {" "}
          <h2
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontFamily: "Georgia",
              marginTop: "30px",
              marginBottom: "30px",
            }}>
            Latest News
          </h2>
          {user.role === "admin" && (
            <button className="createButton" onClick={handleEdit}>
              Create News
            </button>
          )}
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
              height: 450,
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
                style={{ fontFamily: "Georgia" }}>
                Create News
              </Typography>
              <IconButton onClick={handleClose} style={{ marginLeft: "auto" }}>
                <ClearIcon />
              </IconButton>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="news-form">
  <h2>Create News</h2>
  <div className="form-group">
    <label htmlFor="news-title">News Title:</label>
    <input
      type="text"
      id="news-title"
      placeholder="Enter news title"
      value={newsTitle}
      onChange={(e) => setNewsTitle(e.target.value)}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="news-content">News Content:</label>
    <textarea
      id="news-content"
      placeholder="Enter news content"
      value={newsContent}
      onChange={(e) => setNewsContent(e.target.value)}
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
      required
    />
  </div>
  <button type="submit" className="submit-btn">Create News</button>
</form>
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    InputProps={{
                      style: {
                        textAlign: "center",
                        fontFamily: "Georgia, serif",
                        fontSize: "16px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Paragraph"
                    variant="outlined"
                    value={paragraph}
                    InputProps={{
                      style: {
                        textAlign: "center",
                        fontFamily: "Georgia, serif",
                        fontSize: "16px",
                      },
                    }}
                    onChange={(e) => setParagraph(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Image Url"
                    variant="outlined"
                    value={picture}
                    InputProps={{
                      style: {
                        textAlign: "center",
                        fontFamily: "Georgia, serif",
                        fontSize: "16px",
                      },
                    }}
                    onChange={(e) => setPicture(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                <form onSubmit={handleFileUpload} encType="multipart/form-data">
      <input type="file" name="image" onChange={handleFileChange} />
      <input type="submit" value="Upload" />
    </form>
                </Grid>
              </Grid>
            </Typography> */}
            {/* <Button
              variant="contained"
              onClick={createNews}
              color="primary"
              style={{ marginTop: "20px", marginLeft: "auto" , marginBottom : "2vh" }}
              disabled={loading}>
              {loading ? "Creating..." : "Create News"}
            </Button> */}
          </Box>
        </Modal>
        <div>
          {news.map((item, index) => (
              
            <div key={index} className="createdNewsCont">
              {user.role === "admin" ? (
                <button
                  className="deleteButton"
                  onClick={() => deleteNews(item._id)}>
                  Delete
                </button>
              ) : (
                <div className="showButtonss">
                  hahaha
                </div>
              )}
              <div className="createdNewsLittleCont">
                <p className="createdTitle">{item.title}</p>
                <p className="createdPara">{item.content}</p>
              </div>
              {item.image ? (
                <img
                  src={require(`../../Images/${item.image}`)}
                  alt={`News ${index + 1}`}
                  className="createdNewsImage"
                />
              ) : (<></>)}
            </div>
          ))}
        </div>
        <div className="firstCont">
          <div className="carousel1">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              showThumbs={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="carouselArrow2">
                    <FaArrowLeft fill="#fff" />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="carouselArrow">
                    <FaArrowRight fill="#fff" />
                  </button>
                )
              }>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`News ${index + 1}`}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <p className="textContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            sem ut tortor consequat ultricies id vel felis. Duis posuere tellus
            non finibus aliquam. enim. Nunc a tempor felis. Phasellus ut
            accumsan augue, eu posuere leo
          </p>
        </div>
        <div className="secondContain">
          <div className="carousel2">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              showThumbs={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="carouselArrow2">
                    <FaArrowLeft fill="#000" />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="carouselArrow">
                    <FaArrowRight fill="#000" />
                  </button>
                )
              }>
              {images2.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`News ${index + 1}`}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <p className="textContent2">
            Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            sem ut tortor consequat ultricies id vel felis. Duis posuere tellus
            non finibus aliquam. Donec volutpat metus enim. Nunc a tempor felis.
            Phasellus ut accumsan augue, eu posuere leo
          </p>
        </div>

        <div className="thirdContain">
          <img
            src={require("../../Images/zaisan.jpg")}
            alt="zaisan"
            className="thirdImage"
          />
          <p className="textContent3">
            Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            sem ut tortor consequat ultricies id vel felis. Duis posuere tellus
            non finibus aliquam. Donec volutpat metus sed mi faucibus, ut ornare
            ligula tempor. Donec dictum sem vel ex dignissim, placerat euismod
            massa fringilla. Pellentesque condimentum accumsan odio, vitae
            dictum quam ullamcorper nec. Maecenas eu interdum dui. Praesent nec
            imperdiet enim. Nunc a tempor felis. Phasellus ut accumsan augue, eu
            posuere leo
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
