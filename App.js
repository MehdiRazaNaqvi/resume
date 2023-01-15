import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , Image } from 'react-native';

export default function App() {







  return (


    <View style={styles.container}>

      <Text style={{ fontSize: 25, color: "white" }} >SYED MEHDI
      </Text>
      {/* 
      <TouchableOpacity style={styles.color} onPress={() => onPress()}>
        <Text style={{fontSize:30}} >Profile</Text>
      </TouchableOpacity> */}

    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: 'darkgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },





  text: {
    color: "white",
    fontWeight: "600"
  },

  color: {
    color: "white",
    backgroundColor: 'red'

  }

});
