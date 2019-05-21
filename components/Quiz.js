import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, StyleSheet, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import Header from './Header'
import Card from './Card'
import Score from './Score'

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            index: 0,
        }
    }

    hasMoreQuestions = (questions) => {
        const { index } = this.state
        return index < questions.length
    }

    setAsCorret = () => {
        const { score, index } = this.state
        this.setState({
            index: index + 1, 
            score: score + 1, 
        })
    }

    setAsIncorrect = () => {
        const { index } = this.state
        this.setState({
            index: index + 1,
        })
    }

    restartQuiz = () => {
        this.setState({
            score: 0,
            index: 0,
        })
    }

    render() {
        const { index, score } = this.state
        const { deck } = this.props

        return (
            <View style={styles.container}>
                <Header title={'Quiz'} />
                {this.hasMoreQuestions(deck.questions)
                    ? <Card
                        index={index}
                        questions={deck.questions}
                        setAsCorret={this.setAsCorret}
                        setAsIncorrect={this.setAsIncorrect}
                        />
                    : <Score 
                        score={score}
                        total={deck.questions.length}
                        restartQuiz={this.restartQuiz}
                        />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

const mapStateToProps = (state, ownProps) => {
    const { navigation } = ownProps
    const title = navigation.getParam('title')
    return {
        deck: state.decks.data[title]
    }
}

export default withNavigation(connect(mapStateToProps)(Quiz))