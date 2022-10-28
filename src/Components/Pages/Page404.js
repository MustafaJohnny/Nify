import React from "react";
import { useNavigate } from "react-router-dom";
import SiteNavigation from "./SiteNavigation";
import SiteFooter from "./SiteFooter";
import classes from "./Page404.module.css";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import Ball3 from "../Icons/Ball3.svg";
import Ball4 from "../Icons/Ball4.svg";
import Ball5 from "../Icons/Ball5.svg";
import Ball6 from "../Icons/Ball6.svg";

const Page404 = () => {
  const navigate = useNavigate();

  const goHomeNify = () => {
    navigate("/", { replace: true });
  };

  return (
    <React.Fragment>
      <section className={classes.firstSection}>
        <header className={classes.mainHeaderResult}>
          <img className={classes.ball1} src={Ball1} alt="ball-icon" />
          <img className={classes.ball2} src={Ball2} alt="ball-icon" />
          <img className={classes.ball4} src={Ball4} alt="ball-icon" />
          <img className={classes.ball5} src={Ball5} alt="ball-icon" />
          <img className={classes.ball6} src={Ball6} alt="ball-icon" />
          <img className={classes.ball8} src={Ball3} alt="ball-icon" />
          <img className={classes.ball9} src={Ball4} alt="ball-icon" />
          <img className={classes.ball10} src={Ball3} alt="ball-icon" />
          <SiteNavigation />
          <div className={classes.headingArea}>
            <h3 className={classes.newsHeading}>Oops! 404</h3>
          </div>
        </header>
      </section>
      <section className={classes.secondSection}>
        <h1 className={classes.notFoundHeading}>
          THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST!
        </h1>
        <p className={classes.notFoundText}>
          Seems like we can't find the page you're looking for. Try going back
          to the previous page or go to the home page.
        </p>

        <button
          onClick={goHomeNify}
          className={classes.notFoundButton}
          type="button"
        >
          Go Home
        </button>
      </section>
      <SiteFooter />
    </React.Fragment>
  );
};

export default Page404;
