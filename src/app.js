import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./components/join/join";
import Chat from "./components/chat/chat";
const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    <div style={{ background: "#1A1A1D", textAlign: "center" }}>
      <span class="badge bg-info text-dark mx-3">made by: Mostafa Kadry</span>
      <span class="badge bg-info text-dark mx-3">+201009158274</span>
      <span class="badge bg-info text-dark mx-3">
        mostafakadry806@gmail.com
      </span>
    </div>
  </Router>
);

export default App;
