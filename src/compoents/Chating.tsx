import styled from "styled-components";
import MainChatScreen from "./MainChatScreen";
import { BiSolidBot } from "react-icons/bi";
import { BsFillArrowLeftCircleFill, BsChatLeft } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import ChatSubmitBar from "./ChatSubmitBar";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  chatLoading,
  chatResultContent,
  chatState,
  isResult,
  nextPageState,
  personalityState,
} from "../atoms/atom";
import Result from "./Result";
import { useSummaryMutation } from "../hooks/chat-hook";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const SideBar = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3vw 0;
  background-color: rgba(34, 40, 49, 0.05);
  svg {
    width: 3vw;
    height: 3vw;
  }
  #logo-icon {
    color: ${(props) => props.theme.mainColor};
  }
  #prev-btn {
    color: #61ba61;
  }
`;
const SubSideBarContent = styled.ul`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1vw 0;
    border-radius: 10px;
    margin-bottom: 1vw;
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.mainColor};
      svg {
        color: ${(props) => props.theme.bgColor};
      }
    }
    svg {
      width: 2vw;
      height: 2vw;
      color: ${(props) => props.theme.textColor};
    }
  }
`;
const ChatScreen = styled.div`
  display: grid;
  width: 92%;
  height: 100vh;
  grid-template-columns: 85% 15%;
  grid-template-rows: 85% 15%;
  #chat-sidebar {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    display: flex;
    justify-content: center;
    padding-top: 3vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    section {
      border: 1px solid ${(props) => props.theme.mainColor};
      padding: 1vw 3vw;
      border-radius: 40px;
      transition: all 0.1s ease-in-out;
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.mainColor};
        svg {
          color: ${(props) => props.theme.bgColor};
        }
      }
      svg {
        color: ${(props) => props.theme.mainColor};
        width: 2.5vw;
        height: 2.5vw;
      }
    }
  }
`;
export default function Chatting() {
  const setNextPage = useSetRecoilState(nextPageState);
  const setIsUserResultClick = useSetRecoilState(isResult);
  const setPersonalityState = useSetRecoilState(personalityState);
  const setChatLoading = useSetRecoilState(chatLoading);
  const setChatResultContent = useSetRecoilState(chatResultContent);
  const [chatingState, setChatingState] = useRecoilState(chatState);
  
  // TODO PrevClick 
  const handlePrevClick = () => {
    setNextPage(false);
    setPersonalityState(null);
  };
  const chatSummaryMutate = useSummaryMutation({
    setChatLoading,
    setChatResultContent,
  });
  const handleSummaryClick = () => {
    chatSummaryMutate({
      question:
        "지금까지 우리가 한 대화내용을 3줄 요약해줘. 보고서의 결론부분처럼 요약해줘",
    });
    setChatingState("result");
    setIsUserResultClick(true);
    setChatLoading(true);
  };
  return (
    <Wrapper>
      <SideBar>
        <BiSolidBot id="logo-icon" />
        <SubSideBarContent>
          <li
            onClick={() => setChatingState("chat")}
            style={{
              backgroundColor:
                chatingState === "chat" ? "#0085FF" : "transparent",
            }}
          >
            <BsChatLeft
              style={{
                color: chatingState === "chat" ? "#fcfefe" : "black",
              }}
            />
          </li>
          <li
            onClick={() => setChatingState("result")}
            style={{
              backgroundColor:
                chatingState === "result" ? "#0085FF" : "transparent",
            }}
          >
            <AiOutlineBarChart
              style={{
                color: chatingState === "result" ? "#fcfefe" : "black",
              }}
            />
          </li>
        </SubSideBarContent>
        <BsFillArrowLeftCircleFill onClick={handlePrevClick} id="prev-btn" />
      </SideBar>
      {chatingState === "chat" ? (
        <ChatScreen>
          <MainChatScreen />
          <ChatSubmitBar></ChatSubmitBar>
          <div id="chat-sidebar">
            <section onClick={() => handleSummaryClick()}>
              <AiOutlineBarChart />
            </section>
          </div>
        </ChatScreen>
      ) : (
        <Result />
      )}
    </Wrapper>
  );
}
