import { styled } from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../components/LinkButton";

const Michelin = () => {
  const content1 = {
    where: "github",
    text: "Version 2.0",
    link: "https://github.com/innerstella/new-twitter-michelin",
  };

  const content2 = {
    where: "tistory",
    text: "React 리팩터링",
    link: "https://inner-stella.tistory.com/entry/%EB%A7%9B%EC%A7%91-%EA%B2%80%EC%83%89%EA%B8%B0-React-%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81",
  };

  const content3 = {
    where: "github",
    text: "Version 1.5",
    link: "https://github.com/innerstella/FME",
  };

  const content4 = {
    where: "tistory",
    text: "코드 수정",
    link: "https://inner-stella.tistory.com/entry/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%EA%B9%8C%EC%A7%80%EB%8A%94-%EC%95%84%EB%8B%8C-%EB%A7%9B%EC%A7%91%EA%B2%80%EC%83%89%EA%B8%B0-%EC%BD%94%EB%93%9C-%EC%88%98%EC%A0%95",
  };

  const content5 = {
    where: "tistory",
    text: "그룹별 검색 기능",
    link: "https://inner-stella.tistory.com/entry/%ED%8A%B8%EC%9C%84%ED%84%B0-%EB%A7%9B%EC%A7%91-%EA%B2%80%EC%83%89%EA%B8%B0-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EA%B7%B8%EB%A3%B9%EB%B3%84-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5",
  };

  const content6 = {
    where: "tistory",
    text: "아이디어",
    link: "https://inner-stella.tistory.com/entry/%ED%8A%B8%EC%9C%84%ED%84%B0-%EB%A7%9B%EC%A7%91-%EA%B2%80%EC%83%89%EA%B8%B0-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80",
  };

  return (
    <div className="mt50">
      <MainContainer>
        <div className="flex-col">
          <motion.img
            src="/assets/png/img-michelin.png"
            alt="michelin"
            className="img pointer"
            onClick={() => window.open("https://twitter-michelin.web.app/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="flex-left">
            <LinkButton content={content1} />
            <LinkButton content={content2} />
            <LinkButton content={content3} />
            <LinkButton content={content4} />
            <LinkButton content={content5} />
            <LinkButton content={content6} />
          </div>
        </div>
        <div className="flex-col">
          <div className="box">
            <p className="subtitle">🍽️ 맛집 검색기</p>
            <p className="text mt10">
              💬 일 평균 2000명의 유저가 사용하는 아이돌 맛집 해시태그 기반으로
              검색창에 장소/메뉴를 입력하면 해당 장소/메뉴에 대한 맛집에 대해
              작성한 트윗들을 모아서 보여주는 서비스
              <br />
              <br />
              Period | 22.01 / 22.10 / 23.08 <br />
              Position | 1인 프로젝트 <br />
              Tech | React, TypeScript
            </p>
            <p className="subsubtitle mt30">✔️ Version 2.0</p>
            <p className="mt10 text">
              - 재사용성과 유지보수성 향상을 위한 TypeScript, React 리팩터링
              <br />- 사용성 향상을 위한 UI 개선
            </p>
            <p className="subsubtitle mt30">✔️ Version 1.5</p>
            <p className="mt10 text">- 함수의 재사용성을 고려하여 로직 개선</p>
            <p className="subsubtitle mt30">✔️ Version 1.0</p>
            <p className="mt10 text">
              - 사용자로부터 입력받은 값을 포함한 검색 링크 자동 생성 기능 개발
              <br />- 통합 검색 및 그룹별 검색 기능 개발
            </p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pgi8w9qgktg?si=xI2-kl3uRUfUHHu7&amp;start=288;autoplay=1&mute=1&amp;loop=1;playlist=영상키값"
            title="video"
          ></iframe>
        </div>
      </MainContainer>
    </div>
  );
};

export default Michelin;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 3rem;
  .img {
    width: 18.125rem;
    height: 30.1875rem;
  }
  .box {
    border-radius: 0.625rem;
    background: var(--white100, #fff);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 3rem 4rem;
    width: 50vw;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .flex-left {
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 1rem;
  }
`;
