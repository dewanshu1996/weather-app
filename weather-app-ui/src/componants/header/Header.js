import classes from "./Header.module.css";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>Welcome to weather app</h1>
      </div>
      <div className={classes["header-container"]}></div>
    </Fragment>
  );
};

export default Header;
