import { styled } from "styled-components";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <>
      <MainContainer>
        <p className="section-title padding">Skills</p>
        <div className="rail">
          <motion.img
            src="/assets/png/img-figma.png"
            alt="figma"
            style={{ width: "8rem" }}
            initial={{ x: "0rem", y: "0rem" }}
            animate={{
              x: ["0vw", "90vw"],
            }}
            transition={{
              duration: 3,
              delay: 1,
            }}
          />
          <motion.img
            src="/assets/png/img-reactquery.png"
            alt="react-query"
            style={{ width: "8rem" }}
            initial={{ x: "-10rem", y: "-8rem" }}
            animate={{
              x: ["-10vw", "80vw"],
            }}
            transition={{
              duration: 3,
              delay: 1.1,
            }}
          />
          <motion.img
            src="/assets/png/img-redux.png"
            alt="redux"
            style={{ width: "8rem" }}
            initial={{ x: "-10rem", y: "-16rem" }}
            animate={{
              x: ["-10vw", "70vw"],
            }}
            transition={{
              duration: 3,
              delay: 1.3,
            }}
          />
          <motion.img
            src="/assets/png/img-next.png"
            alt="next"
            style={{ width: "8rem" }}
            initial={{ x: "-10rem", y: "-24rem" }}
            animate={{
              x: ["-10vw", "60vw"],
            }}
            transition={{
              duration: 3,
              delay: 1.5,
            }}
          />
          <motion.img
            src="/assets/png/img-react.png"
            alt="react"
            style={{ width: "8rem" }}
            initial={{ x: "-10rem", y: "-32rem" }}
            animate={{
              x: ["-10vw", "50vw"],
            }}
            transition={{
              duration: 3,
              delay: 1.7,
            }}
          />
          <motion.img
            src="/assets/png/img-javascript.png"
            alt="javascript"
            style={{ width: "8rem" }}
            initial={{ x: "-10rem", y: "-40rem" }}
            animate={{
              x: ["-10vw", "40vw"],
            }}
            transition={{
              duration: 3,
              delay: 1.9,
            }}
          />
          <motion.img
            src="/assets/png/img-typescript.png"
            alt="typescript"
            style={{ width: "8rem" }}
            initial={{ x: "-10rem", y: "-48rem" }}
            animate={{
              x: ["-10vw", "30vw"],
            }}
            transition={{
              duration: 3,
              delay: 2.1,
            }}
          />
        </div>
      </MainContainer>
    </>
  );
};

export default Section3;

const MainContainer = styled.div`
  margin-top: 13rem;
  margin-bottom: 13rem;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .padding {
    padding-left: 10vw;
    padding-bottom: 7rem;
  }
  .rail {
    border-top: 1rem solid #d9d9d9;
    border-bottom: 1rem solid #d9d9d9;
    height: 10rem;
  }
`;
