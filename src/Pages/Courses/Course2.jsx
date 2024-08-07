import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import courseImage from "../../Images/Students.png";
import { Footer } from "../../components/Footer";
import { instance } from "../../App";
import './Course2.css';

export const Course2 = () => {
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
  };

  const getCourse2 = async () => {
    try {
      const res = await instance.get("/courses/2");
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
      getCourse2(); // Refresh the course data
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
    getCourse2();
  }, []);

  return (
    <div>
      <Header
        backgroundImage={courseImage}
        title="Study Abroad Program"
        isMounted={isMounted}
        repeat="no-repeat"
        bgSize="cover"
      />
      <div className="container">
        <div className="margin-bottom">
          <p className="header">IELTS, TOEFL IBT & ITP, SAT, Duolingo бэлдэх+тэтгэлгийн зөвлөгөө, чиглүүлэг</p>
        </div>
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              {editingCourseIndex === index ? (
                <div className= "textareacont">
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    rows={5}
                    cols={50}
                    className="editTextArea2"
                  />
                    <button onClick={() => handleUpdate(index)} className="saveButton">Update</button>
                    <button onClick={handleCancelEdit} className="saveButton">Cancel</button>
                </div>
              ) : (
                <div>
                  {course.content.split("\n").map((item, idx) => (
                    <p key={idx} style={{ marginBottom: "1rem" }}>
                      {item.trim()}
                    </p>
                  ))}
                  {user.role === "admin" && (
                    <button onClick={() => handleEdit(index)} className="editButton">Edit Course</button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
