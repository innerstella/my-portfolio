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
  margin-top: 7rem;
  padding: 0rem 10rem 0rem 10rem;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .margin {
    height: 10rem;
  }
`;
