import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { gray, black, white } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'

class DeckView extends Component {
    render() {
        const { title, questions } = this.props.navigation.state.params
        const { deck } = this.props

        return (
            <View style={styles.container}>
                 <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('DeckList') }}>
                        <FontAwesome name='arrow-left' size={35} color={white}/>
                    </TouchableOpacity>
                    <Text style={styles.label}>{title}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.counter}>
                        {questions.length} carta(s)
                    </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            navigation.navigate('NewQuestion', {title: deck.title})
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
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    header: {
        paddingVertical: 10,
        elevation: 2,
        height: 60,
        flexDirection: 'row',
        backgroundColor: black,
    },
    label: {
        color: 'white',
        fontSize: 25,
        marginLeft: 10
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
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

export default DeckView