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
      <p className="subsubtitle mt30">덕업일치를 꿈꾸는 개발자</p>
      <p className="title mt30">차수지 입니다</p>
      <div className="box mt30 text">
        <p>
          사용자 경험을 중요하게 생각하며 서비스를 만들기 위해 노력합니다.
          <br />
          계획을 세우고 문서화하는 것을 좋아하며 빠르게 학습할 수 있습니다.
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
