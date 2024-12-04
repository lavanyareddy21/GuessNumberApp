import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({children}) {
  return (
    <View style={styles.card}>{children}
    </View>

  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 13,
        backgroundColor: "#5a042f",
        marginHorizontal: 13,
        borderRadius: 16,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
})