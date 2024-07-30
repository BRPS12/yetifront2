import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import courseImage from "../../Images/mentornship.jpg";
import { Footer } from "../../components/Footer";
import "./Course1.css";
import { instance } from "../../App";
export const Course1 = () => {
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
    <div className="fontFamily">
      <Header
        backgroundImage={courseImage}
        title="Mentorship Program"
        isMounted={isMounted}
        repeat="no-repeat"
        bgSize="cover"
      />
      <div className="addButtonCont">
      {user.role === "admin" ? <button class="course1Add">Add</button> : <></>}
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
      <Footer />
    </div>
  );
};
