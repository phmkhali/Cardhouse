import "./App.css";

function App() {
  return (
    <>
      <h1 className="font-lato font-extrabold text-6xl">Cardhouse</h1>
      <div className="flex">
      <div className="w-[500px] h-[500px] bg-primary"></div>
      <div className="w-[500px] h-[500px] bg-secondary"></div>
      <div className="w-[500px] h-[500px] bg-accent"></div>
      </div>
    </>
  );
}

export default App;
