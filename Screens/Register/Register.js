import React, {useState} from "react";
import { Text, SafeAreaView, View, TextInput, Alert, TouchableOpacity,Image, } from "react-native";
import axios from "axios";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import styles from "./Register.style";
import Button from "../../Components/Button";

    

   

const Register = ({route, navigation}) => {

  const [profileImage, setProfileImage] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState(null);
  const [Adress, setAdress] = useState(null);
  const [Description, setDescription] = useState(null);


  function handleSubmit() {
    if(!PhoneNumber || !Adress || !Description || !profileImage){
Alert.alert('Bilgiler boş bırakılamaz');
return;
    }
  const apiUrl = 'http://mcelebi44-001-site1.btempurl.com/Customer/add';
  const CustomerData = {
    customerName: route.params.customerData.firstName,
    userName: route.params.customerData.userName,
    customerPhoneNumber: PhoneNumber,
    customerAdress: Adress,
    customerDescription: Description,
    customerImage: profileImage,
  };
  axios.post(apiUrl, CustomerData)
    .then(response => {
      console.log('Registration successful:');
      navigation.navigate('Login');
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

  
      
    const handleImagePick = () => {
      const options = {
        title: 'Select Profile Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
  
      launchImageLibrary(options, (response) => {
        console.log(response,"sasas")
        console.log(response.assets[0].uri,"test")
        if (response.assets[0].uri) {
          setProfileImage(response.assets[0].uri);
        }
      });
    };


    return(
        <View style={styles.container}>
        <SafeAreaView>
        <View style={styles.contentContainer}>
        <Text style={styles.title}>Merhaba {route.params.customerData.firstName}</Text>
        <TextInput style={styles.input} placeholder="Telefon numaranızı giriniz" value={PhoneNumber} onChangeText={(text) => setPhoneNumber(text)} />
        <TextInput style={styles.input} placeholder="Adres giriniz" value={Adress} onChangeText={(text) => setAdress(text)} /> 
        <TextInput style={styles.input} placeholder="Kendinizi kısaca tanıtınız." value={Description} onChangeText={(text) => setDescription(text)} />      
        <View style={styles.ButtonContainer}>
        {profileImage && (
  <Image source={{ uri: profileImage }} style={styles.profileImage} />
)}    
        <TouchableOpacity style={styles.button} onPress={handleImagePick}>
              <Text style={styles.buttonText}>Profil Resmi Seçiniz</Text>
    </TouchableOpacity>
            <Button title="Kayıt ol" onPress={handleSubmit}/>
        </View>
        </View>
        </SafeAreaView>
        </View>
    )
}

export default Register;