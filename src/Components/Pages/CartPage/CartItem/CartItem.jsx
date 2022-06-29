import React from "react";
import deleteImg  from "../../../../img/cart/deleteImg.png"
import style from "../CartItem/CartItem.module.scss"
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { addItem, addItemInCart, getFullPrice, minusItem } from "../../../../redux/reducers/cartItemsReducer/cartItemsReducer";
import { useEffect } from "react";




const CartItem = ({id,img,name,price,amount,onRemoveFromCart}) => {
     
  const dispatch = useDispatch()



  const amountIncrement = () => {
      dispatch(addItem(id))
      
      
  }

  const amountDecrement = () => {
     
    dispatch(minusItem(id))
      
  }
  

   


        const removeItem = () => {
          
          onRemoveFromCart(id)
          
         
           
      }


        
         


        useEffect(() => {
         
             
        },[])

        
       
    return (
         <div>
           
           

           <div className={style.item_wrapper}>
                
                <img className={style.img} width={80} height={80} src={img} alt="img" />
                 <span className={style.name}>{name}</span>

                
                 <div className={style.counter}>
                 <span onClick={amountDecrement}>-</span>
                     <div className={style.count}>{amount}
                    </div>
                           <span onClick={amountIncrement}>+</span>
                          </div>
                     

                 <div className={style.price}>{price} ₽</div>

                 <img onClick={removeItem} className={style.delete_img} src={deleteImg} alt="delete" />




           </div>


         </div>
     

    )
}


export default CartItem