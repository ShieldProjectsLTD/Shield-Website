import React from 'react'
import cl from "../../styles/rules.module.css"
import mainkfaft from "../../images/maynkraft.png"

const Rules = () => {
  return (
    <div className={cl.content}>
      <div className={cl.info}>
        <div className={cl.flexContainer}>
          <div className={cl.textMain}>
            <h1>Уникальные майнкрафт сервера</h1>
            <p>Наш мониторинг серверов Майнкрафт отличается качественной проработкой всех страниц – тысячи проектов тщательно оформлены. Информация проходит ручную проверку, чтобы вы находили действительно интересные сообщества игроков.</p>
          </div>
          <div className={cl.imageContainer}>
            <img className={cl.img} src={mainkfaft} alt='' />
          </div>
        </div>
      </div>
      <div className={cl.textBlock}>
  <div className={cl.textItem1}>
    <h2>И сколько у вас уникальных серверов?</h2>
    <p className={cl.rectangle1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa non ipsam aut assumenda nobis eligendi, minima pariatur architecto reiciendis! Odio porro ab necessitatibus numquam iste fuga temporibus sequi nesciunt.</p>
  </div>
  <div className={cl.textItem2}>
    <h2>И что за сервера?</h2>
    <p className={cl.rectangle2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa non ipsam aut assumenda nobis eligendi, minima pariatur architecto reiciendis! Odio porro ab necessitatibus numquam iste fuga temporibus sequi nesciunt.</p>
  </div>
  <div className={cl.textItem3}>
    <h2>Хочу! А как начать играть?</h2>
    <p className={cl.rectangle3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsa non ipsam aut assumenda nobis eligendi, minima pariatur architecto reiciendis! Odio porro ab necessitatibus numquam iste fuga temporibus sequi nesciunt.</p>
  </div>
</div>

    </div>
  )
}

export default Rules
