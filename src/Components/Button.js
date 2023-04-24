import { Fragment } from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  // const startBtnClickHandler = () => {
  //   console.log(props);
  //   // props.onclick();
  // };

  return (
    <Fragment>
      <div className={classes.main}>
        <button className={classes.button} onClick={() => {}}>
          Reset
        </button>
        <button className={classes.button} onClick={props.onClick}>
          Start
        </button>
      </div>
    </Fragment>
  );
};

export default Button;
