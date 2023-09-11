import { styled } from "styled-components";
import Subtitle from "../../components/SubTitle";
import Button from "../../components/Button";
import DisplaySwiper from "../../components/Swiper";

const Section52 = () => {
  const onClick = (num: number) => {
    num === 1 && window.open("https://twitter-michelin.web.app/");
    num === 2 &&
      window.open("https://github.com/innerstella/new-twitter-michelin");
    num === 3 &&
      window.open("https://github.com/innerstella/new-twitter-michelin"); // 개발일지 쓰고 교체
    num === 4 && window.open("https://github.com/innerstella/FME");
    num === 5 &&
      window.open(
        "https://inner-stella.tistory.com/entry/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%EA%B9%8C%EC%A7%80%EB%8A%94-%EC%95%84%EB%8B%8C-%EB%A7%9B%EC%A7%91%EA%B2%80%EC%83%89%EA%B8%B0-%EC%BD%94%EB%93%9C-%EC%88%98%EC%A0%95"
      );
    num === 6 &&
      window.open(
        "https://inner-stella.tistory.com/entry/%ED%8A%B8%EC%9C%84%ED%84%B0-%EB%A7%9B%EC%A7%91-%EA%B2%80%EC%83%89%EA%B8%B0-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80"
      );
  };
  return (
    <>
      <ExpContainer>
        <p className="title-text">맛집 검색기</p>
        <div className="title-box">
          <Button type={1} onClick={() => onClick(1)} />
        </div>
        <div className="info-container">
          <div>
            <div className="info-box">
              <div className="info-col">
                <p className="section-p">period</p>
                <p className="section-p">team</p>
                <p className="section-p">tech</p>
              </div>
              <div className="info-col">
                <p className="section-p-light">22.12 ~ 23.03</p>
                <p className="section-p-light">1인 프로젝트</p>
                <p className="section-p-light">
                  React, TypeScript, Styled-Components
                </p>
              </div>
            </div>
            <p className="section-p-light">
              일 평균 200명의 유저가 사용하는 훠궈 소스 레시피들을 모아서
              보여주는 서비스
            </p>
          </div>
          <DisplaySwiper type={3} />
        </div>
        <div className="margin"></div>
        <div className="btns">
          <Subtitle content="Version 2.0" />
          <Button type={2} onClick={() => onClick(2)} />
          <Button type={3} onClick={() => onClick(3)} />
        </div>
        <li className="section-p-light line-gap ">
          재사용성과 유지보수성 향상을 위한 TypeScript, React 리팩터링
        </li>
        <li className="section-p-light line-gap ">
          사용성 향상을 위한 UI 개선
        </li>
        <div className="margin"></div>
        <div className="btns">
          <Subtitle content="Version 1.5" />
          <Button type={2} onClick={() => onClick(4)} />
          <Button type={3} onClick={() => onClick(5)} />
        </div>
        <li className="section-p-light line-gap ">
          함수의 재사용성을 고려하여 로직 개선
        </li>
        <div className="margin"></div>
        <div className="btns">
          <Subtitle content="Version 1.0" />
          <Button type={3} onClick={() => onClick(6)} />
        </div>
        <li className="section-p-light line-gap ">
          사용자로부터 입력받은 값을 포함한 검색 링크 자동 생성 기능 개발
        </li>
        <li className="section-p-light line-gap ">
          통합 검색 및 그룹별 검색 기능 개발
        </li>
      </ExpContainer>
    </>
  );
};

export default Section52;

const ExpContainer = styled.div`
  .margin {
    height: 4rem;
  }
  .line-gap {
    padding-bottom: 1rem;
  }
  .btns {
    display: flex;
    gap: 1rem;
  }
  .title-text {
    color: #fff;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 2rem;
  }
  .title-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .info-container {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    .info-box {
      display: flex;
      flex-direction: row;
      padding-top: 2rem;
      padding-bottom: 3rem;
      gap: 2rem;
      .info-col {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
