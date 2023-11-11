import { styled } from "styled-components";
import LinkButton from "../../components/LinkButton";

const Likelion = () => {
  const content1 = {
    where: "tistory",
    text: "연합 해커톤",
    link: "https://inner-stella.tistory.com/entry/2022-%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC-%EC%97%B0%ED%95%A9%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%A7%80%EA%B8%88-%EB%AD%90%ED%95%B4",
  };

  return (
    <div className="mt100">
      <MainContainer>
        <div className="flex-col">
          <img
            src="/assets/png/img-logo-likelion.png"
            alt="likelion"
            className="img"
          />
          <div className="flex-left">
            <LinkButton content={content1} />
          </div>
        </div>
        <div className="box">
          <p className="subtitle">🦁 &nbsp;고려대학교 멋쟁이사자처럼 10기</p>
          <p className="text mt10">
            <br />
            💬 &nbsp;서비스 기획에서부터 코딩을 통한 구현까지 경험하며 새로운
            가치 창출에 도전하고 학회원들간 열정과 비전을 공유하는
            소프트웨어벤처 학회
            <br />
            <br />
            Period | 22.03 ~ 22.12.
            <br />
            Position | 학회원
            <br /> <br />
          </p>
          <p className="subsubtitle mt30">👩🏻‍🏫 &nbsp;세션 참여</p>
          <p className="mt10 text">
            학회원들과 함께 정기적인 세션에 참여하여 웹 개발 공부를
            진행하였습니다. 세션이 끝난 후에는 따로 공부하고 싶은 주제를 정해
            스터디를 진행하였습니다. 개발 뿐만 아니라 창업에 대한 정보도
            공유하며 직접 새로운 서비스를 만들어 보았습니다.
          </p>
          <p className="subsubtitle mt30">👥️ &nbsp;해커톤/프로젝트</p>
          <p className="mt10 text">
            두 차례의 해커톤을 진행하며 팀원들과 함께 서비스를 개발하는 경험을
            할 수 있었습니다. 서비스의 기획 단계부터 개발까지 함께 하며 서로
            맡은 기능을 개발하는 과정에서 책임감을 기를 수 있었으며, 특히 Git을
            다루는 법에 익숙해질 수 있었습니다. 수료를 앞두고 학회 내에서 포지션
            별로 팀을 이루어 한 달동안 프로젝트를 진행했습니다. 제가 속한 팀이
            만든 서비스는 ‘나의 내일에게'로, 자신에게 쓴 편지를 특정 일 후에
            다시 열어볼 수 있는 기능을 제공하였습니다. 팀원은 총 5명으로, 그 중
            저를 포함해 프론트엔드 개발은 3명이 진행하였습니다. 프론트엔드 팀
            내에서 팀장을 맡아 팀원들과 함께 개발할 기능을 분배하고 일정을
            조율하며 발표 일정 내에 프로젝트를 완성할 수 있도록 노력했습니다.
            단기적으로 진행했던 해커톤과는 다르게, 한 달이라는 긴 시간동안 함께
            개발해보며 기술적(React, JavaScript)으로도 협업 측면으로도 성장할 수
            있었습니다.
          </p>
        </div>
      </MainContainer>
    </div>
  );
};

export default Likelion;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 3rem;
  .img {
    width: 12.5rem;
    height: 12.5rem;
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
