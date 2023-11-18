import styled from "styled-components";
import ChatLeft from "./ChatLetf";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  chatLoading,
  chatResultContent,
  chatState,
  conversationHistory,
  firstConversation,
  isResult,
  nextPageState,
  personalityState,
} from "../atoms/atom";
import ChatLeftLoading from "./ChatLeftLoading";
import { postReset } from "../api/chat-api";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vw;
  position: relative;
  button {
    position: absolute;
    bottom: 6vw;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    padding: 1.5vw;
    border-radius: 10px;
    font-size: 1.2vw;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.mainColor};
    transition: all 0.1s ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.mainColor};
      color: white;
    }
  }
`;

export default function Result() {
  const isUserFinish = useRecoilValue(isResult);
  const isChatLoading = useRecoilValue(chatLoading);
  const chatResult = useRecoilValue(chatResultContent);
  const setNextPage = useSetRecoilState(nextPageState);
  const setPersonality = useSetRecoilState(personalityState);
  const setChatState = useSetRecoilState(chatState);
  const setFirstConversation = useSetRecoilState(firstConversation);
  const setConversationHistory = useSetRecoilState(conversationHistory);
  const setIsResult = useSetRecoilState(isResult);
  const setChatResultContent = useSetRecoilState(chatResultContent);
  const handleResetClick = () => {
    postReset({ role: "funny" });
    setNextPage(false);
    setPersonality(null);
    setChatState("chat");
    setFirstConversation(true);
    setConversationHistory([]);
    setIsResult(false);
    setChatResultContent("");
  };
  return (
    <Wrapper>
      {isUserFinish ? (
        isChatLoading ? (
          <ChatLeftLoading />
        ) : (
          <>
            <ChatLeft message="지금까지의 상담 내용을 요약하면 다음과 같습니다" />
            <ChatLeft message={chatResult} />
            <button onClick={() => handleResetClick()}>처음으로</button>
          </>
        )
      ) : (
        <ChatLeft message="상담 결과를 보고싶다면, 상담화면의 우측상단 결과보기 버튼을 눌러주세요" />
      )}
    </Wrapper>
  );
}
