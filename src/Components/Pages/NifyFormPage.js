import React from "react";
import useValidationNify from "./use-NifyValidate";
import classes from "./NifyFormPage.module.css";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { controlActions } from "../Redux/ReduxStore";
import { useDispatch } from "react-redux";
import axios from "axios";
import SiteNavigation from "./SiteNavigation";
import SiteFooter from "./SiteFooter";
import Ball1 from "../Icons/Ball1.svg";
import Ball2 from "../Icons/Ball2.svg";
import Ball3 from "../Icons/Ball3.svg";
import Ball4 from "../Icons/Ball4.svg";
import Ball5 from "../Icons/Ball5.svg";
import Ball6 from "../Icons/Ball6.svg";

const NifyFormPage = () => {
  const navigate = useNavigate();
  const dispatchReduxAction = useDispatch();

  const {
    emailError,
    setEmailError,
    collectionError,
    discordError,
    setDiscordError,
    setCollectionError,
    revealError,
    idTicketError,
    setIdTicketError,
    setRevealError,
  } = useValidationNify();

  const initialState = {
    email: "",
    name_of_collection: "",
    link_to_operaSea_collection: "",
    discord_server_link: "",
    twitter_link: "",
    website_link: "",
    collection_based_on: "",
    smart_contract_address: "",
    when_is_your_collections_presale: "",
    When_is_your_collections_public_sale: "",
    When_are_you_planning_to_reveal: "",
    user_image: "",
    verify_Identity: "",
    Do_you_want_your_collection_to_be_featured: "",
    total_supply: "",
    a_collection_owner: "",
    minted_collections: "",
    public_knows_you: "",
    where_do_you_want_your_collection_to_appear: "",
    other_collection: "",
    White_paper: "",
    accept_video_call: "",
    marketing_plan: "",
  };
  /////////////////////////////////////////////////////////////////////////////////////

  const reducer = (state, action) => {
    if (action.type === "email") {
      return { ...state, email: action.value };
    }

    if (action.type === "collection-name") {
      return { ...state, name_of_collection: action.value };
    }

    if (action.type === "marketing_plan") {
      return { ...state, marketing_plan: action.value };
    }

    if (action.type === "accept_video_call") {
      return { ...state, accept_video_call: action.value };
    }

    if (action.type === "other_collection") {
      return { ...state, other_collection: action.value };
    }

    if (action.type === "White_paper") {
      return { ...state, White_paper: action.value };
    }

    if (action.type === "user-image") {
      return { ...state, user_image: action.value };
    }

    if (action.type === "operaSea") {
      return { ...state, link_to_operaSea_collection: action.value };
    }

    if (action.type === "discordServer") {
      return { ...state, discord_server_link: action.value };
    }

    if (action.type === "twitter") {
      return { ...state, twitter_link: action.value };
    }

    if (action.type === "website-link") {
      return { ...state, website_link: action.value };
    }

    if (action.type === "collection-based") {
      return { ...state, collection_based_on: action.value };
    }

    if (action.type === "smart-contract") {
      return { ...state, smart_contract_address: action.value };
    }

    if (action.type === "presale") {
      return { ...state, when_is_your_collections_presale: action.value };
    }

    if (action.type === "public-sale") {
      return { ...state, When_is_your_collections_public_sale: action.value };
    }

    if (action.type === "reveal") {
      return { ...state, When_are_you_planning_to_reveal: action.value };
    }

    if (action.type === "verify_Identity") {
      return {
        ...state,
        verify_Identity: action.value,
      };
    }

    if (action.type === "be-featured") {
      return {
        ...state,
        Do_you_want_your_collection_to_be_featured: action.value,
      };
    }

    if (action.type === "total_supply") {
      return { ...state, total_supply: action.value };
    }

    if (action.type === "a_collection_owner") {
      return { ...state, a_collection_owner: action.value };
    }

    if (action.type === "minted_collections") {
      return { ...state, minted_collections: action.value };
    }

    if (action.type === "public_knows_you") {
      return { ...state, public_knows_you: action.value };
    }

    if (action.type === "collection-to-appear") {
      return {
        ...state,
        where_do_you_want_your_collection_to_appear: action.value,
      };
    }

    if (action.type === "clean") {
      return {
        ...state,
        when_is_your_collections_presale: "",
        twitter_link: "",
        email: "",
        name_of_collection: "",
        link_to_operaSea_collection: "",
        discord_server_link: "",
        website_link: "",
        collection_based_on: "",
        smart_contract_address: "",
        When_is_your_collections_public_sale: "",
        When_are_you_planning_to_reveal: "",
        user_image: "",
        verify_Identity: "",
        Do_you_want_your_collection_to_be_featured: "",
        total_supply: "",
        a_collection_owner: "",
        minted_collections: "",
        public_knows_you: "",
        where_do_you_want_your_collection_to_appear: "",
        other_collection: "",
        White_paper: "",
        accept_video_call: "",
        marketing_plan: "",
      };
    }

    return state;
  };

  /////////////////////////////////////////////////////////////////////

  const [userData, dispatch] = useReducer(reducer, initialState);
  const [otherValue, setOtherValue] = useState("");
  const [checkedIdentity, setIdentity] = useState({ Yes: false, No: false });
  const [checkedFeatured, setFeatured] = useState({ Yes: false, No: false });
  const [checkedPublic, setCheckedPublic] = useState({ Yes: false, No: false });

  const [checkedOtherCollection, setOtherCollection] = useState({
    Yes: false,
    No: false,
  });

  const [checkedVideoCall, setVideoCall] = useState({
    Yes: false,
    No: false,
  });

  const [checkedWhitePaper, setWhitePaper] = useState({
    Yes: false,
    No: false,
  });

  const [checkedMarketingPlan, setMarketingPlan] = useState({
    Yes: false,
    No: false,
  });

  const [checkedCollectionAppear, setCollectionAppear] = useState({
    Upcoming: false,
    Popular_Collections: false,
    New_Collections: false,
  });

  const [checked, setChecked] = useState({
    Polygon: false,
    ETH: false,
    Solona: false,
  });

  const getOtherValue = (event) => {
    setOtherValue(event.target.value);
    dispatch({ type: "collection-based", value: event.target.value });
  };

  const getImage = (event) => {
    dispatch({ type: "user-image", value: event.target.files[0] });
  };

  const getChecked = (event) => {
    dispatch({ type: "collection-based", value: event.target.value });
    setChecked(() => {
      return {
        ETH: false,
        Polygon: false,
        Solona: false,
        [event.target.value]: true,
      };
    });
  };

  const getCheckedAppear = (event) => {
    dispatch({ type: "collection-to-appear", value: event.target.value });
    setCollectionAppear(() => {
      return {
        Upcoming: false,
        Popular_Collections: false,
        New_Collections: false,
        [event.target.value]: true,
      };
    });
  };

  const getTheOtherCollection = (event) => {
    dispatch({ type: "other_collection", value: event.target.value });
    setOtherCollection(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };

  const getVideoCall = (event) => {
    dispatch({ type: "accept_video_call", value: event.target.value });
    setVideoCall(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };

  const getMarketingPlan = (event) => {
    dispatch({ type: "marketing_plan", value: event.target.value });
    setMarketingPlan(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };

  const getWhitePaper = (event) => {
    dispatch({ type: "White_paper", value: event.target.value });
    setWhitePaper(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };

  const unCheckOptions = () => {
    setChecked(() => ({
      ETH: false,
      Polygon: false,
      Solona: false,
      Other: false,
    }));
  };

  const getCheckedIdentity = (event) => {
    dispatch({ type: "verify_Identity", value: event.target.value });
    setIdentity(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };

  const getCheckedFeatured = (event) => {
    dispatch({ type: "be-featured", value: event.target.value });
    setFeatured(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };

  const getCheckedPublic = (event) => {
    dispatch({ type: "public_knows_you", value: event.target.value });
    setCheckedPublic(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };
  ////////////////////////////////////////////////////////////////////////
  /////////// Validation ///////////////

  /////////////////////////////////////

  const cleanFunction = () => {
    setChecked(() => ({
      ETH: false,
      Polygon: false,
      Solona: false,
    }));

    setCollectionAppear(() => ({
      Upcoming: false,
      Popular_Collections: false,
      New_Collections: false,
    }));

    setOtherCollection(() => ({
      Yes: false,
      No: false,
    }));

    setIdentity(() => ({
      Yes: false,
      No: false,
    }));

    setVideoCall(() => ({
      Yes: false,
      No: false,
    }));

    setMarketingPlan(() => ({
      Yes: false,
      No: false,
    }));

    setWhitePaper(() => ({
      Yes: false,
      No: false,
    }));

    setFeatured(() => ({
      Yes: false,
      No: false,
    }));

    setCheckedPublic(() => ({
      Yes: false,
      No: false,
    }));

    setOtherValue("");

    dispatch({ type: "clean" });
  };

  ///////////////////////////////////////////////////////////////////////

  async function updateData() {
    if (!userData.email) {
      alert("Please enter your email.");
      return;
    }

    if (!userData.name_of_collection) {
      alert("Please enter the name of your collection.");
      return;
    }

    if (!userData.collection_based_on) {
      alert("Please pick a collection chain.");
      return;
    }

    if (!userData.verify_Identity) {
      alert("Please Answer are you ready to verify your identity.");
      return;
    }

    if (!userData.user_image) {
      alert("Please Upload an image that you would like yo use.");
    }

    if (!userData.other_collection) {
      alert("Please Answer do you have any other collection.");
      return;
    }

    if (!userData.White_paper) {
      alert("Please Answer do you have a white paper.");
      return;
    }

    if (!userData.accept_video_call) {
      alert("Please Answer do you accept a vaido call with us.");
      return;
    }

    if (!userData.marketing_plan) {
      alert("Please Answer do you have a marketing plan.");
      return;
    }

    if (!userData.Do_you_want_your_collection_to_be_featured) {
      alert("Please Answer do you want your collection to get featured.");
      return;
    }

    if (!userData.where_do_you_want_your_collection_to_appear) {
      alert("Please Answer where you want your collection yo appear.");
      return;
    }

    if (!userData.total_supply) {
      alert("Please enter how much is the total supply.");
      return;
    }

    if (!userData.a_collection_owner) {
      alert("Please Answer are you a collection owner.");
      return;
    }

    if (!userData.public_knows_you) {
      alert(
        "Please Answer do public knows you are the owner of the collection."
      );
      return;
    }

    // Changing the Yes to true and No to false //

    const verify_Identity = userData.verify_Identity === "Yes" ? true : false;

    const public_knows = userData.public_knows_you === "Yes" ? true : false;

    const other_collection = userData.other_collection === "Yes" ? true : false;

    const White_paper = userData.White_paper === "Yes" ? true : false;

    const marketing_plan = userData.marketing_plan === "Yes" ? true : false;

    const video_call = userData.accept_video_call === "Yes" ? true : false;

    const collection_featured =
      userData.Do_you_want_your_collection_to_be_featured === "Yes"
        ? true
        : false;

    // Validating the date and changing it to type ISO for the server //

    const collection_presale = userData.when_is_your_collections_presale
      ? new Date(userData.when_is_your_collections_presale).toISOString()
      : "";

    const collection_public_sale = userData.When_is_your_collections_public_sale
      ? new Date(userData.When_is_your_collections_public_sale).toISOString()
      : "";

    const collection_reveal_date = userData.When_are_you_planning_to_reveal
      ? new Date(userData.When_are_you_planning_to_reveal).toISOString()
      : "";

    // The user data that gonna be sent to the server.
    const serverParams = {
      email: userData.email,
      collection_name: userData.name_of_collection,
      collection_url_opensea: userData.link_to_operaSea_collection,
      collection_discord: userData.discord_server_link,
      collection_twitter: userData.twitter_link,
      collection_website: userData.website_link,
      collection_chain: userData.collection_based_on,
      collection_smart: userData.smart_contract_address,
      collection_presale: collection_presale,
      collection_public_sale: collection_public_sale,
      collection_reveal_date: collection_reveal_date,
      verify_identity: verify_Identity,
      collection_featured: collection_featured,
      total_supply: userData.total_supply,
      collection_owner: userData.a_collection_owner,
      how_many_minted: userData.minted_collections,
      public_knows_you: public_knows,
      any_other_collection: other_collection,
      White_paper: White_paper,
      marketing_plan: marketing_plan,
      accept_video_call: video_call,
      collection_to_appear:
        userData.where_do_you_want_your_collection_to_appear,
    };

    // Removing all the inputs that the user didn't fill so that we do not have to send them to the server.

    if (!serverParams.collection_smart) delete serverParams.collection_smart;

    if (!serverParams.how_many_minted) delete serverParams.how_many_minted;

    if (!serverParams.collection_public_sale)
      delete serverParams.collection_public_sale;

    if (!serverParams.collection_presale)
      delete serverParams.collection_presale;

    if (!serverParams.collection_reveal_date)
      delete serverParams.collection_reveal_date;

    if (!serverParams.collection_url_opensea)
      delete serverParams.collection_url_opensea;

    if (!serverParams.collection_discord)
      delete serverParams.collection_discord;

    if (!serverParams.collection_twitter)
      delete serverParams.collection_twitter;

    if (!serverParams.collection_website)
      delete serverParams.collection_website;

    const formData = new FormData();

    formData.append("in_file", userData.user_image, userData.user_image.name);

    axios
      .post("http://127.0.0.1:8000/form", formData, {
        params: serverParams,
      })
      .then((res) => {
        
        console.log(res);

      

        if (res.status !== 200 || !res.status) {
          navigate("/spinner", { replace: false });

          setTimeout(() => {
            dispatchReduxAction(controlActions.toggleShowMessage());
            dispatchReduxAction(controlActions.toggleShowModal());
            navigate("/", { replace: true });
          }, 3000);
        }

        if (res.status === 200) {
          navigate("/spinner", { replace: false });

          setTimeout(() => {
            dispatchReduxAction(controlActions.toggleShowModal());
            navigate("/", { replace: true });
          }, 3000);
        }
      });

   

    cleanFunction();
  }

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
            <h3 className={classes.newsHeading}>NIFY Listing Application</h3>
            <h4 className={classes.nifyListingText}>
              If you want to get listed in our website and app you will have to
            </h4>
            <h4 className={classes.nifyListingText}>
              Answer those questions , it will take from 1 to 5 days to get
              checked!
            </h4>
          </div>
        </header>
      </section>

      <section className={classes.secondSection}>
        <form className={classes.mainForm}>
          <div className={classes.inputContainer}>
            <div className={classes.inputArea}>
              <label htmlFor="email">
                Email <span className={classes.required}>*required</span>
              </label>
              <input
                onChange={(event) => {
                  dispatch({ type: "email", value: event.target.value });
                  if (event.target.value.includes("@") === true) {
                    setEmailError(false);
                  }
                }}
                id="email"
                type="email"
                value={userData.email}
                placeholder="Your email address"
                onBlur={(event) => {
                  if (event.target.value.includes("@") === false) {
                    setEmailError(true);
                  }
                }}
                required
                className={classes.inputStyle}
              />

              {emailError && (
                <p className={classes.errorMsg}>
                  Must be a valid email address
                </p>
              )}
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="collection">
                What is the name of your collection?{" "}
                <span className={classes.required}>*required</span>
              </label>
              <input
                onChange={(event) => {
                  dispatch({
                    type: "collection-name",
                    value: event.target.value,
                  });
                  if (event.target.value) setCollectionError(false);
                }}
                value={userData.name_of_collection}
                id="collection"
                type="text"
                placeholder="Your answer"
                className={classes.inputStyle}
                onBlur={(event) => {
                  if (!event.target.value) setCollectionError(true);
                }}
                required
              />
              {collectionError && (
                <p className={classes.errorMsg}>This is a required question</p>
              )}
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="OpenSea">
                Link to your OpenSea collection. (Leave empty if it doesn't
                apply)
              </label>
              <input
                id="OpenSea"
                onChange={(event) =>
                  dispatch({ type: "operaSea", value: event.target.value })
                }
                value={userData.link_to_operaSea_collection}
                type="text"
                placeholder="Your answer"
                required
                className={classes.inputStyle}
              />
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="discord">
                Link to your discord server. (Leave empty if it doesn't apply)
              </label>
              <input
                onChange={(event) =>
                  dispatch({ type: "discordServer", value: event.target.value })
                }
                value={userData.discord_server_link}
                id="discord"
                type="text"
                placeholder="Your answer"
                required
                className={classes.inputStyle}
              />
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="twitter">
                Link to your twitter. (Leave empty if it doesn't apply)
              </label>
              <input
                onChange={(event) =>
                  dispatch({ type: "twitter", value: event.target.value })
                }
                id="twitter"
                type="text"
                value={userData.twitter_link}
                placeholder="Your answer"
                required
                className={classes.inputStyle}
              />
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="website">
                Link to your website. (Leave empty if it doesn't apply)
              </label>
              <input
                onChange={(event) =>
                  dispatch({ type: "website-link", value: event.target.value })
                }
                id="website"
                type="text"
                value={userData.website_link}
                placeholder="Your answer"
                required
                className={classes.inputStyle}
              />
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="small fee">
                Please pick a collection chain:
                <span className={classes.required}> *required</span>
              </label>
              <ul className={classes.radioStyleUl}>
                <li className={classes.radioStyleLi}>
                  <input
                    className={classes.radioStyle}
                    onChange={getChecked}
                    name="radiovalues"
                    value="ETH"
                    type="radio"
                    id="ETH"
                    checked={checked.ETH}
                  />
                  <label htmlFor="ETH">ETH</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    className={classes.radioStyle}
                    onChange={getChecked}
                    name="radiovalues"
                    value="Polygon"
                    type="radio"
                    id="Polygon"
                    checked={checked.Polygon}
                  />
                  <label htmlFor="Polygon">Polygon</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    className={classes.radioStyle}
                    onChange={getChecked}
                    name="radiovalues"
                    value="Solona"
                    type="radio"
                    id="Solona"
                    checked={checked.Solona}
                  />
                  <label htmlFor="Solona">Solona</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <label htmlFor="Other">Other:</label>
                  <input
                    onChange={getOtherValue}
                    onFocus={unCheckOptions}
                    type="text"
                    className={classes.inputStyleRadio}
                    value={otherValue}
                  />
                </li>
              </ul>
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="small fee">
                Where do you want your collection to appear?
                <span className={classes.required}> *required</span>
              </label>
              <ul className={classes.radioStyleUl}>
                <li className={classes.radioStyleLi}>
                  <input
                    className={classes.radioStyle}
                    onChange={getCheckedAppear}
                    name="radiovalues2"
                    value="Upcoming"
                    type="radio"
                    id="Upcoming"
                    checked={checkedCollectionAppear.Upcoming}
                  />
                  <label htmlFor="Upcoming">Upcoming</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    className={classes.radioStyle}
                    onChange={getCheckedAppear}
                    name="radiovalues2"
                    value="Popular_Collections"
                    type="radio"
                    id="Popular collections"
                    checked={checkedCollectionAppear.Popular_Collections}
                  />
                  <label htmlFor="Popular collections">
                    Popular collections
                  </label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    className={classes.radioStyle}
                    onChange={getCheckedAppear}
                    name="radiovalues2"
                    value="New_Collections"
                    type="radio"
                    id="New collections"
                    checked={checkedCollectionAppear.New_Collections}
                  />
                  <label htmlFor="New collections">New collections</label>
                </li>
              </ul>
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="contract">
                If your collection is based on a smart contract, please provide
                the address below.
              </label>
              <input
                onChange={(event) =>
                  dispatch({
                    type: "smart-contract",
                    value: event.target.value,
                  })
                }
                id="contract"
                type="text"
                value={userData.smart_contract_address}
                placeholder="Your answer"
                required
                className={classes.inputStyle}
              />
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="date">
                When is your collections presale? ( Leave empty if it doesn't
                apply)
              </label>
              <span className={classes.spanDate}>Date</span>
              <input
                onChange={(event) =>
                  dispatch({ type: "presale", value: event.target.value })
                }
                id="date"
                type="date"
                value={userData.when_is_your_collections_presale}
                placeholder="Your answer"
                required
                className={classes.inputStyleDate}
              />
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="date">
                When is your collections public sale? (Leave empty if it doesn't
                apply)
              </label>
              <span className={classes.spanDate}>Date</span>
              <input
                onChange={(event) =>
                  dispatch({ type: "public-sale", value: event.target.value })
                }
                id="date"
                type="date"
                value={userData.When_is_your_collections_public_sale}
                placeholder="Your answer"
                required
                className={classes.inputStyleDate}
              />
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="date">
                When are you planning to reveal? (Leave empty if it doesn't
                apply)
              </label>
              <span className={classes.spanDate}>Date</span>
              <input
                onChange={(event) => {
                  dispatch({ type: "reveal", value: event.target.value });
                  if (event.target.value) setRevealError(false);
                }}
                id="date"
                type="date"
                value={userData.When_are_you_planning_to_reveal}
                placeholder="Your answer"
                required
                onBlur={(event) => {
                  if (!event.target.value) setRevealError(true);
                }}
                className={classes.inputStyleDate}
              />

              {revealError && (
                <p className={classes.errorMsg}>This is a required question</p>
              )}
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="imageLoad">
                What image would you like to use? (Square aspect ratio
                preferred)
                <span className={classes.required}> *required</span>
              </label>
              <input
                id="imageLoad"
                onChange={getImage}
                type="file"
                multiple
                accept="image/png, image/jpeg"
                required
                className={classes.inputStyleFile}
              />
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="small fee">
                Are you ready to verify your identity? (front,back,selfie)
                <span className={classes.required}> *required</span>
              </label>
              <ul className={classes.radioStyleUl}>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getCheckedIdentity}
                    className={classes.radioStyle}
                    type="radio"
                    id="Yes"
                    name="list"
                    checked={checkedIdentity.Yes}
                    value="Yes"
                  />
                  <label htmlFor="Yes">Yes</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getCheckedIdentity}
                    className={classes.radioStyle}
                    type="radio"
                    id="No"
                    name="list"
                    checked={checkedIdentity.No}
                    value="No"
                  />
                  <label htmlFor="No">No</label>
                </li>
              </ul>
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="small fee">
                Do you want your collection to get featured in our site and app?
                <span className={classes.required}> *required</span>
              </label>
              <ul className={classes.radioStyleUl}>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getCheckedFeatured}
                    className={classes.radioStyle}
                    name="featured"
                    type="radio"
                    id="Yes"
                    value="Yes"
                    checked={checkedFeatured.Yes}
                  />
                  <label htmlFor="Yes">Yes</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getCheckedFeatured}
                    className={classes.radioStyle}
                    name="featured"
                    type="radio"
                    id="No"
                    value="No"
                    checked={checkedFeatured.No}
                  />
                  <label htmlFor="No">No</label>
                </li>
              </ul>
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="tag">
                How much is the total supply?
                <span className={classes.required}> *required</span>
              </label>
              <input
                onChange={(event) => {
                  dispatch({ type: "total_supply", value: event.target.value });
                  if (event.target.value) setDiscordError(false);
                }}
                id="tag"
                type="text"
                value={userData.total_supply}
                placeholder="Your answer"
                required
                onBlur={(event) => {
                  if (!event.target.value) setDiscordError(true);
                }}
                className={classes.inputStyle}
              />
              {discordError && (
                <p className={classes.errorMsg}>This is a required question</p>
              )}
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="ticket">
                Are you a collection owner? if not then who are you?
                <span className={classes.required}> *required</span>
              </label>
              <input
                onChange={(event) => {
                  dispatch({
                    type: "a_collection_owner",
                    value: event.target.value,
                  });
                  if (event.target.value) setIdTicketError(false);
                }}
                id="ticket"
                type="text"
                value={userData.a_collection_owner}
                onBlur={(event) => {
                  if (!event.target.value) {
                    setIdTicketError(true);
                  }
                }}
                placeholder="Your answer"
                required
                className={classes.inputStyle}
              />
              {idTicketError && (
                <p className={classes.errorMsg}>This is a required question</p>
              )}
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="tag">
                How many minted if collection is listed already?
              </label>
              <input
                onChange={(event) =>
                  dispatch({
                    type: "minted_collections",
                    value: event.target.value,
                  })
                }
                id="tag"
                type="text"
                value={userData.minted_collections}
                placeholder="Your answer"
                required
                className={classes.inputStyle}
              />
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="small fee">
                Do the public knows you are the owner of the collection?
                <span className={classes.required}> *required</span>
              </label>
              <ul className={classes.radioStyleUl}>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getCheckedPublic}
                    name="public"
                    className={classes.radioStyle}
                    type="radio"
                    id="Yes"
                    value="Yes"
                    checked={checkedPublic.Yes}
                  />
                  <label htmlFor="Yes">Yes</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getCheckedPublic}
                    name="public"
                    className={classes.radioStyle}
                    type="radio"
                    id="No"
                    value="No"
                    checked={checkedPublic.No}
                  />
                  <label htmlFor="No">No</label>
                </li>
              </ul>
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="small fee">
                Do You have any other collection?
                <span className={classes.required}> *required</span>
              </label>
              <ul className={classes.radioStyleUl}>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getTheOtherCollection}
                    name="other"
                    className={classes.radioStyle}
                    type="radio"
                    id="Yes"
                    value="Yes"
                    checked={checkedOtherCollection.Yes}
                  />
                  <label htmlFor="Yes">Yes</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getTheOtherCollection}
                    name="other"
                    className={classes.radioStyle}
                    type="radio"
                    id="No"
                    value="No"
                    checked={checkedOtherCollection.No}
                  />
                  <label htmlFor="No">No</label>
                </li>
              </ul>
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="small fee">
                Do you have a White paper?
                <span className={classes.required}> *required</span>
              </label>
              <ul className={classes.radioStyleUl}>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getWhitePaper}
                    name="paper"
                    className={classes.radioStyle}
                    type="radio"
                    id="Yes"
                    value="Yes"
                    checked={checkedWhitePaper.Yes}
                  />
                  <label htmlFor="Yes">Yes</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getWhitePaper}
                    name="paper"
                    className={classes.radioStyle}
                    type="radio"
                    id="No"
                    value="No"
                    checked={checkedWhitePaper.No}
                  />
                  <label htmlFor="No">No</label>
                </li>
              </ul>
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="small fee">
                Do you have any marketing plan?
                <span className={classes.required}> *required</span>
              </label>
              <ul className={classes.radioStyleUl}>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getMarketingPlan}
                    name="plan"
                    className={classes.radioStyle}
                    type="radio"
                    id="Yes"
                    value="Yes"
                    checked={checkedMarketingPlan.Yes}
                  />
                  <label htmlFor="Yes">Yes</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getMarketingPlan}
                    name="plan"
                    className={classes.radioStyle}
                    type="radio"
                    id="No"
                    value="No"
                    checked={checkedMarketingPlan.No}
                  />
                  <label htmlFor="No">No</label>
                </li>
              </ul>
            </div>

            <div className={classes.inputArea}>
              <label htmlFor="small fee">
                Do you accept to have a video call with us?
                <span className={classes.required}> *required</span>
              </label>
              <ul className={classes.radioStyleUl}>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getVideoCall}
                    name="call"
                    className={classes.radioStyle}
                    type="radio"
                    id="Yes"
                    value="Yes"
                    checked={checkedVideoCall.Yes}
                  />
                  <label htmlFor="Yes">Yes</label>
                </li>
                <li className={classes.radioStyleLi}>
                  <input
                    onChange={getVideoCall}
                    name="call"
                    className={classes.radioStyle}
                    type="radio"
                    id="No"
                    value="No"
                    checked={checkedVideoCall.No}
                  />
                  <label htmlFor="No">No</label>
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.buttonsArea}>
            <button
              onClick={updateData}
              className={classes.submitButton}
              type="button"
            >
              Submit
            </button>
            <button
              onClick={cleanFunction}
              className={classes.clearButton}
              type="button"
            >
              Clear form
            </button>
          </div>
        </form>
      </section>
      <SiteFooter />
    </React.Fragment>
  );
};

export default NifyFormPage;
