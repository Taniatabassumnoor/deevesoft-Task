import React, { useState } from "react";

const Test = () => {
  const [state, setState] = useState({ goal: "" });
  const handleCheckBox = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserRecord = { ...state };
    newUserRecord[field] = value;
    setState(newUserRecord);
    // if (document.getElementById("h").checked) {
    //   var val = document.getElementById("h").value;
    //   alert(val);
    // } else if (document.getElementById("r").checked) {
    //   var val1 = document.getElementById("r").value;
    //   alert(val1);
    // }
  };
  return (
    <div>
      Get Leaner{" "}
      <input
        onChange={handleCheckBox}
        type="radio"
        name="goal"
        value="Get Leaner"
        checked={"goal" === "Get Leaner"}
        id="h"
      />
      Get Active Again{" "}
      <input
        onChange={handleCheckBox}
        type="radio"
        name="goal"
        value="Get Active Again"
        id="r"
      />
    </div>
  );
};

export default Test;
