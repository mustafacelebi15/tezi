import React, {useState} from "react";
import { Text, SafeAreaView, View, TextInput, Alert, TouchableOpacity} from "react-native";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import base64 from 'react-native-base64';

import styles from "./Login.style";
import Button from "../../Components/Button";


    

   

const Login = ({navigation}) => {
    const [Username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [kosul, setKosul] = useState(null);
    const [id, setId] = useState(null);
 
    function handleSubmit() {
      if(!Username || !password){
Alert.alert('Bilgiler boş bırakılamaz');
return;
      }
    const apiUrl = 'http://mcelebi44-001-site1.btempurl.com/api/Auth/login';
    const loginData = {
      userName: Username,
      password: password,
    };
    axios.post(apiUrl, loginData)
      .then(response => {
        const jwtToken = response.data.token;
        const parts = jwtToken.split('.');
        
        try {
          const decodedPart2 = base64.decode(parts[1]);
          console.log(decodedPart2);
          setId(decodedPart2.email);
          console.log(id);
        } catch (error) {
          console.error('Invalid base64 for part #2', error);
        }
        
      const updateKosul = response.data.userType;
      setKosul(updateKosul);
      if(updateKosul === 'business'){
        navigation.navigate('BusinessHome', loginData);
      }
      else{
        navigation.navigate('AnaSayfa', loginData);
      }
      })
      .catch(error => {
        console.error('Kayıt hatası:', error);
        if (error.response) {
          console.error('Yanıt verisi:', error.response.data);
          console.error('Yanıt durumu:', error.response.status);
          console.error('Yanıt başlıkları:', error.response.headers);
        }
      });
  }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    return(
        <View style={styles.container}>
        <SafeAreaView>
        <View style={styles.contentContainer}>
        <Text style={styles.title}>Giriş Yap</Text>
        <TextInput style={styles.input} placeholder="Kullanıcı adınızı giriniz" value={Username} onChangeText={(text) => setUsername(text)} />
        <TextInput style={styles.input} placeholder="Şifrenizi giriniz" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={!showPassword} />
        <View style={styles.gizle}>
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.gizle}>
              <Text style={styles.showPasswordButtonText}>{showPassword ? 'Şifreyi Gizle' : 'Şifreyi Göster'}</Text>
            </TouchableOpacity>
            </View>
        <View style={styles.ButtonContainer}>
            <Button title="Giriş Yap" onPress={handleSubmit}/>
        </View>
        </View>
        </SafeAreaView>
        </View>
    )
}

export default Login;