import { styled } from "styled-components";
import { motion } from "framer-motion";
import Mobile41 from "./Mobile4-1";
import Mobile42 from "./Mobile4-2";

const Mobile4 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://github.com/innerstella/");
    num === 2 && window.open("https://inner-stella.tistory.com");
  };

  return (
    <MainContainer>
      <p className="mobile-title">Experiences</p>
      <Mobile41 />
      <Mobile42 />
    </MainContainer>
  );
};

export default Mobile4;

const MainContainer = styled.div`
  padding: 20vw 10vw 0 10vw;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .text-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    .text-svg {
      width: 1rem;
    }
  }
`;
