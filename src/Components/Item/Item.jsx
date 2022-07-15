import React from "react";
import style from '../Item/Item.module.scss'
import cart  from "../../img/items/cart.svg"
import commentsImg from "../../img/items/comments.svg"
import favorite_false from "../../img/items/favorite_false.svg"
import favorite_true from "../../img/items/favorite_true.svg"
import compare_false from "../../img/items/compare_false.svg"
import Rating from '../Elements/Rating/Rating'
import { addItemInCart } from "../../redux/reducers/cartItemsReducer/cartItemsReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import { addItemInFavorite, removeFromFavorite } from "../../redux/reducers/favoriteItemsReducer/favoriteItemsSlice";




const Item = (obj) => {
const dispatch = useDispatch()
const isMounted = useRef(false)
   


 const addInCart = () => {
       
       dispatch(addItemInCart(obj))
       
       
 }


  const addInFavorite = () => {
       dispatch(addItemInFavorite(obj))

  }

  const onRemoveItemFromFavorite = () => {
    dispatch(removeFromFavorite(obj.name))
  }

   



useEffect(() => {
    if( isMounted.current){
        addInFavorite()
    }
 
  isMounted.current = true
},[])











 


    return (
        
          <div className={style.container}>

                 <div className={style.wrapper}>

                 
                <div className={style.header}>
                    <img src={obj.img} alt="img" />
                    <span>Сигвеи</span>
                    <h2>{obj.name}</h2>
                </div>
                <div>
                    
                    <div className={style.rating}>
                        <Rating rating ={obj.rating}/>
                        <img src={commentsImg} alt="comments" />
                        <span>{obj.comments}</span>
                    </div>
                </div>
                <div>
                    <div className={style.price_wrapper}>
                       
                    <span>{obj.oldPrice} ₽</span>
                    <span>{obj.currentPrice} ₽</span>
                    </div>
                    <div className={style.price_info}>

                    
                    <div  className={style.price}>
                        <span className={style.price_sale}>20%</span>
                        <span> - 1 000 р</span>
                    </div>

                   
                    <div className={style.favorite_compare}>
                        <img onClick={addInFavorite} className={style.favorite} src={obj.isFavorite ? favorite_true : favorite_false} alt="favorite" />
                        <img onClick={onRemoveItemFromFavorite} className={style.compare} src={compare_false} alt="compare" />
                    </div>
                    </div>
                </div>



          </div>



          <div className={style.buttons}>
              <div>Купить в 1 клик</div>
              <img onClick = {addInCart} height={48} width={48} src={cart}alt="cart" />

          </div>

          </div>
        
    )
}



export default Item