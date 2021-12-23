import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./route/Detail";
import Home from "./route/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
