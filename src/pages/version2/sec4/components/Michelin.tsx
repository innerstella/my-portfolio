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
            <iframe
              width="330"
              height="186"
              src="https://www.youtube.com/embed/pgi8w9qgktg?si=xI2-kl3uRUfUHHu7&amp;start=288;autoplay=1&mute=1&amp;loop=1;playlist=영상키값"
              title="video"
            ></iframe>
          </div>
        </div>
        <div className="flex-col">
          <div className="box">
            <p className="subtitle">🍽️ &nbsp;K-POP 맛집 검색기</p>
            <p className="text mt10">
              <br />
              💬 &nbsp;일 평균 2000명의 유저가 사용하는 아이돌 맛집 해시태그
              기반으로 검색창에 장소/메뉴를 입력하면 해당 장소/메뉴에 대한
              맛집에 대해 작성한 트윗들을 모아서 보여주는 서비스
              <br />
              <br />
              Period | 22.01 / 22.10 / 23.08 <br />
              Position | 1인 프로젝트 <br />
              Tech | React, TypeScript
              <br />
              <br />
            </p>
            <p className="subsubtitle mt30">💡 &nbsp;아이디어</p>
            <p className="mt10 text">
              K-POP 팬들은 맛집을 찾기 위해서 여러 개의 해시태그를 조합하여
              검색하는 방법을 사용합니다. 이렇게 하면 해당 지역의 맛집에 대한
              정보를 더 많이 찾아볼 수 있지만, 검색창에 작성하는 텍스트의 길이가
              너무 길어집니다. 또한 주로 모바일에서 사용되기 때문에, 검색창의
              길이는 사용자의 핸드폰 가로 너비 정도로 짧아 긴문장을 쓰거나
              수정하기에는 불편하여 이를 개선하기 위해 메모장에 저장해둔다
              하더라도 일일히 수정하고 복붙해서 맛집을 찾는 것은 배고픈 순간을
              참기에는 정말 힘들다고 느꼈습니다. 이를 해결하기 위해 장소만
              입력하면 해시태그들이 조합된 url을 자동으로 생성하여 이동시켜주는
              기능을 생각하게 되었습니다. 하지만 이를 구현하기 위한 웹 지식이
              거의 없었기 때문에 초기 서비스는 대부분 HTML로 개발되었습니다.
            </p>
            <img src="/assets/png/img-michelin-graph-1.png" alt="graph" />
            <p className="subsubtitle mt30">
              ♻️ &nbsp;React, TypeScript 리팩터링
            </p>
            <p className="mt10 text">
              일 평균 2000명의 사용자들이 서비스를 이용하며 피드백을 받고 기능을
              추가하거나 수정할 때마다 모든 페이지가 각각 존재하는 구조에서 유지
              보수의 불편함을 느끼게 되었습니다. 이를 해결하기 위해 React와
              TypeScript 기반으로 리팩터링을 진행하였으며, 이 과정에서
              컴포넌트의 재사용성을 높이기 위해 노력했습니다. 또한, 사용자 경험
              개선을 위해 UX를 개편하여 서비스를 이용하는데 있어서 불필요한
              depth를 줄였습니다.
            </p>
            <img src="/assets/png/img-michelin-graph-2.png" alt="graph" />
          </div>
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
