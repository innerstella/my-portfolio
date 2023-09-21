import { styled } from "styled-components";
import { motion } from "framer-motion";

const Web2 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://github.com/innerstella/");
    num === 2 && window.open("https://inner-stella.tistory.com");
  };

  return (
    <MainContainer>
      <p className="section-title">About Me</p>
      <div className="content">
        <TextContainer>
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
            <p className="section-p pointer">
              https://inner-stella.tistory.com
            </p>
          </div>
        </TextContainer>
        <motion.img
          src="/assets/png/img-blog.png"
          alt="blog"
          className="img pointer"
          onClick={() => onClick(2)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </MainContainer>
  );
};

export default Web2;

const MainContainer = styled.div`
  padding: 15rem 10vw 0 10vw;
  color: #fff;
  font-family: "SUIT", sans-serif;

  .content {
    display: flex;
    justify-content: space-between;
  }
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
  .img {
    width: 40vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
