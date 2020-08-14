import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Filters = () => {
  const navigation = useNavigation();

  function handleNavigateToReimbursements() {
    return navigation.navigate('Reimbursements');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Filtros{'\n'}disponíveis para busca</Text>
      <Text style={styles.titlePageDescription}>Selecione um item abaixo para prosseguir</Text>


      <View style={styles.main}>
        <View style={styles.boxGrid}>
          <View style={styles.searchBox}>
            <Text style={styles.searchTitle}>Buscar todos reembolsos</Text>
            <Text style={styles.searchDescription}>
              Todos os casos suspeitos, inclusive
              os confirmados
            </Text>

            <TouchableOpacity onPress={handleNavigateToReimbursements} style={styles.searchAction}>
              <Icon name="search" size={18} style={{ color: '#6D008E' }} />
              <Text style={styles.searchActionText}>Selecionar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchBox}>
            <Text style={styles.searchTitle}>Buscar apenas suspeitos</Text>
            <Text style={styles.searchDescription}>
              Todos os casos suspeitos e confirmados
            </Text>

            <TouchableOpacity style={styles.searchAction}>
              <Icon name="search" size={18} style={{ color: '#6D008E' }} />
              <Text style={styles.searchActionText}>Selecionar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxGrid}>
          <View style={styles.searchBox}>
            <Text style={styles.searchTitle}>Buscar por região</Text>
            <Text style={styles.searchDescription}>
              Visualizar todos os casos por Estado
            </Text>

            <TouchableOpacity style={styles.searchAction}>
              <Icon name="search" size={18} style={{ color: '#6D008E' }} />
              <Text style={styles.searchActionText}>Selecionar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchBox}>
            <Text style={styles.searchTitle}>Buscar casos específicos</Text>
            <Text style={styles.searchDescription}>
              Escolher outros tipos de filtros.
            </Text>

            <TouchableOpacity style={styles.searchAction}>
              <Icon name="search" size={18} style={{ color: '#6D008E' }} />
              <Text style={styles.searchActionText}>Selecionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  );
}

export default Filters;