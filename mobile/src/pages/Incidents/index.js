import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import logoImg from '../../assets/logo.png';

import api from '../../services/api';
import style from './style';

export default function Incidents() {
  const [incidents, setInsidents] = useState([]);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();
  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }
  async function loadIncidents() {
    const res = await api.get('/incidents');
    setInsidents(res.data);
    setTotal(res.headers['x-total-count']);
  }
  useEffect(() => {
    loadIncidents();
  }, []);
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={logoImg} />
        <Text style={style.headerText}>
          Total de <Text style={style.headerTextBold} >{total} casos</Text>.
        </Text>
      </View>
      <Text style={style.title}>Bem-vindo!</Text>
      <Text style={style.description}>
        Escolha um dos casos abaixo e salve o dia!
      </Text>
      <FlatList
        data={incidents}
        style={style.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View key={incident.id} style={style.incident}>
            <Text style={style.incidentProperty}>ONG: </Text>
            <Text style={style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
            <Text style={style.incidentProperty}>CASO: </Text>
            <Text style={style.incidentValue}>{incident.title}</Text>
            <Text style={style.incidentProperty}>VALOR: </Text>
            <Text style={style.incidentValue}>{
              Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)
            }</Text>
            <TouchableOpacity
              style={style.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  )
}