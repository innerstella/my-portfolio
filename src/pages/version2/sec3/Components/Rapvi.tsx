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
          <p className="subtitle">📊 증기침입 위해성 평가</p>
          <p className="text mt10">
            💬 RAPVI(Risk Assessment Program for Vapor Intrusion)는 증기침입으로
            인해 발생하는 위해성을 평가하기 위해 제작된 프로그램으로, 고려대학교
            지구환경과학과 환경수리지질연구실에서 제작하였습니다.
            <br />
            <br />
            총 2가지 유형(기본 평가와 부지 기반 평가)의 위해성 평가를 진행할 수
            있으며, 기존 MATLAB 프로그램 방식 대신 웹 기반 서비스로 제공하여
            사용자 편의성을 높였으며, 평가에 대한 결과를 보고서 형식으로 생성한
            후 PDF로 저장할 수 있게 하였습니다.
            <br />
            <br />
            Period | 22.03 ~ 22.12.
            <br />
            Position | 개발팀장, 프론트엔드 웹 개발
            <br />
            Tech | React, JavaScript, Google Maps API
          </p>
          <p className="subsubtitle mt30">✔️ 프로젝트 관리</p>
          <p className="mt10 text">
            - 배포 및 유지보수 비용 계획 수립
            <br />
            - 팀 별 협업 소통 방식 정립
            <br />- 기능 개발 일정 관리
          </p>
          <p className="subsubtitle mt30">✔️ 기능 개발/기획</p>
          <p className="mt10 text">
            - csv 데이터를 간편하게 입력하고 확인할 수 있도록 에디터 구현
            <br />
            - 유저가 입력한 값을 효과적으로 확인할 수 있도록 히트맵, 그래프, 표,
            지도(Google Maps API)로 시각화
            <br />- 전체 평가 과정에 대한 보고서를 PDF 형식으로 출력하는 기능
            개발 진행
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
