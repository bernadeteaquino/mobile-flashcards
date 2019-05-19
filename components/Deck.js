import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray, white } from '../utils/colors'

class Deck extends Component {
    render() {
        const { title, questions } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.counter}>
                        {questions && questions.length} carta(s)
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 125,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    content: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    title: {
        fontSize: 30
    },
    counter: {
        fontSize: 20, 
        color: gray
    }
})

export default Deck