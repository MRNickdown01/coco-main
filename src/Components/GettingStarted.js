import React from "react";

function GettingStarted({ onClick }) {
  return (
    <div>
      <section>
        <div className="footerType">
          <div className="container">
            <div className="pt-5 footerTypeTitle">
              <div className="title">
                <h4 className="d-flex justify-content-center">Get started</h4>
              </div>
            </div>
            <div className="footerTypeinfo">
              <p>Discover a more rewarded shopping experience.</p>
              <a href="/">
                <button onClick={onClick}>sign up now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GettingStarted;
