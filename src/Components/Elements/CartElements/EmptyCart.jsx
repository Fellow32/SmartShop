import React from "react";
import { Link } from "react-router-dom";
import emptyCart from '../../../img/cart/empty-cart.png'
import style from '../CartElements/EmptyCart.module.scss'






const EmptyCart = () => {
    return (
        <div className={style.empty_cart}>
                 <img src={emptyCart} alt="" />

               <Link style={{textDecoration:'none', color:'#2A5275'}} to='/'> 
               <h3> 
               Вернуться к покупкам 
               </h3>
               </Link> 
        </div>
    )
}



export default EmptyCart