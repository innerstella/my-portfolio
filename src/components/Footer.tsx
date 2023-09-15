import { styled } from "styled-components";

const Footer = () => {
  console.log("ddddd");
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
        <span className="section-p text pointer" onClick={() => onClick(1)}>
          GitHub
        </span>
        <span className="section-p text pointer" onClick={() => onClick(2)}>
          Tistory
        </span>
        <span className="section-p text pointer" onClick={() => onClick(3)}>
          LinkedIn
        </span>
      </div>

      <p className="section-p-light">© Cha Su Ji. Last Updated 23.09.16.</p>
    </MainContainer>
  );
};

export default Footer;

const MainContainer = styled.div`
  margin-top: 16rem;
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
