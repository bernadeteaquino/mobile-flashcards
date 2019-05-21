import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { black, white } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

const Header = (props) => {
    const { navigation, title } = props

    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <View style={styles.container}>
                    <FontAwesome name='arrow-left' size={25} color={white}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        elevation: 2,
        height: 60,
        flexDirection: 'row',
        backgroundColor: black
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginLeft: 10
    }
})

export default withNavigation(Header)
