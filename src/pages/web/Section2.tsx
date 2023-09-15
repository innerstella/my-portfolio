import { styled } from "styled-components";
import { motion } from "framer-motion";

const Section2 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://github.com/innerstella/");
    num === 2 && window.open("https://inner-stella.tistory.com");
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <MainContainer>
      {/* <Lines>
        <motion.svg
          width="514"
          height="10"
          viewBox="0 0 514 10"
          initial="hidden"
          fill="none"
          animate="visible"
        >
          <motion.line
            x2="-0.000488281"
            y2="5.01172"
            x1="514"
            y1="5.01172"
            stroke="#00A7DC"
            stroke-width="9"
            variants={draw}
            custom={0}
          />
        </motion.svg>

        <motion.svg
          width="612"
          height="9"
          viewBox="0 0 612 9"
          initial="hidden"
          fill="none"
          animate="visible"
        >
          <motion.line
            x2="3.93402e-07"
            y2="4.5"
            x1="619"
            y1="4.50005"
            stroke="#00bb13"
            stroke-width="9"
            variants={draw}
            custom={0}
          />
        </motion.svg>
        <motion.svg
          width="514"
          height="10"
          viewBox="0 0 514 10"
          initial="hidden"
          fill="none"
          animate="visible"
        >
          <motion.line
            x2="-0.000488281"
            y2="5.01172"
            x1="514"
            y1="5.01172"
            stroke="#94352F"
            stroke-width="9"
            variants={draw}
            custom={0}
          />
        </motion.svg>
        <motion.svg
          width="341"
          height="9"
          viewBox="0 0 341 9"
          initial="hidden"
          fill="none"
          animate="visible"
        >
          <motion.line
            x2="-3.93403e-07"
            y2="4.5"
            x1="341"
            y1="4.49997"
            stroke="#8272C4"
            stroke-width="9"
            variants={draw}
            custom={0}
          />
        </motion.svg>
        <img src="/assets/svg/line-yellow.svg" alt="line" />
      </Lines> */}
      <p className="section-title">About Me</p>

      <div className="text-box">
        <img
          src="/assets/svg/ic-solid-phone.svg"
          alt="phone"
          className="text-svg"
        />
        <p className="section-p">010-2640-1655</p>
      </div>
      <div className="text-box">
        <img
          src="/assets/svg/ic-solid-envelope.svg"
          alt="email"
          className="text-svg"
        />
        <p className="section-p">suji0509@naver.com</p>
      </div>
      <div className="text-box">
        <img
          src="/assets/svg/ic-solid-academic-cap.svg"
          alt="academic-cap"
          className="text-svg"
        />
        <p className="section-p">고려대학교 지구환경과학과/인공지능학과</p>
      </div>
      <div className="text-box" onClick={() => onClick(1)}>
        <img
          src="/assets/svg/ic-solid-command-line.svg"
          alt="command-line"
          className="text-svg"
        />
        <p className="section-p pointer">https://github.com/innerstella</p>
      </div>
      <div className="text-box" onClick={() => onClick(2)}>
        <img
          src="/assets/svg/ic-solid-rss.svg"
          alt="rss"
          className="text-svg"
        />
        <p className="section-p pointer">https://inner-stella.tistory.com</p>
      </div>
    </MainContainer>
  );
};

export default Section2;

const MainContainer = styled.div`
  padding: 15rem 10vw 0 10vw;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .text-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    .text-svg {
      width: 1.5rem;
    }
  }
  .title {
    position: absolute;
    top: 990px;
  }
`;

const Lines = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  padding-top: 5rem;
`;
