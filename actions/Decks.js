import { GET_DECKS, ADD_DECK, ADD_CARD } from '../utils/Constants'
import { fetchDecks, addDeck, createCardOnDeck } from '../utils/API'

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

function createDeck(decks) {
    return {
        type: ADD_DECK,
        decks: decks
    }
}

export function handleCreateDeck(deck) {
    addDeck(deck)
    return (dispatch) => {
        return fetchDecks()
            .then((decks) => dispatch(createDeck(decks)))
    }
}

function addCard(deckTitle, question) {
    return {
        type: ADD_CARD,
        question: question,
        deckTitle: deckTitle
    }
}

export function handleCreateCardOnDeck(deckTitle, question) {
    createCardOnDeck(deckTitle, question)
    return (dispatch) => {
        return fetchDecks()
            .then(() => dispatch(addCard(deckTitle, question)))
    }
}