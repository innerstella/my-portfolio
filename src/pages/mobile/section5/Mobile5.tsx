import { styled } from "styled-components";
import { motion } from "framer-motion";
import Mobile51 from "./Mobile5-1";
import Mobile52 from "./Mobile5-2";
import Mobile53 from "./Mobile5-3";

const Mobile5 = () => {
  return (
    <MainContainer>
      <p className="mobile-title">Projects</p>
      <Mobile51 />
      <Mobile52 />
      <Mobile53 />
    </MainContainer>
  );
};

export default Mobile5;

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
