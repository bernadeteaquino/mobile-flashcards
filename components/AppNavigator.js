import React from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'
import DeckList from './DeckList'
import DeckNew from './DeckNew'
import { FontAwesome } from '@expo/vector-icons'

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
    }
)

const AppNavigation = createStackNavigator(
    {
        Home: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
        }
    }
)

export default createAppContainer(AppNavigation)