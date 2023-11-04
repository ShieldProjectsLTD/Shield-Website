import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/newbutton.css';

const NewsButton = () => {
  return (
    <div className="news-container">
      <div className='topBorder'></div>
      <h1>Будь в курсе новостей</h1>
      <div className="news-grid">
        <Link to="/news/1" className="news-link">
          <div className="news-item">
            <div className="news-button">Последние новости от команды сервера</div>
          </div>
        </Link>
        <Link to="/news/2" className="news-link">
          <div className="news-item">
            <div className="news-button">Даты проведения соревнований</div>
          </div>
        </Link>
        <Link to="/news/3" className="news-link">
          <div className="news-item">
            <div className="news-button">Последние новости от команды сервера</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsButton;
