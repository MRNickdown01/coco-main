import React from "react";
// import image from "../CoustomerRegister/assets/Image.png";
import { useState, useEffect } from "react";
import pencil from "../CoustomerRegister/assets/pencil.png";
import "../HomePages/Style.css";
const Login = () => {
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(true);
  const [user, setUser] = useState({
    email: {
      value: "",
      error: false,
    },
  });
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  const onInputChange = (id, value) => {
    let _user = { ...user };
    _user[id].value = value;
    _user[id].error = false;
    setUser(_user);
  };
  const isEmailValid = (email) => {
    let emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return emailRegex.test(email);
  };
  const onSubmit = () => {
    console.log("User Pressed Submit : ", user);
    let userObjectHasError = false;
    let _user = { ...user };
    Object.keys(user).forEach((key) => {
      if (key === "email") {
        let hasError = !isEmailValid(_user[key].value);
        _user[key].error = !isEmailValid(_user[key].value);
        if (hasError) {
          userObjectHasError = true;
        }
      }
    });

    if (!userObjectHasError) {
      setState(!state);
    } else {
      setUser(_user);
    }
  };
  return (
    <>
      <section>
        <div className="funny">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              }}
              src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80"
              className="h-100vh w-100 "
              alt="Sample image"
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center p-3">
            <form
              style={{
                boxShadow: " 0px 4px 22px 0px #0000001A",
                borderRadius: "14px",
                width: "400px",
                padding: "15px",
                height: "auto",
              }}
            >
              {!state ? (
                <>
                  <h2
                    style={{
                      marginBottom: "2rem",
                      marginTop: "2rem",
                      fontFamily: "museo-sans",
                      fontWeight: "bold",
                      color: "#1C5A40",
                    }}
                    className=""
                  >
                    Continue Your journey to <br /> be the change
                  </h2>
                  <label
                    style={{
                      fontFamily: "museo-sans",
                    }}
                    className="mt-4 d-flex align-items-start"
                    htmlFor="form3Example3"
                  >
                    Email Id
                  </label>
                  <div className="form-outline mb-4">
                    <input
                      style={{
                        fontFamily: "museo-sans",
                        outline: "none",
                        // borderStyle: "none",
                        borderColor: "#1C5A40",
                      }}
                      onChange={(e) => {
                        let value = e.target.value;
                        onInputChange("email", value);
                      }}
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Email Id"
                    />
                    {user["email"].error ? (
                      <div
                        style={{
                          fontFamily: "museo-sans",
                          textAlign: "left",
                        }}
                      >
                        <p
                          style={{
                            padding: "4px",
                            fontSize: "12px",
                            textAlign: "left",
                            color: "#1C5A40",
                            fontWeight: "bold",
                          }}
                        >
                          Enter correct email
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      onClick={onSubmit}
                      type="button"
                      className="btn  btn-lg"
                      style={{
                        fontFamily: "museo-sans",
                        color: "white",
                        backgroundColor: "#1C5A40",
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                        width: "100%",
                        marginBottom: "30px",
                      }}
                    >
                      Login
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* <p
                    style={{
                      fontFamily: "museo-sans",
                      color: "#1C5A40",
                      fontWeight: 600,
                    }}
                  >
                    Check Your Profile Now
                  </p> */}
                  <div className="form-outline mb-4 d-flex flex-column justify-content-center align-items-center">
                    <img
                      // style={{
                      //   display
                      // }}
                      height={70}
                      width={70}
                      src="https://cdn-icons-png.flaticon.com/512/5839/5839838.png"
                    />
                    <h3
                      style={{
                        color: "#1C5A40",
                        marginTop: "2rem",
                      }}
                    >
                      Success Magic Link Send Your Email
                    </h3>
                    {/* <input
                      style={{
                        fontFamily: "museo-sans",
                      }}
                      disabled={edit}
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                    />
                    <img
                      onClick={() => setEdit(!edit)}
                      style={{ marginLeft: "-3rem", marginTop: "0.5rem" }}
                      height={30}
                      width={30}
                      src={pencil}
                    /> */}
                  </div>
                  {/* <div className="text-center text-lg-start mt-4 pt-2">
                    <a href="/dashboard">
                      <button
                        // onClick={onSubmit}
                        type="button"
                        className="btn  btn-lg"
                        style={{
                          fontFamily: "museo-sans",
                          color: "white",
                          backgroundColor: "#1C5A40",
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                          width: "100%",
                          marginBottom: "30px",
                        }}
                      >
                        Get Started
                      </button>
                    </a>
                  </div> */}
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
