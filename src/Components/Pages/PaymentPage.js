import React from "react";
import SiteNavigation from "./SiteNavigation";
import SiteFooter from "./SiteFooter";
import classes from "./PaymentPage.module.css";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import Ball3 from "../Icons/Ball3.svg";
import Ball4 from "../Icons/Ball4.svg";
import Ball5 from "../Icons/Ball5.svg";
import Ball6 from "../Icons/Ball6.svg";

const PaymentPage = () => {
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
            <h3 className={classes.newsHeading}>Personal Cabinet </h3>
          </div>
        </header>
      </section>

      <section className={classes.secondSection}>
        <div className={classes.paymentContainer}>
          <div className={classes.clientData}>
            <div className={classes.wholeUserInput}>
              <div className={classes.inputLabelArea}>
                <label className={classes.userLable} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={classes.dataInput}
                  placeholder="James Hetfield"
                  required
                />
              </div>

              <button type="button" className={classes.userEditBtn}>
                Edit
              </button>
            </div>

            <div className={classes.wholeUserInput}>
              <div className={classes.inputLabelArea}>
                <label className={classes.userLable} htmlFor="Email">
                  Email
                </label>
                <input
                  id="Email"
                  type="email"
                  className={classes.dataInput}
                  placeholder="lars@982.com"
                  required
                />
              </div>

              <button type="button" className={classes.userEditBtn}>
                Edit
              </button>
            </div>

            <div className={classes.wholeUserInput}>
              <div className={classes.inputLabelArea}>
                <label className={classes.userLable} htmlFor="plan">
                  Plan
                </label>
                <input
                  id="plan"
                  type="text"
                  className={classes.dataInput}
                  placeholder=""
                  required
                />
              </div>

              <button type="button" className={classes.userEditBtn}>
                Edit
              </button>
            </div>
          </div>
          <div className={classes.paymentWindow}></div>
        </div>
      </section>
      <SiteFooter />
    </React.Fragment>
  );
};

export default PaymentPage;
