import React from "react";
import "./shopping.css";
import GettingStarted from "../../Components/GettingStarted";

const ShoppingPages = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="header">
          <div className="logo d-flex justify-content-between">
            <h3 className="title-logo  d-flex align-items-center pt-1">COCO</h3>
            <div className="header-button d-flex align-items-center">
              <h3 className="login pt-1">Login</h3>
              <a href="Register">
                <button className="sign-in">Register</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section>
          <div className="main-page">
            <div className="container">
              <div className="title">
                <h4>Earn cash back when you shop online</h4>
                <p>
                  Earn cash back when you shop online Whether you prefer to do
                  your online shopping from your phone or your computer,
                  Ibotta’s got you covered with cash back at hundreds of online
                  retailers, food delivery services, travel sites, and more. Use
                  your computer to stock up without leaving the house, or shop
                  with the Ibotta app when you’re on the go.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="earanoption">
            <div className="container">
              <div className="subEranOption">
                <div className="subMaincontainer2">
                  <div className="col-md-6 col-sm-12">
                    <div className="subContainercard1">
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
                    <div className="subContainercard1">
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
              <div className="subEranOption mb-5 ">
                <div className="subMaincontainer2">
                  <div className="col-md-6 col-sm-12">
                    <div className="subContainercard1">
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
                    <div className="subContainercard1">
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
          </div>
        </section>
        <GettingStarted />

        <footer>
          <div className="container-fluid">
            <div className="footer mb-5">
              <div className="footertext">
                <p>Terms of use | Privacy policy &copy;2022</p>
              </div>
              <div className="iconList">
                <div className="iconBg">
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="iconBg">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="iconBg">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="iconBg">
                  <i class="fa-brands fa-pinterest"></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};
export default ShoppingPages;
