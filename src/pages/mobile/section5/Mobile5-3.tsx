import { styled } from "styled-components";
import { motion } from "framer-motion";
import MobileButton from "../../../components/MobileButton";
import MobileSubtitle from "../../../components/MobileSubTitle";
import MobileSwiper from "../../../components/MobileSwiper";

const Mobile53 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://hotpot-8c321.web.app/");
    num === 2 && window.open("https://github.com/innerstella/hotpot_dict");
    num === 3 &&
      window.open(
        "https://inner-stella.tistory.com/entry/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%ED%95%98%EC%9D%B4%EB%94%94%EB%9D%BC%EC%98%A4-%ED%9B%A0%EA%B6%88-%EC%86%8C%EC%8A%A4-%EB%B0%B1%EA%B3%BC%EC%82%AC%EC%A0%84"
      );
  };

  return (
    <MainContainer>
      <div className="title-box">
        <p className="title-text">훠궈 소스 백과사전</p>
      </div>
      <div className="flex-row">
        <MobileButton type={1} onClick={() => onClick(1)} />
        <MobileButton type={2} onClick={() => onClick(2)} />
        <MobileButton type={3} onClick={() => onClick(3)} />
      </div>
      <div className="info-container">
        <div>
          <div className="info-box">
            <div className="info-col">
              <p className="mobile-p">period</p>
              <p className="mobile-p">team</p>
              <p className="mobile-p">tech</p>
            </div>
            <div className="info-col">
              <p className="mobile-p-light">22.04 ~ 22.10</p>
              <p className="mobile-p-light">1인 프로젝트</p>
              <p className="mobile-p-light">
                React, JavaScript, Styled-Components
              </p>
            </div>
          </div>
          <p className="mobile-p-light content">
            일 평균 200명의 유저가 사용하는 훠궈 소스 레시피들을 모아서 보여주는
            서비스
          </p>
        </div>
      </div>
      <div className="img-container">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ zIndex: "10" }}
          onClick={() => onClick(1)}
          className="pointer"
        >
          <MobileSwiper type={4} />
        </motion.div>
      </div>
      {/* 상세 설명 */}
      <div className="exp-container">
        <MobileSubtitle content="Version 2.0" />
        <li className="mobile-p-light line-gap ">
          React 리팩터링을 통해 컴포넌트의 재사용성을 높임
        </li>
        <li className="mobile-p-light line-gap ">
          Google Cloud Firestore를 사용하여 데이터 관리
        </li>
        <li className="mobile-p-light line-gap ">
          유저가 레시피를 검색하여 찾아볼 수 있는 검색 기능 개발
        </li>
        <li className="mobile-p-light line-gap ">사용성 향상을 위한 UI 개선</li>
      </div>
      <div className="exp-container">
        <MobileSubtitle content="Version 1.0" />
        <li className="mobile-p-light line-gap ">
          레시피를 모아볼 수 있는 기능과 키워드 별로 볼 수 있는 기능 개발
        </li>
      </div>
    </MainContainer>
  );
};

export default Mobile53;

const MainContainer = styled.div`
  color: #fff;
  font-family: "SUIT", sans-serif;
  width: 100vw;
  padding-right: 10vw;
  margin-top: 10vw;
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 2vw;
  }
  .padding {
    padding-bottom: 5vw;
  }
  .exp-container {
    padding-bottom: 10vw;
    padding-right: 10vw;
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50vw;
    margin-bottom: -80vw;
    margin-right: 10vw;
    .img {
      width: 70vw;
    }
  }
  .title-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    .title-text {
      color: #fff;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .text-svg {
      width: 1rem;
    }
  }
  .info-container {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    justify-content: space-between;
    margin-bottom: -20vh;
    .content {
      width: 80vw;
    }
    .info-box {
      display: flex;
      flex-direction: row;
      padding-top: 2rem;
      padding-bottom: 2rem;
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
