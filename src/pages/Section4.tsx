import { styled } from "styled-components";
import Section41 from "./section-4/Section-4-1";
import Section42 from "./section-4/Section-4-2";

const Section4 = () => {
  return (
    <>
      <MainContainer>
        <p className="section-title">Experiences</p>
        <Section41 />
        <div className="margin"></div>
        <Section42 />
      </MainContainer>
    </>
  );
};

export default Section4;

const MainContainer = styled.div`
  padding: 0 10vw 0 10vw;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .margin {
    height: 10rem;
  }
`;
