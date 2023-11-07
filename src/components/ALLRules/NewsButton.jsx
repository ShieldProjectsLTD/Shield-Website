import React from 'react';
import { Link } from 'react-router-dom';
import nb from '../../styles/newbutton.module.css';

const NewsButton = () => {
  return (
    <div className={nb.newscontainer}>
      <div className={nb.topBorder}></div>
      <h1>Будь в курсе новостей</h1>
      <div className={nb.newcontent}>
        <Link to="/news/1(TEST)" className={nb.newslink}>
          <div className={nb.newsitem}>
            <div className={nb.newsbutton}>Последние новости от команды сервера</div>
          </div>
        </Link>
        <Link to="/news/2" className={nb.newslink}>
          <div className={nb.newsitem}>
            <div className={nb.newsbutton}>Даты проведения соревнований</div>
          </div>
        </Link>
      </div>
        <Link to="/news/3" className={nb.newslink}>
          <div className={nb.newsitem}>
            <div className={nb.newsbutton}>Последние новости от команды сервера</div>
          </div>
        </Link>
    </div>
  );
};

export default NewsButton;
