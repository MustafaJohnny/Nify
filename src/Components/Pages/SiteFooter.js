import React from "react";
import classes from "./SiteFooter.module.css";
import Logo from "../Icons/Logo.svg";
import Discord from "../Icons/Discord.svg";
import Twiter from "../Icons/Twiter.svg";
import Insta from "../Icons/Insta.svg";
import { Link as LinkRoute } from "react-router-dom";
import { Link } from "react-scroll";

const SiteFooter = () => {
  return (
    <React.Fragment>
      <footer className={classes.siteFooter}>
        <div className={classes.footerContainer}>
          <div className={classes.footerLogoText}>
            <LinkRoute to="/" className={classes.footerLogoArea}>
              <img className={classes.footerLogo} src={Logo} alt="logo-icon" />
              <span className={classes.foterTxLo}>NIFY</span>
            </LinkRoute>

            <div className={classes.socialFooter}>
              <a
                href="https://www.instagram.com/nify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={classes.actionIconFooter}
                  src={Insta}
                  alt="icon"
                />
              </a>
              <a
                href="https://twitter.com/NifyLLC"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={classes.actionIconFooterTw}
                  src={Twiter}
                  alt="icon"
                />
              </a>
              <a
                href="https://discord.com/invite/EsQCD9eqn7"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={classes.actionIconFooter}
                  src={Discord}
                  alt="icon"
                />
              </a>
            </div>

            <div className={classes.footerTextArea}>
              <span className={classes.theFooterText}>
                NFTS are just in the beginning
              </span>
              <span className={classes.theFooterText}>
                So don't mess the chance
              </span>
              <span className={classes.theFooterText}>
                Get a part of the future.
              </span>
            </div>
          </div>
          <ul className={classes.footerLinks}>
            <li>
              <p className={` ${classes.foterLinkBig}`}>Collections</p>
            </li>
            <li>
              <p className={` ${classes.foterLinkBig}`}>Resources</p>
            </li>
            <li>
              <p className={` ${classes.foterLinkBig}`}>Contact us</p>
            </li>
            <li>
              <Link
                to="collection"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                className={classes.foterLink}
              >
                Upcoming
              </Link>
            </li>
            <li>
              <LinkRoute to="/news" className={classes.foterLink}>
                News
              </LinkRoute>
            </li>
            <li>
              <a
                className={`${classes.foterLink}`}
                target="_blank"
                rel="noreferrer"
                href="mailto:support@nify.app?subject = Feedback&body = Message"
              >
                support@nify.app
              </a>
            </li>
            <li>
              <Link
                to="collection"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                className={classes.foterLink}
              >
                New collections
              </Link>
            </li>
            <li>
              <LinkRoute
                to="/help-center"
                className={classes.foterLink}
        
              >
                Help center
              </LinkRoute>
            </li>
            <li>
              <a
                className={`${classes.foterLink}`}
                href="https://discord.com/invite/EsQCD9eqn7"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>

            <li>
              <Link
                to="collection"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                className={classes.foterLink}
              >
                Popular collections
              </Link>
            </li>

            <li>
              <LinkRoute to="/learn-more" className={classes.foterLink}>
                Learn more
              </LinkRoute>
            </li>

            <li>
              <a className={classes.foterLink}></a>
            </li>

            <li>
              <LinkRoute to="/nify-form" className={classes.foterLink}>
                List your collection
              </LinkRoute>
            </li>
          </ul>
        </div>
        <div className={classes.copyrightFotter}>
          <p className={classes.copyrightText}>
            &copy; NIFY. All rights reserved
          </p>

          <div className={classes.privacyArea}>
            <LinkRoute className={classes.copyrightLinks} to="/privacy">
              Privacy
            </LinkRoute>

            <LinkRoute
              className={classes.copyrightLinks}
              to="/terms-conditions"
            >
              Terms and Conditions
            </LinkRoute>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default SiteFooter;
