import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../constants/colors';
import { Image, View, Text, Alert } from 'react-native';

import styles from './Welcome.style';
import Button from '../../Components/Button';

export default function Welcome({navigation}) {
  const GoToLogin = () => {
    navigation.navigate('Login');
  };
  const GoToSignUP = () => {
    navigation.navigate('SignUp');
  };
  return (
  <LinearGradient colors={[COLORS.secondary, COLORS.primary]}
  style={{flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Text style={styles.title}>Reasy</Text>
       </View>
       <Button title="Kayıt Ol" onPress={GoToSignUP}/>
       <View style={{marginVertical:10}}></View>
      <Button title="Giriş Yap" onPress={GoToLogin}/>
    </View>
  </LinearGradient>
    )
}