import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar/searchBar.component";
import Sidebar from "./components/sidebar/sidebar.component";
// import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="content">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
