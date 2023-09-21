import { useEffect, useState } from "react";

import { styled } from "styled-components";
import { motion } from "framer-motion";

const Mobile3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 240 && window.scrollY < 1500) {
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
        <p className="mobile-title padding">Skills</p>
        {isScrolled ? (
          <>
            <div className="rail-top">
              <motion.img
                src="/assets/png/img-next.png"
                alt="next"
                className="circle"
                initial={{ x: "-20rem", y: "0rem" }}
                animate={{
                  x: ["-10vw", "65vw"],
                }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
              />
              <motion.img
                src="/assets/png/img-react.png"
                alt="react"
                className="circle"
                initial={{ x: "-10rem", y: "-4rem" }}
                animate={{
                  x: ["-10vw", "45vw"],
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
              />
              <motion.img
                src="/assets/png/img-javascript.png"
                alt="javascript"
                className="circle"
                initial={{ x: "-10rem", y: "-8rem" }}
                animate={{
                  x: ["-10vw", "25vw"],
                }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
              />
              <motion.img
                src="/assets/png/img-typescript.png"
                alt="typescript"
                className="circle"
                initial={{ x: "-10rem", y: "-12rem" }}
                animate={{
                  x: ["-10vw", "5vw"],
                }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                }}
              />
            </div>
            <div className="rail-bottom">
              <motion.img
                src="/assets/png/img-figma.png"
                alt="figma"
                className="circle"
                initial={{ x: "-10rem", y: "0rem" }}
                animate={{
                  x: ["-10vw", "55vw"],
                }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
              />
              <motion.img
                src="/assets/png/img-reactquery.png"
                alt="react-query"
                className="circle"
                initial={{ x: "-10rem", y: "-4rem" }}
                animate={{
                  x: ["-10vw", "35vw"],
                }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                }}
              />
              <motion.img
                src="/assets/png/img-redux.png"
                alt="redux"
                className="circle"
                initial={{ x: "-10rem", y: "-8rem" }}
                animate={{
                  x: ["-10vw", "15vw"],
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="rail-top-fix">
              <img
                src="/assets/png/img-next.png"
                alt="next"
                className="circle"
              />
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
            <div className="rail-bottom-fix">
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
            </div>
          </>
        )}
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
  }
  .circle {
    width: 4rem;
    height: 4rem;
  }
  .rail-top {
    border-top: 1rem solid #d9d9d9;
    border-bottom: 1rem solid #d9d9d9;
    height: 6rem;
    padding: 0 10vw;
  }
  .rail-bottom {
    border-bottom: 1rem solid #d9d9d9;
    height: 5rem;
    padding: 0 10vw;
  }
  .rail-top-fix {
    border-top: 1rem solid #d9d9d9;
    border-bottom: 1rem solid #d9d9d9;
    height: 6rem;

    display: flex;
    justify-content: space-evenly;
    flex-direction: row-reverse;
  }
  .rail-bottom-fix {
    border-bottom: 1rem solid #d9d9d9;
    height: 5rem;

    display: flex;
    justify-content: space-evenly;
    flex-direction: row-reverse;
  }
`;
