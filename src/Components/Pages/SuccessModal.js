import classes from "./SuccessModal.module.css";
import { useNavigate } from "react-router-dom";
import { controlActions } from "../Redux/ReduxStore";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

const SuccessModal = () => {
  const showMessageState = useSelector((state) => state.controler.showMessage);
  const dispatchReduxAction = useDispatch();

  const serverMessage = showMessageState
    ? "Your collection have been added!"
    : "Server error! Please try later";

  const navigate = useNavigate();

  const formActionResult = () => {
    // navigate("/", { replace: true });
    dispatchReduxAction(controlActions.toggleShowModal());
  };

  return (
    <React.Fragment>
      <div className={classes.modal}>
        <span className={classes.cartMessage}>
          <p className={classes.theMessage}>{serverMessage}</p>
        </span>
        <div className={classes.buttonsArea}>
          <button onClick={formActionResult} className={classes.btn}>
            Continue
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessModal;
