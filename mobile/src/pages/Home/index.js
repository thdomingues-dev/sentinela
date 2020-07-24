import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import background from '../../assets/congress.png';
import logo from '../../assets/logo.png';

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToReimbursements() {
    return navigation.navigate('Reimbursements');
  }

  return (
    <ImageBackground
      source={background}
      style={styles.container}
      imageStyle={{ width: '140%', height: '140%', opacity: 0.05 }}
    >
      <Image style={{ width: 175, height: 85, marginTop: 8 }} source={logo} />

      <View style={styles.main}>
        <Text style={styles.title}>Sentinele-se!</Text>
        <Text style={styles.description}>Mantemos a população informada sobre fraudes fiscais praticadas por parlamentares.</Text>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigateToReimbursements}>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f5',
  },

  logo: {

  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#6D008E',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 32,
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24,
    marginBottom: 72,
  },

  footer: {
  },

  button: {
    backgroundColor: '#6D008E',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }

});

export default Home;