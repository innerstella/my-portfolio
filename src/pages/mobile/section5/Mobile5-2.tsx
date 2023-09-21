import { useEffect, useState } from "react";

import { styled } from "styled-components";
import { motion } from "framer-motion";

import MobileButton from "../../../components/MobileButton";
import MobileSubtitle from "../../../components/MobileSubTitle";
import MobileSwiper from "../../../components/MobileSwiper";
import { LineContainerMobile } from "../../../components/Line";

const Mobile52 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://twitter-michelin.web.app/");
    num === 2 &&
      window.open("https://github.com/innerstella/new-twitter-michelin");
    num === 3 &&
      window.open(
        "https://inner-stella.tistory.com/entry/%EB%A7%9B%EC%A7%91-%EA%B2%80%EC%83%89%EA%B8%B0-React-%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81"
      );
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

  // line scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 4300 && window.scrollY < 8000) {
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
        <p className="title-text">맛집 검색기</p>
        <MobileButton type={1} onClick={() => onClick(1)} />
      </div>
      <LineContainerMobile>
        <div className="blue"></div>
        {isScrolled ? (
          <motion.div
            initial={{ opacity: 1, x: 0 }} // 초기 상태
            animate={{ opacity: 1, x: "10vw" }} // 애니메이션 상태
            exit={{ opacity: 0, x: "10vw" }}
            transition={{
              duration: 3,
            }}
            className="gray"
          />
        ) : (
          <div className="gray fixed"></div>
        )}
      </LineContainerMobile>
      <div className="info-container">
        <div>
          <div className="info-box">
            <div className="info-col">
              <p className="mobile-p">period</p>
              <p className="mobile-p">team</p>
              <p className="mobile-p">tech</p>
            </div>
            <div className="info-col">
              <p className="mobile-p-light">22.01 ~ 23.08</p>
              <p className="mobile-p-light">1인 프로젝트</p>
              <p className="mobile-p-light">
                React, TypeScript, Styled-Components
              </p>
            </div>
          </div>
          <p className="mobile-p-light content">
            일 평균 5000명의 유저가 사용하는 아이돌 맛집 해시태그 기반으로
            검색창에 장소/메뉴를 입력하면 해당 장소/메뉴에 대한 맛집에 대해
            작성한 트윗들을 모아서 보여주는 서비스
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
          <MobileSwiper type={3} />
        </motion.div>
      </div>
      {/* 상세 설명 */}
      <div className="exp-container">
        <MobileSubtitle content="Version 2.0" />
        <div className="flex-row padding">
          <MobileButton type={2} onClick={() => onClick(2)} />
          <MobileButton type={3} onClick={() => onClick(3)} />
        </div>
        <li className="mobile-p-light line-gap ">
          재사용성과 유지보수성 향상을 위한 TypeScript, React 리팩터링
        </li>
        <li className="mobile-p-light line-gap ">사용성 향상을 위한 UI 개선</li>
      </div>
      <div className="exp-container">
        <MobileSubtitle content="Version 1.5" />
        <div className="flex-row padding">
          <MobileButton type={2} onClick={() => onClick(4)} />
          <MobileButton type={3} onClick={() => onClick(5)} />
        </div>
        <li className="mobile-p-light line-gap ">
          함수의 재사용성을 고려하여 로직 개선
        </li>
      </div>
      <div className="exp-container">
        <MobileSubtitle content="Version 1.0" />
        <div className="flex-row padding">
          <MobileButton type={3} onClick={() => onClick(6)} />
        </div>
        <li className="mobile-p-light line-gap ">
          사용자로부터 입력받은 값을 포함한 검색 링크 자동 생성 기능 개발
        </li>
        <li className="mobile-p-light line-gap ">
          통합 검색 및 그룹별 검색 기능 개발
        </li>
      </div>
    </MainContainer>
  );
};

export default Mobile52;

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
