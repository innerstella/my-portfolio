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
          <p className="subtitle">💌 &nbsp;연픽</p>
          <p className="text mt10">
            <br />
            💬 &nbsp;3만 유저가 사용하는 대학생 소개팅∙미팅 매칭 서비스
            <br />
            <br />
            Period | 23.04. ~ 23.08.
            <br />
            Position | 웹 프론트엔드 개발
            <br />
            Tech | Next.js, React, TypeScript, Firestore, Redux, React Query
            <br />
            <br />
          </p>
          <p className="subsubtitle mt30">🚚 &nbsp;프로젝트 이관</p>
          <p className="mt10 text">
            팀에 합류하게 되며 기존에 React 기반으로 개발되어 있던 프로젝트를
            Next.js로 이관하는 작업을 진행하였습니다. 팀 내에서 프로젝트 내
            코드를 함께 정리하고 업데이트하고자 하였기 때문에 해당 작업을
            진행하였습니다. SEO를 향상시키고 초기 로딩 속도를 개선하기 위해
            Next.js를 선택하였으며, 다소 난잡해게 관리되던 클라이언트 상태를
            Redux와 React Query를 사용하여 정리하였습니다. UI 개발 측면에서는
            해당 과정 속에서 빠르게 변화하는 기획에 개발 속도를 맞출 수 있도록
            컴포넌트의 재사용을 높일 수 있도록 코드를 수정하였습니다.
          </p>
          <p className="subsubtitle mt30">🧪 &nbsp;기능 개발 및 A/B 테스트</p>
          <p className="mt10 text">
            리뷰 작성 시 코인 지급, 매칭된 상대방의 매너를 평가하는 기능을
            개발했습니다. 또한, 홈화면에서 유저의 CTA 버튼 클릭률을 높이기
            위하여 A/B 테스트를 진행했습니다. 유저가 어떠한 캐치 프레이즈에 더
            반응하는지를 파악하기 위해 두 가지 시안을 제작한 후, 이에 맞는 유저
            배분 계획을 세워 일정 기간 동안 시안 별 버튼 클릭률을 집계했습니다.
            이 결과를 바탕으로 유저가 서비스에 기대하는 방향을 파악할 수
            있었습니다.
          </p>
          <p className="subsubtitle mt30">🗃️ &nbsp;문서화</p>
          <p className="mt10 text">
            팀에 합류했을 당시 프로젝트에 대한 문서가 충분하지 않았기 때문에,
            팀에 적응하고 업무를 빠르게 진행하는 것에 어려움을 느꼈습니다. 이를
            개선하고자 팀 내 효과적인 협업 및 정보 공유를 위해 사내 위키를
            작성했습니다. 이 외에도 다음에 합류하는 팀원을 위해 빠른 적응을 할
            수 있도록 온보딩 문서를 작성했으며, 기능 버그 파악 및 수정을 위한
            협업 방식, 안정적인 신규 기능 배포를 위한 QA 방식을 팀에 입히기 위해
            노력했습니다.
          </p>
          <p className="subsubtitle mt30">🤓 &nbsp;배운 점</p>
          <p className="mt10 text">
            <li>TypeScript 사용에 익숙해질 수 있었습니다.</li>
            <li>
              빠르게 변화하는 기획에 대응하기 위한 컴포넌트를 만들기 위해 고민할
              수 있었습니다.
            </li>
            <li>
              UI/UX 개선을 위해 직접 A/B 테스트를 설계하고 진행해보았습니다.
            </li>
            <li>협업 시 문서화의 중요성을 알 수 있었습니다.</li>
            <li>
              디자이너, 앱 개발자, 마케터 등 다양한 분야의 팀원들과 협업해볼 수
              있었습니다.
            </li>
            <li>
              애자일 방식을 통해 효율적인 협업 방식과 빠른 기능 개발을 경험할 수
              있었습니다.
            </li>
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
