import styled from "@emotion/styled";
import React from "react";
import { lightTheme, theme } from "../../styles/theme";

const BlogContainer = styled.div`
  min-width: 1200px;
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  align-items: center;
  background-color: ${lightTheme.colors.surface};
  width: 100%;
  min-height: 500px;
  border-radius: ${theme.borderRadius.ls};
`;
const TitleText = styled.h1`
  color: ${lightTheme.colors.primary};
  font-size: 54px;
  font-weight: 700;
`;

const TitleMidText = styled.p`
  text-align: center;
  font-size: 21px;
`;

const TitleBtn = styled.button`
  width: 180px;
  height: 57px;
  background-color: ${lightTheme.colors.primary};
  color: ${lightTheme.colors.surface};
  font-size: 21px;
  border-radius: ${theme.borderRadius.ls};
`;

const MainContainer = styled.div`
  padding: 50px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  width: 100%;
`;

const LearnContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  min-height: 200px;
`;

const MainTextWrap = styled.button`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  background-color: ${lightTheme.colors.surface};
  min-width: 350px;
  min-height: 150px;
  border-radius: ${theme.borderRadius.ls};
`;

const MainTitleText = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const MainDescText = styled.p`
  font-size: 16px;
  color: ${lightTheme.colors.text};
`;
export default function Main() {
  return (
    <BlogContainer>
      <MainWrap>
        <TitleText>리액트로 만드는 나만의 공간</TitleText>
        <TitleMidText>
          공부한 내용을 기록하고 일상을 공유하는 블로그 입니다. 리액트의 다양한
          <br />
          기능을 직접 구현해보며 만들었습니다.
        </TitleMidText>
        <TitleBtn>글쓰기 시작</TitleBtn>
      </MainWrap>
      <LearnContent>
        <h2>배운 내용</h2>
      </LearnContent>
      <MainContainer>
        <MainTextWrap>
          <MainTitleText>JSX</MainTitleText>
          <MainDescText>자바스크립트의 확장 문법</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>Props</MainTitleText>
          <MainDescText>컴포넌트에 전달되는 데이터</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>useState</MainTitleText>
          <MainDescText>상태 관리를 위한 Hook</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>useEffect</MainTitleText>
          <MainDescText>Side Effect를 처리하는 Hook</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>useRef</MainTitleText>
          <MainDescText>DOM 요소나 값을 참조하는 Hook</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>Context API</MainTitleText>
          <MainDescText>전역 상태 관리</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>useMemo</MainTitleText>
          <MainDescText>연산 결과 캐싱 (메모이제이션)</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>useCallback</MainTitleText>
          <MainDescText>함수 캐싱 (메모이제이션)</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>useReducer</MainTitleText>
          <MainDescText>복잡한 상태 로직 관리</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>Custom Hook</MainTitleText>
          <MainDescText>나만의 Hook 만들기</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>children</MainTitleText>
          <MainDescText>컴포넌트 태그 사이의 내용</MainDescText>
        </MainTextWrap>
        <MainTextWrap>
          <MainTitleText>Life Cycle</MainTitleText>
          <MainDescText>컴포넌트의 생명주기</MainDescText>
        </MainTextWrap>
      </MainContainer>
    </BlogContainer>
  );
}
