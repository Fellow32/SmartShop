import React from "react";
import deleteImg  from "../../../../img/cart/deleteImg.png"
import style from "../CartItem/CartItem.module.scss"


const CartItem = ({id,img,name,price,onRemoveFromCart}) => {



        const removeItem = () => {
          
          onRemoveFromCart(id)
           
      }
       



    return (
         <div>
           
           

           <div className={style.item_wrapper}>
                
                <img className={style.img} width={80} height={80} src={img} alt="img" />
                 <span className={style.name}>{name}</span>

                 <div className={style.counter}>
                     <span>-</span>
                     <div className={style.count}>1</div>
                     <span>+</span>
                 </div>

                 <div className={style.price}>{price} ₽</div>

                 <img onClick={removeItem} className={style.delete_img} src={deleteImg} alt="delete" />




           </div>


         </div>
     

    )
}


export default CartItem