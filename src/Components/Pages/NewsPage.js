import React from "react";
import SiteNavigation from "./SiteNavigation";
import SiteFooter from "./SiteFooter";
import classes from "./NewsPage.module.css";
import Circle1 from "../Icons/Circle1.svg";
import Circle2 from "../Icons/Circle2.svg";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import Ball3 from "../Icons/Ball3.svg";
import Ball4 from "../Icons/Ball4.svg";
import Ball5 from "../Icons/Ball5.svg";
import Ball6 from "../Icons/Ball6.svg";
import Calendar from "../Icons/Calendar.svg";

const NewsPage = () => {
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
          <img className={classes.circle1} src={Circle1} alt="ball-icon" />
          <img className={classes.circle2} src={Circle2} alt="ball-icon" />
          <SiteNavigation />
          <div className={classes.headingArea}>
            <h3 className={classes.newsHeading}>What's new</h3>
          </div>
        </header>
      </section>

      <section className={classes.secondSection}>
        <div className={classes.newsAreaCont}>
          <div className={classes.wholeNewsItem}>
            <div className={classes.newsItemShape}>
              <div className={classes.dateArea}>
                <img className={classes.dateIcon} src={Calendar} alt="icon" />
                <span className={classes.newsDate}>May 9, 2022</span>
              </div>
            </div>

            <div className={classes.howToArea}>
              <div className={classes.howToTextArea}>
                <span className={classes.howToText}>How To Keep MetaMask</span>
                <span className={classes.howToText}>Secure 2022</span>
              </div>
              <button type="button" className={classes.howToBtn}>
                How To
              </button>
            </div>

            <p className={classes.newsBigText}>
              If there’s one thing that’s of paramount importance when it comes
              to cryptocurrency, it’s security. While the blockchain is a
              wonderful thing, many have spoken of the potential for...
            </p>

            <button type="button" className={classes.newsBtnRead}>
              Read more
            </button>
          </div>

          <div className={classes.wholeNewsItem}>
            <div className={classes.newsItemShape}>
              <div className={classes.dateArea}>
                <img className={classes.dateIcon} src={Calendar} alt="icon" />
                <span className={classes.newsDate}>May 9, 2022</span>
              </div>
            </div>

            <div className={classes.howToArea}>
              <div className={classes.howToTextArea}>
                <span className={classes.howToText}>How To Keep MetaMask</span>
                <span className={classes.howToText}>Secure 2022</span>
              </div>
              <button type="button" className={classes.howToBtn}>
                How To
              </button>
            </div>

            <p className={classes.newsBigText}>
              If there’s one thing that’s of paramount importance when it comes
              to cryptocurrency, it’s security. While the blockchain is a
              wonderful thing, many have spoken of the potential for...
            </p>

            <button type="button" className={classes.newsBtnRead}>
              Read more
            </button>
          </div>

          <div className={classes.wholeNewsItem}>
            <div className={classes.newsItemShape}>
              <div className={classes.dateArea}>
                <img className={classes.dateIcon} src={Calendar} alt="icon" />
                <span className={classes.newsDate}>May 9, 2022</span>
              </div>
            </div>

            <div className={classes.howToArea}>
              <div className={classes.howToTextArea}>
                <span className={classes.howToText}>How To Keep MetaMask</span>
                <span className={classes.howToText}>Secure 2022</span>
              </div>
              <button type="button" className={classes.howToBtn}>
                How To
              </button>
            </div>

            <p className={classes.newsBigText}>
              If there’s one thing that’s of paramount importance when it comes
              to cryptocurrency, it’s security. While the blockchain is a
              wonderful thing, many have spoken of the potential for...
            </p>

            <button type="button" className={classes.newsBtnRead}>
              Read more
            </button>
          </div>

          <div className={classes.wholeNewsItem}>
            <div className={classes.newsItemShape}>
              <div className={classes.dateArea}>
                <img className={classes.dateIcon} src={Calendar} alt="icon" />
                <span className={classes.newsDate}>May 9, 2022</span>
              </div>
            </div>

            <div className={classes.howToArea}>
              <div className={classes.howToTextArea}>
                <span className={classes.howToText}>How To Keep MetaMask</span>
                <span className={classes.howToText}>Secure 2022</span>
              </div>
              <button type="button" className={classes.howToBtn}>
                How To
              </button>
            </div>

            <p className={classes.newsBigText}>
              If there’s one thing that’s of paramount importance when it comes
              to cryptocurrency, it’s security. While the blockchain is a
              wonderful thing, many have spoken of the potential for...
            </p>

            <button type="button" className={classes.newsBtnRead}>
              Read more
            </button>
          </div>

          <div className={classes.wholeNewsItem}>
            <div className={classes.newsItemShape}>
              <div className={classes.dateArea}>
                <img className={classes.dateIcon} src={Calendar} alt="icon" />
                <span className={classes.newsDate}>May 9, 2022</span>
              </div>
            </div>

            <div className={classes.howToArea}>
              <div className={classes.howToTextArea}>
                <span className={classes.howToText}>How To Keep MetaMask</span>
                <span className={classes.howToText}>Secure 2022</span>
              </div>
              <button type="button" className={classes.howToBtn}>
                How To
              </button>
            </div>

            <p className={classes.newsBigText}>
              If there’s one thing that’s of paramount importance when it comes
              to cryptocurrency, it’s security. While the blockchain is a
              wonderful thing, many have spoken of the potential for...
            </p>

            <button type="button" className={classes.newsBtnRead}>
              Read more
            </button>
          </div>

          <div className={classes.wholeNewsItem}>
            <div className={classes.newsItemShape}>
              <div className={classes.dateArea}>
                <img className={classes.dateIcon} src={Calendar} alt="icon" />
                <span className={classes.newsDate}>May 9, 2022</span>
              </div>
            </div>

            <div className={classes.howToArea}>
              <div className={classes.howToTextArea}>
                <span className={classes.howToText}>How To Keep MetaMask</span>
                <span className={classes.howToText}>Secure 2022</span>
              </div>
              <button type="button" className={classes.howToBtn}>
                How To
              </button>
            </div>

            <p className={classes.newsBigText}>
              If there’s one thing that’s of paramount importance when it comes
              to cryptocurrency, it’s security. While the blockchain is a
              wonderful thing, many have spoken of the potential for...
            </p>

            <button type="button" className={classes.newsBtnRead}>
              Read more
            </button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </React.Fragment>
  );
};

export default NewsPage;
