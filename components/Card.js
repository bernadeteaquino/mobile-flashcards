import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { green, red, white } from '../utils/colors'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAnswer: false,
        }
    }

    toogleAnswer = () => {
        const { showAnswer } = this.state
        this.setState({ showAnswer: !showAnswer })
    }

    hideAnswer = () => {
        this.setState({ showAnswer: false })
    }

    render() {
        const { showAnswer } = this.state
        const { index, questions, setAsCorret, setAsIncorrect } = this.props
        const remain = questions.length - index;

        const actions = (
            <View style={styles.checkIsCorrect}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => {setAsCorret(); this.hideAnswer();}}>
                        <Text style={styles.isCorrect}>Correto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setAsIncorrect(); this.hideAnswer();}}>
                        <Text style={styles.isIncorrect}>Incorreto</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

        return (
            <View style={styles.container}>
                <View style={styles.remain}>
                    <Text style={styles.remainTitle}>{ remain } / { questions.length }</Text>
                </View>
                <View>
                    { showAnswer
                        ? (
                            <View style={styles.content}>
                                <Text style={styles.title}>{questions[index].answer}</Text>
                                <TouchableOpacity onPress={this.toogleAnswer}>
                                    <Text style={styles.button}>Pergunta</Text>
                                </TouchableOpacity>
                                {actions}
                            </View>
                        )
                        : (
                            <View style={styles.content}>
                                <Text style={styles.title}>{questions[index].question}</Text>
                                <TouchableOpacity onPress={this.toogleAnswer}>
                                    <Text style={styles.button}>Resposta</Text>
                                </TouchableOpacity>
                                {actions}
                            </View>
                        ) 
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    remain: {
        flex: 1,
        marginLeft: 5,
        justifyContent: 'flex-start',
        
    },
    remainTitle: {
        fontSize: 25,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 40,
        marginLeft: 15,
        marginTop: 60
    },
    button: {
        fontSize: 25, 
        color: red,
        marginTop: 10,
        fontWeight: 'bold'
    },
    isCorrect: {
        backgroundColor: green,
        color: white,
        justifyContent: 'center',
        height: 45,
        textAlign: 'center',
        width: 150,
        marginTop: 50,
        fontSize: 20,
        borderRadius: 8,
        paddingTop: 5
    },
    isIncorrect: {
        backgroundColor: red,
        color: white,
        justifyContent: 'center',
        height: 50,
        textAlign: 'center',
        width: 150,
        marginTop: 20,
        fontSize: 20,
        borderRadius: 8,
        paddingTop: 5
    },
})

export default withNavigation(Card)