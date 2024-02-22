import { styled } from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../components/LinkButton";

const Sancheck = () => {
  const content1 = {
    where: "github",
    text: "GitHub",
    link: "https://github.com/innerstella/kGround",
  };

  const content2 = {
    where: "tistory",
    text: "1인 개발 계획 세우기",
    link: "https://inner-stella.tistory.com/entry/%EC%82%B0%EC%B1%85-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-0-1%EC%9D%B8-%EA%B0%9C%EB%B0%9C-%EA%B3%84%ED%9A%8D-%EC%84%B8%EC%9A%B0%EA%B8%B0",
  };

  const content3 = {
    where: "tistory",
    text: "별점 평점 기능 만들기",
    link: "https://inner-stella.tistory.com/entry/%F0%9F%8C%9F-%EC%99%B8%EB%B6%80-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%97%86%EC%9D%B4-%EB%B3%84%EC%A0%90-%ED%8F%89%EC%A0%90-%EA%B8%B0%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0",
  };

  const content4 = {
    where: "tistory",
    text: "Flutter 웹뷰",
    link: "https://inner-stella.tistory.com/entry/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9B%B9%EB%B7%B0-android-%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B0",
  };

  const content5 = {
    where: "tistory",
    text: "데이터베이스 설계",
    link: "https://inner-stella.tistory.com/entry/%EC%82%B0%EC%B1%85-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-1-NoSQL-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%84%A4%EA%B3%84-Cloud-Firestore",
  };

  return (
    <div className="mt100">
      <MainContainer>
        <div className="flex-col">
          <motion.img
            src="/assets/png/img-sancheck.png"
            alt="baseball"
            className="img pointer"
            onClick={() => window.open("https://kground.web.app/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="flex-left">
            <LinkButton content={content1} />
            <LinkButton content={content2} />
            <LinkButton content={content3} />
            <LinkButton content={content4} />
            <LinkButton content={content5} />
          </div>
        </div>
        <div className="box">
          <p className="subtitle">⛰️ &nbsp;산책</p>
          <p className="text mt10">
            <br />
            💬 &nbsp;공간 데이터를 기반으로 등산지를 추천해주는 플랫폼입니다.
            지구환경적 공공데이터를 각색하여 도입함으로써 기존 플렛폼에는 없는
            공간 데이터 기반의 신뢰도 높은 맞춤형 여행 정보를 제공받을 수
            있습니다.
            <br />
            <br />
            Period | 23.11. ~ <br />
            Position | 프론트엔드 웹 개발
            <br />
            Tech | React, TypeScript, Recoil, Firebase, Flutter
            <br />
            <br />
          </p>
          <p className="subsubtitle mt30">🛹 &nbsp;유연한 컴포넌트</p>
          <p className="mt10 text">
            UI 구현 시 코드의 재사용성과 유지보수성을 높이기 위해 각 컴포넌트를
            유연하게 설계하였습니다. 가능한 하나의 컴포넌트는 하나의 역할만 할
            수 있도록 작성했고, UI를 표현하는 컴포넌트의 경우 최대한 많은 곳에서
            재사용될 수 있도록 타입을 지정하여 설계했습니다. 또한 데이터를
            다루는 컴포넌트를 설계할 때는 비슷한 관심사가 있다면 가까운 곳에
            두었고, 데이터를 ID 기반으로 정리하여 사용했습니다.
          </p>
          <p className="subsubtitle mt30">
            😁 &nbsp;사용자 경험을 해치지 않는 코드 작성
          </p>
          <p className="mt10 text">
            데이터를 불러오고 전송하는 과정에서 사용자 경험을 해치지 않도록
            신경쓰며 개발했습니다. 한 페이지에서 여러 데이터를 불러오는 경우,
            로딩된 컴포넌트들이 깜박거리며 차례로 표시되는 대신 스켈레톤 UI를
            사용하여 사용자에게 현재 로딩되고 있는 상황임을 인지시키고 로딩된
            컴포넌트를 한 번에 볼 수 있도록 하였습니다. 이를 위해 각 데이터 로딩
            로직이 꼬임이나 오류 없이 작동하도록 코드를 작성했습니다.
          </p>
          <p className="subsubtitle mt30">🌒 &nbsp;어드민 페이지 제작</p>
          <p className="mt10 text">
            사용자에게 보여줄 데이터를 추가할 때마다 직접 데이터베이스에
            접근하는 것은 적절하지 않기 때문에, 데이터 담당 팀원이 데이터를 쉽게
            추가할 수 있는 어드민 페이지를 제작하였습니다. 현재는 데이터를
            추가하는 것만 가능하지만, 팀원의 요청 사항에 기반하여 다른 기능도
            추가할 예정입니다.
          </p>
          <p className="subsubtitle mt30">📈 &nbsp;랜딩 페이지 테스트</p>
          <p className="mt10 text">
            초기 제품 테스트에 앞서, 제품의 타겟 사용자에 대한 이해를 높이고
            비즈니스 아이디어에 대한 검증 및 구체화를 통해 랜딩 페이지를
            제작하였습니다. Google Analytics를 통해 사용자들의 페이지 뷰 횟수와
            평균 체류 기간을 확인하였고, 출시 알림 신청, 기능 선호도 조사, 자유
            피드백 기능을 통해 얻은 인사이트를 바탕으로 현재 계속해서 아이디어를
            구체화해나가고 있습니다.
          </p>
        </div>
      </MainContainer>
    </div>
  );
};

export default Sancheck;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 3rem;
  .img {
    width: 18.125rem;
    height: 30.1875rem;
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
