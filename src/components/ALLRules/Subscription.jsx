
import React from 'react';
import sb from "../../styles/subscription.module.css";

const Subscription = () => {
  return (
    <div className={sb.subscription}>
      <div className={sb.header}>
        <h2>Подписка SHIELD+</h2>
      </div>
      <div className={sb.container}>
        <div className={sb.cart}>
          <p className='topblock'>SHIELD+ 1 месяц</p>
          <button>200Р / Ежемесячно</button>
        </div>
        <div className={sb.cart}>
          <p className={sb.border}> Выгодное решение </p>
          <p className='topblock'>SHIELD+ 3 месяца</p>
          <button>400Р / Ежеквартально</button>
        </div>
        <div className={sb.cart}>
          <p className='topblock'> SHIELD+ Multi</p>
          <button>Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
