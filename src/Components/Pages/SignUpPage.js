import React from "react";
import classes from "./SignUpPage.module.css";
import Logo from "../Icons/Logo.svg";
import NameIcon from "../Icons/NameIcon.svg";
import PasswordIcon from "../Icons/PasswordIcon.svg";
import EmailIcon from "../Icons/EmailIcon.svg";
import BigBall from "../Icons/BigBall.svg";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <React.Fragment>
      <section className={classes.signUpSection}>
        <div className={classes.signUpContainer}>
          <div className={classes.firstPartSign}>
            <div className={classes.signTextArea}>
              <p className={classes.signText1}>Already Signed Up?</p>
              <p className={classes.signText2}>Log in to your account</p>
            </div>

            <Link to="/log-in" className={classes.logInBtn}>
              LOG IN
            </Link>
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
            <h3 className={classes.signHeading}>Sign Up</h3>

            <form className={classes.signUpForm}>
              <div className={classes.wholeInput}>
                <label className={classes.signUpLables} htmlFor="first-name">
                  First Name
                </label>
                <div className={classes.emailArea}>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    className={classes.signUpInput}
                    required
                  />

                  <img
                    src={NameIcon}
                    alt="icon"
                    className={classes.signUpIcons}
                  />
                </div>
              </div>

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

              <div className={classes.wholeInput}>
                <label className={classes.signUpLables} htmlFor="Password">
                  Password
                </label>
                <div className={classes.emailArea}>
                  <input
                    type="text"
                    id="Password"
                    placeholder="Password"
                    className={classes.signUpInput}
                    required
                  />

                  <img
                    src={PasswordIcon}
                    alt="icon"
                    className={classes.signUpIcons}
                  />
                </div>
              </div>

              <div className={classes.wholeInput}>
                <label
                  className={classes.signUpLables}
                  htmlFor="Password-confirm"
                >
                  Password confirmation
                </label>
                <div className={classes.emailArea}>
                  <input
                    type="text"
                    id="Password-confirm"
                    placeholder="Password confirmation"
                    className={classes.signUpInput}
                    required
                  />

                  <img
                    src={PasswordIcon}
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

export default SignUpPage;
