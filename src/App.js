import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar/searchBar.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Chat from "./components/chat/chat.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="content">
        <Sidebar />
        <Switch>
          <Route path="/group/:groupId" component={Chat} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
