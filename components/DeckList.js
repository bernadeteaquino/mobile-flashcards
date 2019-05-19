import React, { Component } from "react"
import { View, Text  } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../actions/Decks'

class DeckList extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(handleGetDecks())
    }

    render() {
        const { decks } = this.props

        return (
            <View>
                <Text>DeckList: { JSON.stringify(decks)} }</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        decks: state.decks.data
    }
}

export default connect(mapStateToProps)(DeckList)