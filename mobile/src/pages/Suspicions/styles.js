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
  },

  main: {
    flex: 1,
    marginTop: 20,
  },

  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 32,
    borderColor: '#6D008E',
    borderWidth: 1,
  },

  searchIcon: {
    marginTop: 8,
    marginLeft: 8,
  },

  searchInput: {
    height: 40,
    width: '100%',
    marginLeft: 8,
  },

  suspicion: {
    flexDirection: 'column',
    marginBottom: 16,
    borderRadius: 10,
    height: 202,
    backgroundColor: '#fff',
  },

  suspicionIconText: {
    flexDirection: 'row',
  },

  suspicionDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  suspicionIcon: {
    marginTop: 16,
    marginLeft: 8,
  },

  suspicionText: {
    marginTop: 18,
    marginLeft: 14,
    color: '#6C6C80',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },

  suspicionIconDetail: {
    marginTop: 18,
    marginRight: 8,
  },

  suspicionTextDetail: {
    marginTop: 18,
    marginLeft: 14,
    color: '#6D008E',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },


  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 32,
    marginTop: 16,
  },

  footerIcon: {
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 32,
    width: 32,
  },

  iconText: {
    color: '#6C6C80',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'center',
    width: 64
  },
});

export default styles;