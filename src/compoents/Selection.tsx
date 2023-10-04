import styled from "styled-components";
import { FaRegSurprise } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nextPageState, personalityState } from "../atoms/atom";
import { useState } from "react";
const Wrapper = styled.div<ClickProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.mainColor};
    font-weight: 600;
    font-size: 3vw;
  }
  button {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.bgColor};
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 1vw 3vw;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
    font-size: 1.3vw;
    opacity: ${(props) => (props.isClick ? 1 : 0.5)};
    &:hover {
      cursor: pointer;
      opacity: ${(props) => (props.isClick ? 1 : 0.5)};
      background-color: ${(props) =>
        props.isClick ? props.theme.bgColor : props.theme.mainColor};
      color: ${(props) =>
        props.isClick ? props.theme.mainColor : props.theme.bgColor};
      /* background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.mainColor}; */
      border: 1px solid ${(props) => props.theme.mainColor};
    }
  }
`;
const SelectionContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  margin: 6vw 0;
`;
interface ClickProps {
  isClick: boolean;
}
const PersonailtyItem = styled.div<ClickProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2vw;
  width: 40vh;
  height: 100%;
  border-radius: 30px;
  background-color: ${(props) =>
    props.isClick ? props.theme.mainColor : props.theme.subColor};
  transition: all 0.1s ease-in-out;
  svg {
    color: ${(props) =>
      props.isClick ? props.theme.bgColor : props.theme.mainColor};
    width: 5vw;
    height: 5vw;
  }
  span {
    position: absolute;
    color: ${(props) =>
      props.isClick ? props.theme.bgColor : props.theme.mainColor};
    bottom: 1vw;
    font-size: 1.3vw;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.mainColor};
    svg,
    span {
      color: ${(props) => props.theme.bgColor};
    }
  }
`;
export default function Selection() {
  const [personailty, setPersonailty] = useRecoilState(personalityState);
  const setNextPage = useSetRecoilState(nextPageState);
  const handleNextClcik = () => {
    if (!personailty) {
      return;
    }
    setNextPage(true);
  };
  return (
    <Wrapper isClick={Boolean(personailty)}>
      <h1>상담받고 싶은 성격을 선택해주세요</h1>
      <SelectionContainer>
        <PersonailtyItem
          onClick={() => setPersonailty("realistic")}
          isClick={personailty === "realistic"}
        >
          <BsFillBarChartFill />
          <span>현실적인</span>
        </PersonailtyItem>
        <PersonailtyItem
          onClick={() => setPersonailty("sympathetic")}
          isClick={personailty === "sympathetic"}
        >
          <FaRegSurprise />
          <span>공감하는</span>
        </PersonailtyItem>
        <PersonailtyItem
          onClick={() => setPersonailty("witty")}
          isClick={personailty === "witty"}
        >
          <AiFillCode />
          <span>재치있는</span>
        </PersonailtyItem>
      </SelectionContainer>
      <button onClick={handleNextClcik} disabled={!personailty}>
        Continue
      </button>
    </Wrapper>
  );
}
