import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./route/Detail";
import Home from "./route/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/movie`} element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
