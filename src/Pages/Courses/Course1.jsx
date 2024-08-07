import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import courseImage from "../../Images/mentornship.jpg";
import { Footer } from "../../components/Footer";
import "./Course1.css";
import { instance } from "../../App";

export const Course1 = () => {
  const user_id = window.localStorage.getItem("user_id");
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // Track which course is being edited

  // Fetch user data
  const getUser = async () => {
    try {
      const res = await instance.get(`/users/${user_id}`);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch course data
  const getCourse1 = async () => {
    try {
      const res = await instance.get("/courses/1");
      setCourses(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Handle change in textarea
  const handleChange = (e, index) => {
    const updatedCourses = [...courses];
    updatedCourses[index].content = e.target.value; // Update the content of the specific course
    setCourses(updatedCourses); // Update state
  };

  // Handle edit toggle
  const handleEditToggle = (index) => {
    setEditingIndex(index === editingIndex ? null : index); // Toggle editing for the specific course
  };

  // Handle content submission
  const handleSubmit = async (id) => {
    try {
      const res = await instance.put(`/courses/${id}`, {
        content: courses[editingIndex].content, // Use the updated content
      });
      console.log(res);
      setEditingIndex(null); // Exit editing mode
      getCourse1(); // Re-fetch to get the latest data
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    getUser();
    getCourse1();
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

      <div className="addButtonCont"></div>
      <div className="background">
        <div className="firstContainer">
          <p className="course1Title">
            Хэлний оноотой залууст тэтгэлгийн зөвлөгөө, чиглүүлэг өгнө.
          </p>
        </div>
        <div className="firstRow">
          <div className="gridContainer">
            {courses.map((course, index) => (
              <div key={course._id} className="saveContain">
                {editingIndex === index ? (
                  <div className="contForText">
                    <textarea
                      value={course.content}
                      onChange={(e) => handleChange(e, index)}
                      className="editTextArea"
                      rows={5}
                    />
                    <button
                      onClick={() => handleSubmit(course._id)}
                      className="saveButton">
                      Save
                    </button>
                    <button
                      onClick={() => handleEditToggle(index)}
                      className="saveButton">
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="contForText">
                    <p
                      className="firstParagraph"
                      dangerouslySetInnerHTML={{
                        __html: course.content.replace(/\n/g, "<br>"),
                      }}
                    />
                    {user.role === "admin" && (
                      <button
                        onClick={() => handleEditToggle(index)}
                        className="editButton">
                        Edit
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
            <img
              src={require("../../Images/Shureebagsh3.jpg")}
              alt=""
              className="image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
