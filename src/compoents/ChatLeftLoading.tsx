import styled from "styled-components";
import { BiSolidBot } from "react-icons/bi";
import BeatLoader from "react-spinners/BeatLoader";
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
  width: calc(100% - 5vw);
  height: auto;
  min-height: 5vw;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

export default function ChatLeftLoading() {
  return (
    <Wrapper>
      <ProfileBox>
        <BiSolidBot />
      </ProfileBox>
      <ChatContainer>
        <BeatLoader color="#0085FF" size={15} />
      </ChatContainer>
    </Wrapper>
  );
}
