import React, { useState, useEffect } from "react";

import "./Style.css";
import { useRef } from "react";
import GettingStarted from "../../Components/GettingStarted";

const HomePage = () => {
  const ref = useRef(null);
  const [state, setState] = useState(false);
  const [nav, setnav] = useState(false);

  // useEffect runs two time onfirstrender second:condition we pass
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setnav(localStorage.getItem("prevVisit"));
    setState(localStorage.getItem("prevVisit"));
  }, [state]);

  const handleClick = () => {
    setState(true);
    setnav(true);
    localStorage.setItem("prevVisit", true);
  };
  return (
    <>
      {nav ? (
        <div className="nav-bar">
          <div className="header">
            <div className="logo d-flex justify-content-between">
              <a href="/">
                <h3 className="title-logo  d-flex align-items-center pt-1">
                  COCO
                </h3>
              </a>
              <div className="header-button d-flex align-items-center">
                <a href="Login">
                  <h3 className="login pt-1">Login</h3>
                </a>
                <a href="Register">
                  <button className="sign-in">Register</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <section className="mainBanner">
        <div className="banner">
          <div className="bannerImage">
            <div className="bannerInfo">
              <h4>Get Discounts</h4>
              {/* <div className="bannertitle">
                <h3>That cash back feeling</h3>
                <p>
                  With Ibotta, you can get cash back every time you shop.
                  <br /> We make it easy, fast, and safe to save big.
                </p>
              </div> */}
              <div className="text-wrapper">
                <p className="text-animation">
                  Feed a Dog
                  <br />
                  <br />
                  Plant a Tree
                  <br />
                  <br />
                  Recycle Plastic
                </p>
              </div>
            </div>
            <div className="scrollDown">
              <button onClick={handleClick}>Tell Me More</button>
            </div>
            <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg" />
          </div>
        </div>
        {/* </div> */}
      </section>

      {state ? (
        <main>
          <section ref={ref}>
            <div className="cardSection">
              <div className="container">
                <h3>Click, click, easy cash back online</h3>
                <div className="allCard">
                  <div className="any">
                    <div className="cardSectioninfo">
                      <img src="//home.ibotta.com/wp-content/uploads/2022/06/col-header-1.svg" />

                      <div className="cardTitle">
                        <h5 className="d-flex justify-content-center">
                          Sign up to access speical offers
                        </h5>
                        <p>
                          Login on your browser and select from top retailer and
                          brand offers. Dont forget to activate before you shop
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="any">
                    <div className="cardSectioninfo">
                      <img src="https://home.ibotta.com/wp-content/uploads/2022/04/col-header-2.png" />
                      <div className="cardTitle">
                        <h5>Sign up to access speical offers</h5>
                        <p>
                          Login on your browser and select from top retailer and
                          brand offers. Dont forget to activate before you shop
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="any">
                    <div className="cardSectioninfo">
                      <img src="https://home.ibotta.com/wp-content/uploads/2022/04/col-header-3.png" />
                      <div className="cardTitle">
                        <h5>Sign up to access speical offers</h5>
                        <p>
                          Login on your browser and select from top retailer and
                          brand offers. Dont forget to activate before you shop
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="allButtons">
              <div className="container">
                <h3 className="allButtons-title">
                  Up to 30% cash back at thousands of top retailers{" "}
                </h3>
                <div className="allButton">
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-HomeDepot.svg" />
                    <div className="shopButton">shop</div>
                  </div>

                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-BestBuy.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-Hotels.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-eBay.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-QVC.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-Chewy.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-Kohls.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-Priceline.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-groupon.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-HomeDepot.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-BestBuy.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                  <div className="buttonCard">
                    <img src="https://home.ibotta.com/wp-content/uploads/2022/04/retailer-Hotels.svg" />
                    <div className="shopButton">shop</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="buttonCardsection">
              <div className="container">
                <div className="cardTypeimg">
                  <div className="scrollDown2">
                    <a href="/shopping">
                      <button>Tell Me More</button>
                    </a>
                  </div>
                  {/* <Link to="/login">sign up today</Link> */}

                  <img src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_960_720.jpg"></img>
                  <div className="cardTypebutton"></div>
                </div>
              </div>
            </div>
          </section>
          {/* ,,, */}
          <GettingStarted onClick={() => setState(true)} />
          <section>
            <div className="subContainer">
              <div className="container">
                <h3>Get more from Hello</h3>
                <div className="subMaincontainer">
                  <div className="col-md-6 col-sm-12">
                    <div className="subContainercard">
                      <img src="https://cdn.pixabay.com/photo/2016/05/18/16/25/shopping-1400845_960_720.png" />
                      <div className="subcardInfo">
                        <h4>
                          When you’re a <strong>browser</strong> master
                        </h4>
                        <p>
                          Download the free Ibotta browser extension by clicking
                          Add to Chrome from your desktop. Compare prices and
                          get the best deal, every time you shop.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="subContainercard">
                      <img src="https://cdn.pixabay.com/photo/2016/05/18/16/25/shopping-1400845_960_720.png" />
                      <div className="subcardInfo">
                        <h4>
                          When you’re a <strong>browser</strong> master
                        </h4>
                        <p>
                          Download the free Ibotta browser extension by clicking
                          Add to Chrome from your desktop. Compare prices and
                          get the best deal, every time you shop.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="container-fluid">
              <div className="footer mb-5">
                <span className="footertext">
                  <p>Terms of use | Privacy policy &copy;2022</p>
                </span>
                <div className="iconList">
                  <div className="iconBg">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div className="iconBg">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="iconBg">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="iconBg">
                    <i className="fa-brands fa-pinterest"></i>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      ) : null}
    </>
  );
};
export default HomePage;
