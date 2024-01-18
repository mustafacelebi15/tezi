import React, {useState} from "react";
import { Text, SafeAreaView, View, TextInput, Alert, TouchableOpacity,Image, ScrollView} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import styles from "./reservationAct.style";
import Button from "../../Components/Button";
import UploadsComponent from "../../Components/UploadsComponents";

    


const ReservationAct = ({route, navigation}) => {
 
  const [ReservationHour, setReservationHour] = useState(null);
  const [ResDesc, setResDesc] = useState(null);

  const categories = [{name:'00.00-01.00'},{name: '01.00-02.00 '},{name: '02.00-03.00'},{name: '03.00-04.00'},{name: '04.00-05.00'},{name: '05.00-06.00'},{name: '06.00-07.00'},{name: '07.00-08.00'},{name: '08.00-09.00'},{name: '09.00-10.00'},{name: '10.00-11.00'},{name: '11.00-12.00'},{name: '12.00-13.00'},{name: '13.00-14.00'},{name: '14.00-15.00'},{name: '15.00-16.00'},{name: '16.00-17.00'},{name: '17.00-18.00'},{name: '18.00-19.00'},{name: '19.00-20.00'},{name: '20.00-21.00'},{name: '21.00-22.00'},{name: '22.00-23.00'},{name: '23.00-24.00'}];


  function handleSubmit() {
    if(!ReservationHour || !ResDesc){
Alert.alert('Bilgiler boş bırakılamaz');
return;
    }
  const apiUrl = 'http://mcelebi44-001-site1.btempurl.com/Reservation/add';
console.log(ReservationHour);
  const {businessData, cusUserName} = route.params;
  const ReservationData = {
    businessUserName: businessData.userName,
    hour:ReservationHour,
    customerUserName:cusUserName,
    reservationDescription:ResDesc,
  };
  axios.post(apiUrl, ReservationData)
    .then(response => {
      console.log('Registration successful:');
      navigation.navigate('Detail',{businessItem:businessData,cusUserName:cusUserName });
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

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
        <SafeAreaView>
        <View style={styles.contentContainer}>
        <Text style={styles.title}>Rezervasyon Yapıyorsunuz</Text>
        <Picker
        style={styles.picker}
          selectedValue={ReservationHour}
          onValueChange={(itemValue) => setReservationHour(itemValue)}
        >
          <Picker.Item label="Rezervasyon Saatleri" value={null} />
          {categories.map((category, index) => (
            <Picker.Item key={index} label={category.name} value={category.name} />
          ))}
        </Picker>
        <Text style={styles.baslik}> Rezervasyon Açıklaması</Text>
        <TextInput style={styles.input} pl0aceholder="Rezervasyon açıklaması" value={ResDesc} onChangeText={(text) => setResDesc(text)} multiline numberOfLines={8} />    
        <View style={styles.ButtonContainer}>  
        <Button style={styles.button} title={"Rezervasyon Yap"} onPress={handleSubmit}></Button>
        </View>
        </View>
        </SafeAreaView>
        </View>
        </ScrollView>
    )
}

export default ReservationAct;