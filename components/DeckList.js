import React, { Component } from "react"
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../actions/Decks'
import Deck from './Deck'

class DeckList extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(handleGetDecks())
    }

    renderItem = ({item}) => (
        <View> 
            <TouchableOpacity onPress={() => 
                    this.props.navigation.navigate('DeckView', { title: item.title, questions: item.questions })}>
                <Deck title={item.title} questions={item.questions} />
            </TouchableOpacity>
        </View>
      )

    render() {
        const { decks } = this.props

        return (
            <View style={styles.container}>
                {Object.keys(decks).length > 0 &&
                    <FlatList 
                        data={decks}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.title}
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})

const mapStateToProps = (state) => {
    return {
        decks: Object.values(state.decks.data).sort()
    }
}

export default connect(mapStateToProps)(DeckList)