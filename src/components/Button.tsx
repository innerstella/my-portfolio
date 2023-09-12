import { styled } from "styled-components";
import { motion } from "framer-motion";

type Props = {
  type: number;
  onClick?: () => void;
};

// 1 : 바로가기
// 2 : 깃허브
// 3 : 개발일지
const Button = ({ type, onClick }: Props) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Container onClick={onClick} className="pointer">
        {type === 1 && (
          <>
            <img
              src="/assets/svg/ic-solid-link.svg"
              alt="link"
              className="svg"
            />
            <p className="text">바로가기</p>
          </>
        )}
        {type === 2 && (
          <>
            <img
              src="/assets/svg/ic-solid-command-line.svg"
              alt="github"
              className="svg"
            />
            <p className="text">GitHub</p>
          </>
        )}
        {type === 3 && (
          <>
            <img
              src="/assets/svg/ic-solid-rss.svg"
              alt="blog"
              className="svg"
            />
            <p className="text">개발일지</p>
          </>
        )}
      </Container>
    </motion.div>
  );
};

export default Button;

const Container = styled.div`
  border-radius: 20px;
  background: rgba(237, 237, 237, 0.33);
  width: auto;
  height: 2.7rem;
  padding: 0rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .svg {
    width: 1.7rem;
  }
  .text {
    color: #fff;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    padding-top: 0.2rem;
  }
`;
