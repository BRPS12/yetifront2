import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import benefitsImage from "../../Images/cover2.jpg";
import { Footer } from "../../components/Footer";
import "./Benefits.css";
import { instance } from "../../App";
import { Modal, Box, Typography, IconButton } from "@mui/material"; // Import MUI components
import ClearIcon from "@mui/icons-material/Clear"; // Import ClearIcon

export const Benefits = () => {
  const user_id = localStorage.getItem("user_id");
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [benefits, setBenefits] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [benefitTitle, setBenefitTitle] = useState("");
  const [benefitContent, setBenefitContent] = useState("");

  const getUser = async () => {
    try {
      const res = await instance.get(`/users/${user_id}`);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBenefits = async () => {
    try {
      const response = await instance.get("/benefits");
      setBenefits(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBenefits = async (id) => {
    try {
      await instance.delete(`/benefits/${id}`);
      getAllBenefits();
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
    // Clear input fields when opening modal
    setBenefitTitle("");
    setBenefitContent("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const res = await instance.post("/benefits/createBenefit", {
        title: benefitTitle,
        content: benefitContent,
      });
      setBenefits([...benefits, res.data.data]);
      handleModal(); // Close the modal after submitting
      console.log(res);
    } catch (error) {
      console.error("Error creating benefit:", error);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    getUser();
    getAllBenefits();
  }, []);

  return (
    <>
      <Header
        backgroundImage={benefitsImage}
        title="Benefits"
        isMounted={isMounted}
        repeat="no-repeat"
        bgSize="cover"
      />
      <div className="benCont">
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "Georgia",
            marginTop: "30px",
          }}
        >
          Our Benefits
        </h2>
        {user?.role === "admin" && (
          <button className="createButtonBenefits" onClick={handleModal}>Add</button>
        )}

        {benefits.map((el) => (
          <div key={el._id}>
            <div className="cardB">
              <p className="titleBenefit">{el.title}</p>
              <p
                className="contentBenefit"
                dangerouslySetInnerHTML={{
                  __html: el.content.replace(/\n/g, "<br>"),
                }}
              />
              {user?.role === "admin" && (
                <div>
                  <button className="deleteBenefit" onClick={() => deleteBenefits(el._id)}>Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Modal for Creating Benefits */}
        <Modal
          open={isModalOpen}
          onClose={handleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
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
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", marginTop: "1vh" }}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ fontFamily: "Georgia", fontWeight: "bold" }}
              >
                Add Benefit
              </Typography>
              <IconButton onClick={handleModal} style={{ marginLeft: "auto" }}>
                <ClearIcon />
              </IconButton>
            </div>
            <form onSubmit={handleSubmit} className="news-form">
              <div className="form-group">
                <label htmlFor="benefit-title">Benefit Title:</label>
                <input
                  type="text"
                  id="benefit-title"
                  placeholder="Enter benefit title"
                  value={benefitTitle}
                  onChange={(e) => setBenefitTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="benefit-content">Benefit Content:</label>
                <textarea
                  id="benefit-content"
                  placeholder="Enter benefit content"
                  value={benefitContent}
                  onChange={(e) => setBenefitContent(e.target.value)}
                  required
                  rows={5}
                />
              </div>
              <button type="submit" className="saveBenefit">
                Create Benefit
              </button>
            </form>
          </Box>
        </Modal>
      </div>
      <Footer />
    </>
  );
};
