import { useState, useRef } from "react";
import {useDispatch} from "react-redux"
import s from "./Input.module.css";
import { toggleShowOutputAC, setShortUrlDataThunk } from "../../redux/shortReducer";

export const Input = () => {
    const dispatch = useDispatch()
    let inputRef = useRef()

    let [inputValue, setInputValue] = useState("");
    let [showEnter, toggleEnterState] = useState(true);
    let [bottomText, setBottomText] = useState("Press Enter to convert")

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
            () => {toggleEnterState(false); setBottomText("Press Enter to convert")},
            () => {toggleEnterState(true); dispatch(toggleShowOutputAC(false))}
        )
    }

    document.onkeydown = (event) => {
        let value = inputRef.current.value
        if (event.key == "Enter"){
            ifelsefunc(
                value,
                () => {setBottomText("Wait"); dispatch(setShortUrlDataThunk(value.toLowerCase())); setBottomText("Output");dispatch(toggleShowOutputAC(true));},
                () => {dispatch(toggleShowOutputAC(false))}
            )
        }
    }

    return(
        <div className={s.input}>
            <input ref = {inputRef} onChange = { inputChange } type="text" placeholder="URL" value={inputValue} className={s.url} />
            <div className={s.addinfo}>
                {
                    showEnter
                    ? ""
                    : <span className={s.pressEnter}>{bottomText}</span>
                }
            </div>
        </div>
    )
}