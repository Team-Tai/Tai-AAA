import { TouchableOpacity, useWindowDimension } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './Screens/Welcome';
import CardBoard from './Screens/CardBoard';
import Checkin from './Screens/Checkin';
import Inflight from './Screens/Inflight';
import BuyFlight from './Screens/BuyFlight';
import { NavigationContainer } from '@react-navigation/native';




const App = () => {
  const Stack = createStackNavigator();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [flightLocation, setFlightLocation] = useState([]);
  const [flightNumbers, setFlightNumbers] = useState([]);
  


  //console.log("data", data)

//console.log(data[flightNumbers[1]]?.destination?.city)

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <>
        <Stack.Screen name="BuyFlight" options={{
          headerShown: false
        }} component={BuyFlight}/>
        <Stack.Screen name="Checkin" options={{
          headerShown: false
        }} component={Checkin}/>
        <Stack.Screen name="Welcome" options={{
          headerShown: false
        }} component={Welcome}/>
        <Stack.Screen name="CardBoard" options={{
          headerShown: false
        }} component={CardBoard}/>
        <Stack.Screen name="Inflight" options={{
          headerShown: false
        }} component={Inflight}/>
       
        </>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

export default App;

