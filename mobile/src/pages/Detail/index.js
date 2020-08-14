import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  function handleNavigateToBack() {
    navigation.goBack();
  }

  function handleLinkToWeb(url) {
    Linking.openURL(`${url}`);
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
            <Text style={styles.detailContent}>Deputado: {incident.congressperson_name}</Text>
          </View>

          <View style={styles.detailBox}>
            <View style={styles.detailBox}>
              <Icon name="flag" size={20} color="#6D008E" style={styles.detailIcon} />
              <Text style={styles.detailContent}>Partido: {incident.party}</Text>
            </View>

            <View style={styles.detailBox}>
              <Icon name="map-pin" size={20} color="#6D008E" style={styles.detailIcon} />
              <Text style={styles.detailContent}>Estado: {incident.state}</Text>
            </View>
          </View>

          <View style={styles.detailBox}>
            <Icon name="calendar" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Mandato: {incident.term}</Text>
          </View>
        </View>

        <View style={styles.detailDocument}>
          <View style={styles.detailBox}>
            <Icon name="users" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Fonte: {incident.supplier}</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="file-text" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>CNPJ/CPF: {incident.cnpj_cpf}</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="save" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Doc: {incident.document_id ? incident.document_id : incident.document_number}</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="info" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Descrição: {incident.subquota_description}</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="calendar" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Data: {incident.issue_date}</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="dollar-sign" size={20} color="#6D008E" style={styles.detailIcon} />
            <Text style={styles.detailContent}>Valor: {incident.document_value}</Text>
          </View>

          <View style={styles.detailBox}>
            <Icon name="link" size={20} color="#6D008E" style={styles.detailIcon} />
            <TouchableOpacity onPress={() => handleLinkToWeb(incident.receipt.url)}>
              <Text style={styles.detailContent}>Abrir documento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => { }}>
          <Icon name="share-2" size={18} color="#FFF" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Compartilhar</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={() => { }}>
          <Icon name="send" size={18} color="#FFF" style={styles.buttonIcon} />
          <Text style={[styles.buttonText, { marginLeft: 6 }]}>Denunciar</Text>
        </RectButton>
      </View>
    </View >
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