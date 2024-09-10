import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BoardPage from "./pages/BoardPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
