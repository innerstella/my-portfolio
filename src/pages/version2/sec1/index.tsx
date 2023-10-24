import { styled } from "styled-components";
import VerticalLine from "../components/VerticalLine";

const Sec1 = () => {
  return (
    <MainContainer>
      <img
        src="/assets/png/img-profile-bubble.png"
        alt="profile img"
        className="logo mt100"
      />
      <p className="subsubtitle mt30">일단 만들어보며 배우는 개발자</p>
      <p className="title mt30">차수지 입니다</p>
      <div className="box mt30">
        <p>
          직접 만들어보며 공부하는 것을 좋아하는 프론트엔드 개발자입니다.
          <br />
          개발자의 가치는 사용자의 일상 생활을 더 재미있고
          <br />
          편리하게 만드는 데서 온다고 생각합니다.
          <br />
          계획을 세우고 체계적으로 업무를 진행할 수 있는 환경을 선호합니다.
        </p>
      </div>
      <div className="mt50">
        <VerticalLine />
      </div>
    </MainContainer>
  );
};

export default Sec1;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 28rem;
  }
  .box {
    border-radius: 0.625rem;
    background: var(--white100, #fff);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 2rem 3rem;
  }
`;
