import { styled } from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../components/LinkButton";

const Lucky = () => {
  const content1 = {
    where: "github",
    text: "Version 1.0",
    link: "https://github.com/innerstella/lucky-template",
  };

  const content2 = {
    where: "tistory",
    text: "개발일지",
    link: "https://inner-stella.tistory.com/entry/%F0%9F%8D%80-lucky-template-%EC%A7%80%EC%9B%90%EC%84%9C-%ED%8E%B8%EB%A6%AC%ED%95%98%EA%B2%8C-%EC%9E%91%EC%84%B1%ED%95%98%EB%8A%94-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80",
  };

  return (
    <div className="mt100">
      <MainContainer>
        <div className="flex-col">
          <motion.img
            src="/assets/png/img-lucky.png"
            alt="lucky"
            className="img pointer"
            onClick={() => window.open("https://lucky-template.web.app/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="flex-left">
            <LinkButton content={content1} />
            <LinkButton content={content2} />
          </div>
        </div>
        <div className="box">
          <p className="subtitle">🍀 &nbsp;lucky template</p>
          <p className="text mt10">
            <br />
            💬 &nbsp;각종 지원서를 더 편리하게 작성할 수 있는 에디터를
            제공합니다. 한 페이지 내에서 여러 문항을 편집할 수 있으며, 문항 별
            글자수 제한을 설정할 수 있습니다.
            <br />
            <br />
            Period | 23.10. ~
            <br />
            Position | 1인 프로젝트
            <br />
            Tech | React, TypeScript
            <br />
            <br />
          </p>
          <p className="subsubtitle mt30">💡️ &nbsp;아이디어</p>
          <p className="mt10 text">
            지원서를 작성하던 도중, 노션과 같은 에디터와 맞춤범 검사기 사이트를
            번갈아가며 사용하는 것에 대한 불편함을 느끼게 되었습니다. 또한, 여러
            문항을 한 곳에서 동시에 작성하며 이 때 문항마다 다른 글자수도
            체크하고 싶었습니다.
          </p>
          <p className="subsubtitle mt30">
            ⚙️ &nbsp;기능 개발 : 문항 별 글자수 세기 & 브라우저에 저장
          </p>
          <p className="mt10 text">
            1) 한 페이지 내에서 여러 문항을 작성할 수 있게 하는 것과 2) 문항 별
            글자수를 다르게 설정할 수 있게 하는 것을 주요 기능으로 두고 개발을
            진행했습니다. 또한 사용자가 창을 닫거나 새로 고침하더라도 작성
            내용이 사라지지 않도록 유지시키기 위해 값을 로컬 스토리지에
            저장하였습니다. 지금은 하나의 기업에 대한 지원서만 작성할 수 있지만,
            로그인을 통해 여러 기업에 대한 지원서를 작성하고 보관할 수 있는
            기능을 개발 중 입니다.
          </p>
        </div>
      </MainContainer>
    </div>
  );
};

export default Lucky;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 3rem;
  .img {
    width: 20vw;
  }
  .box {
    border-radius: 0.625rem;
    background: var(--white100, #fff);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 3rem 4rem;
    width: 50vw;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .flex-left {
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 1rem;
  }
`;
