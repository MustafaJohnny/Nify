import React from "react";
import SiteNavigation from "./SiteNavigation";
import SiteFooter from "./SiteFooter";
import classes from "./HeroPage.module.css";
import Circle1 from "../Icons/Circle1.svg";
import Circle2 from "../Icons/Circle2.svg";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import Ball3 from "../Icons/Ball3.svg";
import Ball4 from "../Icons/Ball4.svg";
import Ball5 from "../Icons/Ball5.svg";
import Ball6 from "../Icons/Ball6.svg";
import Hand from "../Icons/Hand.png";
import GooglePlay from "../Icons/GooglePlay.svg";
import AppleStore from "../Icons/AppleStore.svg";
import SymbolETH from "../Icons/SymbolETH.svg";
import HalfPhone1 from "../Icons/HalfPhone1.svg";
import HalfPhone2 from "../Icons/HalfPhone2.svg";
import { Link as LinkRoute } from "react-router-dom";
import { Link } from "react-scroll";
import { useState } from "react";

const HeroPage = () => {

  const [name, setName] = useState("");

  fetch("http://127.0.0.1:8000/nft_list")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data[0].collection_name);
    setName(data[0].collection_name);
  });



  return (
    <React.Fragment>
      <section className={classes.firstSection}>
        <header className={classes.mainHeader}>
          <img className={classes.circle1} src={Circle1} alt="circle-icons" />
          <img className={classes.circle2} src={Circle2} alt="circle-icon" />
          <img className={classes.ball1} src={Ball1} alt="ball-icon" />
          <img className={classes.ball2} src={Ball2} alt="ball-icon" />
          <img className={classes.ball3} src={Ball3} alt="ball-icon" />
          <img className={classes.ball4} src={Ball4} alt="ball-icon" />
          <img className={classes.ball5} src={Ball5} alt="ball-icon" />
          <img className={classes.ball6} src={Ball6} alt="ball-icon" />
          <img className={classes.handPhone} src={Hand} alt="hand-phone" />

          <SiteNavigation />

          <div className={classes.heroContent}>
            <div className={classes.heroTextButton}>
              <div className={classes.headingSpace}>
                <p className={classes.heroHeading}>IF YOU WANT IT,</p>
                <p className={classes.heroHeading}>GET IT NOW!</p>
              </div>

              <div className={classes.nifyArea}>
                <p className={classes.nifyText}>
                  Nify is a new startup that has entered the NFT industry
                </p>
                <p className={classes.nifyText}>
                  to make things simpler for newcomers with several offerings...
                </p>
              </div>

              <div className={classes.twoButton}>
                <Link
                  to="collection"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={100}
                  className={classes.heroButton}
                >
                  Explore collections
                </Link>

                <LinkRoute
                  className={`${classes.heroButton} ${classes.heroButton2}`}
                  to="/nify-form"
                >
                  List your collections
                </LinkRoute>
              </div>
            </div>
            <div className={classes.heroDownload}>
              <div className={classes.downArea}>
                <p className={classes.downloadText}>Download the</p>
                <p className={classes.downloadText}>NIFY App</p>
              </div>
              <div className={classes.storesArea}>
                <img
                  className={classes.storesIcon}
                  src={GooglePlay}
                  alt="icon"
                />
                <img
                  className={classes.storesIcon}
                  src={AppleStore}
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </header>
      </section>

      <section className={classes.secondSection} id="collection">
        <ul className={classes.secondPageLinks}>
          <li>
            <a className={classes.secondPlink}>Popular collection</a>
          </li>
          <li>
            <a className={`${classes.secondPlink} ${classes.secondPlinkNew}`}>
              New collection
            </a>
          </li>
          <li>
            <a
              className={`${classes.secondPlink} ${classes.secondPlinkComing}`}
            >
              Upcoming
            </a>
          </li>
        </ul>

        <div className={classes.areaETH}>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={`${classes.photoETH} ${classes.photoETH2}`}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={`${classes.photoETH} ${classes.photoETH3}`}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={`${classes.photoETH} ${classes.photoETH4}`}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={`${classes.photoETH} ${classes.photoETH5}`}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={classes.photoETH}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
          <div className={`${classes.photoETH} ${classes.photoETHend}`}>
            <p className={classes.ethName}>Name</p>
            <div className={classes.ethType}>
              <img className={classes.iconETH} src={SymbolETH} alt="icon" />
              <span className={classes.typeETHname}>ETH</span>
            </div>
          </div>
        </div>

        <div className={classes.viewBtnArea}>
          <button className={classes.btnView} type="button">
            View more
          </button>
        </div>
      </section>

      <section className={classes.thirdSection}>
        <div className={classes.featuredCont}>
          <h4 className={classes.featuredHeading}>Featured Collections</h4>
        </div>
        <div className={classes.featuredContainer}>
          <div className={classes.longFeatured}></div>
          <div className={classes.threeFeatured}>
            <div className={classes.featuredSqure}></div>
            <div className={classes.featuredSqure}></div>
            <div
              className={`${classes.featuredSqure} ${classes.featuredSqureLast}`}
            ></div>
          </div>
        </div>
      </section>

      <section className={classes.fourthSection}>
        <div className={classes.newsCont}>
          <h4 className={classes.newsHeading}>News</h4>
        </div>
        <div className={classes.newsContainer}>
          <div className={classes.newsThreeFeatured}>
            <div className={classes.newsSqureArea}>
              <div className={classes.newsThreeSqure}></div>
              <p className={classes.newsParagraph}>
                text text text text text text text text text text text text text
                text text text
              </p>
              <span className={classes.newsDate}>Jule 7, 2022</span>
            </div>
            <div className={classes.newsSqureArea}>
              <div className={classes.newsThreeSqure}></div>
              <p className={classes.newsParagraph}>
                text text text text text text text text text text text text text
                text text text
              </p>
              <span className={classes.newsDate}>Jule 7, 2022</span>
            </div>
            <div className={classes.newsSqureArea}>
              <div className={classes.newsThreeSqure}></div>
              <p className={classes.newsParagraph}>
                text text text text text text text text text text text text text
                text text text
              </p>
              <span className={classes.newsDate}>Jule 7, 2022</span>
            </div>
          </div>
          <div className={classes.newsPhonesSec}>
            <img
              className={classes.halfPhone1}
              src={HalfPhone1}
              alt="phone-shape"
            />

            <img
              className={classes.halfPhone2}
              src={HalfPhone2}
              alt="phone-shape"
            />
            <div className={classes.phonesContentCont}>
              <div className={classes.downloadNFT}>
                <div className={classes.nftAppText}>
                  <p className={classes.nftText}>
                    <span className={classes.whiteNify}>Dowloand Nify app</span>
                    to track your NFT
                  </p>
                  <p className={classes.nftText}>
                    portfolio and discover drops
                  </p>
                </div>
                <div className={classes.nftStoresIcon}>
                  <img
                    className={classes.nftPlayIcon}
                    src={GooglePlay}
                    alt="store-icon"
                  />
                  <img
                    className={classes.nftAppleIcon}
                    src={AppleStore}
                    alt="store-icon"
                  />
                </div>
              </div>

              <div className={classes.scanNFT}>
                <div className={classes.urlPlace}></div>
                <div className={classes.scanTextArea}>
                  <span className={classes.arrowScan}>&larr;</span>
                  <p className={classes.scanText}>Scan to dowloand NIFY app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </React.Fragment>
  );
};

export default HeroPage;
