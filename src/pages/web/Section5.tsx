import { styled } from "styled-components";
import Section51 from "./section-5/Section-5-1";
import Section52 from "./section-5/Section-5-2";
import Section53 from "./section-5/Section-5-3";

const Section5 = () => {
  return (
    <>
      <MainContainer>
        <p className="section-title">Projects</p>
        <Section51 />
        <div className="margin"></div>
        <Section52 />
        <div className="margin"></div>
        <Section53 />
      </MainContainer>
    </>
  );
};

export default Section5;

const MainContainer = styled.div`
  margin-top: 10rem;
  padding: 0 10vw 0 10vw;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .margin {
    height: 10rem;
  }
`;
