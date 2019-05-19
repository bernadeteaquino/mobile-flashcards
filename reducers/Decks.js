import { GET_DECKS } from '../utils/Constants'

const initialState = {
    data: [],
    isLoading: true
}

const decks = (state = initialState, action) => {
    switch(action.type) {
        case GET_DECKS:
            return {
                ...state,
                isLoading: false,
                data: action.decks
            }
        default:
            return state
    }
}

export default decks