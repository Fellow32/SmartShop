import React from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Elements/Footer/Footer";
import arrow from "../../../../img/arrow.svg"
import { useSelector,useDispatch } from "react-redux/es/exports";

import style from "../Hoverboards/Hoverboards.module.scss"
import { Link} from "react-router-dom";
import SortPopUp from "../../../Elements/Catalog/SortPopUp/SortPopUp";
import PriceFilter from "../../../Elements/Catalog/PriceFilter/PriceFilter";
import LightningFilter from "../../../Elements/Catalog/LightningFilter/LightningFilter";
import PowerFilter from "../../../Elements/Catalog/PowerFilter/PowerFilter";
import MaxSpeedFilter from "../../../Elements/Catalog/MaxSpeedFilter/MaxSpeedFilter.jsx";
import { useEffect } from "react";
import { getItemsFetch } from "../../../../redux/reducers/hoverboardsReducer/hoverboardsSlice";
import Item from "../../../Item/Item";

const Hoverboards = () => {
  
  const hoverboardsItems = useSelector(state => state.hoverboardsItems.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItemsFetch())
    
  },[dispatch])

 
    return(
        <div>
       <Header/>
        <div>
           <div className={style.navigation}>
               <Link className={style.link} to = '/'>
               <span>Главная</span>
               </Link>
               <img src={arrow} alt="" />
               <span>Каталог</span>
               <img src={arrow} alt="" />
               <span >Гироскутеры</span>
           </div>

           <h1>Гироскутеры</h1>

     
              <div className={style.sortPopUp}>
              <SortPopUp/>
                </div>      
            
               

               <div className={style.itemsContainer}>

              
               <div className ={style.filters}>
               <PriceFilter/>
              <LightningFilter/>
              <PowerFilter/>
              <MaxSpeedFilter/>

               </div>

               <div className={style.items}>

             

                    { hoverboardsItems.map((el) => (
                       <Item
                       img ={el.img}
                        name ={el.name}
                        currentPrice ={el.currentPrice}
                        oldPrice = {el.oldPrice}
                        rating = {el.rating}/>

                    )) 
                    }

                     </div>


               </div>
             

 





        </div>
       <Footer/>
        </div>
    )
}

export default Hoverboards