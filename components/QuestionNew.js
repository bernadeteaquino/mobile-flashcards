import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, View, Button, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { black, gray, ivory, white } from '../utils/colors'
import { handleCreateCardOnDeck } from '../actions/Decks'
import Header from './Header'

class QuestionNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            answer: '',
        }
    }

    cantSubmit = () => {
        const { question, answer } = this.state
        return question.trim().length === 0 || answer.trim().length === 0
    }

    createCard = () => {
        const card = this.state
        const deckTitle = this.props.navigation.state.params.title
        this.props.dispatch(handleCreateCardOnDeck(deckTitle, card))
        this.setState({question: '', answer: ''});
    }

    submit = () => {
        const { navigation } = this.props;

        Promise.all([
            this.createCard()
        ])
        .then(() => {
            navigation.navigate('DeckView', { title: navigation.state.params.title })
        })
    }

    render() {
        const { question, answer } = this.state
        const { navigation } = this.props
        const { title } = navigation.state.params

        return (
            <View style={styles.container}>
                <Header title={'Adicionar carta'} />
                <KeyboardAvoidingView behavior="padding" style={styles.content}>
                    <Text style={styles.title}>Pegunta</Text>
                    <TextInput
                        value={question}
                        style={styles.input}
                        onChangeText={question => this.setState({question})}
                    />
                    <Text style={styles.title}>Resposta</Text>
                    <TextInput
                        value={answer}
                        style={[styles.input, {marginBottom: 50}]}
                        onChangeText={answer => this.setState({answer})}
                    />
                    <Button
                        onPress={this.submit}
                        title="Adicionar"
                        color={black}
                        style={styles.button}
                        disabled={this.cantSubmit()}
                    />
                </KeyboardAvoidingView>
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
        fontSize: 25,
        margin: 15,
    },
    input: {
        width: 300,
        height: 50,
        fontSize: 20,
        borderWidth: 2,
        borderColor: gray,
        borderRadius: 12,
        backgroundColor: ivory,
        margin: 30,
    },
    button: {
        width: 300,
        height: 50,
        margin: 15,
    }
})

export default connect()(QuestionNew)
