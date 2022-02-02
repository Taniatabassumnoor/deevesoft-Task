// radio input tag e name & value property add korben jkhon form submit hobe tkhon name property er value ta object er key hobe & er value hobe radio input tag er value property er value.

import React, { useState } from "react";

const Tesr = () => {
  const [userData, setUserData] = useState({});

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { getLeaner } = userData;

    if (getLeaner) {
      const res = await fetch(
        "https://deevesofttask-1272c-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            getLeaner,
          }),
        }
      );

      if (res) {
        setUserData({
          getLeaner,
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="type"
                        value="Get Leaner"
                        onChange={postUserData}
                        id="getLeaner"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para"
                      >
                        Get Leaner
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tesr;
