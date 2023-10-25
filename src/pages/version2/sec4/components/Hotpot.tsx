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
          <p className="subtitle">🔥 훠궈 소스 백과사전</p>
          <p className="text mt10">
            💬 일 평균 200명의 유저가 사용하는 훠궈 소스 레시피들을 모아서
            보여주는 서비스 <br />
            <br />
            Period | 22.04 / 22.11
            <br />
            Position | 1인 프로젝트
            <br />
            Tech | React, JavaScript, Firebase
          </p>
          <p className="subsubtitle mt30">✔️ Version 2.0</p>
          <p className="mt10 text">
            - React 리팩터링을 통해 컴포넌트의 재사용성을 높임
            <br />- Google Cloud Firestore를 사용하여 데이터 관리
            <br />- 유저가 레시피를 검색하여 찾아볼 수 있는 검색 기능 개발
            <br />- 사용성 향상을 위한 UI 개선
          </p>
          <p className="subsubtitle mt30">✔️ Version 1.0</p>
          <p className="mt10 text">
            - 레시피를 모아볼 수 있는 기능과 키워드 별로 볼 수 있는 기능 개발
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
