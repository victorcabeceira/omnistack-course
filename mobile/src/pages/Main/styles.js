import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center'
  },
  userContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  logo: {
    marginTop: 30
  },
  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500
  },
  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  avatar: {
    flex: 1,
    height: 300
  },
  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  bio: {
    fontSize: 16,
    color: '#999',
    marginTop: 4,
    lineHeight: 18
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-evenly'
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },

  loadingOrEmptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingOrEmptyUsersText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#999',
    fontWeight: 'bold'
  },

  matchContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  matchImage: {
    height:  60,
    resizeMode: 'contain'
  },
  matchAvatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#FFF',
    marginVertical: 30
  },
  matchName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF'
  },
  matchBio: {
    marginTop: 10,
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 30
  },
  closeMatch: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 40,
  }
});

export default styles;
