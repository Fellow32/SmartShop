import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import checkedImg from '../../../../img/catalog/checkbox.png'
import { filteredByEnginePower, getItemsFetch, removeFilteredByEnginePower } from "../../../../redux/reducers/hoverboardsReducer/hoverboardsSlice";
import style from './Checkbox.module.scss'



const Checkbox = ({value,checked, handleChange,name}) => {


    const dispatch = useDispatch()

   
     

    return (
    <div className={style.field}>
    <label  className={style.checkbox_label} htmlFor="checkbox_1" >
      <input  onChange={(value) => handleChange(value)} checked ={checked}  className={style.checkbox} type="checkbox" id="checkbox_1"  />
    </label>

    <div className={style.checkbox_info}> 
      <span>{name}</span>
      <span>(78)</span>

    </div>

</div>
    )

 

}

export default Checkbox
