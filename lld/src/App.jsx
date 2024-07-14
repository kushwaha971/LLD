
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordian from "./component/Accordian";
import InfiniteScroll from "./component/InfiniteScroll";


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accordian/>}/>
      <Route path="/scroll" element={<InfiniteScroll/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
