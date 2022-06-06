import React from "react";
import style from '../Item/Item.module.scss'
import cart  from "../../img/items/cart.svg"
import commentsImg from "../../img/items/comments.svg"
import favorite_false from "../../img/items/favorite_false.svg"
import compare_false from "../../img/items/compare_false.svg"
import Rating from "../Elements/Rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import addItemInCart from "../../redux/reducers/cartItemsReducer/cartItemsReducer.js"







const Item = ({name,comments,rating,oldPrice,currentPrice,img,onAddToCart}) => {



  const dispatch = useDispatch()


 const addItem = () => {
       onAddToCart({name,currentPrice,img})
   
 }

 


    return (
        
          <div className={style.container}>

                 <div className={style.wrapper}>

                 
                <div className={style.header}>
                    <img src={img} alt="img" />
                    <span>Сигвеи</span>
                    <h2>{name}</h2>
                </div>
                <div>
                    <div className={style.rating}>
                        <Rating rating ={rating}/>
                        <img src={commentsImg} alt="comments" />
                        <span>{comments}</span>
                    </div>
                </div>
                <div>
                    <div className={style.price_wrapper}>
                       
                    <span>{oldPrice} ₽</span>
                    <span>{currentPrice} ₽</span>
                    </div>
                    <div className={style.price_info}>

                    
                    <div  className={style.price}>
                        <span className={style.price_sale}>20%</span>
                        <span> - 1 000 р</span>
                    </div>

                   
                    <div>
                        <img src={favorite_false} alt="favorite" />
                        <img src={compare_false} alt="compare" />
                    </div>
                    </div>
                </div>



          </div>



          <div className={style.buttons}>
              <div>Купить в 1 клик</div>
              <img onClick = {addItem} height={48} width={48} src={cart}alt="cart" />

          </div>

          </div>
        
    )
}



export default Item