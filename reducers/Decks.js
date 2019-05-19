import { GET_DECKS, ADD_DECK } from '../utils/Constants'

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
        case ADD_DECK: {
            const { decks } = action
            return {
                ...state,
                data: decks
            }
        }
        default:
            return state
    }
}

export default decks