import { styled } from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../components/LinkButton";

const Baseball = () => {
  const content1 = {
    where: "github",
    text: "Version 1.0",
    link: "https://github.com/innerstella/happybaseball-diary",
  };

  const content2 = {
    where: "tistory",
    text: "개발일지",
    link: "https://inner-stella.tistory.com/entry/%E2%9A%BE%EF%B8%8F-%EC%A7%81%EA%B4%80%EC%9D%BC%EA%B8%B0-%EC%A7%81%EA%B4%80-%EA%B8%B0%EB%A1%9D%ED%95%98%EA%B3%A0-%EC%A7%81%EA%B4%80-%EC%8A%B9%EB%A5%A0-%EA%B3%84%EC%82%B0%ED%95%98%EB%8A%94-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80",
  };

  const content3 = {
    where: "tistory",
    text: "소셜 로그인 (OAuth)",
    link: "https://inner-stella.tistory.com/entry/Google-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-OAuth",
  };

  return (
    <div className="mt100">
      <MainContainer>
        <div className="flex-col">
          <motion.img
            src="/assets/png/img-baseball.png"
            alt="baseball"
            className="img pointer"
            onClick={() => window.open("https://happybaseball-diary.web.app/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="flex-left">
            <LinkButton content={content1} />
            <LinkButton content={content2} />
            <LinkButton content={content3} />
          </div>
        </div>
        <div className="box">
          <p className="subtitle">⚾️ 직관일기</p>
          <p className="text mt10">
            💬 야구 경기 직관 경험을 기록하고 모아두고 직관 승률을 확인할 수
            있는 아카이빙 플랫폼 <br />
            <br />
            Period | 23.10. ~ <br />
            Position | 1인 프로젝트
            <br />
            Tech | React, TypeScript, Firebase
          </p>
          <p className="subsubtitle mt30">✔️ Version 1.0</p>
          <p className="mt10 text">
            - Google 로그인
            <br />- 1군 경기 직관 기록 : 날짜, 상대팀, 구장, 경기 내용, 메모
            <br />- 시즌별 직관 승률 계산
            <br />- 야구 행운 복권
          </p>
          <p className="subsubtitle mt30">🚧 작업 중</p>
          <p className="mt10 text">
            - 2군 경기 직관 기록
            <br />- 타팀 경기 직관 기록
            <br />- 경기 기록 수정
          </p>
        </div>
      </MainContainer>
    </div>
  );
};

export default Baseball;

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
