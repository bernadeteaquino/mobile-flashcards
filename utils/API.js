import { AsyncStorage } from 'react-native'

const DECKS_KEY = "flashcards:decks"

const initialData =  {
    React: {
        title: 'React',
        questions: [
        {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
        },
        {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
        }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
        {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
        ]
    }
}

function setupData() {
	AsyncStorage.setItem(DECKS_KEY, JSON.stringify(initialData))
	return starterData
}

export function fetchDecks() {
	return AsyncStorage.getItem(DECKS_KEY).then(results => {
        return results === null ? setupData() : JSON.parse(results)
	})
}

export function addDeck(deck) {
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(deck))
}