import { styled } from "styled-components";
import Web41 from "./Web4-1";
import Web42 from "./Web4-2";

const Web4 = () => {
  return (
    <>
      <MainContainer>
        <p className="section-title">Experiences</p>
        <Web41 />
        <div className="margin"></div>
        <Web42 />
      </MainContainer>
    </>
  );
};

export default Web4;

const MainContainer = styled.div`
  padding: 0 10vw 0 10vw;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .margin {
    height: 10rem;
  }
`;
