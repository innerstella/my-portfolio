import { styled } from "styled-components";
import { motion } from "framer-motion";
import MobileButton from "../../../components/MobileButton";
import MobileSubtitle from "../../../components/MobileSubTitle";

const Mobile41 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://yeonpick.kr/");
  };

  return (
    <MainContainer>
      <div className="title-box">
        <p className="title-text">연픽</p>
        <MobileButton type={1} onClick={() => onClick(1)} />
      </div>
      <div className="info-container">
        <div>
          <p className="mobile-p-light content">
            3만 유저가 사용하는 대학생 소개팅∙미팅 매칭 서비스
          </p>
          <div className="info-box">
            <div className="info-col">
              <p className="mobile-p">period</p>
              <p className="mobile-p">position</p>
              <p className="mobile-p">tech</p>
            </div>
            <div className="info-col">
              <p className="mobile-p-light">23.04 ~ 23.08</p>
              <p className="mobile-p-light">프론트엔드 웹 개발</p>
              <p className="mobile-p-light">
                Next.js, TypeScript, Redux,
                <br /> React Query, Emotion
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <motion.img
          src="/assets/png/img-yeonpick.png"
          alt="yeonpick"
          className="img pointer"
          onClick={() => onClick(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
      {/* 상세 설명 */}
      <div className="exp-container">
        <MobileSubtitle content="웹사이트 전체 리뉴얼" />
        <li className="mobile-p-light line-gap ">
          React 기반의 Next.js 개발 환경 구축
        </li>
        <li className="mobile-p-light line-gap ">Redux, React Query 활용</li>
        <li className="mobile-p-light line-gap ">
          신규 기술 스택 및 개발 환경 관련 내부 문서 작성
        </li>
      </div>
      <div className="exp-container">
        <MobileSubtitle content="각종 기능 개발/기획" />
        <li className="mobile-p-light line-gap ">
          리뷰 작성 시 코인 지급 기능 개발
        </li>
        <li className="mobile-p-light line-gap ">
          매칭된 상대방의 매너 평가하는 기능 개발
        </li>
        <li className="mobile-p-light line-gap ">
          홈화면에서 유저의 CTA 버튼 클릭률을 높이기 위한 A/B Testing 진행
        </li>
        <li className="mobile-p-light line-gap ">
          매칭률 상승을 위한 프로필 확인 페이지 개선
        </li>
      </div>
      <div className="exp-container">
        <MobileSubtitle content="개발팀의 협업 체계 정리 및 문서화" />
        <li className="mobile-p-light line-gap ">
          팀 내 효과적인 협업 및 정보 공유를 위한 사내 위키 작성 및 컨벤션 정립
        </li>
        <li className="mobile-p-light line-gap ">
          신규 입사자의 빠른 적응을 위한 온보딩 문서 작성
        </li>
        <li className="mobile-p-light line-gap ">
          안정적인 신규 기능 배포를 위한 QA 시스템 도입 및 내부 세션 진행
        </li>
        <li className="mobile-p-light line-gap ">
          빠르고 정확한 버그 수정을 위한 CS팀과 개발팀 간 시스템 구축
        </li>
      </div>
    </MainContainer>
  );
};

export default Mobile41;

const MainContainer = styled.div`
  color: #fff;
  font-family: "SUIT", sans-serif;
  width: 100vw;
  padding-right: 10vw;
  .exp-container {
    padding-bottom: 10vw;
    padding-right: 10vw;
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45vw;
    margin-bottom: 10vw;
    .img {
      width: 40vw;
    }
  }
  .title-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    .title-text {
      color: #fff;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .text-svg {
      width: 1rem;
    }
  }
  .info-container {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    justify-content: space-between;
    margin-bottom: -13rem;
    .content {
      width: 45rem;
    }
    .info-box {
      display: flex;
      flex-direction: row;
      padding-top: 2rem;
      padding-bottom: 3rem;
      gap: 2rem;
      width: 45rem;
      .info-col {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
