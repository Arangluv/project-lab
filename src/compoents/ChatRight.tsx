import styled from "styled-components";
import { BiSolidUserCircle } from "react-icons/bi";
const Wrapper = styled.div`
  width: 100%;
  min-height: 5vw;
  height: auto;
  display: flex;
`;

const UserProfileBox = styled.div`
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
  width: calc(100% - 5vw);
  height: auto;
  min-height: 5vw;
  display: flex;
  align-items: flex-end;
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
export default function ChatRight({ message }: IProps) {
  return (
    <Wrapper>
      <ChatContainer>
        <span>{message}</span>
      </ChatContainer>
      <UserProfileBox>
        <BiSolidUserCircle />
      </UserProfileBox>
    </Wrapper>
  );
}
