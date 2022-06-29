import React from "react";
import Footer from "../../Elements/Footer/Footer";
import Header from "../../Header/Header";
import arrow from "../../../img/arrow.svg"
import style from "./Contacts.module.scss"
import mail from "../../../img/mail.png"
import workTime from "../../../img/time.png"
import { Link } from "react-router-dom";
import YandexMap from "../../Elements/Map/YandexMap";




const Contacts = () => {


     


      

    return ( 

      

       

        <div >
           <Header/>

           <div className={style.content}>
             
             <Link className={style.link} to="/">
             <h2>Главная  <img src={arrow} alt="arrow" /> <span>Контакты</span> </h2>
             </Link>
            
           
            <h1>Контакты</h1>
              <div className={style.wrapper}>

             
             <ul className={style.info}>
                 <li> <span>СПб, Ул. Дыбенко д.23 к.1</span> 
                      <span>+7 (812) 509-23-43</span>            
                 </li>
                 <li> <span>СПб, Пр. Энгельса д.113 к.2</span> 
                      <span>+7 (812) 509-23-43</span>            
                 </li>
                 <li> <span>СПб, Ул. Ленсовета д.81</span> 
                      <span>+7 (812) 602-74-02</span>            
                 </li>
                 <li> <span>СПб, ул. Тарасова д.10</span> 
                      <span>+7 (967) 555-01-06</span>            
                 </li>
                 <li><div className={style.line}></div>                
                 </li>
                 <li> <div className={style.mail}>
                       
                      <img src={mail}></img>  
                      <span >smart-tekhnika@gmail.com</span> 
                       </div>           
                 </li>
                 <li>   <div className={style.worktime}>

                      <img src={workTime}></img> 
                      <span style={{fontSize:"15px", color:"#838688"}}>Режим работы</span> 
                      </div>           
                 </li>
                 <li><span style={{fontWeight:"600"}}>Пн-вс с 10:00 до 21:00</span></li>
             </ul>
               
               <div className={style.map}>
               <YandexMap className={style.map}/> 
               </div>

       


             </div>
            </div>  

               <Footer/> 
           </div>
          
    )
    
}

export default Contacts