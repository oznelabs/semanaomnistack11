import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import style from './style';

export default function Detail() {
  return (
    <View style={style.container}>
      <View style={style.header} >
        <Image source={logoImg} />
        <TouchableOpacity onPress={() => { }} >
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>
      <View style={style.incident} >
        <Text style={[style.incidentProperty, { marginTop: 0 }]}>ONGs: </Text>
        <Text style={style.incidentValue}>VivaBarra</Text>
        <Text style={style.incidentProperty}>CASO: </Text>
        <Text style={style.incidentValue}>Comprar livros</Text>
        <Text style={style.incidentProperty}>VALOR: </Text>
        <Text style={style.incidentValue}>R$ 120,00</Text>
      </View>
      <View style={style.contactBox}>
        <Text style={style.heroTitle}>Salve o dia!</Text>
        <Text style={style.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={style.heroDescription}> Entre em contato:</Text>
        <View style={style.actions}>
          <TouchableOpacity style={style.action}>
            <Text style={style.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.action}>
            <Text style={style.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}