import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage, UserType } from "./shared/types";
import LandingPage from "./scenes/landing-page";
import Dashboard from "./scenes/dashboard";
import Login from "./scenes/account/login";
import SignUp from "./scenes/account/signup";
import Deck from "./scenes/deck";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.HOME
  );
  const userFromStorage = sessionStorage.getItem("user");
  const [user, setUser] = useState<UserType | null>(
    userFromStorage ? JSON.parse(userFromStorage) : null
  );
  return (
    <Router>
      <div className="app">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            }
          />
          <Route
            path="/home"
            element={
              <LandingPage
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            }
          />
          <Route path="/deck/:id" element={<Deck />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
