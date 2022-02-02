import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { getFirestore } from "firebase/firestore";
import initializeAuthentication from "../../Firebase/firebase.initialize";
import "./DesignPageHome.css";
initializeAuthentication();
const DesignPageHome = () => {
  const [leaner, setLeaner] = useState("");
  const [active, setActive] = useState("");
  const [injury, setInjury] = useState("");
  const [cardio, setCardio] = useState("");
  const [loader, setLoader] = useState(false);
  const db = getFirestore();
  const handleSubmit = (e) => {
    db.collection("deeveSoft")
      .add({
        leaner: leaner,
        active: active,
        injury: injury,
        cardio: cardio,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="item1">
          <h1 style={{ fontSize: "30px" }}>Goal</h1>
          <p style={{ letterSpacing: "3px", fontSize: "25px" }}>
            Select your primary goal. What do you want to <br /> accomplish in
            the next few months.
          </p>
        </div>

        <div className="item2">
          <form onSubmit={handleSubmit}>
            <RadioGroup
              className="item"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Get leaner"
              name="radio-buttons-group"
              onChange={(e) => setLeaner(e.target.value)}
            >
              {" "}
              <br />
              <FormControlLabel
                value="Get leaner"
                control={<Radio />}
                label="Get leaner"
                onChange={(e) => setLeaner(e.target.value)}
                style={{ fontSize: "30px" }}
              />{" "}
              <br />
              <FormControlLabel
                value="Get active again"
                control={<Radio />}
                onChange={(e) => setActive(e.target.value)}
                label="Get active again"
              />{" "}
              <br />
              <FormControlLabel
                value="Reduce pain or injury"
                control={<Radio />}
                onChange={(e) => setInjury(e.target.value)}
                label="Reduce pain or injury"
              />{" "}
              <br />
              <FormControlLabel
                value="Improve cardio or speed"
                control={<Radio />}
                onChange={(e) => setCardio(e.target.value)}
                label="Improve cardio or speed"
              />{" "}
              <br />
            </RadioGroup>
            <Button style={{ margin: "5%" }} variant="outlined" size="large">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DesignPageHome;
