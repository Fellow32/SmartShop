import React from "react";
import style from "../Stock/Stock.module.scss"
import promo1 from "../../../img/promo/promo1.png"
import promo2 from "../../../img/promo/promo2.png"


const Stock= () => {
    return (
          
        <div className={style.promo}>
        <div className={style.promo_info}>
            <span>Скидки до 30% на сигвеи</span>
            <img src={promo1} alt="promo1" />
        </div>

        <div className={style.promo_info}>
        <span>Неделя смарт часов</span>
            <img src={promo2} alt="promo1" />
        </div>
    </div>
    )
}




export default Stock