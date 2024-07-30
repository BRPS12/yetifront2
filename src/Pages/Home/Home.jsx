import React from "react";
import PeopleImage from "../../Images/coffee.jpg";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import "./Home.css";
export const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div style={{padding : 0 , margin: 0}}>
      <Header
          backgroundImage={PeopleImage}
          title="Welcome to Yeti Educational Academy"
          isMounted={isMounted}
          buttonText="Register Now" 
          repeat="no-repeat"
          bgSize="cover"
        /> 
      <div className="sectionOne">
        <div className="sectionOneImageDiv">
          <img
            className="sectionOneImage"
            src={require("../../Images/YetiLogo.jpg")}
          />{" "}
        </div>
        <div className="sectionOneText">
          Манай боловсролын академи нь сайн дурын ажил хийсэн суралцагч
          болгондоо 50-100%-ийн хөнгөлөлттэй /тэтгэлэгтэй/ суралцах боломжийг
          олгодог. <br /> Мөн нийгмийн хариуцлагын хүрээнд 50%, 75%, 100%-ийн тэтгэлэг
          олгодог, гадаадад сурах хүсэлтэй хүн бүхэнд материалаа хэрхэн бэлдэх,
          анкет бөглөх, ярилцлагад бэлдэхэд тусалж, орчуулгын зөвлөгөөг ямар ч
          үнэ төлбөргүй өгдөг анхны сургалтын төв юм.
        </div>
      </div>

      <div className="sectionTwo">
          <h1 className="sectionTwoTitle2">
            Еэти-д нэгдэх час хийсэн 5 шалтгаан
          </h1>
          <div className="sectionTwoFirstContainer">
            <div className="sectionTwoItem">
              <div style={{display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column" , marginLeft : "-1.5vh"}}>
                <div className="sectionTwoItem2">
                  <h2 className="sectionTwotitle">Туршлага</h2>
                </div>
                <p className="outer-container">
                  <p className="bold-text">16 жилийн</p>
                  <p>туршлагтай хамт олноос зөвлөгөө авна</p>
                </p>
              </div>
              <div className="sectionTwoLittleContainer">
                <div className="sectionTwoinner-container">
                  <h2 className="sectionTwotitle">Тайлан</h2>
                </div>
                <p className="sarBolgon">
                  Сар болгон
                  <p className="sarBolgon" style={{marginTop : "0.5vh"}}>ирц, явцын тайлан</p>
                  <p>мэйлээр илгээгдэнэ</p>
                </p>
              </div>
              <div className="tsogtsBaidalCont">
                <div className="tsogtsBaidalInnerCont">
                  <h2 className="sectionTwotitle">Цогц байдал</h2>
                </div>

                <p className="mentorShip">
                  Англи хэл+ Mentorship=
                  <h2 className="mentorShipText">Нэг дор</h2>
                </p>
              </div>
            </div>
            <div className="shalgaltinTovHuvaahCont">
              <div className="shalgaltinTovInnerCont">
                <div className="shalgaltinTovInnerInnerCont">
                  <h2 className="sectionTwotitle">Шалгалтын төв</h2>
                </div>
                <p className="dassanGazraa">
                  Дассан газраа
                  <p className="TOEFL">TOEFL</p>
                  <p>шалгалтыг өгөх боломж</p>
                </p>
              </div>

              <div className="pocketCont">
                <div className="pocketContRow">
                  <h2 className="sectionTwotitle">Хувааж төлөх</h2>
                </div>
                <p className="huvaajTuluhTextAlign">
                  Pocket app-г ашиглан 2-6 хуваан
                  <p>төлбөрөө төлөх боломжтой</p>
                </p>
              </div>
            </div>
          </div>
        </div> 
       <div className="uusgenBaigulagchCont">
          <p className="uusgenBaigulagchInnerCont">
            Манай үүсгэн байгуулагч нар
            <hr className="hrUusgen" />
          </p>
          <div className="uusgenBaigulagchRow">
            <div className="uusgenBaigulagchCol">
              <img
                className="uusgenBaigulagchColImage"
                src={require("../../Images/Shureebagsh2.jpg")}
              />
              <p className="uusgenBaigulagchColParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                in sem ut tortor consequat ultricies id vel felis. Duis posuere
                tellus non finibus aliquam. Donec tempor felis. Phasellus ut accumsan augue, eu posuere leo.
              </p>
            </div>
            <div className="uusgenBaigulagchCol2">
              <img
                className="uusgenBaigulagchColImage"
                src={require("../../Images/sanukaegc.jpg")}
              />
              <p className="uusgenBaigulagchColParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                in sem ut tortor consequat ultricies id vel felis. Duis posuere
                Donec volutpat metus sed mi tempor felis. Phasellus ut accumsan augue, eu posuere leo.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="sectionThreeCont">
          <div className="sectionThreeInnerCont1">
            <p className="sectionThreeInnerContText">
              Zuger engiiin bagsh shaviin hariiltsaatai bsihbid nar
            </p>
          </div>
          <div className="sectionThreeInnerCont">
            <p className="sectionThreeInnerContText">
              Zuger engiiin bagsh shaviin hariiltsaatai bsihbid nar
            </p>
          </div>
          <div className="sectionThreeInnerCont">
            <p className="sectionThreeInnerContText">
              Zuger engiiin bagsh shaviin hariiltsaatai bsihbid nar
            </p>
          </div>
        </div> */}
        
        <div className="sectionFourCont">
          <div className="sectionFourContText">
            <h1 className="sectionFourContParagraph">
              Бидний философи <br />
              Юнеско-оос зарласан “Дэлхийн иргэний боловсрол”-ыг Монгол хүүхэд,
              залууст олгоно.
            </h1>

            <img
              alt=""
              src={require("../../Images/YetiLogo.jpg")}
              className="sectionFourContImage"
            />
          </div>
        </div>
        <Footer />
    </div>
  );
};
