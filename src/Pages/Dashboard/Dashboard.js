import React from "react";
import { useEffect, useState } from "react";
import leaves from "./assets/leaves.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import brand1 from "./assets/brand1.png";
import brand2 from "./assets/brand2.png";
import { ContentCopy } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import "../Dashboard/assets/Style.css";

function Dashboard() {
  const location = useLocation();
  const [user, setUser] = useState();

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

    fetch(
      `https://coco-backend1.herokuapp.com/getUserByToken/${locParams}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let user = result.user;
        setUser(user);
      })
      .catch((error) => console.log("error", error));
  }, []);
  if (!user) {
    return <>loading..</>;
  }
  return (
    <div className="container">
      <div className="dashboard-main">
        <div className="dashboard-div d-flex justify-content-between">
          <h3
            className="title mt-5"
            style={{
              color: " #1c5a40",
              fontSize: "31",
              fontWeight: "700",
            }}
          >
            COCO
          </h3>

          <div className="user-avatar mt-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-circle"
              alt="Avatar"
            />
          </div>
        </div>
        <h4 className="d-flex justify-content-start">Hello {user.fullName}</h4>
        <h4 className="d-flex justify-content-start">
          EmailId: {user.emailId} <br /> id : {user.token}
        </h4>
        <div className="container">
          <div className="card" id="dashboard-main-card">
            <div className="card-boddy">
              <div className="user-info d-flex justify-content-between">
                <div className="title-card-head">
                  <h4 className="title-dashboard-main d-flex justify-content-start mt-4 ms-3">
                    Transaction
                  </h4>
                  <p className="d-flex justify-content-start ms-3">
                    Link a bank account and withdraw earnings from
                  </p>
                </div>
                <div className="user-avatar mt-4">
                  <img
                    src={leaves}
                    class="rounded-circle"
                    alt="Avatar"
                    style={{
                      transform: "rotate(-35.42deg)",
                    }}
                  />
                </div>
              </div>
              <div className="table-responsive" id="no-more-tables">
                <div className="table-responsive" id="no-more-tables-open">
                  <table class="table align-middle table-borderless mb-0 bg-white">
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center justify-content-center">
                            <img src={leaves} alt="" class="rounded-circle" />
                          </div>
                        </td>
                        <td>
                          <div class="ms-3" id="planted">
                            <p class="fw-bold mb-1 dashboardt">
                              Planted a tree
                            </p>
                            <p class="text-muted mb-0">26 July, 6:23 PM</p>
                          </div>
                        </td>
                        <td>
                          <p class="fw-normal mb-1 yourtrees">₹ 1025</p>
                        </td>
                        <td>
                          <span class="badge badge-success rounded-pill d-inline-block ">
                            Code Generated
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center justify-content-center">
                            <img src={leaves} alt="" class="rounded-circle" />
                          </div>
                        </td>
                        <td>
                          <div class="ms-3" id="planted">
                            <p class="fw-bold mb-1 dashboardt">
                              Planted a tree
                            </p>
                            <p class="text-muted mb-0">26 July, 6:23 PM</p>
                          </div>
                        </td>
                        <td>
                          <p class="fw-normal  mb-1 yourtrees">₹ 1025</p>
                        </td>
                        <td>
                          <span class="badge badge-success rounded-pill d-inline-block">
                            Code Generated
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center justify-content-center">
                            <img src={leaves} alt="" class="rounded-circle" />
                          </div>
                        </td>
                        <td>
                          <div class="ms-3" id="planted">
                            <p class="fw-bold mb-1 dashboardt">
                              Planted a tree
                            </p>
                            <p class="text-muted mb-0">26 July, 6:23 PM</p>
                          </div>
                        </td>
                        <td>
                          <p class="fw-normal  mb-1 yourtrees">₹ 1025</p>
                        </td>
                        <td>
                          <span class="badge badge-success rounded-pill d-inline-block">
                            Code Generated
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Button className="viewall">view All</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="coupons mb-5">
            <h4 className="title-dashboard d-flex justify-content-start mt-5 ms-4">
              My Coupons
            </h4>
            <div
              className="coupons-card mt-5 flex-wrap"
              style={{
                rowGap: "20px",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  width: 400,
                  justifyContent: "space-around",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "180px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={brand1}
                      alt="Live from space album cover"
                    />
                  </CardContent>
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      color: "#18895A",
                      fontSize: 30,
                      fontWeight: 600,
                    }}
                  >
                    Get 15% Off
                  </Typography>
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "0px",
                      columnGap: "32px",
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Social
                      <br />
                      10%
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Customer
                      <br />
                      10%
                    </Typography>
                  </CardContent>
                  <Button
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.16)",
                      color: "#000",
                      fontSize: 15,
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    Generate Code
                  </Button>
                </CardContent>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  width: 400,
                  justifyContent: "space-around",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "180px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={brand1}
                      alt="Live from space album cover"
                    />
                  </CardContent>
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      color: "#18895A",
                      fontSize: 30,
                      fontWeight: 600,
                    }}
                  >
                    Get 15% Off
                  </Typography>
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "0px",
                      columnGap: "32px",
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Social
                      <br />
                      10%
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Customer
                      <br />
                      10%
                    </Typography>
                  </CardContent>
                  <Button
                    sx={{
                      backgroundColor: "#EAFFF6",
                      color: "#000",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                    endIcon={<ContentCopy />}
                  >
                    A345CFG67CC
                  </Button>
                </CardContent>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  width: 400,
                  justifyContent: "space-around",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "180px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={brand2}
                      alt="Live from space album cover"
                    />
                  </CardContent>
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      color: "#18895A",
                      fontSize: 30,
                      fontWeight: 600,
                    }}
                  >
                    Get 15% Off
                  </Typography>
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "0px",
                      columnGap: "32px",
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Social
                      <br />
                      10%
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Customer
                      <br />
                      10%
                    </Typography>
                  </CardContent>
                  <Button
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.16)",
                      color: "#000",
                      fontSize: 15,
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    Generate Code
                  </Button>
                </CardContent>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  width: 400,
                  justifyContent: "space-around",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "180px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={brand2}
                      alt="Live from space album cover"
                    />
                  </CardContent>
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      color: "#18895A",
                      fontSize: 30,
                      fontWeight: 600,
                    }}
                  >
                    Get 15% Off
                  </Typography>
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "0px",
                      columnGap: "32px",
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Social
                      <br />
                      10%
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Customer
                      <br />
                      10%
                    </Typography>
                  </CardContent>
                  <Button
                    sx={{
                      backgroundColor: "#EAFFF6",
                      color: "#000",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                    endIcon={<ContentCopy />}
                  >
                    A345CFG67CC
                  </Button>
                </CardContent>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  width: 400,
                  justifyContent: "space-around",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "180px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src="https://i.pinimg.com/550x/cc/a3/7b/cca37b12ba6f2258cc055202ceccc2f9.jpg"
                      alt="Live from space album cover"
                    />
                  </CardContent>
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      color: "#18895A",
                      fontSize: 30,
                      fontWeight: 600,
                    }}
                  >
                    Get 15% Off
                  </Typography>
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "0px",
                      columnGap: "32px",
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Social
                      <br />
                      10%
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Customer
                      <br />
                      10%
                    </Typography>
                  </CardContent>
                  <Button
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.16)",
                      color: "#000",
                      fontSize: 15,
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    Generate Code
                  </Button>
                </CardContent>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  width: 400,
                  justifyContent: "space-around",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "180px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src="https://i.pinimg.com/550x/cc/a3/7b/cca37b12ba6f2258cc055202ceccc2f9.jpg"
                      alt="Live from space album cover"
                    />
                  </CardContent>
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      color: "#18895A",
                      fontSize: 30,
                      fontWeight: 600,
                    }}
                  >
                    Get 15% Off
                  </Typography>
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "0px",
                      columnGap: "32px",
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Social
                      <br />
                      10%
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                      }}
                    >
                      Customer
                      <br />
                      10%
                    </Typography>
                  </CardContent>
                  <Button
                    sx={{
                      backgroundColor: "#EAFFF6",
                      color: "#000",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                    endIcon={<ContentCopy />}
                  >
                    A345CFG67CC
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
