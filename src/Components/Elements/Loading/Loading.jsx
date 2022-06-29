import React from "react";
import loading  from '../../../img/loading.gif'
import style from './Loading.module.scss'



const Loading = () => {
    return (
        <div className={style.loading}>
            <img src={loading} alt="Loading" />
        </div>
    )
}


export default Loading