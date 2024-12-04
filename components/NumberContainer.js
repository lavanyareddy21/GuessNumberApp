import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import Colors from '../constants/colors';

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.accent600,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        marginTop:deviceWidth < 380 ? 12 : 24,
        marginHorizontal: deviceWidth < 380 ? 12 : 24,
        marginBottom:deviceWidth < 380 ? 5 : 10,
        alignItems:'center',
        justifyContent: 'center',
    }, 
    text:{
        color: Colors.accent600,
        fontSize: 32,
        fontFamily: 'open-sans-bold'
    }
})