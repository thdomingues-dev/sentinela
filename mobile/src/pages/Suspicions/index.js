import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import axios from 'axios';

import styles from './styles';

const Suspicions = () => {
  const [suspicions, setSuspicions] = useState([]);

  async function loadSuspicions() {
    const response = await axios.get('https://jarbas.serenata.ai/api/chamber_of_deputies/reimbursement?')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToBack}>
        <Icon name="arrow-left" size={24} color="#6D008E" />
      </TouchableOpacity>

      <Text style={styles.titlePage}>Reembolsos suspeitos</Text>

      <View style={styles.main}>
        <FlatList

        />
      </View>
    </View>
  );
}

export default Suspicions;