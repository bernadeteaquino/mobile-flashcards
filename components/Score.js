import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


class Score extends Component {

    render() {
        return (
            <Text>Score</Text>
        )
    }
}

export default withNavigation(Score)