import { Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';

const { width, height } = Dimensions.get('window');


export default function App({ navigation }) {
  return (<View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>QUORIDOR</Text>
    </View>
    <View style={styles.menuContainer}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Singleplay')}><Text style={styles.playMenuText}>
        Singleplay
      </Text></TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateNameStack')}><Text style={styles.playMenuText}>
        Multiplay
      </Text></TouchableWithoutFeedback>
    </View>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'teal',
  },
  menuContainer: {
    flex: 4,
    backgroundColor: 'tomato',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
  },
  playMenuText: {
    textAlign: 'center',
    marginVertical: 40,
    fontSize: 30,
    borderRadius: 20,
    borderWidth: 10,
    borderColor: 'black',
    marginHorizontal: 30,
  },
});