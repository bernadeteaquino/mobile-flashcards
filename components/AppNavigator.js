import React from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import DeckList from './DeckList'
import DeckNew from './DeckNew'
import DeckView from './DeckView'
import QuestionNew from './QuestionNew'
import Quiz from './Quiz'
import { FontAwesome } from '@expo/vector-icons'
import { gray, white } from '../utils/colors'
import { Animated, Easing } from 'react-native'

const navigationOptions = {
    tabBarOptions: {
        showIcon: true,
        activeTintColor:  white,
        style: {
        padding: 5,
        fontSize: 18,
        backgroundColor: gray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        },
    },
}

const TabNavigation = createBottomTabNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Baralhos',
                tabBarIcon: ({ tintColor }) => <FontAwesome name='bars' size={25} color={tintColor}/>
            }
        },
        DeckDetail: {
            screen: DeckNew,
            navigationOptions: {
                tabBarLabel: 'Novo Baralho',
                tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={25} color={tintColor}/>
            }
        }
    },
    navigationOptions
)

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {      
        const { layout, position, scene } = sceneProps

        const thisSceneIndex = scene.index
        const width = layout.initWidth

        const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0],
        })

        return { transform: [ { translateX } ] }
        },
    }
}

const AppNavigation = createStackNavigator(
    {
        Home: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
        },
        DeckView: {
            screen: DeckView,
            navigationOptions: {
                header: null
            }
        },
        QuestionNew: {
            screen: QuestionNew,
            navigationOptions: {
                header: null
            }
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                header: null
            }
        }
    },
    transitionConfig
)

export default createAppContainer(AppNavigation)