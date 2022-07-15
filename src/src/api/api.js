import * as axios from "axios"

export const ShortenLinkData = (link) => {
    return axios.get("https://api.shrtco.de/v2/shorten?url="+link)
        .then(responce => responce.data)
}