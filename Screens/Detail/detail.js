import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import Button from "../../Components/Button";
import styles from "./detail.style";

const BusinessDetailScreen = ({ route, navigation}) => {
  const {businessItem,cusUserName} = route.params;

console.log(cusUserName);

  function ReservationAct() {
    navigation.navigate("ReservationAct",{businessData:businessItem, cusUserName:cusUserName})
  }


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri:"http://mcelebi44-001-site1.btempurl.com/"+businessItem.businessImage }} style={styles.businessImage} />
      <View style={styles.businessInfo}>
        <Text style={styles.businessName}>{businessItem.businessName}</Text>
        <View style={styles.separator} />
        <Text style={styles.businessDescription}>{businessItem.businessDescription}</Text>
        <View style={styles.separator} />
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Minimum Ücret: {businessItem.businessMinPrice}₺</Text>
          <Text style={styles.priceText}>Maksimum Ücret: {businessItem.businessMaxPrice}₺</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.additionalInfo}>Telefon Numarası: {businessItem.businessPhoneNumber}</Text>
        <View style={styles.separator} />
        <Text style={styles.additionalInfo}>Adres: {businessItem.businessAdress}</Text>
        <View style={styles.ButtonT}>
        <Button title="Rezervasyon Yap" onPress={ReservationAct}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default BusinessDetailScreen;
