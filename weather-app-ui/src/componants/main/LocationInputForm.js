import classes from "./LocationInputForm.module.css";
import { useState } from "react";

const LocationInputForm = (props) => {
  const [validState, setValidState] = useState(true);
  const [locationValue , setLocationValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (validState === false) {
      setValidState(false);
      return;
    }
    props.onLocationSubmit(locationValue);
  };

  const inpChangeHandler = (event) => {
    if (event.target.value === undefined || event.target.value === "") {
      setValidState(false);
      setLocationValue("");
    } else {
      setValidState(true);
      setLocationValue(event.target.value);
    }
  };

  return (
    <form className={classes["form-container"]} onSubmit={submitHandler}>
      <h3>Know your weather</h3>
      <div className={classes["input-container"]}>
        <label htmlFor="">Exter your location</label>
        <input
          type="text"
          value={locationValue}
          onChange={inpChangeHandler}
          onBlur={inpChangeHandler}
        />
      </div>
      {!validState && (
        <p className={classes.error}> Please enter the location </p>
      )}
      <div className={classes["button-container"]}>
        <button> Submit </button>
      </div>
    </form>
  );
};

export default LocationInputForm;
