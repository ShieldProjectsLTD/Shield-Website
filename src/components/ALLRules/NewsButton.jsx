import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/newbutton.css'; // Подключаем файл со стилями

const NewsButton = () => {
    return (
      <div>
        <h1>Будь в курсе новостей</h1>
        <ul>
          <li>
            <Link to="/news/1" className="news-link">
              <div className="news-button">Последние новости от команды сервера</div>
            </Link>
          </li>
          <li>
            <Link to="/news/2" className="news-link">
              <div className="news-button">Даты проведения соревнований</div>
            </Link>
          </li>
          <li>
            <Link to="/news/3" className="news-link">
              <div className="news-button">Последние новости от команды сервера</div>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default NewsButton;