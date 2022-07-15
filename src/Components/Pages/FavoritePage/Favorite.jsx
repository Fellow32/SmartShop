import React, { useEffect } from "react";
import Footer from "../../Elements/Footer/Footer";
import Header from "../../Header/Header";
import arrow from "../../../img/arrow.svg"
import style from "./Favorite.module.scss"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../Item/Item";
import { getItemsInFavorite } from "../../../redux/reducers/favoriteItemsReducer/favoriteItemsSlice";






const Favorite = () => {

     const itemsInFavorite = useSelector(state => state.favoriteItems.items)
     const dispatch = useDispatch()




   

     useEffect(() => {
        dispatch(getItemsInFavorite())
        
     },[])

    return ( 

  
        <div >
           <Header/>

           <div className={style.content}>
             
             <Link className={style.link} to="/">
             <h2>Главная  <img src={arrow} alt="arrow" /> <span>Контакты</span> </h2>
             </Link>
            
           
            <h1>Избранное</h1>
              <div className={style.items}>
            
            { 
              itemsInFavorite 
              ? itemsInFavorite.map((el) => (

               <Item
               key = {el.id}
               name = {el.name}
               rating = { el.rating}
               img = {el.img}
               comments = {el.comments}
               oldPrice = {el.oldPrice}
               currentPrice = {el.currentPrice}
               isFavorite = {true}

               />


          ))

              : ''
            
            

            }
             
            


            </div>  

               <Footer/> 
           </div>
           </div>
          
    )
    
}

export default Favorite