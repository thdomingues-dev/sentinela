import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

import styles from './styles';

const Suspicions = () => {
  const navigation = useNavigation();

  const [suspicions, setSuspicions] = useState([]);
  const [page, setPage] = useState(7);

  const [numberTaps, setNumberTaps] = useState([0]);

  const [loading, setLoading] = useState(false);

  function handleNavigateBack() {
    return navigation.goBack();
  }

  function handleNavigateToDetail(suspicion) {
    return navigation.navigate('Detail', { incident: suspicion });
  }

  async function loadSuspicions() {
    const response = await axios.get('https://jarbas.serenata.ai/api/chamber_of_deputies/reimbursement/?offset=0&suspicions=1');

    setSuspicions(response.data.results);
  }

  async function loadMoreSuspicions() {
    if (loading) return;

    setLoading(true);

    if (numberTaps.includes(page)) {
      return;
    } else {
      setNumberTaps([...numberTaps, page]);

      const response = await axios.get(`https://jarbas.serenata.ai/api/chamber_of_deputies/reimbursement?offset=${page}&suspicions=1`);
      setSuspicions([...suspicions, ...response.data.results]);
      setPage(page + 7);
      setLoading(false);
      console.log(page);
    }
  }

  useEffect(() => {
    loadSuspicions();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon name="arrow-left" size={24} color="#6D008E" />
      </TouchableOpacity>

      <Text style={styles.titlePage}>Reembolsos suspeitos{'\n'}e confirmados</Text>

      <View style={styles.main}>
        <FlatList
          data={suspicions}
          keyExtractor={suspicion => String(suspicion.document_number + Math.floor(Math.random() * 1000))}
          onEndReached={loadMoreSuspicions}
          onEndReachedThreshold={0.2}
          renderItem={({ item: suspicion }) => (
            <View style={styles.suspicion}>
              <View style={styles.suspicionIconText}>
                <Icon name="user" size={20} color="#6D008E" style={styles.suspicionIcon} />
                <Text style={styles.suspicionText}>Dep. {suspicion.congressperson_name}</Text>
              </View>

              <View style={styles.suspicionIconText}>
                <Icon name="save" size={20} color="#6D008E" style={styles.suspicionIcon} />
                <Text style={styles.suspicionText}>{suspicion.document_id ? suspicion.document_id : "Não informado"}</Text>
              </View>

              <View style={styles.suspicionIconText}>
                <Icon name="calendar" size={20} color="#6D008E" style={styles.suspicionIcon} />
                <Text style={styles.suspicionText}>{suspicion.year}</Text>
              </View>

              <View style={styles.suspicionIconText}>
                <Icon name="dollar-sign" size={20} color="#6D008E" style={styles.suspicionIcon} />
                <Text style={styles.suspicionText}>{suspicion.document_value}</Text>
              </View>

              <TouchableOpacity onPress={() => handleNavigateToDetail(suspicion)} style={styles.suspicionDetail}>
                <Text style={styles.suspicionTextDetail}>Ver mais detalhes</Text>
                <Icon name="arrow-right" size={20} color="#6D008E" style={styles.suspicionIconDetail} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default Suspicions;