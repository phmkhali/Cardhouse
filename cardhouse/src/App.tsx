import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
import LandingPage from "./scenes/landing-page";
import Login from "./scenes/account/login";
import SignUp from "./scenes/account/signup";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.HOME
  );

  return (
    <Router>
      <div className="app">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Routes>
          <Route path="/" element={<LandingPage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
          <Route path="/home" element={<LandingPage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
