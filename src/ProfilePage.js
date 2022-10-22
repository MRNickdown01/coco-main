import React, { useState } from "react";
import "./login.css";
const ProfilePage = () => {
  // const [page, setPage] = useState(false);
  return (
    <>
      <div className="imageSide">
        <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=740&t=st=1664539506~exp=1664540106~hmac=4242d907003bd24c523c7261ae555b63ba5fba4ae9643e8422e1adeccaf42cbc" />
      </div>
      <div className="mainCard">
        <div
          className="card"
          style={{
            width: "25rem",
            height: "28rem",
          }}
        >
          <form>
            <div className="form-row profile">
              <div className="col-md-4 mb-3 profilecard">
                <label for="validationDefault01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="First name"
                  // value="firstname"
                  required
                />
              </div>
              <div class="col-md-4 mb-3 profilecard">
                <label for="validationDefault02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  placeholder="Last name"
                  // value="lastname"
                  required
                />
              </div>
              <div class="col-md-4 mb-3 profilecard">
                <label for="validationDefault03">DOB </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="DOB"
                  // value="lastname"
                  required
                />
              </div>
              <div className="magicRadio">
                <input type="radio" name="inlineRadio" value="option" />
                <label className="checkGender">Male</label>
                <input type="radio" name="inlineRadio" value="option" />
                <label className="checkGender">Female</label>
              </div>
              <div className="profile-btn">
                <button
                // onClick={() => {
                //   setPage(!page);
                // }}
                >
                  submit
                </button>
                {/* {page ? "true" : "false"} */}
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <h1>hello</h1> */}
    </>
  );
};
export default ProfilePage;
