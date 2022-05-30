import React from "react";
import logo from "../../../img/logo.svg"
import style from "../Footer/Footer.module.scss"



const Footer = () => {
    return (
     <div className={style.wrapper}>
    


    <div className={style.main_info}>
      <img src={logo} alt="logo" />
      <ul className={style.main_info_texts}>
          <li>+7 (958) 111-95-03</li>
          <li>+7 (812) 660-50-54</li>
          <li>Пн-вс: с 10:00 до 21:00</li>
          <li>Проспект Стачек 67 к.5</li>
          <li>Лиговский проспект 205</li>
          <li>Гражданский проспект, 116 к.5</li>
      </ul>
    </div>

    <div className={style.for_client}>
        <span>Для клиента</span>
        <ul>
            <li>Как купить</li>
            <li>Доставка и оплата</li>
            <li>Кредит</li>
            <li>Политика конфиденциальности</li>
            <li>Вопросы и ответы (F.A.Q.)</li>
            <li>Сервис и гарантия</li>
            
        </ul>

    </div>

    <div className={style.about_shop}>
    <span>О магазине</span>
        <ul>
            <li>Отзывы</li>
            <li>Наши преимущества</li>
            <li>История компании</li>
            <li>Сотрудничество</li>
            <li>Партнёрская программа</li>
            <li>Вакансии</li>
            
        </ul>


    </div>
    <div className={style.cooperation}>
     
    <span>Сотрудничество</span>
        <ul>
            <li>Оптом</li>
            <li>Дропшиппинг</li>
            
        </ul>
    </div>



     </div>
    )
}

export default Footer