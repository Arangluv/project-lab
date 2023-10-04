import styled from "styled-components";
import { BiSolidBot } from "react-icons/bi";
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
export default function ChatLeft() {
  return (
    <Wrapper>
      <ProfileBox>
        <BiSolidBot />
      </ProfileBox>
      <ChatContainer>
        <span>안녕하세요!</span>
        <span>
          {`여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서
부당한 차별을 받지 아니한다. 국무회의는 대통령·국무총리와 15인 이상
30인 이하의 국무위원으로 구성한다.
          
헌법개정안이 제2항의 찬성을 얻은때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다. 법관이
중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에
의하여 퇴직하게 할 수 있다.`}
        </span>
        <span>테스트 123</span>
      </ChatContainer>
    </Wrapper>
  );
}
