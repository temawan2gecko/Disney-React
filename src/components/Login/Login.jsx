import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__content">
        <div className="CTA">
          <img
            src="/images/cta-logo-one.svg"
            alt="CTA-logo-one"
            className="CTA-logoOne"
          />
          <button className="login__btn">Get all there</button>
          <div className="login__descr">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </div>
          <img
            src="/images/cta-logo-two.png"
            alt="CTA-logo-two"
            className="CTA-logoTwo"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
