import { styled } from "styled-components";
import { motion } from "framer-motion";
import LinkButton from "../../components/LinkButton";

const Rapvi = () => {
  const content1 = {
    where: "tistory",
    text: "프로젝트 회고",
    link: "https://inner-stella.tistory.com/entry/%EC%95%BD-4%EA%B0%9C%EC%9B%94-%EA%B0%84%EC%9D%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EB%81%9D%EB%82%B4%EA%B3%A0-%EC%93%B0%EB%8A%94-%EA%B0%9C%EC%9D%B8-%ED%9A%8C%EA%B3%A0",
  };

  const content2 = {
    where: "tistory",
    text: "배포 및 운영 비용",
    link: "https://inner-stella.tistory.com/entry/%EB%B0%B0%ED%8F%AC-%EB%B0%8F-%EC%9A%B4%EC%98%81-%EB%B9%84%EC%9A%A9",
  };

  const content3 = {
    where: "tistory",
    text: "Google Maps Polygon",
    link: "https://inner-stella.tistory.com/entry/Google-Map-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0",
  };

  return (
    <div className="mt100">
      <MainContainer>
        <div className="flex-col">
          <motion.img
            src="/assets/png/img-rapvi.png"
            alt="rapvi"
            className="img pointer"
            onClick={() => window.open("https://rapvi-ku.web.app/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="flex-left">
            <LinkButton content={content1} />
            <LinkButton content={content2} />
            <LinkButton content={content3} />
          </div>
        </div>
        <div className="box">
          <p className="subtitle">📊 &nbsp;증기침입 위해성 평가</p>
          <p className="text mt10">
            <br />
            💬 &nbsp;RAPVI(Risk Assessment Program for Vapor Intrusion)는
            증기침입으로 인해 발생하는 위해성을 평가하기 위해 제작된
            프로그램으로, 고려대학교 지구환경과학과 환경수리지질연구실에서
            제작하였습니다.
            <br />
            <br />
            Period | 22.12 ~ 23.03.
            <br />
            Position | 웹 프론트엔드 개발
            <br />
            Tech | React, JavaScript, Google Maps API
            <br />
            <br />
          </p>
          <p className="subsubtitle mt30">🫂 &nbsp;사용자 친화적 기능 개발</p>
          <p className="mt10 text">
            본 프로젝트의 목적은 사용자가 더 편리하게 기능을 사용할 수 있도록
            기존에 MATLAB으로 구현되어 있던 기능을 웹 서비스로 구현하는
            것이었습니다. 평가 과정의 특징은 다량의 데이터를 입력받는 것이었기
            때문에, 개발하는 과정에서 사용자가 편리하게 데이터를 입력하고 확인할
            수 있게 하는 것에 초점을 맞췄습니다.
            <li className="li-gap">
              메뉴 바 진행상황 표시 : 한 파트에 대한 데이터 입력이 완료되면 좌측
              메뉴바에서도 해당 데이터에 대한 입력 여부를 시각적으로 확인할 수
              있게 하였습니다.
            </li>
            <li className="li-gap">
              입력 방식: csv 데이터를 입력받는 부분에서는 원본 파일을 첨부하는
              것은 추후 데이터 계산 시 형식이 맞지 않아 오류가 날 확률이 높다고
              생각했습니다. 이를 방지하고자 데이터 템플릿을 제공해보려 했지만,
              템플릿을 다운받고 새로 작성하여 첨부하는 과정 또한 번거로워 사용자
              친화적이지 않다고 생각했습니다. 이를 해결하기 위해 사용자가
              클립보드에 csv데이터를 복사한 후 붙여넣을 수 있게 하는 기능을
              개발했습니다.
            </li>
            <li className="li-gap">
              입력값 시각화 : 다량의 데이터가 입력되는 과정에서 입력한 값을
              확인하고 싶어하는 사용자의 요구 사항이 있었습니다. 이를 위해 csv
              데이터 입력 시 원본 데이터 뿐만 아니라, 해당 데이터로 그려진 heat
              map을 확인할 수 있도록 외부 라이브러리를 사용하지 않고 직접
              구현해보았습니다. 또한 Google Maps API를 사용하여 평가하고자 하는
              부지에 대한 정보를 지도 상에서도 확인할 수 있도록 하였습니다.
            </li>
          </p>
          <p className="subsubtitle mt30">🗂️ &nbsp;프로젝트 관리</p>
          <p className="mt10 text">
            이전에 진행했던 프로젝트와의 차이점은 연구실 인원까지 함께 하여 조금
            더 효율적인 협업이 필요했던 것이었습니다. 정해진 기간 내에
            프로젝트를 완성하기 위해서 노션을 활용하여 기능 개발 일정을
            관리했고, 정기적인 회의 전 각 팀별로 진행상황과 안건을 미리 정리하여
            공유하는 방식을 제안하여 효율적인 회의를 진행하기 위해 노력했습니다.
            또한 프로젝트가 끝난 후에도 서비스가 계속해서 운영될 예정이었기
            때문에, 개발을 하는 과정에서 배포 플랫폼, API 사용 요금 등에 대해
            고민하고 문서를 작성하였습니다. 이 과정을 통해 프로젝트를 완성하기
            위해서는 단순히 코드를 짜는 것 외에도 고려해야 할 것이 많다는 것을
            알게 되었습니다.
          </p>
          <p className="subsubtitle mt30">🤓 &nbsp;배운 점</p>
          <p className="mt10 text">
            <li>
              기간 내에 기능 개발을 완료하기 위해 효율적인 협업 방식에 대해
              고민해보았습니다.
            </li>
            <li>
              프론트엔드를 혼자 맡아 개발하며 책임감을 기를 수 있었습니다.
            </li>
            <li>
              백엔드 개발자와 협업하며 REST API를 통한 데이터 통신을 이해할 수
              있었습니다.
            </li>
            <li>
              서비스의 지속적인 운영을 위한 비용적인 측면을 고려해보았습니다.
            </li>
          </p>
        </div>
      </MainContainer>
    </div>
  );
};

export default Rapvi;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 3rem;
  .li-gap {
    margin-top: 10px;
  }
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
