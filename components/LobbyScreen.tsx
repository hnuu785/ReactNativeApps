import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';

export default function App({ navigation, route }) {
  const [rooms, setRooms] = useState([]);
  const myName = route.params.myName;

  useEffect(() => {
    const roomsData = database().ref('/rooms').once('value').val();

    setRooms(Object.keys(roomsData).map(key => ({
        id: key,
        name: roomsData[key].name
    })));
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        const newRef = database().ref('/rooms').push();
        newRef
          .set({name: myName})
          .then(() => navigation.navigate('MultiplayScreen'));
      }}>
        <Text style={styles.createText}>Create Room</Text>
      </TouchableWithoutFeedback>
      <ScrollView>
        {rooms.map(room => {
          <TouchableWithoutFeedback onPress={() => navigation.navigate('MultiplayScreen')}>
            <Text style={styles.roomText}>{room.name}</Text>
          </TouchableWithoutFeedback>
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  createText: {
    fontSize: 30,
    borderRadius: 10,
    backgroundColor: 'tomato',
    textAlign: 'center',
    marginHorizontal: 60,
    marginTop: 70,
  },
  roomText: {
    backgroundColor: 'tomato',
    fontSize: 27,
    textAlign: 'center',
    borderRadius: 10,
    marginHorizontal: 30,
    marginTop: 20,
  },
});