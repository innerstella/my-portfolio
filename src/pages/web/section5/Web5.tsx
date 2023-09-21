import { styled } from "styled-components";
import Web51 from "./Web5-1";
import Web52 from "./Web5-2";
import Web53 from "./Web5-3";

const Web5 = () => {
  return (
    <>
      <MainContainer>
        <p className="section-title">Projects</p>
        <Web51 />
        <div className="margin"></div>
        <Web52 />
        <div className="margin"></div>
        <Web53 />
      </MainContainer>
    </>
  );
};

export default Web5;

const MainContainer = styled.div`
  margin-top: 10rem;
  padding: 0 10vw 0 10vw;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .margin {
    height: 10rem;
  }
`;
