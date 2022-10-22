import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Card = () => {
  const [value, setValue] = useState(false);
  const magicEmail = useRef(null);

  const onButtonclick = () => {
    console.log(magicEmail.current.value);
  };

  return (
    <>
      <div className="imageSide">
        <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=740&t=st=1664539506~exp=1664540106~hmac=4242d907003bd24c523c7261ae555b63ba5fba4ae9643e8422e1adeccaf42cbc" />
      </div>
      {value === false ? (
        <div className="mainCard1">
          <div
            className="card"
            style={{
              width: "25rem",
              height: "28rem",
            }}
          >
            <div className="emailIcon">
              <i class="fa-solid fa-shield-halved"></i>
              <p>A magic link will be sent your Email</p>
            </div>
            <h5 className="heading">Enter Your Email</h5>
            <div className="inputDetil">
              <input className="inputBox" placeholder="" type="text"></input>
              {/* <button color="buttonbg" className="btn-text" /> */}
              <Link to="/update-profile">Add New Pay</Link>

              <button
                onClick={() => {
                  setValue(!value);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainCard2">
          <div
            className="card"
            style={{
              width: "25rem",
              height: "28rem",
            }}
          >
            <div className="magicIcon">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              <p>A magic link will be sent your Email</p>
            </div>
            <div className="inputMagic">
              <input
                className="inputBox"
                placeholder="createemail123@gmail.com"
                type="text"
                ref={magicEmail}
              ></input>
              <div className="magicinputIcon">
                <button
                  onClick={() => {
                    setValue(!value);
                  }}
                  className="magicBicon"
                >
                  <i class="fa-solid fa-pencil"></i>
                </button>
                <button onClick={onButtonclick}>submit</button>
              </div>
              {/* <button
            onClick={() => {
              setValue(!value);
            }}
          >
            change state
          </button>
          {value ? "true" : "false"} */}

              {/* </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
