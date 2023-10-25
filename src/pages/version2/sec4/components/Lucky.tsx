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
          <p className="subtitle">🍀 lucky template</p>
          <p className="text mt10">
            💬 각종 지원서를 더 편리하게 작성할 수 있는 에디터를 제공합니다. 한
            페이지 내에서 여러 문항을 편집할 수 있으며, 문항 별 글자수 제한을
            설정할 수 있습니다.
            <br />
            <br />
            Period | 23.10. ~
            <br />
            Position | 1인 프로젝트
            <br />
            Tech | React, TypeScript
          </p>
          <p className="subsubtitle mt30">✔️ Version 1.0</p>
          <p className="mt10 text">
            - 문항 별 글자수 제한 설정
            <br />- 답변 글자수 세기
            <br />- 사용자의 브라우저에 문항 및 답변 작성 내용 저장
          </p>
          <p className="subsubtitle mt30">🚧 작업 중</p>
          <p className="mt10 text">
            - 로그인 기능
            <br />- 답변 작성 내용 Firestore에 저장
            <br />- 여러 기업에 대한 지원서 작성 내용 보관
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
