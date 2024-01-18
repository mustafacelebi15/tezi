import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './CusRes.style';
import Button  from '../../Components/Button';


const CusRes = ({ route, navigation }) => {
  const [reservationData, setReservationData] = useState([]);
  const [Refresh, setRefresh] = useState(true);


  const userName = route.params;

  useEffect(() => {
    const apiUrl = 'http://mcelebi44-001-site1.btempurl.com/Reservation/getByUserNameForCustomer?userName=';

    console.log(userName);
    axios.get(apiUrl + userName)
      .then(response => {
        setReservationData(response.data.data);
        console.log(response.data.data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [Refresh]);

  const DeleteRes = (item) => {
  
    const apiUrls= 'http://mcelebi44-001-site1.btempurl.com/Reservation/delete';
  
    const reservationInfo = {
      reservationId: item.reservationId,
      businessUserName: item.businessUserName,
      hour: item.hour,
      customerUserName: item.customerUserName,
      reservationDescription: item.reservationDescription,
    };
    axios.post(apiUrls,reservationInfo)
    .then(response => {
      console.log('Reservation deleted successfully:', response.data);
      setRefresh(!Refresh);
    })
    .catch(error => {
      console.error('Error deleted reservation:', error);
    });
  }
 
  const renderReservationItem = ({ item }) => (
    <View style={styles.reservationItem}>


      <Text style={styles.label}>İşletme Adı:</Text>
      <Text style={styles.value}>{item.businessName}</Text>

      <Text style={styles.label}>Saat:</Text>
      <Text style={styles.value}>{item.hour}</Text>

      <Text style={[styles.label, styles.description]}>Rezervasyon Açıklaması:</Text>
      <Text style={styles.value}>{item.reservationDescription}</Text>

      {item.reservationStatus ? (
        <View style={styles.buttonContainer}>
          <Text style={styles.istek}> İstek Bekliyor </Text>
        </View>
      ) : (
        <Text style={styles.istek}>
          {item.isAccept ? 'Kabul Edildi' : 'Reddedildi'}
        </Text>
        
      ) }
      <TouchableOpacity style={styles.button} onPress={() => DeleteRes(item)}>
      <Text style={styles.buttonText}>Sil</Text>
    </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rezervasyon İstekleriniz</Text>
      <FlatList
        data={reservationData}
        keyExtractor={(item) => item.reservationId.toString()}
        renderItem={renderReservationItem}
        extraData={Refresh}
      />
    </View>
  );
};



export default CusRes;
