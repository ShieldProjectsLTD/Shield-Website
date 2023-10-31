// Subscription.js
import React from 'react';
import sb from "../../styles/subscription.module.css";
// import LOG from "../../images/imgcart.jpg";

const Subscription = () => {
  return (
    <div className={sb.subscription}>
      <div className={sb.header}>
        <h2>Подписка SHIELD+</h2>
      </div>
      <div className={sb.container}>
        <div className={sb.cart}>
          <div className={sb.cartImageContainer}>
            {/* <img src={LOG} alt="Cart" className={sb.cartImage} /> */}
          </div>
          <p>SHIELD+ 1 месяц</p>
          <button>200Р / Ежемесячно</button>
        </div>
        <div className={sb.cart}>
          <div className={sb.cartImageContainer}>
            {/* <img src={LOG} alt="Cart" className={sb.cartImage} /> */}
          </div>
          <p>SHIELD+ 3 месяца</p>
          <button>400Р / Ежемесячно</button>
        </div>
        <div className={sb.cart}>
          <div className={sb.cartImageContainer}>
          {/* <img src={LOG} alt="Cart"  className={sb.cartImage} /> */}
          </div>
          <p>SHIELD+ Multi</p>

          <button>Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
