import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Web from "./web";
import Mobile from "./mobile";
import Version2 from "./version2";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <MainContainer>{windowWidth > 1000 ? <Web /> : <Mobile />}</MainContainer>
    <MainContainer>
      <Version2 />
    </MainContainer>
  );
};

export default HomePage;

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 25px;
  background-color: var(--gray100);
  align-content: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

// const HomePage = () => {
//   return (
//     <div className="bg-custom-navy h-screen w-screen flex justify-center">
//       <div className="flex flex-row justify-center">
//         <img
//           className="w-32 h-32"
//           src="/assets/img-profile.png"
//           alt="profile-1"
//         />

//         {/* 텍스트 */}
//         <div className="flex flex-col">
//           <p className="text-white font-size-50 font-normal text-4xl">
//             직접 만드는 것을 좋아하는 개발자
//           </p>
//           <p>
//             <span className="text-white font-size-70 font-extrabold text-6xl">
//               차수지
//             </span>
//             <span className="text-white font-size-70 font-bold text-6xl">
//               {" "}
//               입니다
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomePage;
