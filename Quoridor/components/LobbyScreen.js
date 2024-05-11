import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('MultiplayScreen')}>
        <Text style={styles.createText}>Create Room</Text>
      </TouchableWithoutFeedback>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('MultiplayScreen')}>
          <Text style={styles.roomText}>room</Text>
        </TouchableWithoutFeedback>
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