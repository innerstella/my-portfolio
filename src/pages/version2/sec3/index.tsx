import { styled } from "styled-components";
import VerticalLine from "../components/VerticalLine";
import Yeonpick from "./Components/Yeonpick";
import Rapvi from "./Components/Rapvi";
import Likelion from "./Components/Likelion";

const Sec3 = () => {
  return (
    <MainContainer>
      <p className="title mt100">Experiences</p>
      <Yeonpick />
      <Rapvi />
      {/* <Likelion /> */}
      <div className="mt50">
        <VerticalLine />
      </div>
    </MainContainer>
  );
};

export default Sec3;

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
