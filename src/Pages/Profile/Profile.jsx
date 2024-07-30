import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../App.jsx";
import {
  TextField,
  Button,
  Grid,
  Container,
  Modal,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "./Profile.css";
import { Footer } from "../../components/Footer";

const Profile = () => {
  const user_id = window.localStorage.getItem("user_id");
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const getUser = async () => {
    const response = await instance.get(`/users/${user_id}`);
    setUser(response.data.data);
    console.log(response);
  };
  const handleEdit = () => {
    setEditing(true);
  };
  const handleClose = () => {
    setEditing(false);
  };
  const logOut = () => {
    window.localStorage.removeItem("user_id")
    window.location.replace("/")
  }
  const updateUser = async () => {
    setLoading(true);
    await instance.put(`/users/${user_id}`, {
      name: name,
      age: age,
      password: password,
    });
    setLoading(false);
    setUser({ ...user, name, age, password });
  };
  useEffect(() => {
    getUser();
  }, [user_id]);
  useEffect(() => {
    const getImage = async () => {
      try {
        // Simulating image data fetch or processing
        const imageChunks = [
          Buffer.from([0, 1, 2]), // Replace with your actual image data
          Buffer.from([100, 101, 102]), // Replace with your actual image data
        ];
  
        // Concatenate buffers into a single buffer
        const concatenatedBuffer = Buffer.concat(imageChunks);
  
        // Convert buffer to base64
        const base64Image = `data:image/png;base64,${concatenatedBuffer.toString('base64')}`;
  
        // Update state with base64 image
        setProfileImage(base64Image);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    };
  
    // Call the getImage function
    getImage();
  }, []);
  
  return (
    <div>
      <header
        className = "profile-header">
        <div
              className="header-logo-cont"
>
              <img
                className="header-yeti-logo"

                src={require("../../Images/YetiLogo.jpg")}
                alt="Yeti Logo"
              />
              <div className = "header-yeti-logo-text" >
                <div>Yeti Educational</div>
                <div>Academy</div>
              </div>
            </div>
        <div className="buttoncontainer">
          <Link to="/" className="link-button">
            Home
          </Link>
          <Link to="/news" className="link-button">
            News
          </Link>
          <Link to="/about" className="link-button">
            About
          </Link>
          <Link to="/contactus" className="link-button">
            Contact Us
          </Link>
        </div>
        <div
          className="user-profile-cont">
          <img
            src={user.profile}
            className="user-profile"
          />
        </div>
      </header>
      <hr/>
      <div className="profile-body">
      <div className="profile-info">
        <div className="profile-info-container">
          <p className="profile-name">{user.name}</p>
          <p className="profile-email">Email: {user.email}</p>
          <p className="profile-age">Age: {user.age}</p>
          <p className="profile-role">Role: {user.role}</p>
          <hr className="profile-hr" />
        </div>
      </div>
      <hr className="profile-divider" />
      <div className="profile-picture-container">
        <div className="profile-picture">
          <img src={user.profile} alt="Profile Picture" className="profile-picture-picture"/>
          <p className="profile-picture-name">{user.name}</p>
          <button className="edit-profile-button" onClick={handleEdit}>
            Edit Profile
          </button>
          <button className="log-out-button" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>



      <Modal
        open={editing}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 370,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: "20px",
            height: 410,
          }}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontFamily: "Georgia" }}>
              Edit Profile
            </Typography>
            <IconButton
              onClick={handleClose}
              style={{ display: "flex", marginLeft: "auto" }}>
              <ClearIcon />
            </IconButton>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  type="number"
                  label="Age"
                  variant="outlined"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Typography>
          <Button
            variant="contained"
            onClick={updateUser}
            color="primary"
            style={{ marginTop: "25px", marginLeft: "auto" }}
            disabled={loading} 
          >
            {loading? "Saving..." : "Save Changes"}
          </Button>
        </Box>
      </Modal>
      <Footer />
    </div>
  );
};
export default Profile