import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

export default function LoggingItems({roundNumber, guess}) {
  return (
    <View style = {styles.listItem}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primary700,
        borderWidth: 2,
        borderRadius: 42,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent600,
        flexDirection: 'row',
        justifyContent : 'space-between',
        width: '100%',
        shadowColor: 'black',
        shadowOffset :  {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius :  3,
    },
    text: {
        fontFamily: 'open-sans'
    }
})