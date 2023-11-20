import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nextPageState, personalityState } from "../atoms/atom";
import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const Wrapper = styled.div`
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
`;
const SelectionContainer = styled.form<ClickProps>`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6vw 0;
  position: relative;
  label {
    width: 40%;
    display: flex;
    align-items: center;
    padding: 0.5vw;
    border: 1px solid
      ${(props) =>
        props.isPersonailty
          ? "rgba(0, 133, 255, 1)"
          : "rgba(0, 133, 255, 0.4)"};
    border-radius: 10px;
    svg {
      width: 2vw;
      height: 2vw;
      color: ${(props) =>
        props.isPersonailty
          ? "rgba(0, 133, 255, 1)"
          : "rgba(0, 133, 255, 0.4)"};
      margin-right: 0.5vw;
    }
    &:focus-within {
      border-color: ${(props) => props.theme.mainColor};
    }
    &:focus-within svg {
      color: ${(props) => props.theme.mainColor};
    }
  }
  input {
    width: 100%;
    border: none;
    padding: 0.5vw;
    &:focus {
      outline: none;
    }
  }
  input[type="submit"] {
    width: 12vw;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.bgColor};
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 1vw 3vw;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
    font-size: 1.3vw;
    opacity: ${(props) => (props.isPersonailty ? 1 : 0.5)};
    position: absolute;
    bottom: -8vw;
    left: 50%;
    transform: translateX(-50%);
    &:hover {
      cursor: pointer;
      opacity: ${(props) => (props.isPersonailty ? 1 : 0.5)};
      background-color: ${(props) =>
        props.isPersonailty ? props.theme.bgColor : props.theme.mainColor};
      color: ${(props) =>
        props.isPersonailty ? props.theme.mainColor : props.theme.bgColor};
      /* background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.mainColor}; */
      border: 1px solid ${(props) => props.theme.mainColor};
    }
  }
`;
interface ClickProps {
  isPersonailty: boolean;
}
interface DProps {
  mbti: string;
}
export default function Selection() {
  const [personailty, setPersonailty] = useRecoilState(personalityState);
  const setNextPage = useSetRecoilState(nextPageState);
  const { register, watch, handleSubmit } = useForm<DProps>();
  const handleNextClcik = () => {
    if (!personailty) {
      return;
    }
    setNextPage(true);
  };
  const onValid = (data: DProps) => {
    setNextPage(true);
    setPersonailty(data.mbti);
  };
  useEffect(() => {
    const regex = /^[eiEI][snSN][tfTF][jpJP]$/;
    if (!regex.test(watch("mbti"))) {
      setPersonailty(null);
      return;
    }
    setPersonailty(watch("mbti"));
  }, [watch("mbti")]);
  return (
    <Wrapper>
      <h1>당신의 MBTI를 입력해주세요</h1>
      <SelectionContainer
        onSubmit={handleSubmit(onValid)}
        isPersonailty={Boolean(personailty)}
      >
        <label htmlFor="personality">
          <CiSearch />
          <input
            {...register("mbti", {
              required: "mbti를 입력해주세요",
            })}
            id="personality"
            type="text"
            required
            maxLength={4}
          />
        </label>
        <input
          type="submit"
          onClick={handleNextClcik}
          disabled={!personailty}
          value={"Continue"}
        />
      </SelectionContainer>
    </Wrapper>
  );
}
