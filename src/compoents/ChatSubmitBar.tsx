import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FaLocationArrow } from "react-icons/fa";
import { useChatMutation } from "../hooks/chat-hook";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  chatLoading,
  conversationHistory,
  firstConversation,
  isResult,
  personalityState,
} from "../atoms/atom";
const Wrapper = styled.form<SProps>`
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
      background-color: ${(props) =>
        props.isUserClickResult ? "rgba(60, 66, 69,0.1) " : "transparent"};
      height: 100%;
      width: 100%;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border: ${(props) =>
        props.isUserClickResult ? "none" : "1px solid rgba(34, 40, 49, 0.5)"};
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
    border: ${(props) =>
      props.isUserClickResult ? "none" : "1px solid rgba(34, 40, 49, 0.5)"};
    height: 3vw;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.1s ease-in-out;
    background-color: ${(props) =>
      props.isUserClickResult ? "rgba(60, 66, 69,0.1) " : "transparent"};

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
interface SProps {
  isUserClickResult: boolean;
}
interface DProps {
  question: string;
}
export default function ChatSubmitBar() {
  const [isFirstConversation, setIsFirstConversation] =
    useRecoilState(firstConversation);
  const personailty = useRecoilValue(personalityState);
  const setCovHistory = useSetRecoilState(conversationHistory);
  const { register, handleSubmit, setValue } = useForm<DProps>();
  const [isChatLoading, setIsChatLoading] = useRecoilState(chatLoading);
  const chatMutate = useChatMutation({
    setIsFirstConversation,
    isFirstConversation,
    setCovHistory,
    setIsChatLoading,
  });
  const isUserClickResult = useRecoilValue(isResult);
  const onValid = (data: DProps) => {
    if (isFirstConversation) {
      setValue("question", "");
      setIsChatLoading(true);
      chatMutate({
        question: `
        대화형식으로 진행해주세요
        저의 고민은 다음과 같습니다 ${data.question}
        `,
      });
      setCovHistory((pre) => [
        ...pre,
        { role: "user", content: data.question },
      ]);
      return;
    }
    setValue("question", "");
    setIsChatLoading(true);
    chatMutate({
      question: data.question,
    });
    setCovHistory((pre) => [...pre, { role: "user", content: data.question }]);
  };
  return (
    <Wrapper
      onSubmit={handleSubmit(onValid)}
      isUserClickResult={isUserClickResult}
    >
      <label htmlFor="content">
        <input
          {...register("question", { required: "메세지를 입력해주세요" })}
          id="content"
          type="text"
          readOnly={isUserClickResult}
        />
      </label>
      <label htmlFor="submit">
        <span>
          <FaLocationArrow />
        </span>
        <input
          disabled={isChatLoading || isUserClickResult}
          id="submit"
          type="submit"
        />
      </label>
    </Wrapper>
  );
}
