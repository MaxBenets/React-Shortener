import s from "./Output.module.css";
import {useSelector} from "react-redux"
import { useRef } from "react";

export const Output = () => {
    let inputRef = useRef()

    let showOutput = useSelector(state => state.link.showOutput)
    let ShortenUrlData = useSelector(state => state.link.ShortenUrlData.result.full_short_link)
    let error = useSelector(state => state.link.error)

    let markText = () => {
        inputRef.current.select()
    }
    let copyText = () => {
        navigator.clipboard.writeText( inputRef.current.value)
        markText()
    }

    return(
        <div className={s.output} style = { showOutput ? {opacity: 1} : {opacity: 0} }>
            <input ref = {inputRef} onChange = {() => {}} onFocus = {markText} value = { error ? "Undefinted url" : ShortenUrlData} className={s.input} type="text" />
            <button onClick={copyText} className={s.copy}>Copy</button>
        </div>
    )
}