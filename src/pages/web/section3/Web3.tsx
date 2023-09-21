import { useEffect, useState } from "react";

import { styled } from "styled-components";
import { motion } from "framer-motion";

const Web3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 800 && window.scrollY < 2000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <MainContainer>
        <p className="section-title padding">Skills</p>
        {isScrolled ? (
          <div className="rail">
            <motion.img
              src="/assets/png/img-figma.png"
              alt="figma"
              className="circle"
              initial={{ x: "-10rem", y: "0rem" }}
              animate={{
                x: ["0vw", "85vw"],
              }}
              transition={{
                duration: 3,
                delay: 0,
              }}
            />
            <motion.img
              src="/assets/png/img-reactquery.png"
              alt="react-query"
              className="circle"
              initial={{ x: "-10rem", y: "-8rem" }}
              animate={{
                x: ["-10vw", "72vw"],
              }}
              transition={{
                duration: 3,
                delay: 0.1,
              }}
            />
            <motion.img
              src="/assets/png/img-redux.png"
              alt="redux"
              className="circle"
              initial={{ x: "-10rem", y: "-16rem" }}
              animate={{
                x: ["-10vw", "59vw"],
              }}
              transition={{
                duration: 3,
                delay: 0.3,
              }}
            />
            <motion.img
              src="/assets/png/img-next.png"
              alt="next"
              className="circle"
              initial={{ x: "-10rem", y: "-24rem" }}
              animate={{
                x: ["-10vw", "46vw"],
              }}
              transition={{
                duration: 3,
                delay: 0.5,
              }}
            />
            <motion.img
              src="/assets/png/img-react.png"
              alt="react"
              className="circle"
              initial={{ x: "-10rem", y: "-32rem" }}
              animate={{
                x: ["-10vw", "33vw"],
              }}
              transition={{
                duration: 3,
                delay: 0.7,
              }}
            />
            <motion.img
              src="/assets/png/img-javascript.png"
              alt="javascript"
              className="circle"
              initial={{ x: "-10rem", y: "-40rem" }}
              animate={{
                x: ["-10vw", "20vw"],
              }}
              transition={{
                duration: 3,
                delay: 0.9,
              }}
            />
            <motion.img
              src="/assets/png/img-typescript.png"
              alt="typescript"
              className="circle"
              initial={{ x: "-10rem", y: "-48rem" }}
              animate={{
                x: ["-10vw", "7vw"],
              }}
              transition={{
                duration: 3,
                delay: 1.1,
              }}
            />
          </div>
        ) : (
          <div className="rail-fixed">
            <img
              src="/assets/png/img-figma.png"
              alt="figma"
              className="circle"
            />
            <img
              src="/assets/png/img-reactquery.png"
              alt="react-query"
              className="circle"
            />
            <img
              src="/assets/png/img-redux.png"
              alt="redux"
              className="circle"
            />
            <img src="/assets/png/img-next.png" alt="next" className="circle" />
            <img
              src="/assets/png/img-react.png"
              alt="react"
              className="circle"
            />
            <img
              src="/assets/png/img-javascript.png"
              alt="javascript"
              className="circle"
            />
            <img
              src="/assets/png/img-typescript.png"
              alt="typescript"
              className="circle"
            />
          </div>
        )}
      </MainContainer>
    </>
  );
};

export default Web3;

const MainContainer = styled.div`
  margin-top: 13rem;
  margin-bottom: 13rem;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .padding {
    padding-left: 10vw;
    padding-bottom: 7rem;
  }
  .circle {
    width: 8rem;
  }
  .rail {
    border-top: 1rem solid #d9d9d9;
    border-bottom: 1rem solid #d9d9d9;
    height: 10rem;
  }
  .rail-fixed {
    border-top: 1rem solid #d9d9d9;
    border-bottom: 1rem solid #d9d9d9;
    height: 10rem;

    display: flex;
    justify-content: space-evenly;
    flex-direction: row-reverse;
  }
`;
