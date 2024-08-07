import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import courseImage from "../../Images/Computer.jpg";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { instance } from "../../App";
import "./Course3.css";

export const Course3 = () => {
  const user_id = window.localStorage.getItem("user_id");
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState([]);
  const [courses, setCourses] = useState([]);
  const [editingCourseIndex, setEditingCourseIndex] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  const getUser = async () => {
    try {
      const res = await instance.get(`/users/${user_id}`);
      setUser(res.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  const getCourse3 = async () => {
    try {
      const res = await instance.get("/courses/3");
      setCourses(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  const handleEdit = (index) => {
    setEditingCourseIndex(index);
    setEditedContent(courses[index].content); // Load current content into the editor
  };

  const handleUpdate = async (index) => {
    const updatedContent = {
      content: editedContent,
    };
    try {
      await instance.put(`/courses/${courses[index]._id}`, updatedContent); // Use course ID if applicable
      setEditingCourseIndex(null); 
      getCourse3(); // Refresh the course data
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingCourseIndex(null); 
  };

  useEffect(() => {
    setIsMounted(true);
    getUser();
    getCourse3()
  }, []);

  return (
    <div className="course-container">
      <Header
        backgroundImage={courseImage}
        title="Ерөнхий англи хэл"
        isMounted={isMounted}
        repeat="no-repeat"
        bgSize="cover"
      />
      <div className="course-content">
        <div className="course-title">
          <p>Америкийн ЕБС-н хичээлийн хөтөлбөр+ IELTS, TOEFL суурь</p>
        </div>

        <div className="course-info">
          {courses.map((course, index) => (
            <div>
            {editingCourseIndex === index ? (
              <div className = "info-box">
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  rows={5}
                  cols={50}
                  className="editTextArea3"
                />
                  <button onClick={() => handleUpdate(index)} className="saveButton">Update</button>
                  <button onClick={handleCancelEdit} className="saveButton">Cancel</button>
              </div>
            ) : (
              <div className="info-box" style={{marginBottom : "2vh"}}>
                {course.content.split("\n").map((item, idx) => (
                  <p key={idx} style={{ marginBottom: "1vh" , marginTop: "1vh"}}>
                    {item.trim()}
                  </p>
                ))}
                {user.role === "admin" && (
                  <button onClick={() => handleEdit(index)} className="editButton">Edit Course</button>
                )}
              </div>
            )}
            </div>
          )
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
};