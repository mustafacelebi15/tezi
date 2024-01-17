import React, {useState} from "react";
import { Text, SafeAreaView, View, TextInput, Alert, TouchableOpacity} from "react-native";
import axios from "axios";

import styles from "./SignUp.style";
import Button from "../../Components/Button";

    

   

const SignUp = ({navigation}) => {
    const [Name, setName] = useState(null);
    const [Surname, setSurname] = useState(null);
    const [Username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const apiUrl = 'http://mcelebi44-001-site1.btempurl.com/api/auth/register';

  

    function MusteriKayit() {
      if(!Name || !Surname || !Username || !password){
Alert.alert('Bilgiler boş bırakılamaz');
return;
      }
    const customerData = {
      firstName: Name,
      lastName: Surname,
      userName: Username,
      password: password,
      userType: 'customer',
    };
    axios.post(apiUrl, customerData)
      .then(response => {
        console.log('Registration successful:');
        navigation.navigate('Register',{customerData});
      })
      .catch(error => {
        console.error('Kayıt hatası:', error);
        // Eğer varsa, yanıta dayalı olarak daha spesifik hata işleme ekleyin
        if (error.response) {
          console.error('Yanıt verisi:', error.response.data);
          console.error('Yanıt durumu:', error.response.status);
          console.error('Yanıt başlıkları:', error.response.headers);
        }
      });
  }
  function BusinessKayit() {
    if(!Name || !Surname || !Username || !password){
Alert.alert('Bilgiler boş bırakılamaz');
return;
    }
  const businessData = {
    firstName: Name,
    lastName: Surname,
    userName: Username,
    password: password,
    userType: 'business',
  };
  axios.post(apiUrl, businessData)
    .then(response => {
      console.log('Registration successful:');
      navigation.navigate('BusRegister',{businessData});
    })
    .catch(error => {
      console.error('Kayıt hatası:', error);
      // Eğer varsa, yanıta dayalı olarak daha spesifik hata işleme ekleyin
      if (error.response) {
        console.error('Yanıt verisi:', error.response.data);
        console.error('Yanıt durumu:', error.response.status);
        console.error('Yanıt başlıkları:', error.response.headers);
      }
    });
}

    const handleButtonPress = () => {
      navigation.navigate('Login')
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
      



    return(
        <View style={styles.container}>
        <SafeAreaView>
        <View style={styles.contentContainer}>
        <Text style={styles.title}>Yeni Hesap Oluştur</Text>
        <TextInput style={styles.input} placeholder="Adınızı giriniz" value={Name} onChangeText={(text) => setName(text)} />
        <TextInput style={styles.input} placeholder="Soyadınızı giriniz" value={Surname} onChangeText={(text) => setSurname(text)} />
        <TextInput style={styles.input} placeholder="Kullanıcı adınızı giriniz" value={Username} onChangeText={(text) => setUsername(text)} />
        <TextInput style={styles.input} placeholder="Şifrenizi giriniz" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={!showPassword} />
        <View style={styles.gizle}>
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.gizle}>
              <Text style={styles.showPasswordButtonText}>{showPassword ? 'Şifreyi Gizle' : 'Şifreyi Göster'}</Text>
            </TouchableOpacity>
            </View>
        <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
      <Text style={styles.buttonText}>Zaten bir hesabın var mı?</Text>
    </TouchableOpacity>
            <Button title="Müşteri Kaydı Oluştur" onPress={MusteriKayit}/>
            <View style={{marginTop:10}}>
            <Button title="İşletme Kaydı Oluştur" onPress={BusinessKayit}/>
        </View>
        </View>
        </View>
        </SafeAreaView>
        </View>
    )
}

export default SignUp;