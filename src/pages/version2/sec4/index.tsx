import { styled } from "styled-components";
import VerticalLine from "../components/VerticalLine";
import Michelin from "./components/Michelin";
import Baseball from "./components/Baseball";
import Lucky from "./components/Lucky";
import Hotpot from "./components/Hotpot";
import Sancheck from "./components/Sancheck";

const Sec4 = () => {
  return (
    <MainContainer>
      <p className="title mt100">Projects</p>
      <Sancheck />
      <Michelin />
      <Baseball />
      <Hotpot />
      <Lucky />
      <div className="mt100"></div>
    </MainContainer>
  );
};

export default Sec4;

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
