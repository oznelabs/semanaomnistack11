import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { Feather, FontAwesome } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import style from './style';

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$ 120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['israelwebti@gmail.com'],
      body: message,
    })
  }

  function sendWhatsapp() {

  }

  return (
    <View style={style.container}>
      <View style={style.header} >
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack} >
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
            <FontAwesome name="whatsapp" color="#fff" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={style.action} onPress={sendMail} >
            <Text style={style.actionText}>E-mail</Text>
            <FontAwesome name="envelope" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}