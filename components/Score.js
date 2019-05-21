import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white, black } from '../utils/colors'

class Score extends Component {
    render() {
        const { score, total, restartQuiz, navigation } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.score}>
                    <Text style={styles.scoreValue}>Respostas corretas:</Text>
                    <Text style={styles.scoreValue}>{ score } de { total }</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button}
                            onPress={restartQuiz}>
                            <Text style={styles.title}>Tentar novamente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => { navigation.goBack() }}>
                            <Text style={styles.title}>Voltar para o baralho</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    score: {
        alignItems: 'center',
        marginTop: 60,
    },
    scoreValue: {
        fontSize: 40,
    },  
    content: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: black,
        margin: 25,
        padding: 10,
        height: 70,
        width: 200,
        borderRadius: 8,
    },
    title: {
        color: white,
        fontSize: 20,
        textAlign: 'center',
    },
})

export default withNavigation(Score)