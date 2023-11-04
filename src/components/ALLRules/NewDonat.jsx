import React from 'react';
import Left from "../../images/LeftBlock.png";
import "../../styles/newdonat.css"; 

const NewDonat = () => {
  return (
    <div className="container">
      <div className="content">
        <div className='Texta' >Прочие услуги
        ВРЕМЕННО ПРИ ВХОДЕ</div>
        <div className="grid-container">
          <div className="bordered-content">
            <div className="photo">
              <img src={Left} alt="Изображение" className="leftimage" />
            </div>
            <div className="text">
              <h4>Название услуги</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="bordered-content">
            <div className="photo">
              <img src={Left} alt="Изображение" className="leftimage" />
            </div>
            <div className="text">
              <h4>Название услуги</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="bordered-content">
            <div className="photo">
              <img src={Left} alt="Изображение" className="leftimage" />
            </div>
            <div className="text">
              <h4>Название услуги</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="bordered-content">
            <div className="photo">
              <img src={Left} alt="Изображение" className="leftimage" />
            </div>
            <div className="text">
              <h4>Название услуги</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDonat;
