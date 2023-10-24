import { styled } from "styled-components";
import VerticalLine from "../components/VerticalLine";

const Sec2 = () => {
  const moveTo = (where: string) => {
    where === "github" && window.open("https://github.com/innerstella");
    where === "tistory" && window.open("https://inner-stella.tistory.com");
  };
  return (
    <MainContainer>
      <p className="title mt100">About Me & Skills</p>
      <div className="mt50 flex-row">
        <img
          src="/assets/svg/ic-github.svg"
          alt="github"
          className="logo pointer"
          onClick={() => moveTo("github")}
        />
        <img
          src="/assets/svg/ic-tistory.svg"
          alt="tistory"
          className="logo pointer"
          onClick={() => moveTo("tistory")}
        />
      </div>
      <div className="box mt50">
        <p>
          📞 010-2640-1655
          <br />
          📧 suji0509@naver.com
          <br />
          🎓 고려대학교 지구환경과학과/인공지능학과
        </p>
      </div>
      <div className="mt50 flex-row">
        <img
          src="/assets/png/img-logo-typescript.png"
          alt="typescript"
          className="logo"
        />
        <img
          src="/assets/png/img-logo-javascript.png"
          alt="javascript"
          className="logo"
        />
        <img
          src="/assets/png/img-logo-react.png"
          alt="react"
          className="logo"
        />
        <img
          src="/assets/png/img-logo-nextjs.png"
          alt="nextjs"
          className="logo"
        />
        <img
          src="/assets/png/img-logo-firebase.png"
          alt="firebase"
          className="logo"
        />
        <img
          src="/assets/png/img-logo-figma.png"
          alt="figma"
          className="logo"
        />
        <img
          src="/assets/png/img-logo-styled.png"
          alt="styled"
          className="logo"
        />
      </div>
      <div className="mt50">
        <VerticalLine />
      </div>
    </MainContainer>
  );
};

export default Sec2;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 4.375rem;
    height: 4.375rem;
  }
  .box {
    border-radius: 0.625rem;
    background: var(--white100, #fff);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 2rem 3rem;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;
