import React from "react";
import "./header.css";
import Netflixlogo from "../../assets/images/NetflixLogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Header = () => {
  return (
    <div className="header_outer_conatiner">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={Netflixlogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languges</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <SearchIcon />
            <NotificationsNoneIcon />
            <AccountBoxIcon />
            <ArrowDropDownIcon />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
