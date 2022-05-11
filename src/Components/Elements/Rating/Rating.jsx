import React from "react";
import style from '../Rating/Rating.module.scss'





const Rating = ({rating}) => {
 
    
document.querySelectorAll('.rating_item').forEach (item => 
    item.appendChild('click', () => {

        const {itemValue} = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
        
    })
)













    return ( 
        <div className={style.rating} data-total-value={rating}>
              <div className={style.rating_item} data-item-value="5">★</div>
              <div className={style.rating_item} data-item-value="4">★</div>
              <div className={style.rating_item} data-item-value="3">★</div>
              <div className={style.rating_item} data-item-value="2">★</div>
              <div className={style.rating_item} data-item-value="1">★</div>
        </div>
        
    
         )    
     
}




export default Rating