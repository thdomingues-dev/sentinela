import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
        <View style={styles.incidentDetail}>
          <View style={styles.incidentDetailBox}>
            <Icon name="user" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>Deputado: Jair Messias Bolsonaro</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="flag" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>Partido: PSOL</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="map-pin" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>Estado: RJ</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="calendar" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>Mandato: 2019</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="save" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>Doc: 7074966</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="info" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>Descrição: Entrega Sedex</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="calendar" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>Data: 2020-07-24</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="dollar-sign" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>Valor: 15000</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="users" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>Fornecedor: SEGIMA AUTO POSTO LTDA</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="file-text" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>CNPJ/CPF: 78103082000197</Text>
          </View>

          <View style={styles.incidentDetailBox}>
            <Icon name="link" size={20} color="#6D008E" style={styles.incidentDetailIcon} />
            <Text style={styles.incidentDetailContent}>URL: http://www.camara.gov.br/cota-parlamentar/documentos/publ/3330/2020/7074966.pdf</Text>
          </View>


        </View>
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
    fontSize: 32,
    marginTop: 20,
  },

  main: {
    marginTop: 20,
  },

  incidentDetail: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: 440,
    borderRadius: 10,
    marginTop: 32,
    marginBottom: 16,
  },

  incidentDetailBox: {
    flexDirection: 'row',
  },

  incidentDetailIcon: {
    marginTop: 16,
    marginLeft: 8,
  },

  incidentDetailContent: {
    marginTop: 16,
    marginLeft: 4,
    maxWidth: 400
  }
});

export default Detail;