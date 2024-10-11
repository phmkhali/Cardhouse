import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage, UserType } from "./shared/types";
import LandingPage from "./scenes/landing-page";
import Login from "./scenes/account/login";
import SignUp from "./scenes/account/signup";
import { AuthContext } from "./context/AuthContext";

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
        <AuthContext.Provider value={{ user, setUser }}>
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
          </Routes>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
