import { useEffect, useState } from "react";
import Navbar from "./scenes";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.DASHBOARD
  );

  return (
    <>
      <div className="app">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

      </div>
    </>
  );
}

export default App;
