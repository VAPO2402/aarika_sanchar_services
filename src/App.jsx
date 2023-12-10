import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

import './styles/App.scss'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
