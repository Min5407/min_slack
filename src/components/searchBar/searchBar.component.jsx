import React from "react";
import "./searchBar.style.scss";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineSharpIcon from "@material-ui/icons/HelpOutlineSharp";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="searchBar">
        <AccessTimeIcon />
        <div className="input">
          <SearchIcon />
          <input placeholder="search ICT"></input>
        </div>
        <HelpOutlineSharpIcon />
      </div>
      <div className="profile">
        <AccountBoxRoundedIcon />
      </div>
    </div>
  );
};

export default SearchBar;
