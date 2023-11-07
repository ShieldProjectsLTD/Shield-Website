import React from 'react';
import Left from "../../images/LeftBlock.png";
import nd from "../../styles/newdonat.module.css"; 

const NewDonat = () => {
  return (
    <div className={nd.container}>
      <div className={nd.content}>
        <div className={nd.Texta} >Прочие услуги
        ВРЕМЕННО ПРИ ВХОДЕ</div>
        <div className={nd.gridcontainer}>
          <div className={nd.borderedcontent}>
            <div className={nd.photo}>
              <img src={Left} alt="Изображение" className="leftimage" />
            </div>
            <div className={nd.text}>
              <h4>Название услуги</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className={nd.borderedcontent}>
            <div className="photo">
              <img src={Left} alt="Изображение" className="leftimage" />
            </div>
            <div className={nd.text}>
              <h4>Название услуги</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className={nd.borderedcontent}>
            <div className="photo">
              <img src={Left} alt="Изображение" className="leftimage" />
            </div>
            <div className={nd.text}>
              <h4>Название услуги</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className={nd.borderedcontent}>
            <div className="photo">
              <img src={Left} alt="Изображение" className="leftimage" />
            </div>
            <div className={nd.text}>
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
