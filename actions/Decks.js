import { GET_DECKS } from '../utils/Constants'
import { fetchDecks } from '../utils/API'

export default function getDecks(decks) {
  return {
      type: GET_DECKS,
      decks: decks
  }
}

export function handleGetDecks() {
    return (dispatch) => {
        return fetchDecks()
            .then((decks) => dispatch(getDecks(decks)))
    }
}