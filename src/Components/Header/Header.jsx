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
import { Link, useLocation } from "react-router-dom";



const Header = () => {

     const location = useLocation()
     

     return (

          <div className={style.header_wrapper}>

     <HeaderInfo/>

           <div className={style.menu}>

                <div>
                   
                <ul>

                  <li  className={style.burger}>
                    
                    <img src={menu_icon} alt='menu_icon'/>
                      <Link className={style.link} to='/'>
                      <span>Каталог товаров</span>
                      </Link>
                    
                                   
                  </li>
                  <Link className={style.link} to ='/about'>
                  <li>О Компании</li>
                  </Link>
                  <Link className={style.link} to='/promo'>
                  <li>Акции</li>
                  </Link> 
                  <Link className={style.link} to='/installment'>
                  <li>Рассрочка 0|0|18</li>
                  </Link>                 
                   <Link className={style.link} to ='/service'>
                   <li>Сервис и Гарантия</li>
                   </Link>
                    <Link className={style.link} to ='/wholesale'>
                    <li>Опт/ дропшиппинг</li>
                    </Link>
                   
                 <Link  className={style.link} to ='/contacts'>
                 <li>Контакты</li>
                 </Link>
      
                </ul>
                </div>     
           </div>


    
     { location.pathname == '/'
     ? <>
     <Slider/>
     <div className={style.menu_categories}>
      <ul > 
            <Link className={style.link} to= '/catalog/hoverboards'>
            <li ><img src={icon1} alt="icon1" /><span>Гироскутеры</span></li>
            </Link>
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon2} alt="icon2" /><span>Электросамокаты</span></li>
             </Link>
            
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon3} alt="icon2" /><span>Моноколеса</span></li>
             </Link>
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon4} alt="icon2" /><span>Сигвеи и мини-сигвеи</span></li>
             </Link>
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon5} alt="icon2" /><span>Электроскутеры</span></li>
             </Link>
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon6} alt="icon2" /><span>Электровелосипеды</span></li>
             </Link>
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon7} alt="icon2" /><span>Электроскейты</span></li>
             </Link>
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon8} alt="icon2" /><span>Электромобили</span></li>
             </Link>
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon9} alt="icon2" /><span>Аксессуары</span></li>
             </Link>
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon10} alt="icon2" /><span>Умные игрушки</span></li>
             </Link>
             <Link className={style.link} to= '/catalog/hoverboards'>
             <li><img src={icon11} alt="icon2" /><span>Smart Watch</span></li>
             </Link>
          </ul>
     
     </div>
     </>  
     :''
}
         </div>
     )
}



export default Header