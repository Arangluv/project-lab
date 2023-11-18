import styled from "styled-components";
import { BiSolidBot } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { firstConversation } from "../atoms/atom";
const Wrapper = styled.div`
  width: 100%;

  min-height: 5vw;
  height: auto;
  display: flex;
`;

const ProfileBox = styled.div`
  width: 5vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${(props) => props.theme.mainColor};
    width: 2.5vw;
    height: 2.5vw;
  }
`;
const ChatContainer = styled.div`
  width: calc(70% - 5vw);
  height: auto;
  min-height: 5vw;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 1.3vw;
  span {
    width: auto;
    background-color: rgba(34, 40, 49, 0.05);
    border-radius: 10px;
    padding: 1vw 1vw;
    margin-bottom: 1vw;
    white-space: pre-wrap;
  }
`;
interface IProps {
  message: string;
}
export default function ChatLeft({ message }: IProps) {
  const isFirstConversation = useRecoilValue(firstConversation);
  return (
    <Wrapper>
      <ProfileBox>
        <BiSolidBot />
      </ProfileBox>
      <ChatContainer>
        <span>{message}</span>
      </ChatContainer>
    </Wrapper>
  );
}
