import React from "react";
import SiteNavigation from "./SiteNavigation";
import SiteFooter from "./SiteFooter";
import classes from "./HelpCenterPage.module.css";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import Ball3 from "../Icons/Ball3.svg";
import Ball4 from "../Icons/Ball4.svg";
import Ball5 from "../Icons/Ball5.svg";
import Ball6 from "../Icons/Ball6.svg";

const HelpCenterPage = () => {
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
            <h3 className={classes.newsHeading}>Help Center</h3>
          </div>
        </header>
      </section>

      <section className={classes.secondSection}>
        <div className={classes.PrivacyContainer}>
          <h1 className={classes.privacyHeadings}>What is an NFT?</h1>
          <p className={classes.privacySpan}>
            NFTs, or non-fungible tokens, are blockchain-based tokens that
            individually represent a special asset like a work of art, a piece
            of digital material, or other media. A digital or physical asset,
            whether it be digital or tangible, may be considered as having an
            NFT as an irreversible proof of ownership and authenticity.
          </p>

          <h1 className={classes.privacyHeadings}>
            What makes an NFT valuable?
          </h1>
          <p className={classes.privacySpan}>
            The value of an NFT comes from the property it represents, which is
            generally something that exists in the digital world like an
            original piece of art or digital memorabilia. The NFT itself doesn't
            necessarily contain the digital property, but points to its location
            on the blockchain. Like a concert ticket or a deed to a physical
            property, an NFT reflects the value of the thing it represents.
          </p>

          <h1 className={classes.privacyHeadings}>
            Are NFTs the future of art and collectibles?
          </h1>
          <p className={classes.privacySpan}>
            It depends on whom you ask. Artists, musicians, athletes,
            celebrities, and others find NFTs attractive because they offer a
            new and unique way to sell their wares — including things like GIFs,
            memes, and tweets — directly to fans. NFTs also provide artists an
            opportunity to program in continued royalties if it is sold to a new
            owner. Galleries see potential for reaching a new generation of
            collectors.
          </p>

          <h1 className={classes.privacyHeadings}>
            What technology is used for NFTs?
          </h1>
          <p className={classes.privacySpan}>
            blockchain technology A non-fungible token (NFT) is a unique digital
            asset that represents ownership of real-world items like art, video
            clips, music, and more. NFTs use the same blockchain technology that
            powers cryptocurrencies, but they're not a currency Can NFTs be
            duplicated? You can copy a digital file as many times as you want,
            including the art that's included with an NFT. But NFTs are designed
            to give you something that can't be copied: ownership of the work
            (though the artist can still retain the copyright and reproduction
            rights, just like with physical artwork).
          </p>

          <h1 className={classes.privacyHeadings}>What are NFTs used for?</h1>
          <p className={classes.privacySpan}>
            NFTs can be used to indicate ownership of rare assets which
            represents real-world items like real estate and artwork.
          </p>
        </div>
      </section>
      <SiteFooter />
    </React.Fragment>
  );
};

export default HelpCenterPage;
