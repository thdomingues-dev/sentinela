import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Reimbursements = () => {
  const [incidents, setIncidents] = useState({});
  const navigation = useNavigation();

  function handleNavigateToBack() {
    return navigation.goBack();
  }

  function handleNavigateToDetail() {
    return navigation.navigate('Detail');
  }

  async function loadIncidents() {
    const response = await axios.get('https://jarbas.serenata.ai/api/chamber_of_deputies/reimbursement/');

    setIncidents(response.data);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToBack}>
        <Icon name="arrow-left" size={24} color="#6D008E" />
      </TouchableOpacity>

      <Text style={styles.titlePage}>Todos Reembolsos</Text>

      <View style={styles.main}>
        <View style={styles.search}>
          <TouchableOpacity onPress={() => { }}>
            <Icon name="search" size={20} color="#6D008E" style={styles.searchIcon} />
          </TouchableOpacity>

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar reembolso"
          />
        </View>

        <FlatList
          data={incidents.results}
          keyExtractor={incident => String(incident.document_number)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: incident }) => (
            <View style={styles.incident}>
              <View style={styles.incidentIconText}>
                <Icon name="user" size={20} color="#6D008E" style={styles.incidentIcon} />
                <Text style={styles.incidentText}>Dep. {incident.congressperson_name}</Text>
              </View>

              <View style={styles.incidentIconText}>
                <Icon name="save" size={20} color="#6D008E" style={styles.incidentIcon} />
                <Text style={styles.incidentText}>{incident.document_id ? incident.document_id : "Não informado"}</Text>
              </View>

              <View style={styles.incidentIconText}>
                <Icon name="calendar" size={20} color="#6D008E" style={styles.incidentIcon} />
                <Text style={styles.incidentText}>{incident.year}</Text>
              </View>

              <View style={styles.incidentIconText}>
                <Icon name="dollar-sign" size={20} color="#6D008E" style={styles.incidentIcon} />
                <Text style={styles.incidentText}>{incident.document_value}</Text>
              </View>

              <TouchableOpacity onPress={handleNavigateToDetail} style={styles.incidentDetail}>
                <Text style={styles.incidentTextDetail}>Ver mais detalhes</Text>
                <Icon name="arrow-right" size={20} color="#6D008E" style={styles.incidentIconDetail} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

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

  incident: {
    flexDirection: 'column',
    marginBottom: 16,
    borderRadius: 10,
    height: 202,
    backgroundColor: '#fff',
  },

  incidentIconText: {
    flexDirection: 'row',
  },

  incidentDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  incidentIcon: {
    marginTop: 16,
    marginLeft: 8,
  },

  incidentText: {
    marginTop: 18,
    marginLeft: 14,
    color: '#6C6C80',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },

  incidentIconDetail: {
    marginTop: 18,
    marginRight: 8,
  },

  incidentTextDetail: {
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

export default Reimbursements;

/*

<View style={styles.footer}>
        <View style={styles.footerIcon}>
          <Icon name="map" onPress={() => { }} size={32} color="#6D008E" />
          <Text style={styles.iconText}>Região</Text>
        </View>

        <View style={styles.footerIcon}>
          <Icon name="check-square" onPress={() => { }} size={32} color="#6D008E" />
          <Text style={styles.iconText}>Verificado</Text>
        </View>

        <View style={styles.footerIcon}>
          <Icon name="more-vertical" onPress={() => { }} size={32} color="#6D008E" />
          <Text style={styles.iconText}>Sobre</Text>
        </View>
      </View>

*/