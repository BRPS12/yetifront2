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

  const getUser = async () => {
    const res = await instance.get(`/users/${user_id}`);
    setUser(res.data.data);
  };
  useEffect(() => {
    setIsMounted(true);
    getUser();
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
      <div className="addButtonCont">
      {user.role === "admin" ? <button class="course2Add">Add</button> : <></>}
      </div>
      <div className="container">
      <div className="margin-bottom">
        <p className="header">IELTS, TOEFL IBT & ITP, SAT, Duolingo бэлдэх+тэтгэлгийн зөвлөгөө, чиглүүлэг</p>
      </div>
      <div className="card">
        <div className="card-content">
          <p>Хөтөлбөр нийт 2 жил үргэлжилнэ.</p>
          <p>🚀 Ерөнхий англи хэлний мэдлэг сэргээх /давтах/</p>
          <p>Нийтлэг гардаг 26 дүрмийн алдаа /Залуучуудын Боловсрол Судлалын төв ТББ-н эрхлэн гаргасан гарын авлагаар хангана/</p>
          <p>🚀 Америкийн 7,8,9,10,11,12 дугаар ангид уншиж судалдаг сэдвүүдийг түүвэрлэн бэлдсэн хөтөлбөр /хөгжөөнт дасгал, танин мэдэхүйн асуултуудтай/</p>
          <p>🚀 TOEFL шалгалтын ярих, сонсох унших хичээлийн хөтөлбөр </p>
          <p>Longman, Delta, болон Peterson & Еэти Боловсролын Академийн эрхлэн гаргасан ном гарын авлага болон TOEFL ITP & IBT , IELTS, SAT, Duolingo ЖИШИГ шалгалт /Бямба гариг болгон/</p>
          <p style={{ fontWeight: "bold" }}>(Нууц мэдээлэл)</p>
          <p>
            Хөтөлбөрийн төлбөрт TOEFL ITP эсвэл Duolingo шалгалтын төлбөр багтсан болно.
            <p>/TOEFL ITP болон Duolingo шалгалтаас аль нэгийг сонгоно/</p>
          </p>
        </div>
      </div>
      <div className="flex-container">
        <div className="small-card">
          <div className="small-card-content">
            <p>📈 Визний болон тэтгэлгийн ярилцлагын зөвлөгөө </p>
            <p>📈 Стандартад нийцсэн тодорхойлох захиа бичих зөвлөгөө</p>
            <p>📈 CV бичих зөвлөгөө</p>
            <p>📈 Бямба гариг бүр SAT клуб</p>
            <p>📈 Спорт зааланд тоглох боломж</p>
          </div>
        </div>
        <div className="small-card">
          <div className="small-card-content">
            <p>💡 7 хоногт 3 удаа Англи хэлний олон улсын шалгалтанд бэлдэх сургалт /IELTS,TOEFL ITP, TOEFL IBT, SAT, DUOLINGO/</p>
            <p>💡 Хөтөлбөрийн хүрээнд 7 хоног бүр IELTS&TOEFL жишиг шалгалт авна</p>
            <p>💡 Сайн дурын үйл ажиллагаанд оролцох боломж</p>
            <p>💡 Их сургууль, тэтгэлгийн эсээнүүд бичих зөвлөгөө</p>
            <p>💡 Баталгаат орчуулга</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};