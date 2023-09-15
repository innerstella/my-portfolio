import { styled } from "styled-components";
import { motion } from "framer-motion";
const Section1 = () => {
  return (
    <>
      <MainContainer>
        <div className="profile-box">
          <img
            className="img-profile"
            src="/assets/png/img-profile.png"
            alt="profile-1"
          />
          <div className="intro-box">
            <p className="text-1">직접 만드는 것을 좋아하는 개발자</p>
            <p className="text-2">
              차수지 <span className="text-3">입니다</span>
            </p>
            <p className="text-4">
              직접 개발하면서 공부하는 것을 좋아하는 웹 프론트엔드 개발자입니다.
              개발자의 가치는 사용자의 일상 생활을 더 재미있고 편리하게 만드는
              데서 온다고 생각합니다. 계획을 세우고 체계적으로 업무를 진행할 수
              있는 환경을 선호합니다.
            </p>
          </div>
        </div>
      </MainContainer>
      <motion.img
        src="/assets/svg/circle-yellow.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "120px",
          left: "5rem",
          zIndex: 1,
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
          top: "280px",
          left: "9rem",
          zIndex: 1,
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-red.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "370px",
          left: "7rem",
          zIndex: 1,
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-blue.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "400px",
          left: "15rem",
          zIndex: 1,
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-purple.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "410px",
          left: "22rem",
          zIndex: 1,
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-yellow.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "510px",
          left: "25rem",
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
        src="/assets/svg/circle-yellow.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "330px",
          left: "30rem",
          zIndex: 1,
          width: "13rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-purple.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "460px",
          left: "40rem",
          zIndex: 1,
          width: "4rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-red.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "150px",
          left: "22rem",
          zIndex: 1,
          width: "8rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.img
        src="/assets/svg/circle-blue.svg"
        alt="circle"
        style={{
          position: "absolute",
          top: "200px",
          left: "25rem",
          zIndex: 1,
          width: "12rem",
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
          top: "200px",
          left: "35rem",
          zIndex: 1,
          width: "6rem",
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
          top: "200px",
          left: "39rem",
          zIndex: 1,
          width: "4rem",
        }}
        initial={{ y: "0px" }}
        animate={{
          y: "1rem",
        }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
    </>
  );
};

export default Section1;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0vw 0 10vw;
  .profile-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10rem 5rem 0rem 5rem;
    gap: 5rem;
    .img-profile {
      width: 30.99144rem;
      height: 24.36644rem;
      flex-shrink: 0;
      z-index: 5;
      position: relative;
      left: -4rem;
    }
    .intro-box {
      color: white;
      font-family: "SUIT", sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      line-height: normal;
      .text-1 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 10px;
      }
      .text-2 {
        font-size: 3rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-bottom: 40px;
      }
      .text-3 {
        font-size: 3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .text-4 {
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 300;
        line-height: 160%;
      }
    }
  }
  .line-box {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    width: 100vw;
    gap: 20px;
    .line-blue {
      width: 30vw;
      height: 9px;
      background: #00a7dc;
    }
    .line-yellow {
      width: 40vw;
      height: 9px;
      background: #dcd300;
    }
    .line-green {
      width: 40vw;
      height: 9px;
      background: #00bb13;
    }
    .line-red {
      width: 35vw;
      height: 9px;
      background: #94352f;
    }
    .line-purple {
      width: 20vw;
      height: 9px;
      background: #8272c3;
      margin-right: 25vw;
    }
  }
`;
