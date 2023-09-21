import { useEffect, useState } from "react";

import { styled } from "styled-components";
import { motion } from "framer-motion";

import MobileSubtitle from "../../../components/MobileSubTitle";
import { LineContainerMobile } from "../../../components/Line";

const Mobile42 = () => {
  // line scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 2000 && window.scrollY < 5000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainContainer>
      <div className="title-box">
        <p className="title-text">
          고려대학교 NEXT
          <br />X 멋쟁이사자처럼 10기
        </p>
      </div>
      <LineContainerMobile>
        <div className="red"></div>
        {isScrolled ? (
          <motion.div
            initial={{ opacity: 1, x: 0 }} // 초기 상태
            animate={{ opacity: 1, x: "10vw" }} // 애니메이션 상태
            exit={{ opacity: 0, x: "10vw" }}
            transition={{
              duration: 3,
            }}
            className="yellow"
          />
        ) : (
          <div className="yellow fixed"></div>
        )}
      </LineContainerMobile>
      <div className="info-container">
        <div>
          <p className="mobile-p-light content">
            서비스 기획에서부터 코딩을 통한 구현까지 경험하며 새로운 가치 창출에
            도전하고 학회원들간 열정과 비전을 공유하는 소프트웨어벤처 학회
          </p>
          <div className="info-box">
            <div className="info-col">
              <p className="mobile-p">period</p>
              <p className="mobile-p">position</p>
            </div>
            <div className="info-col">
              <p className="mobile-p-light">22.03 ~ 22.12</p>
              <p className="mobile-p-light">학회원</p>
            </div>
          </div>
        </div>
      </div>
      {/* 상세 설명 */}
      <div className="exp-container">
        <MobileSubtitle content="세션 참여" />
        <li className="mobile-p-light line-gap ">
          기획 및 개발 관련 학습 세션 참여
        </li>
        <li className="mobile-p-light line-gap ">
          프론트엔드 세션 진행 - React
        </li>
      </div>
      <div className="exp-container">
        <MobileSubtitle content="프로젝트" />
        <li className="mobile-p-light line-gap ">자체 해커톤 진행</li>
        <li className="mobile-p-light line-gap ">
          서울대 멋사 연합 해커톤 진행
        </li>
        <li className="mobile-p-light line-gap ">수료 프로젝트</li>
      </div>
    </MainContainer>
  );
};

export default Mobile42;

const MainContainer = styled.div`
  color: #fff;
  font-family: "SUIT", sans-serif;
  width: 90vw;
  padding-right: 10vw;
  margin-top: 10vw;
  .exp-container {
    padding-bottom: 10vw;
  }
  .title-box {
    display: flex;
    align-items: center;
    gap: 1rem;
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
    margin-bottom: 0vw;
    .content {
      width: 80vw;
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
