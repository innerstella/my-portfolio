import { styled } from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../components/LinkButton";

const Hotpot = () => {
  const content1 = {
    where: "github",
    text: "Version 2.0",
    link: "https://github.com/innerstella/hotpot_dict",
  };

  const content2 = {
    where: "tistory",
    text: "개발일지",
    link: "https://inner-stella.tistory.com/entry/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%ED%95%98%EC%9D%B4%EB%94%94%EB%9D%BC%EC%98%A4-%ED%9B%A0%EA%B6%88-%EC%86%8C%EC%8A%A4-%EB%B0%B1%EA%B3%BC%EC%82%AC%EC%A0%84",
  };

  return (
    <div className="mt100">
      <MainContainer>
        <div className="flex-col">
          <motion.img
            src="/assets/png/img-hotpot.png"
            alt="hotpot"
            className="img pointer"
            onClick={() => window.open("https://hotpot-8c321.web.app/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="flex-left">
            <LinkButton content={content1} />
            <LinkButton content={content2} />
          </div>
        </div>
        <div className="box">
          <p className="subtitle">🔥 &nbsp;훠궈 소스 백과사전</p>
          <p className="text mt10">
            <br />
            💬 &nbsp;일 평균 200명의 유저가 사용하는 훠궈 소스 레시피들을 모아서
            보여주는 서비스 <br />
            <br />
            Period | 22.04 / 22.11
            <br />
            Position | 1인 프로젝트
            <br />
            Tech | React, JavaScript, Firebase
            <br />
            <br />
          </p>
          <p className="subsubtitle mt30">💡 &nbsp;아이디어</p>
          <p className="mt10 text">
            1020세대들은 ‘하이디라오'라는 식당을 매우 좋아하는데, 이 곳은 다른
            훠궈 식당과는 다르게 직접 소스를 만들어 먹을 수 있는 소스바가
            있습니다. 소스 재료 종류가 정말 다양하기 때문에 이들을 조합할 수
            있는 레시피 또한 아주 많은데, 이 레시피들을 모아서 한 곳에서 확인할
            수 있다면 정말 편할 것 같다는 생각이 들었습니다. 실제로 서비스를
            구현한 후, 해당 식당에 친구들과 함께 방문했을 때 몇몇 손님들이 제가
            만든 ‘훠궈 소스 백과사전'을 보며 소스를 만들고 있는 것을 보고 보람을
            느꼈습니다.
          </p>
          <p className="subsubtitle mt30">♻️ &nbsp;React 리팩터링</p>
          <p className="mt10 text">
            이 서비스를 처음 개발할 때는 사용할 수 있는 기술이 부족했고 데이터의
            양이 많지 않았기 때문에 모든 소스마다 HTML 페이지를 직접 작성하는
            방식으로 서비스를 만들었습니다. 하지만 이후 사용자들로부터 소스
            제보를 받아 계속해서 업데이트하는 과정에서 매우 비효율적인
            방법이라는 생각이 들었습니다. 이를 개선하기 위해서 리액트로
            리팩터링을 진행하여 코드의 재사용성을 높여 유지 보수성을
            향상시켰습니다. 또한 늘어난 소스 레시피 정보들을 저장하기 위해서
            Google Firestore를 활용했습니다.
          </p>
          <p className="subsubtitle mt30">🤓 &nbsp;배운 점</p>
          <p className="mt10 text">
            <li>React와 styled-components에 익숙해질 수 있었습니다.</li>
            <li>NoSQL 데이터베이스를 이용하여 데이터를 관리해보았습니다.</li>
          </p>
        </div>
      </MainContainer>
    </div>
  );
};

export default Hotpot;

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
