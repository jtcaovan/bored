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
    <SafeAreaView>
        <Text>{activity}</Text>
        <Text>Participants: {participants}</Text>
        <Text>Category: {category}</Text>
          <Button
            title="Give me something to do, I'm bored"
            onPress={() => {
              getActivity()
            }}
          />
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
});
