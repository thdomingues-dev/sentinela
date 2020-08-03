import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

const Detail = () => {
  const navigation = useNavigation();

  function handleNavigateToBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToBack}>
        <Icon name="arrow-left" size={24} color="#6D008E" />
      </TouchableOpacity>

      <Text style={styles.titlePage}>Detalhes do reembolso</Text>

      <View style={styles.main}>


        <View style={styles.detailPerson}>
          <View style={styles.detailBox}>
            <Icon name="user" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Deputado: Jair Messias Bolsonaro</Text>
          </View>

          <View style={styles.detailBox}>
            <View style={styles.detailBox}>
              <Icon name="flag" size={20} color="#6D008E" style={styles.detailIcon} />
              <Text style={styles.detailContent}>Partido: PSOL</Text>
            </View>

            <View style={styles.detailBox}>
              <Icon name="map-pin" size={20} color="#6D008E" style={styles.detailIcon} />
              <Text style={styles.detailContent}>Estado: RJ</Text>
            </View>
          </View>

          <View style={styles.detailBox}>
            <Icon name="calendar" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Mandato: 2019</Text>
          </View>
        </View>

        <View style={styles.detailDocument}>
          <View style={styles.detailBox}>
            <Icon name="users" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Fornecedor: SEGIMA AUTO POSTO LTDA</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="file-text" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>CNPJ/CPF: 78103082000197</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="save" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Doc: 7074966</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="info" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Descrição: Entrega Sedex</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="calendar" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Data: 2020-07-24</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="dollar-sign" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Valor: 15000</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="link" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>URL: link</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => { }}>
          <Icon name="twitter" size={18} color="#FFF" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Compartilhar</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={() => { }}>
          <Icon name="send" size={18} color="#FFF" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Denunciar</Text>
        </RectButton>
      </View>
    </View>
  );
};

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

  titlePerson: {
    color: '#6D008E',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 20,
    marginTop: 36,
  },

  titleDocument: {
    color: '#6D008E',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 20,
  },

  main: {
    marginTop: 0,
  },

  detailPerson: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: 125,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 16,
  },

  detailDocument: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: 270,
    borderRadius: 10,
    marginBottom: 16,
  },

  detailBox: {
    flexDirection: 'row',
  },

  detailIcon: {
    marginTop: 16,
    marginLeft: 8,
  },

  detailContent: {
    marginTop: 16,
    marginLeft: 4,
    maxWidth: 400
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  button: {
    backgroundColor: '#6D008E',
    height: 50,
    width: '48%',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    //textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
  },

  buttonIcon: {
    marginLeft: 11,
    marginRight: 11,
  },
});

export default Detail;