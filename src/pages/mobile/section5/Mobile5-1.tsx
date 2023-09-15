import { styled } from "styled-components";
import { motion } from "framer-motion";
import MobileButton from "../../../components/MobileButton";
import MobileSubtitle from "../../../components/MobileSubTitle";

const Mobile51 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://rapvi-ku.web.app/");
    num === 2 &&
      window.open(
        "https://inner-stella.tistory.com/entry/%EC%95%BD-4%EA%B0%9C%EC%9B%94-%EA%B0%84%EC%9D%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EB%81%9D%EB%82%B4%EA%B3%A0-%EC%93%B0%EB%8A%94-%EA%B0%9C%EC%9D%B8-%ED%9A%8C%EA%B3%A0"
      );
  };

  return (
    <MainContainer>
      <div className="title-box">
        <p className="title-text">증기침입 위해성 평가 (RAPVI)</p>
      </div>
      <div className="flex-row">
        <MobileButton type={1} onClick={() => onClick(1)} />
        <MobileButton type={3} onClick={() => onClick(2)} />
      </div>

      <div className="info-container">
        <div>
          <div className="info-box">
            <div className="info-col">
              <p className="mobile-p">period</p>
              <p className="mobile-p">team</p>
              <p className="mobile-p">position</p>
              <p className="mobile-p">tech</p>
            </div>
            <div className="info-col">
              <p className="mobile-p-light">22.12 ~ 23.03</p>
              <p className="mobile-p-light">연구 3 / 기획 2 / 개발 2</p>
              <p className="mobile-p-light">개발팀장, 프론트엔드 개발</p>
              <p className="mobile-p-light">
                React, JavaScript, Styled-Components
              </p>
            </div>
          </div>
          <p className="mobile-p-light content">
            RAPVI(Risk Assessment Program for Vapor Intrusion)는 증기침입으로
            인해 발생하는 위해성을 평가하기 위해 제작된 프로그램으로, 고려대학교
            지구환경과학과 환경수리지질연구실에서 제작하였습니다. 총 2가지
            유형(기본 평가와 부지 기반 평가)의 위해성 평가를 진행할 수 있으며,
            기존 MATLAB 프로그램 방식 대신 웹 기반 서비스로 제공하여 사용자
            편의성을 높였으며, 평가에 대한 결과를 보고서 형식으로 생성한 후
            PDF로 저장할 수 있게 하였습니다
          </p>
        </div>
      </div>
      <div className="img-container">
        <motion.img
          src="/assets/png/img-rapvi.png"
          alt="rapvi"
          className="img pointer"
          onClick={() => onClick(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
      {/* 상세 설명 */}
      <div className="exp-container">
        <MobileSubtitle content="기능 개발/기획" />
        <li className="mobile-p-light line-gap ">
          csv 데이터를 간편하게 입력하고 확인할 수 있도록 에디터 구현 전체 평가
        </li>
        <li className="mobile-p-light line-gap ">
          유저가 입력한 값을 효과적으로 확인할 수 있도록 히트맵, 그래프, 표,
          지도(Google Maps API)로 시각화
        </li>
        <li className="mobile-p-light line-gap ">
          과정에 대한 보고서를 PDF 형식으로 출력하는 기능 개발
        </li>
      </div>
      <div className="exp-container">
        <MobileSubtitle content="프로젝트 관리" />
        <li className="mobile-p-light line-gap ">
          배포 및 유지보수 비용 계획 수립
        </li>
        <li className="mobile-p-light line-gap ">팀 별 협업 소통 방식 정립</li>
        <li className="mobile-p-light line-gap ">기능 개발 일정 관리 </li>
      </div>
    </MainContainer>
  );
};

export default Mobile51;

const MainContainer = styled.div`
  color: #fff;
  font-family: "SUIT", sans-serif;
  width: 100vw;
  padding-right: 10vw;
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 2vw;
  }
  .exp-container {
    padding-bottom: 10vw;
    padding-right: 10vw;
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45vw;
    margin-bottom: 10vw;
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
