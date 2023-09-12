import { styled } from "styled-components";
import Subtitle from "../../components/SubTitle";
import { motion } from "framer-motion";

const Section42 = () => {
  return (
    <>
      <ExpContainer>
        <div className="title-box">
          <p className="title-text up">고려대학교 NEXT X 멋쟁이사자처럼 10기</p>
        </div>
        <p className="section-p-light up">
          서비스 기획에서부터 코딩을 통한 구현까지 경험하며 새로운 가치 창출에
          도전하고 학회원들간 열정과 비전을 공유하는 소프트웨어벤처 학회
        </p>
        <div className="info-box">
          <div className="info-col">
            <p className="section-p">period</p>
            <p className="section-p">position</p>
          </div>
          <div className="info-col">
            <p className="section-p-light">22.03 ~ 22.12</p>
            <p className="section-p-light">학회원</p>
          </div>
        </div>
        <div className="flex-row">
          <div>
            <Subtitle content="세션 참여" />
            <li className="section-p-light line-gap ">
              기획 및 개발 관련 학습 세션 참여
            </li>
            <li className="section-p-light line-gap ">
              프론트엔드 세션 진행 - React
            </li>
            <div className="margin"></div>
          </div>
          <div>
            <Subtitle content="프로젝트" />
            <li className="section-p-light line-gap ">자체 해커톤 진행</li>
            <li className="section-p-light line-gap ">
              서울대 멋사 연합 해커톤 진행
            </li>
            <li className="section-p-light line-gap ">수료 프로젝트</li>
          </div>
        </div>
      </ExpContainer>
      {/* <motion.img
        src="/assets/svg/circle-red.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "3700px",
          left: "-3rem",
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
        src="/assets/svg/circle-yellow.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "3650px",
          left: "7rem",
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
        src="/assets/svg/circle-yellow.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "4300px",
          left: "70rem",
          zIndex: 1,
          width: "4rem",
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
          top: "4400px",
          left: "77rem",
          zIndex: 1,
          width: "10rem",
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

export default Section42;

const ExpContainer = styled.div`
  .up {
    z-index: 5;
  }
  .margin {
    height: 4rem;
  }
  .line-gap {
    padding-bottom: 1rem;
  }
  .flex-row {
    width: 70vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .title-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
    .title-text {
      color: #fff;
      font-size: 3rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .info-box {
    display: flex;
    flex-direction: row;
    padding-top: 2rem;
    padding-bottom: 7rem;
    gap: 2rem;
    .info-col {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
