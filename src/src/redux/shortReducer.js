import { ShortenLinkData } from "../api/api"

const SET_SHORTEN_URL_DATA = "SET_SHORTEN_URL_DATA"
const TOGGLE_SHOW_OUTPUT = "TOGGLE_SHOW_OUTPUT"
const SET_ERROR = "SET_ERROR"

let initial_state = {
    ShortenUrlData: {result: { full_short_link: "" }},
    showOutput: false,
    error: false
}

const shortReducer = (state = initial_state, action) => {
    switch(action.type){
        case SET_SHORTEN_URL_DATA:
            return{
                ...state,
                ShortenUrlData: action.ShortenUrlData
            }
        case TOGGLE_SHOW_OUTPUT:
            return{
                ...state,
                showOutput: action.newValue
            }
        case SET_ERROR:
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    }
}


const setShortUrlDataAC = (ShortenUrlData) => {
    return{
        type: SET_SHORTEN_URL_DATA,
        ShortenUrlData
    }
}
export const toggleShowOutputAC = (newValue) => {
    return{
        type: TOGGLE_SHOW_OUTPUT, newValue
    }
}

export const errorFunctionAC = (error) => {
    return{
        type: SET_ERROR,
        error
    }
}

export const setShortUrlDataThunk = (link) => {
    return (dispatch) => {
        ShortenLinkData(link).then(
            responce => {
                dispatch(setShortUrlDataAC(responce))
            }
        )
        .catch(
            error => {
                dispatch(errorFunctionAC(true))
            }
        )
    }
}

export default shortReducer