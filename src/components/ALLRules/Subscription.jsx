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
          <p>200Р Ежемесячно</p>
          <button>Добавить в корзину</button>
        </div>
        <div className={sb.cart}>
          <div className={sb.cartImageContainer}>
            {/* <img src={LOG} alt="Cart" className={sb.cartImage} /> */}
          </div>
          <p>SHIELD+ 3 месяца</p>
          <p>400Р Ежемесячно</p>
          <button>Добавить в корзину</button>
        </div>
        <div className={sb.cart}>
          <div className={sb.cartImageContainer}>
          {/* <img src={LOG} alt="Cart"  className={sb.cartImage} /> */}
          </div>
          <p>SHIELD+ Multi</p>
          <p>Оставить заявку</p>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
