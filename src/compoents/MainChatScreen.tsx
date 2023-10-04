import styled from "styled-components";
import ChatLeft from "./ChatLetf";
import ChatRight from "./ChatRight";
import ChatLeftLoading from "./ChatLeftLoading";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-left: 3vw;
  padding-top: 3vw;
  overflow-y: scroll;
`;

export default function MainChatScreen() {
  return (
    <Wrapper>
      <ChatLeft />
      <ChatRight />
      <ChatLeft />
      <ChatLeft />
      <ChatRight />
      <ChatLeft />
      <ChatLeftLoading />
    </Wrapper>
  );
}
