import { View, Text, StyleSheet, TouchableWithoutFeedback, TextInput } from 'react-native';

export default function App({ navigation }) {
  return (<View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.title}>Create your name</Text>
      <TextInput style={styles.inputBox}/>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('LobbyStack')}>
        <Text style={styles.buttonText}>Select</Text>
      </TouchableWithoutFeedback>
    </View>
    
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'tomato',
    width: 300,
    height: 500,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  inputBox: {
    borderRadius: 10,
    borderWidth: 5,
    fontSize: 30,
    marginHorizontal: 20,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 30,
    textAlign: 'center',
    marginHorizontal: 100,
    fontSize: 20,
    paddingVertical: 7,
  }
});