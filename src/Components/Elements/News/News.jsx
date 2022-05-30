import React from "react";
import style from '../News/News.module.scss'

const News = () => {
    return (
        
        <div className={style.news}>
        <div className={style.news_info}>
            <h3>Открытие нового магазина</h3>
            <span>Принимая во внимание показатели успешности, социально-экономическое развитие играет определяющее значение для вывода текущих активов</span>
            
        </div>

        <div className={style.news_info}>
            <h3>Работа в праздничные дни</h3>
            <span>Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа существующих паттернов поведения</span>
            
        </div>
    </div>
    )
}


export default News