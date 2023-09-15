import { styled } from "styled-components";

type Props = {
  content: string;
};

const MobileSubtitle = ({ content }: Props) => {
  return (
    <>
      <Container>
        <p className="text">{content}</p>
      </Container>
    </>
  );
};

export default MobileSubtitle;

const Container = styled.div`
  border-left: 0.5rem solid white;
  margin-bottom: 2rem;
  .text {
    padding-left: 1.2rem;
    color: #fff;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
  }
`;
