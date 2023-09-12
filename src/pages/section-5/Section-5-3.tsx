import { styled } from "styled-components";
import Subtitle from "../../components/SubTitle";
import Button from "../../components/Button";
import DisplaySwiper from "../../components/Swiper";
import { motion } from "framer-motion";

const Section53 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://hotpot-8c321.web.app/");
    num === 2 && window.open("https://github.com/innerstella/hotpot_dict");
    num === 3 &&
      window.open(
        "https://inner-stella.tistory.com/entry/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%ED%95%98%EC%9D%B4%EB%94%94%EB%9D%BC%EC%98%A4-%ED%9B%A0%EA%B6%88-%EC%86%8C%EC%8A%A4-%EB%B0%B1%EA%B3%BC%EC%82%AC%EC%A0%84"
      );
  };
  return (
    <>
      <ExpContainer>
        <div>
          <p className="title-text up">훠궈 소스 백과사전</p>
          <div className="title-box">
            <Button type={1} onClick={() => onClick(1)} />
            <Button type={2} onClick={() => onClick(2)} />
            <Button type={3} onClick={() => onClick(3)} />
          </div>
          <div className="info-container">
            <div>
              <div className="info-box">
                <div className="info-col">
                  <p className="section-p">period</p>
                  <p className="section-p">team</p>
                  <p className="section-p">tech</p>
                </div>
                <div className="info-col">
                  <p className="section-p-light">22.04 ~ 22.10</p>
                  <p className="section-p-light">1인 프로젝트</p>
                  <p className="section-p-light">
                    React, JavaScript, Styled-Components
                  </p>
                </div>
              </div>
              <p className="section-p-light">
                일 평균 200명의 유저가 사용하는 훠궈 소스 레시피들을 모아서
                보여주는 서비스
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ zIndex: "10" }}
              onClick={() => onClick(1)}
              className="pointer"
            >
              <DisplaySwiper type={4} />
            </motion.div>{" "}
          </div>
          <div className="margin"></div>
          <div style={{ marginTop: "-50rem" }}>
            <div className="btns">
              <Subtitle content="Version 2.0" />
            </div>
            <li className="section-p-light line-gap ">
              React 리팩터링을 통해 컴포넌트의 재사용성을 높임
            </li>
            <li className="section-p-light line-gap ">
              Google Cloud Firestore를 사용하여 데이터 관리
            </li>
            <li className="section-p-light line-gap ">
              유저가 레시피를 검색하여 찾아볼 수 있는 검색 기능 개발
            </li>
            <li className="section-p-light line-gap ">
              사용성 향상을 위한 UI 개선
            </li>
            <div className="margin"></div>
            <div className="btns">
              <Subtitle content="Version 1.0" />
            </div>
            <li className="section-p-light line-gap ">
              레시피를 모아볼 수 있는 기능과 키워드 별로 볼 수 있는 기능 개발
            </li>
            <li className="section-p-light line-gap ">HTML5 위주 하드 코딩 </li>
          </div>
        </div>
      </ExpContainer>
      {/* <motion.img
        src="/assets/svg/circle-red.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "8350px",
          left: "-5rem",
          zIndex: 1,
          width: "13rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-pink.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "8340px",
          left: "5rem",
          zIndex: 1,
          width: "7rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-pink.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "8540px",
          left: "55rem",
          zIndex: 0,
          width: "7rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-red.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "8800px",
          left: "81rem",
          zIndex: 1,
          width: "5rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-pink.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "9100px",
          left: "73rem",
          zIndex: 0,
          width: "10rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-red.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "9170px",
          left: "70rem",
          zIndex: 0,
          width: "5rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      /> */}
    </>
  );
};

export default Section53;

const ExpContainer = styled.div`
  .up {
    z-index: 10;
  }
  .margin {
    height: 4rem;
  }
  .line-gap {
    padding-bottom: 1rem;
  }
  .btns {
    display: flex;
    gap: 1rem;
  }
  .title-text {
    color: #fff;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 2rem;
  }
  .title-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
  }
  .info-container {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    justify-content: space-between;
    .info-box {
      display: flex;
      flex-direction: row;
      padding-top: 2rem;
      padding-bottom: 3rem;
      gap: 2rem;
      .info-col {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
