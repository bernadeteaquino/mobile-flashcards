import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gray, black, white } from '../utils/colors'
import { connect } from 'react-redux'
import Header from './Header'

class DeckView extends Component {
    render() {
        const { isntLoading, deck, navigation } = this.props

        return (
            <View style={styles.container}>
                { isntLoading && (
                    <View style={styles.container}>
                        <Header title={deck.title} />
                        <View style={styles.content}>
                            <Text style={styles.title}>{deck.title}</Text>
                            <Text style={styles.counter}>
                                {deck.questions.length} carta(s)
                            </Text>
                            <TouchableOpacity style={styles.button}
                                onPress={() => {
                                    navigation.navigate('QuestionNew', {title: deck.title})
                                }}
                            >
                                <Text style={styles.buttonTitle}>Adicionar carta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => {
                                    navigation.navigate('Quiz', {title: deck.title})
                                }}
                            >
                                <Text style={styles.buttonTitle}>Iniciar Quiz</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30
    },
    counter: {
        fontSize: 20, 
        color: gray,
        padding: 10,
        paddingBottom: 50
    },
    button: {
        backgroundColor: black,
        color: white,
        margin: 10,
        height: 50,
        width: 170,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    buttonTitle: {
        color: white,
        fontSize: 20
    }
})

const mapStateToProps = (state, ownProps) => {
    const { navigation } = ownProps
    const title = navigation.getParam('title')
    const isntLoading = state.decks.data[title] !== undefined
    return {
        deck: state.decks.data[title],
        isntLoading
    }
  }

export default connect(mapStateToProps)(DeckView)