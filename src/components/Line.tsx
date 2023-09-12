import { styled } from "styled-components";
import { motion } from "framer-motion";

const Line = () => {
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
    <Lines>
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
      <svg
        width="1728"
        height="342"
        viewBox="0 0 1728 342"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M690 342C690 308.951 705.992 4.99999 931.377 5C1552.58 5.00004 1721.29 5 1728 5"
          stroke="#DCD300"
          stroke-width="9"
        />
        <line
          y1="337.5"
          x2="687.001"
          y2="337.5"
          stroke="#DCD300"
          stroke-width="9"
        />
      </svg>

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
        style={{ marginRight: "300" }}
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
    </Lines>
  );
};

export default Line;

const Lines = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  padding-top: 5rem;
`;
