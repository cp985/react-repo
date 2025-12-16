import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Letter from "./components/Letter";

function App() {
 let cssApp='flex justify-center items-center flex-col gap-5'

  return (
    <div className={cssApp}>
      <Header />
      <Letter />
    </div>
  );
}

export default App;
