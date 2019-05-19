import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import AppNavigator from './components/AppNavigator'

export default class App extends React.Component {
    store = createStore(reducer, middleware)

    render() {
        return (
            <Provider store={this.store}>
                <View style={styles.container}>
                    <AppNavigator />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 25
    },
  })