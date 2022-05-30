import React, { useEffect, useState } from "react";
import slider1 from "../../../img/slider/slider1.jpg"
import slider2 from "../../../img/slider/slider2.jpg"
import slider3 from "../../../img/slider/slider3.jpg"
import slider4 from "../../../img/slider/slider4.jpg"
import slider5 from "../../../img/slider/slider5.jpg"
import slider6 from "../../../img/slider/slider6.jpg"
import style from "../Slider/Slider.module.scss"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"



const Slider = () => {
    
 const PAGE_WIDTH = 970

    const [offset, setOffset] = useState(0)


    


const onHandlerLeft = () => {
    
    setOffset((currentOffset) => {
        const newOffset = currentOffset + PAGE_WIDTH
        return Math.min(newOffset,0)
        
    })
    


   
    
}

const onHandlerRight = () => {
         
            setOffset((currentOffset) => {
                const newOffset = currentOffset - PAGE_WIDTH
                const maxOffset = -(PAGE_WIDTH *(6))
                return Math.max(newOffset,maxOffset)
                
                  
            })

           
         
           
    

}
    
               
    
useEffect(() => {
       const timer = setTimeout(onHandlerRight,4000)
       return () => clearTimeout(timer)
       
},[offset])



    useEffect(() => {
        
        if (offset == -5820 ){
            setOffset(0)
           

        }
    },[offset])



  





    return(
        <div className={style.container }>
            <FaChevronLeft onClick ={onHandlerLeft} className={style.arrow}/>
            <div className={style.window}>
                <div  style ={{transform:`translateX(${offset}px)`}} className={style.pages}>
                    <img src={slider1} alt="slider" />
                    <img src={slider2} alt="slider" />
                    <img src={slider3} alt="slider" />
                    <img src={slider4} alt="slider" />
                    <img src={slider5} alt="slider" />
                    <img src={slider6} alt="slider" />
                   
                </div>
            </div>
            <FaChevronRight onClick={onHandlerRight} className={style.arrow}/>
        </div>
    )
}

export default Slider





