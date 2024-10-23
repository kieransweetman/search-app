import { useState } from "react";

function App() {
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-screen">
        <div className="flex flex-row gap-8">
          <img src="vite.svg" width={150} />
          <img src="react.svg" width={150} />
        </div>
        <h1 className="text-4xl font-bold text-white w-3/4 text-center leading-relaxed">
          Vite + ReactJS
          <br />
          Express + Tailwind + Docker
        </h1>
        <h2 className="text-slate-100">
          Edit <i className="text-purple-600">src/App.jsx</i> and save
        </h2>
      </div>
    </>
  );
}

export default App;
