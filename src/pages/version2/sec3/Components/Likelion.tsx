import { styled } from "styled-components";
import LinkButton from "../../components/LinkButton";

const Likelion = () => {
  const content1 = {
    where: "tistory",
    text: "연합 해커톤",
    link: "https://inner-stella.tistory.com/entry/2022-%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC-%EC%97%B0%ED%95%A9%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%A7%80%EA%B8%88-%EB%AD%90%ED%95%B4",
  };

  return (
    <div className="mt100">
      <MainContainer>
        <div className="flex-col">
          <img
            src="/assets/png/img-logo-likelion.png"
            alt="likelion"
            className="img"
          />
          <div className="flex-left">
            <LinkButton content={content1} />
          </div>
        </div>
        <div className="box">
          <p className="subtitle">🦁 고려대학교 멋쟁이사자처럼 10기</p>
          <p className="text mt10">
            💬 서비스 기획에서부터 코딩을 통한 구현까지 경험하며 새로운 가치
            창출에 도전하고 학회원들간 열정과 비전을 공유하는 소프트웨어벤처
            학회
            <br />
            <br />
            Period | 22.03 ~ 22.12.
            <br />
            Position | 학회원
          </p>
          <p className="subsubtitle mt30">✔️ 세션 참여</p>
          <p className="mt10 text">
            - 기획 및 개발 관련 학습 세션 참여
            <br />- 프론트엔드 세션 진행 (React)
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

export default Likelion;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  gap: 3rem;
  .img {
    width: 12.5rem;
    height: 12.5rem;
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
