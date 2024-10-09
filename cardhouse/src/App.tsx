import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
import LandingPage from "./scenes/landing-page";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.DASHBOARD
  );

  return (
    <>
      <div className="app">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <LandingPage
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
        </LandingPage>
      </div>
    </>
  );
}

export default App;
