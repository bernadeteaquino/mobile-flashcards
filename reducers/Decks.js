import { GET_DECKS, ADD_DECK, ADD_CARD } from '../utils/Constants'

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
        case ADD_CARD: {
            const { deck } = action

            return {
                ...state,
                [deck.title]: {...state[deck.title], 
                    questions: deck.questions},
            }
        }
        default:
            return state
    }
}

export default decks