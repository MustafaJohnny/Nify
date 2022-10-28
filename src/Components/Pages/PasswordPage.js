import React from "react";
import classes from "./SignUpPage.module.css";
import classes2 from "./LogInPage.module.css";
import Logo from "../Icons/Logo.svg";
import EmailIcon from "../Icons/EmailIcon.svg";
import BigBall from "../Icons/BigBall.svg";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import { Link } from "react-router-dom";

const PasswordPage = () => {
  return (
    <React.Fragment>
      <section className={classes.signUpSection}>
        <div className={classes.signUpContainer}>
          <div className={classes.firstPartSign}>
            <div className={`${classes.signTextArea} ${classes2.TextAreaGet}`}>
              <p className={`${classes.signText1}  ${classes.getItNow}`}>
                IF YOU WANT IT,
              </p>

              <p className={`${classes.signText1}  ${classes.getItNow}`}>
                GET IT NOW!
              </p>
            </div>
            <Link to="/" className={classes.logoTextArea}>
              <img className={classes.theLogo} src={Logo} alt="logo" />
              <span className={classes.logoText}>NIFY</span>
            </Link>

            <img src={BigBall} alt="icon" className={classes.bigBall} />
            <img src={Ball1} alt="icon" className={classes.ball1} />
            <img src={Ball2} alt="icon" className={classes.ball2} />
            <img src={Ball2} alt="icon" className={classes.ball3} />
            <img src={Ball2} alt="icon" className={classes.ball4} />
            <img src={Ball2} alt="icon" className={classes.ball5} />
            <img src={Ball1} alt="icon" className={classes.ball6} />
            <img src={Ball1} alt="icon" className={classes.ball7} />
          </div>

          <div className={classes.secondPartSign}>
            <h3 className={classes.signHeading}>Password recovery</h3>

            <form className={classes.signUpForm}>
              <div className={classes.wholeInput}>
                <label className={classes.signUpLables} htmlFor="email">
                  Email
                </label>
                <div className={classes.emailArea}>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className={classes.signUpInput}
                    required
                  />

                  <img
                    src={EmailIcon}
                    alt="icon"
                    className={classes.signUpIcons}
                  />
                </div>
              </div>
              <button className={classes.submitBtn} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PasswordPage;
