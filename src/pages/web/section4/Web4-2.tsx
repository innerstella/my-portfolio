import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { styled } from "styled-components";

import Subtitle from "../../../components/SubTitle";
import { LineContainer } from "../../../components/Line";

const Web42 = () => {
  // line scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 3300 && window.scrollY < 5000) {
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
    <>
      <ExpContainer>
        <div className="title-box">
          <p className="title-text up">고려대학교 NEXT X 멋쟁이사자처럼 10기</p>
        </div>
        <LineContainer>
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
        </LineContainer>
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
    </>
  );
};

export default Web42;

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
    /* padding-bottom: 3rem; */
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
