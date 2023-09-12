import { styled } from "styled-components";
import Subtitle from "../../components/SubTitle";
import Button from "../../components/Button";
import DisplaySwiper from "../../components/Swiper";
import { motion } from "framer-motion";

const Section52 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://twitter-michelin.web.app/");
    num === 2 &&
      window.open("https://github.com/innerstella/new-twitter-michelin");
    num === 3 &&
      window.open("https://github.com/innerstella/new-twitter-michelin"); // 개발일지 쓰고 교체
    num === 4 && window.open("https://github.com/innerstella/FME");
    num === 5 &&
      window.open(
        "https://inner-stella.tistory.com/entry/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%EA%B9%8C%EC%A7%80%EB%8A%94-%EC%95%84%EB%8B%8C-%EB%A7%9B%EC%A7%91%EA%B2%80%EC%83%89%EA%B8%B0-%EC%BD%94%EB%93%9C-%EC%88%98%EC%A0%95"
      );
    num === 6 &&
      window.open(
        "https://inner-stella.tistory.com/entry/%ED%8A%B8%EC%9C%84%ED%84%B0-%EB%A7%9B%EC%A7%91-%EA%B2%80%EC%83%89%EA%B8%B0-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80"
      );
  };
  return (
    <>
      <ExpContainer>
        <p className="title-text up">맛집 검색기</p>
        <div className="title-box">
          <Button type={1} onClick={() => onClick(1)} />
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
                <p className="section-p-light">22.12 ~ 23.03</p>
                <p className="section-p-light">1인 프로젝트</p>
                <p className="section-p-light">
                  React, TypeScript, Styled-Components
                </p>
              </div>
            </div>
            <p className="section-p-light content">
              일 평균 5000명의 유저가 사용하는 아이돌 맛집 해시태그 기반으로
              검색창에 장소/메뉴를 입력하면 해당 장소/메뉴에 대한 맛집에 대해
              작성한 트윗들을 모아서 보여주는 서비스
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ zIndex: "10" }}
            onClick={() => onClick(1)}
            className="pointer"
          >
            <DisplaySwiper type={3} />
          </motion.div>
        </div>
        <div className="margin"></div>
        <div className="flex-row">
          <div>
            <div className="btns">
              <Subtitle content="Version 2.0" />
              <Button type={2} onClick={() => onClick(2)} />
              <Button type={3} onClick={() => onClick(3)} />
            </div>
            <li className="section-p-light line-gap ">
              재사용성과 유지보수성 향상을 위한 TypeScript, React 리팩터링
            </li>
            <li className="section-p-light line-gap ">
              사용성 향상을 위한 UI 개선
            </li>
            <div className="margin"></div>
            <div className="btns">
              <Subtitle content="Version 1.5" />
              <Button type={2} onClick={() => onClick(4)} />
              <Button type={3} onClick={() => onClick(5)} />
            </div>
            <li className="section-p-light line-gap ">
              함수의 재사용성을 고려하여 로직 개선
            </li>
            <div className="margin"></div>
            <div className="btns">
              <Subtitle content="Version 1.0" />
              <Button type={3} onClick={() => onClick(6)} />
            </div>
            <li className="section-p-light line-gap ">
              사용자로부터 입력받은 값을 포함한 검색 링크 자동 생성 기능 개발
            </li>
            <li className="section-p-light line-gap ">
              통합 검색 및 그룹별 검색 기능 개발
            </li>
          </div>
          <iframe
            width="350"
            height="186"
            src="https://www.youtube.com/embed/pgi8w9qgktg?si=xI2-kl3uRUfUHHu7&amp;start=288;autoplay=1&mute=1&amp;loop=1;playlist=영상키값"
            title="video"
          ></iframe>
        </div>
      </ExpContainer>
      {/* <motion.img
        src="/assets/svg/circle-blue.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "6200px",
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
        src="/assets/svg/circle-green.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "6150px",
          left: "5rem",
          zIndex: 1,
          width: "7rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      /> */}
      {/* <motion.img
        src="/assets/svg/circle-blue.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "7020px",
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
        src="/assets/svg/circle-green.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "7300px",
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
        src="/assets/svg/circle-green.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "7600px",
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
        src="/assets/svg/circle-blue.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "7630px",
          left: "70rem",
          zIndex: 0,
          width: "5rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      />*/}
    </>
  );
};

export default Section52;

const ExpContainer = styled.div`
  .flex-row {
    width: 100%;
    display: flex;
    margin-top: -45rem;
    flex-direction: row;
    gap: 10rem;
    align-items: center;
  }
  .up {
    z-index: 5;
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
    .content {
      width: 45rem;
    }
    .info-box {
      display: flex;
      flex-direction: row;
      padding-top: 2rem;
      padding-bottom: 3rem;
      gap: 2rem;
      width: 45rem;
      .info-col {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
