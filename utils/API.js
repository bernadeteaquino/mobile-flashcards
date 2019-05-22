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
	return initialData
}

export function fetchDecks() {
	return AsyncStorage.getItem(DECKS_KEY).then(results => {
        return results === null ? setupData() : JSON.parse(results)
	})
}

export function addDeck(deck) {
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(deck))
}

export function createCardOnDeck(deck, question) {
    return AsyncStorage.getItem(DECKS_KEY, (err, result) => {
        let existingDecks = JSON.parse(result)
        let newQuestions = JSON.parse(JSON.stringify(existingDecks[deck.title].questions))
        newQuestions.push(question)

        const deckUpdated = JSON.stringify({
            [deck.title]: {title: deck.title, questions: newQuestions},
        })

        return AsyncStorage.mergeItem(DECKS_KEY, deckUpdated);
    })
}