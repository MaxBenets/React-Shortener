import { useState, useRef } from "react";
import {useDispatch, useSelector} from "react-redux"
import s from "./Input.module.css";
import { toggleShowOutputAC, setShortUrlDataThunk, setInputValueAC } from "../../redux/shortReducer";

export const Input = () => {
    const dispatch = useDispatch()
    let inputRef = useRef()

    let inputValue = useSelector(state => state.link.inputValue)

    const setInputValue = (value) => {
        dispatch(setInputValueAC(value))
    }

    const ifelsefunc = (value, MoreZero, MinZero) => {
        if (value.length > 0){
            MoreZero()
        }
        else{
            MinZero()
        }
    }

    const inputChange = () => { 
        let value = inputRef.current.value
        setInputValue(value) 
        ifelsefunc(
            value,
            () => {},
            () => {dispatch(toggleShowOutputAC(false))}
        )
    }

    const ShortenUrl = () => {
        let value = inputRef.current.value
        ifelsefunc(
            value,
            () => {dispatch(setShortUrlDataThunk(value.toLowerCase()));dispatch(toggleShowOutputAC(true));},
            () => {dispatch(toggleShowOutputAC(false))}
        )
    }
    document.onkeydown = (event) => {
        if (event.key == "Enter"){
            ShortenUrl()
        }
    }

    return(
        <div className={s.input}>
            <input ref = {inputRef} onChange = { inputChange } type="text" placeholder="URL" value={inputValue} className={s.url + " input"} />
            <button onClick = {ShortenUrl} className={s.btn}>
                <img src="https://img.icons8.com/ios-glyphs/40/arrow.png" alt="" />
            </button>
        </div>
    )
}