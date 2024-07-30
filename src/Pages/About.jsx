import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import PersonImage from "../Images/5.jpg";
import { Footer } from "../components/Footer";
import "./About.css";
export const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="aboutBigCont">
      <Header
        backgroundImage={PersonImage}
        title="About Yeti"
        isMounted={isMounted}
        repeat="no-repeat"
        bgSize="cover"
      />
      <div class="about-founder-container">
        <p class="about-founder-text">
          -Боловсролын Тэргүүний Ажилтан Санжаагончигийн Гомбодорж,
            {" "}
            Боловсролын Тэргүүний Ажилтан, Чингис Хааны Дэлхийн Академийн
            жинхэнэ гишүүн, Залуу Үеийг Халамжлан Хүмүүжүүлэгч цол тэмдэгтэн
            Янживын Одонгэрэлийн санаачилгаар,
          <p class="about-founder-subtext">
            -Имэкс Корпорейшн ХХК-ийн захирал Гомбодоржийн Буяндэлгэрийн
            100%-ийн хөрөнгө оруулалттайгаар байгуулагдаж, одоог хүртэл
            Гомбодоржийн Шүр-Эрдэнийн удирдлага дор үйл ажиллагаагаа явуулж
            байгаа билээ.
          </p>
        </p>
        <img
          alt=""
          src={require("../Images/YetiLogo.jpg")}
          class="about-founder-image"
        />
      </div>
      <div class="about-activity-container">
        <div class="about-activity-image-container">
          <img
            alt=""
            src={require("../Images/Students.png")}
            class="about-activity-image"
          />
        </div>
        <div class="about-activity-text-container">
          <h1 class="about-activity-title">Үйл ажиллагааны тойм</h1>
          <p class="about-activity-year">2008</p>
          <p class="about-activity-description">
            АНУ-н их дээд сургуулиудад 50-100%ийн тэтгэлэгтэй суралцах тухай
            Боловсролын өдөрлөгийг зохион байгуулсан.
          </p>
        </div>
      </div>
      <div class="about-container">
        <div class="about-content">
          <img
            alt=""
            src={require("../Images/Students2.png")}
            class="about-image"
          />
          <hr />
          <div class="about-timeline">
            <h2 class="about-timeline-item">
              <p>2009</p>
              <hr />
              <p className="about-timeline-paragraph">
                Анхны TOEFL ITP оноо амласан сургалтыг амжилттай зохион
                байгуулсан.
              </p>
            </h2>
            <h2 class="about-timeline-item">
              2010
              <hr />
              <p className="about-timeline-paragraph">
                Нийт 100 хүний бүрэлдэхүүнтэй “Ардын хувьсгалын 89 жилийн ой”-г
                угтсан сайн дурын ажил зохион байгуулсан.
              </p>
            </h2>
            <h2 class="about-timeline-item">
              2011
              <hr />
              <p className="about-timeline-paragraph">
                Оны шилдэг сайн үйлсийн аянд ЗАЙСАН ТОЛГОЙ-г цэвэрлэж нэр
                дэвшссэн .
              </p>
            </h2>
            <h2 class="about-timeline-item">
              2011-2015
              <hr />
              <p className="about-timeline-paragraph">
                Сургалтанд хамрагдаж байсан бүх суралцагчиддаа тэтгэлэгт
                зуучиллалын нэмэлт төлбөргүйгээр бэлдсэн. Анхны TOEFL ITP оноо
                амласан сургалтыг амжилттай зохион байгуулсан.
              </p>
            </h2>
          </div>
        </div>
      </div>

      <div class="activity-section">
  <div class="image-block">
    <div class="circle yellow-circle"></div>
    <div class="circle blue-circle"></div>
    <div class="circle red-circle"></div>
  </div>
  <div class="text-block">
    <h1 class="titleUil">Үйл ажиллагааны тойм</h1>
    <p class="descriptionOfUil">
      2016- 2021 он
      <p class="sub-description">
        Туркийн элчин сайдын эхнэрийн зохиосон бүхий л сайн дурын үйл
        ажиллагаанд сайн дурын ажилтнуудыг бэлтгэн оролцсон.
      </p>
      <hr class="divider"></hr>
    </p>
    <p class="descriptionOfUil">
      2017 оноос өдийг хүртэл
      <p class="sub-description">
        Вэлүү сан , Бадамлянхуа асрамжийн газар, бусад нийгэмд үйлчилдэг
        олон улсын байгууллагын хүсэлтээр болон эцэг эх нарын
        зөвшөөрсөнөөр сайн дурын үйл ажиллагаанд арван жилийн сурагчдыг
        бэлтгэн дэмжин оролцдог.
      </p>
    </p>
  </div>
</div>

<div class="experience-section">
<div class="image-container">
    <img
      alt=""
      src={require("../Images/ShureeBagsh.png")}
      class="shureeBagshImage1"
    />
  </div>
  <div class="text-container">
    <div class="experience-block">
      <p class="year">2021 он</p>
      <p class="descriptionofExp">
        1 сарын 15 наас 2021 оны 5 сарын 15 хүртэл Монгол улсын хилийн
        заставт алба хааж байгаа албан хаагчдад анхан шатнаас ахисан шат
        хүртэл англи хэлний цахим хичээлийг ямар ч үнэ төлбөргүйгээр
        зохион байгуулсан.
      </p>
      {/* <hr class="divider"></hr> */}
    </div>
{/* 
    <div class="experience-block">
      <p class="year">2021 он</p>
      <p class="descriptionofExp">
        1 сарын 15 наас 2021 оны 5 сарын 15 хүртэл Монгол улсын хилийн
        заставт алба хааж байгаа албан хаагчдад анхан шатнаас ахисан шат
        хүртэл англи хэлний цахим хичээлийг ямар ч үнэ төлбөргүйгээр
        зохион байгуулсан.
      </p>
    </div> */}
  </div>
</div>


<div className="songofabout-container">
  <hr />
  <div className="songofabout-row">
    <div className="songofabout-col-left">
      <p className="songofabout-year">2021 он</p>
      <p className="songofabout-description">
        5 сарын 1 нээс 6 сарын 1 хүртэл 5-21 насны хүүхэд залуусын дунд
        “Миний дуртай дүр”, “Миний дуртай дүр” эсээний уралдаан зохион
        байгуулж буй нийт бүх тэмцээний эхний 3 байрны ялагчид 3-10 сар
        үргэлжлэх сургалтанд суух эрх болон гарын бэлгээр шагнагдсан.
      </p>
    </div>
    <div className="songofabout-col-right">
      <img
        alt=""
        src={require("../Images/information1.png")}
        className="songofabout-image"
      />
    </div>
  </div>
  <hr />
  <div className="songofabout-row2">
    <div className="songofabout-col-lef2">
      <img
        alt=""
        src={require("../Images/information2.png")}
        className="songofabout-image2"
      />
    </div>
    <div className="songofabout-col-right2">
      <p className="songofabout-year2">2021 он</p>
      <p className="songofabout-description2">
        6 сарын 15 - 8 сарын 15-ы хооронд Монгол анх удаа “Мянган
        инээмсэглэл“ нэртэйгээр нийт 1000 хүүхдийг TOEFL ITP, Ерөнхий
        англи хэл, Математик, Физик, Хятад хэл ,Түрк хэл, Уран зураг ,
        Балет , Гитар, Калиграф болон Видео засварлах гэсэн хичээлүүдийг
        зохион байгуулж боловсролын салбарт 50,000,000 төгрөгний хөрөнгө
        оруулалтыг хийсэн.
      </p>
    </div>
  </div>
  <hr />
</div>


<div className="compitition-container">
  <div className="compitition-header">
    <p className="compitition-year">2021 он</p>
    <p className="compitition-description">
      Монгол даяар нийт 12 аймгийн 45 багшийг “ Үндэсний сургагч багш “
      TOEFL ITP шалгалт авах, заах эрх өгөх, бэлтгэх сургалтыг зохион
      байгуулж үүнээс 12 багш олон улсын шалгалт авах төвийг нээн хамтарч
      ажиллах төслийг хэрэгжүүлэн үргэлжлүүлэн ажиллаж байна.
    </p>
  </div>
  <div className="compitition-images">
    <img
      alt=""
      src={require("../Images/duu1.jpg")}
      className="compitition-image"
    />
    <img
      alt=""
      src={require("../Images/duu2.jpg")}
      className="compitition-image"
    />
    <img
      alt=""
      src={require("../Images/duu3.jpg")}
      className="compitition-image"
    />
  </div>
  <div className="compitition-footer">
    <p className="compitition-year">2022 он</p>
    <p className="compitition-description">
      “Англи дууг хэн сайн дуулах вэ” Cover дууны уралдаан заралж эхний 3
      байрандаа сургалтанд суух 1 жилийн эрх, 1.000.000, 500.000 ба
      300.000 төгрөгний хадгаламж нээх эрх олгосон. Мөн шилдэг 15
      дуучиддаа сарын сургалтанд суух эрхээр шагнасан /Мидвэй Эвэнт төв
      үйл ажиллагааны зардал 15.000.000-г ивээн тэтгэсэн
    </p>
  </div>
</div>
      <Footer />
    </div>
  );
};
