import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sign_in" element={<Sign_in />} />
            <Route path="/Sign_up" element={<Sign_up />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
// Kouno/0704DB
export default App;
