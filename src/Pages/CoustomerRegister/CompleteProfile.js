import React from "react";
import image from "./assets/Image.png";
import "../HomePages/Style.css";
import $ from "jquery";
function CompleteProfile() {
  return (
    <div className="funny">
      <div className=" col-sm-12 col-md-6 col-lg-6 ">
        <img
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
          src="https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          className="h-100vh w-100 "
          alt="Sample image"
        />
      </div>
      <div className=" col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center p-3">
        <form
          style={{
            boxShadow: " 0px 4px 22px 0px #0000001A",
            borderRadius: "14px",
            width: "400px",
            padding: "15px",
            height: "auto",
          }}
        >
          <h2
            style={{
              marginBottom: "2rem",
              marginTop: "2rem",
              fontFamily: "poppins",
              fontWeight: "bold",
              color: "#1C5A40",
            }}
            className=""
          >
            Complete Your Profile
          </h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
          <label
            style={{
              fontFamily: "poppins",
            }}
            className="mt-4 d-flex align-items-start"
            htmlFor="form3Example3"
          >
            Full Name
          </label>
          <div className="form-outline mb-4">
            <input
              style={{
                fontFamily: "CenturyGothic",
                outline: "none",
                // borderStyle: "none",
                borderColor: "#1C5A40",
              }}
              //   onChange={(e) => {
              //     let value = e.target.value;
              //     onInputChange("email", value);
              //   }}
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Full Name"
            />
          </div>
          <label
            style={{
              fontFamily: "poppins",
            }}
            className="mt-4 d-flex align-items-start"
            htmlFor="form3Example3"
          >
            Date of birth
          </label>
          <div className="form-outline mb-4">
            <input
              style={{
                fontFamily: "CenturyGothic",
                outline: "none",
                borderColor: "#1C5A40",
              }}
              type="date"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="DOB"
            />
          </div>

          <label>Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              //   onClick={onSubmit}
              type="button"
              className="btn  btn-lg"
              style={{
                fontFamily: "poppins",
                color: "white",
                backgroundColor: "#1C5A40",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                width: "100%",
                marginBottom: "2rem",
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CompleteProfile;
