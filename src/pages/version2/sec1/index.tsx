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
      <p className="subsubtitle mt30">
        빠르게 문제를 발견하고, 직접 해결하는 개발자
      </p>
      <p className="title mt30">차수지 입니다</p>
      <div className="box mt30 text">
        <p>
          일상생활 속에서 사람들의 요구 사항을 빠르게 발견하고, 창의적인
          아이디어를 통해 그것들을 해결하는 것을 좋아합니다.
          <br />
          변경에 유연한 컴포넌트를 만드는 것에 관심이 많고, 사용자 경험을
          중요하게 생각하며 서비스를 만들고자 합니다.
          <br />
          계획을 세우고 문서화하는 것을 좋아하며, 이를 바탕으로 기간 내에
          효율적인 협업이 이루어질 수 있도록 노력합니다.
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
    width: 70%;
    text-align: center;
  }
`;
