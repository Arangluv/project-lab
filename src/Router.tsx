import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
