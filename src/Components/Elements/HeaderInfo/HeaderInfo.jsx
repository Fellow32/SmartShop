import React, { useEffect, useState } from "react"
import logo from '../../../img/logo.svg'
import eye from  '../../../img/eye.svg'
import favorite from  '../../../img/favorite.svg'
import compare from  '../../../img/compare.svg'
import cart from  '../../../img/cart.svg'
import search_icon from  '../../../img/search-icon.svg'
import style from '../HeaderInfo/HeaderInfo.module.scss'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCartItemsFetch } from "../../../redux/reducers/cartItemsReducer/cartItemsReducer"



const HeaderInfo = () => {
  const itemsInCartCount = useSelector(state=> state.cartItems.totalCount)
  





    return (
        <div className={style.header_wrapper_info}>


       <Link to ='/'>
        <div className={style.logo}>
          <img width={184} height={60} src={logo} alt="logo" />
          
        </div>
        </Link>

        <div >
          <span>+7 (812) 660-50-54</span>
        </div>
        <div>
        <span>+7 (958) 111-95-03</span>
        </div>
        <div>
          <span>Пн-вс: с 10:00 до 21:00</span>
        </div>

        <div>
          <div className={style.search}>
              <img src={search_icon} alt="search" />
              <input type="text" placeholder="Поиск" />
          </div>

          </div>
          





          <div className={style.icons}>


     
        <div>
          <img width={48} height={48} src={eye} alt="eye" />
        </div>

        <div>
           <img width={48} height={48} src={favorite} alt="favorite" />
        </div>
        <div>
           <img width={48} height={48} src={compare} alt="compare" />
        </div>

      
          <Link to='/cart'> 
          <div>
              
             <div className={ `${itemsInCartCount > 0 ? style.itemsInCartCount :style.itemsInCartCount_hidden } ` }>
                  {itemsInCartCount}
                </div>
             
          <img width={48} height={48} src={cart} alt="cart" /> 
          </div>
           </Link>     
          
        

        <div className={style.button}>
          <div>Войти</div>
        </div>


        </div>
        </div>
    )
}



export default HeaderInfo