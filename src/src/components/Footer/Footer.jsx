import s from "./Footer.module.css"

export const Footer = () => {

    let mediaItems = [
        {id: 0, imgSrc: "https://img.icons8.com/ios-glyphs/480/000000/github.png", linkSrc: "https://github.com/maxbenets"},
        {id: 1, imgSrc: "https://img.icons8.com/ios-glyphs/2x/instagram-new.png", linkSrc: "https://instagram.com/maxbenets.web"}
    ]

    let mapMediaItems = mediaItems.map( m => {
        return <a key = {m.id} href = {m.linkSrc} className={s.item}>
            <img src={m.imgSrc} alt="" />
        </a>
    })

    return(
        <footer className={s.footer}>
            <nav className={s.socialMedia}>
                {mapMediaItems}
            </nav>
        </footer>
    )
}