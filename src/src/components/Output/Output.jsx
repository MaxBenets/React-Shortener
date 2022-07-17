import s from "./Output.module.css";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";

export const Output = () => {
   let inputRef = useRef();

   let showOutput = useSelector((state) => state.link.showOutput);
   let ShortenUrlData = useSelector((state) => state.link.ShortenUrlData);
   let error = useSelector((state) => state.link.error);
   let [copyTextValue, toggleCopyText] = useState(false)

   let markText = () => {
    if (!error){
        inputRef.current.select();
    }
   };
   let copyText = () => {
      if (!error){
        navigator.clipboard.writeText(inputRef.current.value);
        markText();
        toggleCopyText(true)
        setTimeout(() => {
            toggleCopyText(false)
        }, 1000)
      }
   };

   return (
      <div
         className={s.output}
         style={showOutput ? { opacity: 1 } : { opacity: 0 }}
      >
         <input
            ref={inputRef}
            onChange={() => {}}
            onFocus={markText}
            value={
               error 
                ? "Invalid link" 
                : ShortenUrlData.result.full_short_link
            }
            className={"input " + s.input}
            type="text"
         />
         <button onClick={copyText} className={s.copy}>
            {
                error
                ? ""
                : copyTextValue
                    ? "Copyed"
                    :<img
                        src="https://img.icons8.com/material-outlined/40/copy.png"
                        alt=""
                     />
            }
         </button>
      </div>
   );
};
