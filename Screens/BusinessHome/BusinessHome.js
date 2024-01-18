import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './BusinessHome.style';

const BusinessHome = ({ route, navigation }) => {
  const [reservationData, setReservationData] = useState([]);
  const { userName } = route.params;
  const [Refresh, setRefresh] = useState(true);

  useEffect(() => {
fetchData();
  },[Refresh]);

  const fetchData = async () => {
    try {
      const apiUrl = 'http://mcelebi44-001-site1.btempurl.com/Reservation/getByUserNameForBusiness?userName=';
      const response = await axios.get(apiUrl + userName);
      setReservationData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const AcceptRes = (item) => {
  
    const apiUrls= 'http://mcelebi44-001-site1.btempurl.com/Reservation/active';
  
    const reservationInfo = {
      reservationId: item.reservationId,
      businessUserName: item.businessUserName,
      hour: item.hour,
      customerUserName: item.customerUserName,
      reservationDescription: item.reservationDescription,
    };
    axios.post(apiUrls,reservationInfo)
    .then(response => {
      console.log('Reservation accepted successfully:', response.data);
      setRefresh(!Refresh);
    })
    .catch(error => {
      console.error('Error accepting reservation:', error);
    });
  }

  const RejectRes = (item) => {
  
    const apiUrls= 'http://mcelebi44-001-site1.btempurl.com/Reservation/passive';
  
    const reservationInfo = {
      reservationId: item.reservationId,
      businessUserName: item.businessUserName,
      hour: item.hour,
      customerUserName: item.customerUserName,
      reservationDescription: item.reservationDescription,
    };
    axios.post(apiUrls,reservationInfo)
    .then(response => {
      console.log('Reservation rejected successfully:', response.data);
      setRefresh(Refresh);
    })
    .catch(error => {
      console.error('Error rejected reservation:', error);
    });
  }
 

  const renderReservationItem = ({ item }) => (
    <View style={styles.reservationItem}>

      <Text style={styles.label}>Saat:</Text>
      <Text style={styles.value}>{item.hour}</Text>

      <Text style={styles.label}>Müşteri Adı:</Text>
      <Text style={styles.value}>{item.customerName}</Text>

      <Text style={[styles.label, styles.description]}>Müşteri nasıl biri?:</Text>
      <Text style={styles.value}>{item.customerDescription}</Text>

      <Text style={[styles.label, styles.description]}>Rezervasyon Açıklaması:</Text>
      <Text style={styles.value}>{item.reservationDescription}</Text>

      {item.reservationStatus ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'green' }]}
            onPress={() => AcceptRes(item)}
          >
            <Text style={styles.buttonText}>Kabul Et</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'red' }]}
            onPress={() => RejectRes(item)}
          >
            <Text style={styles.buttonText}>Reddet</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={{ color:'black' , textAlign: 'center', marginTop: 10 }}>
          {item.isAccept ? 'Kabul Edildi' : 'Reddedildi'}
        </Text>
      ) }

    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reservation Details</Text>

      <FlatList
        data={reservationData}
        keyExtractor={(item) => item.reservationId.toString()}
        renderItem={renderReservationItem}
      />
    </View>
  );
};

export default BusinessHome;
