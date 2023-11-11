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
          <p className="subtitle">⚾️ &nbsp;직관일기</p>
          <p className="text mt10">
            <br />
            💬 &nbsp;야구 경기 직관 경험을 기록하고 모아두고 직관 승률을 확인할
            수 있는 아카이빙 플랫폼 <br />
            <br />
            Period | 23.10. ~ <br />
            Position | 1인 프로젝트
            <br />
            Tech | React, TypeScript, Firebase
            <br />
            <br />
          </p>
          <p className="subsubtitle mt30">💡 &nbsp;아이디어</p>
          <p className="mt10 text">
            올해 야구 경기 관람에 취미를 가지게 되면서 야구장에 자주 가게
            되었습니다. 평소 기록해두는 것을 좋아해서 야구 경기 직관 기록을
            노션에 적어두고 저의 직관 승률도 계산해보았습니다. 그런데 다른
            대부분의 야구 팬들은 자신의 직관 기록을 메모장에 일일히 적어두고
            계산기로 직관 승률을 계산하는 것을 보게 되었습니다. 앱스토어에 야구
            플랫폼을 검색해보았지만 직관 내용을 기록하는 플랫폼은 없었기에 제가
            직접 만들어보기로 했습니다.
          </p>
          <p className="subsubtitle mt30">⚙️ &nbsp;기능 개발</p>
          <p className="mt10 text">
            백엔드 개발자가 없는 상황이었기 때문에 Google Firebase에서 제공하는
            소셜 로그인 기능을 이용하여 로그인 기능을 구현하였습니다. ‘기록하기'
            기능을 이용하여 직관 내용을 아카이빙할 수 있게 했습니다. 경기 날짜,
            상대팀, 구장, 경기 결과 등을 기록할 수 있으며, 기록된 내용은 홈
            화면에서 카드 형태로 확인할 수 있게 했습니다. 기록된 내용을 바탕으로
            이번 시즌 직관 승률을 자동으로 계산하여 보여줌으로써, 유저가 일일히
            메모장에 기록하고 계산기를 사용하는 번거로움을 덜어내고자 했습니다.
            지금은 유저가 응원하는 팀의 1군 경기 직관 내용만 기록할 수 있지만,
            유저들의 피드백을 받아 2군 경기, 타팀 경기 또한 기록할 수 있는
            기능을 개발 중 입니다.
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
