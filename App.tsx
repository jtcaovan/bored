import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView} from 'react-native';

export default function App() {
  const [activity, setActivity] = useState()
  const [participants, setParticipants] = useState()
  const [category, setCategory] = useState()
  

  async function getActivity() {
    const response = await fetch('http://www.boredapi.com/api/activity/')
    const bored = await response.json()
    setActivity(bored.activity)
    setParticipants(bored.participants)
    setCategory(bored.type)
    console.log(bored)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 32}}>{activity}</Text>
        <Text style={{fontSize: 24}}>Participants: {participants}</Text>
        <Text style={{fontSize: 24}}>Category: {category}</Text>
          <Button
            style={{}}
            title="Give me something to do, I'm bored"
            onPress={() => {
              getActivity()
            }}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    fontSize:20,
  }
});
