import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  textInput: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    marginTop: 20,
    paddingHorizontal: 15
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default styles;
