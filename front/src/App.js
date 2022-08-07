import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateMenu from "./pages/CreateMenu/CreateMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createMenu" element={<CreateMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
