import { styled } from "styled-components";
import VerticalLine from "../components/VerticalLine";

const Sec1 = () => {
  return (
    <MainContainer>
      <img
        src="/assets/webp/img-profile-bubble.webp"
        alt="profile img"
        className="logo mt100"
      />
      <p className="subsubtitle mt30">
        빠르게 문제를 발견하고, 직접 해결하는 개발자
      </p>
      <p className="title mt30">차수지 입니다</p>
      <div className="box mt30 text">
        <p className="green-text">
          1. 계획과 문서를 좋아하는 개발자{" "}
          <span className="gray-text">
            {"// Notion을 좋아하고 TIL과 기술 블로그를 작성하고 있어요!"}
          </span>
          <br />
          2. 함께 일하기 좋아하는 개발자{" "}
          <span className="gray-text">
            {"// 코드를 가독성 있게 작성하기 위해 노력해요!"}
          </span>
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
    background: black;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 2rem 3rem;
    width: 70%;
    text-align: center;
  }
  .green-text {
    color: #28c700;
    font-weight: 700;
    text-align: left;
  }
  .gray-text {
    color: #a2a2a2;
    font-weight: 700;
    text-align: left;
  }
`;
