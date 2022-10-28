import React from "react";
import classes from "./SiteNavigation.module.css";
import Search from "../Icons/Search.svg";
import Profile from "../Icons/Profile.svg";
import Logo from "../Icons/Logo.svg";
import Discord from "../Icons/Discord.svg";
import Twiter from "../Icons/Twiter.svg";
import Insta from "../Icons/Insta.svg";
import { Link } from "react-router-dom";

const SiteNavigation = () => {
  return (
    <React.Fragment>
      <div className={classes.navArea}>
        <Link to="/" className={classes.logoArea}>
          <img src={Logo} className={classes.navLogo} alt="logo" />
          <p className={classes.logoText}>NIFY</p>
        </Link>
        <div className={classes.actionNav}>
          <div className={classes.searchArea}>
            <input
              className={classes.searchInput}
              type="text"
              placeholder="Search collection name"
            />

            <img
              className={classes.searchIcon}
              src={Search}
              alt="search-icon"
            />
          </div>
          <div className={classes.social}>
            <a
              href="https://www.instagram.com/nify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes.actionIcon}
                src={Insta}
                alt="icon"
                rel="noreferrer"
              />
            </a>
            <a
              href="https://twitter.com/NifyLLC"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes.actionIconTwiter}
                src={Twiter}
                alt="icon"
              />
            </a>
            <a
              href="https://discord.com/invite/EsQCD9eqn7"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.actionIcon} src={Discord} alt="icon" />
            </a>

            <Link to="/log-in">
              <img className={classes.actionIcon} src={Profile} alt="icon" />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SiteNavigation;
