import React, { useEffect } from "react";
import Header from "../../Header/Header";
import style from "../HomePage/HomePage.module.scss"
import Item from "../../Item/Item";
import arrow from "../../../img/arrow.svg"
import {useDispatch, useSelector} from 'react-redux'
import { getItemsFetch } from "../../../redux/reducers/newItemsReducer/newItemsReducer";
import Promo from "../../Elements/Promo/Promo";
import Footer from "../../Elements/Footer/Footer";
import News from "../../Elements/News/News";
import { getNewItemsFetch } from "../../../redux/reducers/newItemsReducer/newItemsReducer";
import { getTopSalesItemsFetch} from "../../../redux/reducers/topSalesReducer/topSalesItemsReducer"
import { addItemInCart} from "../../../redux/reducers/cartItemsReducer/cartItemsReducer";


const HomePage = () => {

   const newItems = useSelector( state => state.newItems.items)
   const topItems = useSelector(state => state.topSalesItems.items)
   const dispatch = useDispatch()




    useEffect(() => {
        dispatch(getNewItemsFetch())
    },[dispatch])

    useEffect(() => {
        dispatch(getTopSalesItemsFetch())
    },[dispatch])

    const add = (obj) => {
        dispatch(addItemInCart(obj))
      
        
    }

  


    return (
        <div>
      <Header/>
         
         <div className={style.content}>
         <h1>Хиты продаж  <span>Все товары <img src={arrow} alt="arrow" /></span></h1>

          <div className={style.items}>
          

          {topItems.map((el) => (
              <Item 
              name = {el.name}
              img = {el.img}
              rating = {el.rating}
              comments = {el.comments}
              currentPrice = {el.currentPrice}
              oldPrice = {el.oldPrice}
              onAddToCart = {(item) => add(item)}
           
              
            
            
            
              
              
              />
          ))}
          
          </div>

            <Promo/>

          <h1>Новинки <span>Все товары <img src={arrow} alt="arrow" /></span></h1>
             
          <div className={style.items}>
          {newItems.map((el) => (
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

                  
              <h1>Новости <span>Все новости <img src={arrow} alt="arrow" /></span></h1>

               <News/>
        
            



         </div>
       

       <Footer/>
        
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




