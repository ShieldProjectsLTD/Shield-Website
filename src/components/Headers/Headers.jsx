import React from 'react';
import styles from '../../components/Headers/headers.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/Logo.png';

const Headers = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.grayBorder}>
        <div className={styles.leftSection}>
          <img src={LOGO} alt='' className={styles.logo} />
          <div className={styles.navLinks}>
            <Link to="/">Главная</Link>
            <Link to={ROUTES.NEW}>Новости</Link>
            <Link to={ROUTES.ABOUT}>О нас</Link>
          </div>
        </div>
      </div>
        <div className={styles.userSection}>
            <Link to='/'>Войти</Link>
            <Link className={styles.btn} to="/">Зарегистрироваться</Link>
        </div>
    </div>
  );
};

export default Headers;
