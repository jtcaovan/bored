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
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.header}>I'm Bored 😴</Text>
      </View>

      <View style={styles.activityContainer}>
        <Text style={styles.activity}>{activity}</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.form}>Participants: {participants}</Text>
        <Text style={styles.form}>Category: {category}</Text>
        <Button 
        title="Give me something to do, I'm bored"
        color='#ffffff'
        accessibilityLabel='Get an activity'
        onPress={() => {getActivity()}}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#14213d",
  },
  headingContainer: {
    marginTop: 24,
    color: "#ffffff"
  },
  header: {
    textAlign: 'center',
    fontSize: 36,
    color: "#ffffff"
  },
  information: {
    textAlign: 'center',
    fontSize: 18,
    color: "#ffffff"
  },
  activityContainer: {
    backgroundColor: "#e5e5e5",
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    height: '40%',
    margin: 32,
    padding: 16,
  },
  activity: {
    fontSize: 32,
    textAlign: 'center',
    margin: 'auto',
    padding: 'auto',
  },
  formContainer: {
    margin: 32,
    padding: 16,
  },
  form: {
    color: '#ffffff',
    paddingVertical: 16,
    fontSize: 26, 
  },
  
});
