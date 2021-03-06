import React, { Component } from 'react'
import { TextInput, Button, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { black } from '../utils/colors'
import { withNavigation } from 'react-navigation'
import { handleCreateDeck } from '../actions/Decks'

class DeckNew extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            questions: [],
        }
    }

    cantSubmit = () => {
        const { title } = this.state
        return title.trim().length === 0
    }

    createDeck = deck => {
        const { dispatch } = this.props
        dispatch(handleCreateDeck(deck))
        this.setState({title: ''})
    }

    submit = () => {
        const item = this.state
        const { navigation } = this.props;
    
        Promise.all([
            this.createDeck({
                [item.title]: {title: item.title, questions: item.questions}
            })
        ])
        .then(() => {
            navigation.navigate('DeckView', { title: item.title })
        })
      }

    render() {
        const { title } = this.state

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.question}>Qual o título do seu novo baralho?</Text>
                <TextInput
                    value={title}
                    style={styles.title}
                    onChangeText={title => this.setState({title})}
                />
                <Button
                    onPress={this.submit}
                    title="Adicionar"
                    color={black}
                    disabled={this.cantSubmit()}
                />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    question: {
        fontSize: 40
    },
    title: {
        width: 400,
        height: 50,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 15,
        margin: 30,
        padding: 10
    },
})

export default withNavigation(connect()(DeckNew))