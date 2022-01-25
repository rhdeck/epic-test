import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Launch from "./Launch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/launch" element={<Launch />} />
    </Routes>
  );
}

export default App;
