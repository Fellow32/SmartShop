import React, { useEffect } from "react";
import Header from "../../Header/Header";
import style from "../HomePage/HomePage.module.scss"
import Item from "../../Item/Item";
import arrow from "../../../img/arrow.svg"
import {useDispatch, useSelector} from 'react-redux'
import { getItemsFetch } from "../../../redux/reducers/itemsReducer";

const HomePage = () => {

   const items = useSelector( state => state.items.items)
   const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getItemsFetch())
    },[dispatch])

    


    return (
        <div>
      <Header/>
         
         <div className={style.content}>
         <h1>Хиты продаж  <span>Все товары <img src={arrow} alt="arrow" /></span></h1>

          <div className={style.items}>
          

          {items.map((el) => (
              <Item 
              name = {el.name}
              img = {el.img}
              rating = {el.rating}
              comments = {el.comments}
              currentPrice = {el.currentPrice}
              oldPrice = {el.oldPrice}
              
              
              />
          ))}
          

          </div>


        
       

         </div>
      
        
        </div>
    )
}


export default HomePage






// const items = [
//     {"id":1,
//      "name":'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
//      "img":'/img/items/item1.svg',
//      "rating":5,
//      "comments":10,
//      "currentPrice": 4990,
//      "oldPrice": 5400,
//      "new":"true",
//      "popular":"true"
//     },
//     {
//         "id":2,
//         "name":'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
//         "img":'/img/items/item1.svg',
//         "rating":4,
//         "comments":8,
//         "currentPrice": 5990,
//         "oldPrice": 6400,
//         "new":"true",
//         "popular":"true"
//     },
//     {
//         "id":3,
//         "name":'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
//         "img":'/img/items/item1.svg',
//         "rating":5,
//         "comments":10,
//         "currentPrice": 4990,
//         "oldPrice": 5400,
//         "new":"true",
//         "popular":"true"
//     },
//     {
//         "id":4,
//         "name":'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
//         "img":'/img/items/item1.svg',
//         "rating":5,
//         "comments":10,
//         "currentPrice": 4990,
//         "oldPrice": 5400,
//         "new":"true",
//         "popular":"true"
//     },
//     { "id":5,
//     "name":'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
//     "img":'/img/items/item1.svg',
//     "rating":5,
//     "comments":10,
//     "currentPrice": 4990,
//     "oldPrice": 5400,
//     "new":"true",
//     "popular":"true"

//     }
// ]




