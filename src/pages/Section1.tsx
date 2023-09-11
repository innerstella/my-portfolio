import { styled } from "styled-components";

const Section1 = () => {
  return (
    <MainContainer>
      <div className="profile-box">
        <img
          className="img-profile"
          src="/assets/png/img-profile.png"
          alt="profile-1"
        />
        <div className="intro-box">
          <p className="text-1">직접 만드는 것을 좋아하는 개발자</p>
          <p className="text-2">
            ddd <span className="text-3">입니다</span>
          </p>
          <p className="text-4">
            어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
          </p>
        </div>
      </div>

      <div className="line-box">
        <div className="line-blue"></div>
        <div className="line-yellow"></div>
        <div className="line-green"></div>
        <div className="line-red"></div>
        <div className="line-purple"></div>
      </div>
    </MainContainer>
  );
};

export default Section1;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .profile-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10rem 5rem 0rem 5rem;
    gap: 5rem;
    .img-profile {
      width: 30.99144rem;
      height: 24.36644rem;
      flex-shrink: 0;
    }
    .intro-box {
      color: white;
      font-family: "SUIT", sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      line-height: normal;

      .text-1 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 10px;
      }
      .text-2 {
        font-size: 3rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-bottom: 40px;
      }
      .text-3 {
        font-size: 3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .text-4 {
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .line-box {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    width: 100vw;
    gap: 20px;
    .line-blue {
      width: 30vw;
      height: 9px;
      background: #00a7dc;
    }
    .line-yellow {
      width: 40vw;
      height: 9px;
      background: #dcd300;
    }
    .line-green {
      width: 40vw;
      height: 9px;
      background: #00bb13;
    }
    .line-red {
      width: 35vw;
      height: 9px;
      background: #94352f;
    }
    .line-purple {
      width: 20vw;
      height: 9px;
      background: #8272c3;
      margin-right: 25vw;
    }
  }
`;
