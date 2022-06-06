import React, { useEffect, useState } from "react";
import HeaderInfo from "../../../Elements/HeaderInfo/HeaderInfo";
import CartItem from "../CartItem/CartItem";
import style from '../Cart/Cart.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsFetch,removeItem,removeItemFromCart} from "../../../../redux/reducers/cartItemsReducer/cartItemsReducer";
import EmptyCart from "../../../Elements/CartElements/EmptyCart";


const Cart = () => {
    
    const cartItems = useSelector(state => state.cartItems.items)
    const fullPrice = useSelector(state => state.cartItems.price)
    const totalCount = useSelector(state => state.cartItems.totalCount)
     const dispatch = useDispatch()


     const remove = (id) => {
        
        dispatch(removeItemFromCart(id))
        
   
  }

  
     useEffect(() => {
         dispatch(getCartItemsFetch())
     },[])

 
     
  
 
       


 









    return (



           

         
           <div>


               
               <HeaderInfo/>












                  

                        { cartItems.length !== 0

                        ?   <div>

                        <h1>Оформление заказа</h1>
                         <div className={style.cart_wrapper}>
     
                         <div className={style.items}>
     
                          <h2>Ваш заказ</h2>
     
     
                                 
     
                                 
                                  {cartItems.map((el) => (
                                      <CartItem
                                      id ={el.id}
                                      img = {el.img}
                                      name = {el.name}
                                      price = {el.currentPrice}
                                      onRemoveFromCart = {(id) => remove (id)} 
                                      
                                      
                                      />
                                  ))}
                       
                        
     
                        
                      
                        </div>
     
                           <div className={style.cart_order}>
                                <h3>Итого</h3>
                               <div>
                                   <span>{totalCount} { `${totalCount > 1 ? 'товара' : 'товар'} на сумму `}</span>
                                   <span>{fullPrice - 500} ₽</span>
                               </div>
                               <div>
                                   <span>Стоимость доставки</span>
                                   <span>500 ₽</span>
                               </div>
                                 <div className={style.border}></div>
                               <div className={style.over_price}>
                                   <span>К оплате</span>
                                   <span>{fullPrice} ₽</span>
                               </div>
                               <div className={style.order_button}><p>Оформить заказ</p> </div>
                           </div>
     
     
                         </div>
                       
     
     
     
     
     
     
     
     
     
     
     
     
                         </div>



                        :  <EmptyCart/>  
                        }
                          
                        

                      
                  


           </div>
    )
}


export default Cart