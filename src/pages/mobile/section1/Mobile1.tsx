import { styled } from "styled-components";
import { motion } from "framer-motion";

const Mobile1 = () => {
  return (
    <>
      <MainContainer>
        <div className="profile-box">
          <motion.img
            className="img"
            src="/assets/png/logo.png"
            alt="logo"
            style={{
              position: "relative",
              top: "-1rem",
            }}
            initial={{ y: "0rem" }}
            animate={{
              y: "1rem",
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="intro-box">
            <p className="text-1">직접 만드는 것을 좋아하는 개발자</p>
            <p className="text-2">
              차수지 <span className="text-3">입니다</span>
            </p>
          </div>
        </div>
        <p className="text-4">
          직접 개발하면서 공부하는 것을 좋아하는 웹 프론트엔드 개발자입니다.
          개발자의 가치는 사용자의 일상 생활을 더 재미있고 편리하게 만드는 데서
          온다고 생각합니다. 계획을 세우고 체계적으로 업무를 진행할 수 있는
          환경을 선호합니다.
        </p>
      </MainContainer>
    </>
  );
};

export default Mobile1;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20vw 7vw 0 7vw;
  .profile-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    .img {
      width: 15vw;
      height: 15vw;
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
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 0.5rem;
      }
      .text-2 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
      }
      .text-3 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .text-4 {
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
    color: white;
    font-family: "SUIT", sans-serif;
  }
`;
