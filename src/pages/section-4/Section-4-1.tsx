import { styled } from "styled-components";
import Subtitle from "../../components/SubTitle";
import Button from "../../components/Button";

const Section41 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://yeonpick.kr/");
  };
  return (
    <>
      <ExpContainer>
        <div className="title-box">
          <p className="title-text">연픽</p>
          <Button type={1} onClick={() => onClick(1)} />
        </div>
        <p className="section-p">
          3만 유저가 사용하는 대학생 소개팅∙미팅 매칭 서비스
        </p>
        <div className="info-box">
          <div className="info-col">
            <p className="section-p">period</p>
            <p className="section-p">position</p>
            <p className="section-p">tech</p>
          </div>
          <div className="info-col">
            <p className="section-p-light">23.04 ~ 23.08</p>
            <p className="section-p-light">프론트엔드 웹 개발</p>
            <p className="section-p-light">
              Next.js, TypeScript, Redux, React Query, Emotion
            </p>
          </div>
        </div>
        <Subtitle content="웹사이트 전체 리뉴얼" />
        <li className="section-p-light line-gap ">
          React 기반의 Next.js 개발 환경 구축
        </li>
        <li className="section-p-light line-gap ">Redux, React Query 활용</li>
        <li className="section-p-light line-gap ">
          신규 기술 스택 및 개발 환경 관련 내부 문서 작성
        </li>
        <div className="margin"></div>
        <Subtitle content="각종 기능 개발/기획" />
        <li className="section-p-light line-gap ">
          리뷰 작성 시 코인 지급 기능 개발
        </li>
        <li className="section-p-light line-gap ">
          매칭된 상대방의 매너 평가하는 기능 개발
        </li>
        <li className="section-p-light line-gap ">
          홈화면에서 유저의 CTA 버튼 클릭률을 높이기 위한 A/B Testing 진행
        </li>
        <li className="section-p-light line-gap ">
          매칭률 상승을 위한 프로필 확인 페이지 개선
        </li>
        <div className="margin"></div>
        <Subtitle content="개발팀의 협업 체계 정리 및 문서화" />
        <li className="section-p-light line-gap ">
          팀 내 효과적인 협업 및 정보 공유를 위한 사내 위키 작성 및 컨벤션 정립
        </li>
        <li className="section-p-light line-gap ">
          신규 입사자의 빠른 적응을 위한 온보딩 문서 작성
        </li>
        <li className="section-p-light line-gap ">
          안정적인 신규 기능 배포를 위한 QA 시스템 도입 및 내부 세션 진행
        </li>
        <li className="section-p-light line-gap ">
          빠르고 정확한 버그 수정을 위한 CS팀과 개발팀 간 시스템 구축
        </li>
      </ExpContainer>
    </>
  );
};

export default Section41;

const ExpContainer = styled.div`
  .margin {
    height: 4rem;
  }
  .line-gap {
    padding-bottom: 1rem;
  }
  .title-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
    .title-text {
      color: #fff;
      font-size: 3rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .info-box {
    display: flex;
    flex-direction: row;
    padding-top: 2rem;
    padding-bottom: 7rem;
    gap: 2rem;
    .info-col {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
