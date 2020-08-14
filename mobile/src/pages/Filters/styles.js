import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f5',
  },

  titlePage: {
    color: '#6D008E',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 26,
    marginTop: 20,
    marginBottom: 10,
  },

  titlePageDescription: {
    color: '#6C6C80',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    marginBottom: 20,
  },

  main: {
    marginVertical: 10,
    maxWidth: '100%',
  },

  boxGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchBox: {
    marginBottom: 15,
    borderRadius: 8,
    borderColor: '#6D008E',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
    width: '48%',
  },

  searchTitle: {
    color: '#6D008E',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
    marginBottom: 8,
  },

  searchDescription: {
    color: '#6C6C80',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 8,
  },

  searchAction: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },

  searchActionText: {
    marginLeft: 4,
  }
});

export default styles;