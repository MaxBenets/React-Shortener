import s from "./Header.module.css"

export const Header = () => {
    return(
        <header className={s.header}>
            <h1 className={s.h1}>React Shortener</h1>
        </header>
    )
}