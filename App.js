import { StyleSheet, SafeAreaView, Text 
} from 'react-native'
import TextInputBar from './components/TextInputBar'

export default function App () {
  return (
    <SafeAreaView style={styles.basic}>
      <SafeAreaView style={styles.container} elevation={5}>
        <Text style={styles.heading}>Android Club Assessment 2</Text>
        <TextInputBar />
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: '25%',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 400,
    width: '90%',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 0.7,
    borderRadius: 20
  },
  heading: {
    position: 'relative',
    bottom: 15,
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 70
  },
  basic: {
    backgroundColor: 'rgb(0, 255, 255)',
    height: '100%'
  }
})

