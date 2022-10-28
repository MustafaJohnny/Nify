import React from "react";
import SiteNavigation from "./SiteNavigation";
import SiteFooter from "./SiteFooter";
import classes from "./LearnMorePage.module.css";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import Ball3 from "../Icons/Ball3.svg";
import Ball4 from "../Icons/Ball4.svg";
import Ball5 from "../Icons/Ball5.svg";
import Ball6 from "../Icons/Ball6.svg";

const LearnMorePage = () => {
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
            <h3 className={classes.newsHeading}>Learn More!</h3>
          </div>
        </header>
      </section>

      <section className={classes.secondSection}>
        <div className={classes.PrivacyContainer}>
          <h1 className={classes.privacyHeadings}>
            What exactly are non-fungible tokens (NFTs)?
          </h1>
          <p className={classes.privacySpan}>
            NFTs, or non-fungible tokens, are blockchain-based tokens that
            individually represent a special asset like a work of art, a piece
            of digital material, or other media. A digital or physical asset,
            whether it be digital or tangible, may be considered as having an
            NFT as an irreversible proof of ownership and authenticity.
          </p>

          <h1 className={classes.privacyHeadings}>What is listing?</h1>
          <p className={classes.privacySpan}>
            When you take steps to make one of your NFTs accessible for
            purchase, a listing is established. Making and canceling listings
            for NFTs in a wallet is only possible by the person in control of
            that wallet. OpenSea is unable to create or remove listings on
            behalf of users.
          </p>

          <h1 className={classes.privacyHeadings}>
            More details coming soon!!
          </h1>
          <p className={classes.privacySpan}>Stay tuned...</p>
        </div>
      </section>
      <SiteFooter />
    </React.Fragment>
  );
};

export default LearnMorePage;
