import { styled } from "styled-components";
import { motion } from "framer-motion";

const Mobile2 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://github.com/innerstella/");
    num === 2 && window.open("https://inner-stella.tistory.com");
  };

  return (
    <MainContainer>
      <p className="mobile-title">About Me</p>
      <div className="text-box">
        <img
          src="/assets/svg/ic-solid-phone.svg"
          alt="phone"
          className="text-svg"
        />
        <p className="mobile-p">010-2640-1655</p>
      </div>
      <div className="text-box">
        <img
          src="/assets/svg/ic-solid-envelope.svg"
          alt="email"
          className="text-svg"
        />
        <p className="mobile-p">suji0509@naver.com</p>
      </div>
      <div className="text-box">
        <img
          src="/assets/svg/ic-solid-academic-cap.svg"
          alt="academic-cap"
          className="text-svg"
        />
        <p className="mobile-p">고려대학교 지구환경과학과/인공지능학과</p>
      </div>
      <div className="text-box" onClick={() => onClick(1)}>
        <img
          src="/assets/svg/ic-solid-command-line.svg"
          alt="command-line"
          className="text-svg"
        />
        <p className="mobile-p pointer">https://github.com/innerstella</p>
      </div>
      <div className="text-box" onClick={() => onClick(2)}>
        <img
          src="/assets/svg/ic-solid-rss.svg"
          alt="rss"
          className="text-svg"
        />
        <p className="mobile-p pointer">https://inner-stella.tistory.com</p>
      </div>
      <motion.img
        src="/assets/png/img-blog.png"
        alt="blog"
        className="img pointer"
        onClick={() => onClick(2)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </MainContainer>
  );
};

export default Mobile2;

const MainContainer = styled.div`
  padding: 20vw 10vw 0 10vw;
  color: #fff;
  font-family: "SUIT", sans-serif;
  .text-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    .text-svg {
      width: 1rem;
    }
  }
  .img {
    width: 80vw;
  }
`;
