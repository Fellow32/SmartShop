import React, { useState } from "react";
import style from './Header.module.scss'
import menu_icon from '../../img/menu-icon.svg'
import icon1 from '../../img/menu/icon1.svg'
import icon2 from '../../img/menu/icon2.svg'
import icon3 from '../../img/menu/icon3.svg'
import icon4 from '../../img/menu/icon4.svg'
import icon5 from '../../img/menu/icon5.svg'
import icon6 from '../../img/menu/icon6.svg'
import icon7 from '../../img/menu/icon7.svg'
import icon8 from '../../img/menu/icon8.svg'
import icon9 from '../../img/menu/icon9.svg'
import icon10 from '../../img/menu/icon10.svg'
import icon11 from '../../img/menu/icon11.svg'
import Slider from "../Elements/Slider/Slider";
import HeaderInfo from "../Elements/HeaderInfo/HeaderInfo";











const Header = () => {


     return (

          <div className={style.header_wrapper}>

      


     <HeaderInfo/>








           <div className={style.menu}>

                <div>
                  
                 
                <ul>


                  <li  className={style.burger}>
                    
                    <img src={menu_icon} alt='menu_icon'/>
                    <span>Каталог товаров</span>
                    
                  

                
                  </li>



                  <li>О Компании</li>
                  <li>Акции</li>
                  <li>Рассрочка 0|0|18</li>
                  <li>Сервис и Гарантия</li>
                  <li>Опт/ дропшиппинг</li>
                  <li>Контакты</li>
                </ul>
                </div>  


                 
                <Slider />

                    
              
               
               


                

           </div>
          
                

                
                 
               
                 <div className={style.menu_categories}>
                  <ul >
                        <li><img src={icon1} alt="icon1" /><span>Гироскутеры</span></li>
                        <li><img src={icon2} alt="icon2" /><span>Электросамокаты</span></li>
                        <li><img src={icon3} alt="icon3" /><span>Моноколеса</span></li>
                        <li><img src={icon4} alt="icon4" /><span>Сигвеи и мини-сигвеи</span></li>
                        <li><img src={icon5} alt="icon5" /><span>Электроскутеры</span></li>
                        <li><img src={icon6} alt="icon6" /><span>Электровелосипеды</span></li>
                        <li><img src={icon7} alt="icon7" /><span>Электроскейты</span></li>
                        <li><img src={icon8} alt="icon8" /><span>Электромобили</span></li>
                        <li><img src={icon9} alt="icon9" /><span>Аксессуары</span></li>
                        <li><img src={icon10} alt="icon10" /><span>Умные игрушки</span></li>
                        <li><img src={icon11} alt="icon11" /><span>Smart Watch</span></li>
                      </ul>
    
               </div>
              


               
          


               
     




           
           





















         </div>
     )
}



export default Header