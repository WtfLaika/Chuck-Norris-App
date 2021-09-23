import "./App.css";
import React from "react";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { PhraseField } from "./components/PhraseField";

function App() {
  return (
    <div className="container">
      <Header />
      <Categories />
      <PhraseField />
    </div>
  );
}

export default App;
