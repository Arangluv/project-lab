import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa";
const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  padding-left: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus-within {
    label[for="submit"] {
      border: 1px solid rgba(34, 40, 49, 1);
    }
  }
  label[for="content"] {
    width: 85%;
    height: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      height: 100%;
      width: 100%;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border: 1px solid rgba(34, 40, 49, 0.5);
      border-right: none;
      padding-left: 1vw;
      font-size: 1.2vw;
      &:focus {
        outline: none;
        border-color: #222831;
      }
    }
  }
  label[for="submit"] {
    width: 15%;
    border: 1px solid rgba(34, 40, 49, 0.5);
    height: 3vw;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.1s ease-in-out;
    span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      svg {
        color: ${(props) => props.theme.mainColor};
      }
    }
    &:hover {
      background-color: ${(props) => props.theme.mainColor};
      border-color: ${(props) => props.theme.mainColor};
      span {
        svg {
          color: ${(props) => props.theme.bgColor};
        }
      }
    }
    input {
      display: none;
    }
  }
`;

export default function ChatSubmitBar() {
  return (
    <Wrapper>
      <label htmlFor="content">
        <input id="content" type="text" />
      </label>
      <label htmlFor="submit">
        <span>
          <FaLocationArrow />
        </span>
        <input id="submit" type="submit" />
      </label>
    </Wrapper>
  );
}
