import { styled } from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../components/LinkButton";

const Yeonpick = () => {
  const content1 = {
    where: "tistory",
    text: "지도 영역 변환 기능",
    link: "https://inner-stella.tistory.com/entry/Nextjs%EC%97%90%EC%84%9C-Google-Maps-API%EB%A1%9C-%EC%A7%80%EB%8F%84%EC%97%90-%EC%9B%90-%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93-%EB%82%B4-%EB%8F%99%EB%84%A4-%EC%84%A4%EC%A0%95-%EB%94%B0%EB%9D%BC%ED%95%B4%EB%B3%B4%EA%B8%B0",
  };

  const content2 = {
    where: "tistory",
    text: "styled-components, emotion",
    link: "https://inner-stella.tistory.com/entry/styled-components%EC%99%80-emotion%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0",
  };

  const content3 = {
    where: "tistory",
    text: "i18next",
    link: "https://inner-stella.tistory.com/entry/Next%EC%97%90-%EB%B2%88%EC%97%AD-%EA%B8%B0%EB%8A%A5-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-i18next",
  };

  const content4 = {
    where: "tistory",
    text: "Next.js, Redux",
    link: "https://inner-stella.tistory.com/entry/Nextjs-TypeScript-Redux-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-redux-devtools-%EC%82%AC%EC%9A%A9",
  };

  return (
    <div className="mt50">
      <MainContainer>
        <div className="flex-col">
          <motion.img
            src="/assets/png/img-yeonpick.png"
            alt="yeonpick"
            className="img pointer"
            onClick={() => window.open("https://yeonpick.kr/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="flex-left">
            <LinkButton content={content1} />
            <LinkButton content={content2} />
            <LinkButton content={content3} />
            <LinkButton content={content4} />
          </div>
        </div>
        <div className="box">
          <p className="subtitle">💌 연픽</p>
          <p className="text mt10">
            💬 3만 유저가 사용하는 대학생 소개팅∙미팅 매칭 서비스
            <br />
            <br />
            Period | 23.04. ~ 23.08.
            <br />
            Position | 프론트엔드 웹 개발
            <br />
            Tech | Next.js, React, TypeScript, Firestore, Redux, React Query
          </p>
          <p className="subsubtitle mt30">✔️ 리팩터링</p>
          <p className="mt10 text">
            - React 기반의 Next.js 개발 환경 구축
            <br />
            - Redux, React Query 활용
            <br />- 신규 기술 스택 및 개발 환경 관련 내부 문서 작성
          </p>
          <p className="subsubtitle mt30">✔️ 기능 개발/기획</p>
          <p className="mt10 text">
            - 리뷰 작성 시 코인 지급 기능 개발
            <br />
            - 매칭된 상대방의 매너를 평가하는 기능 개발
            <br />- 홈화면에서 유저의 CTA 버튼 클릭률을 높이기 위한 A/B Testing
            진행
            <br />- 매칭률 상승을 위한 프로필 확인 페이지 개선
          </p>
          <p className="subsubtitle mt30">✔️ 개발팀 협업 체계 정리 및 문서화</p>
          <p className="mt10 text">
            - 팀 내 효과적인 협업 및 정보 공유를 위한 사내 위키 작성 및 컨벤션
            정립
            <br />
            - 신규 입사자의 빠른 적응을 위한 온보딩 문서 작성
            <br />- 안정적인 신규 기능 배포를 위한 QA 시스템 도입 및 내부 세션
            진행
            <br />- 빠르고 정확한 버그 수정을 위한 CS팀-개발팀 시스템 구축
          </p>
        </div>
      </MainContainer>
    </div>
  );
};

export default Yeonpick;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 3rem;
  .img {
    width: 12.375rem;
    height: 25.1875rem;
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
