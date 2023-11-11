import { styled } from "styled-components";

type Props = {
  where: string;
  text: string;
  link: string;
};

type Content = {
  content: Props;
};

const LinkButton = ({ content }: Content) => {
  const moveTo = () => {
    window.open(content.link);
  };
  return (
    <div className="pointer" onClick={moveTo}>
      <Box>
        {content.where === "github" && (
          <img src="/assets/svg/ic-github.svg" alt="github" className="svg" />
        )}
        {content.where === "tistory" && (
          <img src="/assets/svg/ic-tistory.svg" alt="tistory" className="svg" />
        )}

        <p className="text">{content.text}</p>
      </Box>
    </div>
  );
};

export default LinkButton;

const Box = styled.div`
  border-radius: 0.625rem;
  background: var(--white100, #fff);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  width: 330px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  .svg {
    width: 1.875rem;
    height: 1.875rem;
  }
`;
