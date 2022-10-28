import React from "react";
import SiteNavigation2 from "./SiteNavigation2";
import SiteFooter from "./SiteFooter";
import classes from "./ResultSearchPage.module.css";
import Discord from "../Icons/Discord.svg";
import Twiter from "../Icons/Twiter.svg";
import Insta from "../Icons/Insta.svg";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import Ball3 from "../Icons/Ball3.svg";
import Ball4 from "../Icons/Ball4.svg";
import Ball5 from "../Icons/Ball5.svg";
import Ball6 from "../Icons/Ball6.svg";

const ResultSearchPage = () => {
  return (
    <React.Fragment>
      <section className={classes.firstSection}>
        <header className={classes.mainHeaderResult}>
          <img className={classes.ball1} src={Ball1} alt="ball-icon" />
          <img className={classes.ball2} src={Ball2} alt="ball-icon" />
          <img className={classes.ball3} src={Ball3} alt="ball-icon" />
          <img className={classes.ball4} src={Ball3} alt="ball-icon" />
          <img className={classes.ball5} src={Ball5} alt="ball-icon" />
          <img className={classes.ball6} src={Ball6} alt="ball-icon" />
          <img className={classes.ball7} src={Ball4} alt="ball-icon" />
          <img className={classes.ball8} src={Ball3} alt="ball-icon" />
          <SiteNavigation2 />

          <div className={classes.resultHeadingContent}>
            <div className={classes.photoETH}></div>

            <div className={classes.itemArea}>
              <span className={classes.itemName}>Azuki</span>
              <input type="checkbox" className={classes.checkboxResult} />
            </div>

            <span className={classes.itemBy}>By TeamAzuki</span>

            <div className={classes.itemDetailsArea}>
              <div className={classes.detailPart}>
                <span className={classes.digtsItem}>10,0k</span>
                <span className={classes.textyItem}>Iteams</span>
              </div>
              <div className={classes.detailPart}>
                <span className={classes.digtsItem}>5,1k</span>
                <span className={classes.textyItem}>Owners</span>
              </div>
              <div className={classes.detailPart}>
                <span className={classes.digtsItem}>253,8k</span>
                <span className={classes.textyItem}>Total volume</span>
              </div>
              <div className={classes.detailPart}>
                <span className={classes.digtsItem}>11</span>
                <span className={classes.textyItem}>Floor price</span>
              </div>
            </div>

            <div className={classes.twoBtnResult}>
              <button className={classes.resultBtns} type="button">
                Opensea Collection
              </button>
              <button className={classes.resultBtns} type="button">
                Get Listed Now !
              </button>
            </div>

            <div className={classes.socialResult}>
              <a
                href="https://www.instagram.com/nify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className={classes.resultIcons} src={Insta} alt="icon" />
              </a>
              <a
                href="https://discord.com/invite/EsQCD9eqn7"
                target="_blank"
                rel="noreferrer"
              >
                <img className={classes.resultIcons} src={Discord} alt="icon" />
              </a>

              <a
                href="https://twitter.com/NifyLLC"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={`${classes.resultIcons} ${classes.iconTwiter}`}
                  src={Twiter}
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </header>
      </section>

      <section className={classes.secondSection}>
        <div className={classes.areaETHresult}>
          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>
          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>

          <div className={classes.collectionIteamArea}>
            <div className={classes.photoETHresult}></div>
            <p className={classes.theItemName}>Azuki</p>
            <div className={classes.priceTagArea}>
              <span className={classes.itemPrice}>NO PRICE</span>
              <span className={classes.itemTage}>#2152</span>
            </div>
            <button className={classes.openItemBtn}>Open in Marketplace</button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </React.Fragment>
  );
};

export default ResultSearchPage;
