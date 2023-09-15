import { styled } from "styled-components";

const MobileFooter = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://github.com/innerstella");
    num === 2 && window.open("https://inner-stella.tistory.com/");
    num === 3 &&
      window.open(
        "https://www.linkedin.com/in/%EC%88%98%EC%A7%80-%EC%B0%A8-b22963289/"
      );
  };

  return (
    <MainContainer>
      <div className="link-box">
        <span className="mobile-p text pointer" onClick={() => onClick(1)}>
          GitHub
        </span>
        <span className="mobile-p text pointer" onClick={() => onClick(2)}>
          Tistory
        </span>
        <span className="mobile-p text pointer" onClick={() => onClick(3)}>
          LinkedIn
        </span>
      </div>

      <p className="mobile-p-light">© Cha Su Ji. Last Updated 23.09.16.</p>
    </MainContainer>
  );
};

export default MobileFooter;

const MainContainer = styled.div`
  margin-top: 20vh;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .link-box {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    .text {
      text-decoration: underline;
    }
  }
`;
