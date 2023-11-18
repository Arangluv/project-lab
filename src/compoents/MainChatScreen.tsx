import styled from "styled-components";
import ChatLeft from "./ChatLetf";
import ChatRight from "./ChatRight";
import ChatLeftLoading from "./ChatLeftLoading";
import { useRecoilValue } from "recoil";
import {
  chatLoading,
  conversationHistory,
  personalityState,
} from "../atoms/atom";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-left: 3vw;
  padding-top: 3vw;
  overflow-y: scroll;
`;

export default function MainChatScreen() {
  const selectedPersonality = useRecoilValue(personalityState);
  const covHistory = useRecoilValue(conversationHistory);
  const isChatLoading = useRecoilValue(chatLoading);
  return (
    <Wrapper>
      <ChatLeft
        message={`안녕하세요! AI상담 서비스를 이용해주셔서 감사합니다 :)
선택하신 성격유형은 "${selectedPersonality?.toUpperCase()}"입니다.
어떤 고민이 있으신가요?`}
      />
      {covHistory.map((conversation, idx) => {
        return conversation.role === "user" ? (
          <ChatRight key={idx} message={conversation.content} />
        ) : (
          <ChatLeft key={idx} message={conversation.content} />
        );
      })}
      {isChatLoading ? <ChatLeftLoading /> : null}
    </Wrapper>
  );
}
