import { styled } from "styled-components";
import { motion } from "framer-motion";

const Mobile3 = () => {
  return (
    <>
      <MainContainer>
        <p className="mobile-title padding">Skills</p>
        <div className="rail-top">
          <motion.img
            src="/assets/png/img-next.png"
            alt="next"
            style={{ width: "4rem" }}
            initial={{ x: "-20rem", y: "0rem" }}
            animate={{
              x: ["-10vw", "20vw"],
            }}
            transition={{
              duration: 3,
              delay: 1,
            }}
          />
          <motion.img
            src="/assets/png/img-react.png"
            alt="react"
            style={{ width: "4rem" }}
            initial={{ x: "-10rem", y: "-4rem" }}
            animate={{
              x: ["-10vw", "40vw"],
            }}
            transition={{
              duration: 3,
              delay: 1.4,
            }}
          />
          <motion.img
            src="/assets/png/img-javascript.png"
            alt="javascript"
            style={{ width: "4rem" }}
            initial={{ x: "-10rem", y: "-8rem" }}
            animate={{
              x: ["-10vw", "60vw"],
            }}
            transition={{
              duration: 3,
              delay: 1.4,
            }}
          />
          <motion.img
            src="/assets/png/img-typescript.png"
            alt="typescript"
            style={{ width: "4rem" }}
            initial={{ x: "-10rem", y: "-12rem" }}
            animate={{
              x: ["-10vw", "80vw"],
            }}
            transition={{
              duration: 3,
              delay: 1.6,
            }}
          />
        </div>
        <div className="rail-bottom">
          <motion.img
            src="/assets/png/img-figma.png"
            alt="figma"
            style={{ width: "4rem" }}
            initial={{ x: "-10rem", y: "0rem" }}
            animate={{
              x: ["0rem", "21rem"],
            }}
            transition={{
              duration: 3,
              delay: 1,
            }}
          />
          <motion.img
            src="/assets/png/img-reactquery.png"
            alt="react-query"
            style={{ width: "4rem" }}
            initial={{ x: "-10rem", y: "-4rem" }}
            animate={{
              x: ["0rem", "17rem"],
            }}
            transition={{
              duration: 3,
              delay: 1.1,
            }}
          />
          <motion.img
            src="/assets/png/img-redux.png"
            alt="redux"
            style={{ width: "4rem" }}
            initial={{ x: "-10rem", y: "-8rem" }}
            animate={{
              x: ["-10rem", "13rem"],
            }}
            transition={{
              duration: 3,
              delay: 1.3,
            }}
          />
        </div>
      </MainContainer>
    </>
  );
};

export default Mobile3;

const MainContainer = styled.div`
  padding: 20vw 0vw 0 0vw;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .padding {
    padding-left: 10vw;
    /* padding-bottom: 7rem; */
  }
  .rail-top {
    border-top: 1rem solid #d9d9d9;
    border-bottom: 1rem solid #d9d9d9;
    height: 6rem;
  }
  .rail-bottom {
    /* border-top: 1rem solid #d9d9d9; */
    border-bottom: 1rem solid #d9d9d9;
    height: 6rem;
  }
`;
