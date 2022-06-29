import React from "react";
import {YMaps, Map, Placemark, FullscreenControl } from "react-yandex-maps";



const YandexMap = () => {
    return (
          <YMaps>

             <div style = {{width:'800px'}}>

            
            <Map 
            width='860px'
            height='512px'
                 defaultState = {{   
                  center:[59.9043709028519,30.47436744973756],
                  zoom:9
              }} >
                

               <Placemark geometry={[59.9043709028519,30.47436744973756]}/>
               <Placemark geometry={[60.037949971324785,30.32553421163942]}/>
               <Placemark geometry={[59.83779706428725,30.339260499999934]}/>
               <Placemark geometry={ [59.949799725988555,30.413302423942564]}/>
               <FullscreenControl options={{float:'left'}}/>
              </Map>


             </div>





          </YMaps>
    )
}

export default YandexMap