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

  const getUser = async () => {
    const res = await instance.get(`/users/${user_id}`);
    setUser(res.data.data);
  };
  useEffect(() => {
    setIsMounted(true);
    getUser();
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
        <div className="addButtonCont">
      {user.role === "admin" ? <button class="course3Add">Add</button> : <></>}
      </div>
      <div className="course-content">
        <div className="course-title">
          <p>Америкийн ЕБС-н хичээлийн хөтөлбөр+ IELTS, TOEFL суурь</p>
        </div>
        <div className="course-info">
          <div className="info-box" style={{marginTop : "2vh" , marginLeft : 0}}>
            <p style={{marginTop : "3vh"}}>
              👏Ерөнхий англи хэлний анги нь 7 хоногт 3 удаа хичээллэнэ.
              Хичээл нь Мягмар, Пүрэв болон Бямба гаригуудад 10:00-11:30,
              14:00-15:30 цагийн хооронд. Ерөнхий англи хэлний ангид
              бүртгүүлснээр:
            </p>
            <p> 1. Сар бүр сурагчид жишиг тест хийж ахицаа харах</p>
            <p> 2. 16 жилийн туршлагатай багш заана</p>
            <p style={{ marginBottom : "3vh"}}>
              3. Сар болгон сурагчийн сурлагын тайланг асран хамгаалагчид
              мэйлээр илгээх
            </p>
          </div>
          <div className="info-box" style={{marginTop : "2vh" , marginBottom : "2vh"}}>
            <div className=" academy-info">
              <p>Youth Educational Training Academy</p>
            </div>
            <p>
              {" "}
              <p>4. Цахимаар хичээлд суух </p>
              <p>5. Давтлагад суух</p> <p>6. Спорт зааланд тоглох </p>
              <p>
                7. 11-р ангиасаа Study Abroad хөтөлбөрт шууд хамрагдах гэсэн
                боломжуудтай.
              </p>
              Төлбөр нийт 2.200.000 бөгөөд Pocket app-аар 3-6 хуваан төлөх
              боломжтой
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};