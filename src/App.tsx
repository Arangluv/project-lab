import styled from "styled-components";
import Selection from "./compoents/Selection";
import { useRecoilValue } from "recoil";
import { nextPageState } from "./atoms/atom";
import Chatting from "./compoents/Chating";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function App() {
  const isNextPage = useRecoilValue(nextPageState);
  return <Wrapper>{isNextPage ? <Chatting /> : <Selection />}</Wrapper>;
}

export default App;
