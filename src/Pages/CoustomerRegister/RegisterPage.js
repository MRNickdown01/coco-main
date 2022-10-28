import React from "react";
import { useState, useEffect } from "react";
import "../HomePages/Style.css";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const location = useLocation();
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(true);
  const [user, setUser] = useState({
    email: {
      value: "",
      error: false,
    },
  });
  //ye useeffect
  useEffect(() => {
    let locParams = location.search;
    locParams = locParams.split("?token=")[1];
    console.log(locParams, "abcd");
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`http://localhost:5000/getUserByToken/${locParams}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    // if (result.length > 0) {
    //   history.push("/completeprofile");
    // } else {
    //   history.push("/Dashboard");
    // }
  }, []);

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
      async function login() {
        let item = user.email.value.trim();
        const response = await fetch(
          "https://coco-backend1.herokuapp.com/addUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ emailId: item }),
          }
        );
        const data = await response.json();
        console.log(data);
        alert(data.message);
      }
      login();
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
              src="https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
                Start the journey to <br /> be the change
              </h2>
              {!state ? (
                <>
                  <label
                    style={{
                      fontFamily: "poppins",
                    }}
                    className="mt-4 d-flex align-items-start"
                    htmlFor="form3Example3"
                  >
                    Email Id
                  </label>
                  <div className="form-outline mb-4">
                    <input
                      style={{
                        fontFamily: "poppins",
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
                          fontFamily: "poppins",
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
                        fontFamily: "poppins",
                        color: "white",
                        backgroundColor: "#1C5A40",
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                        width: "100%",
                        marginBottom: "30px",
                      }}
                    >
                      Register
                    </button>
                    {/* <button
                      onClick={login}
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
                      Register
                    </button> */}
                  </div>
                </>
              ) : (
                <>
                  <p
                    style={{
                      fontFamily: "poppins",
                      color: "#1C5A40",
                      fontWeight: 600,
                    }}
                  >
                    We have sent a magic link to your email
                  </p>
                  <div className="form-outline mb-1 d-flex flex-row">
                    <p
                      style={{
                        fontFamily: "poppins",
                        border: "none",
                        color: "#1C5A40",
                        fontWeight: "500",
                      }}
                      disabled={edit}
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                    >
                      {user.email.value}
                    </p>
                  </div>
                  <div className="text-center text-lg-start mt-1 pt-2">
                    <a href="/Register">
                      <button
                        // onClick={onSubmit}
                        type="button"
                        className="btn  btn-lg"
                        style={{
                          fontFamily: "poppins",
                          color: "#1C5A40",
                          border: "2px dashed #1C5A40",
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                          width: "100%",
                          marginBottom: "30px",
                        }}
                      >
                        Change E-mail
                      </button>
                    </a>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
