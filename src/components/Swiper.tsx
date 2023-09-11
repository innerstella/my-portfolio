import { styled } from "styled-components";

type Props = {
  type: number;
};

// 1 : 연픽
// 2 : 증기침입 위해성 평가
// 3 : 맛집 검색기
// 4 : 훠궈 소스 백과사전

const DisplaySwiper = ({ type }: Props) => {
  return (
    <MainContainer>
      {type === 3 && (
        <>
          <img src="/assets/png/img-phone.png" alt="display" className="img" />
        </>
      )}
    </MainContainer>
  );
};

export default DisplaySwiper;

const MainContainer = styled.div`
  .img {
    width: 20rem;
  }
`;
