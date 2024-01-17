import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import COLORS from "../../constants/colors";
import styles from "./anasayfa.style";

const apiUrl = 'http://mcelebi44-001-site1.btempurl.com/Business/getall';

const BusinessListScreen = ({route, navigation}) => {
  const [businessData, setBusinessData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Varsayılan olarak "Tüm Kategoriler"

  const categories = [{id: 1, name:'Halı Saha'},
  {id:2, name: 'Düğün Salonu'},
  {id:3, name: 'Berber'},
  {id:4, name: 'Restoran'},
  {id:5, name: 'Psikolog Ofisi'},
  {id:6, name: 'İnternet Cafe'}, 
  {id:7, name: 'Güzellik Salonu'}];

  const{userName}= route.params;
  console.log(userName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setBusinessData(response.data.data);
      } catch (error) {
        console.error("Veri getirme hatası:", error.message);
      }
    };

    fetchData();
  }, []);

  const filteredBusinessData = selectedCategory
    ? businessData.filter(item => item.categoryId === selectedCategory)
    : businessData;

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetail(item)}>
    <View style={styles.businessItemContainer}>
      <Image source={{ uri:"http://mcelebi44-001-site1.btempurl.com/"+item.businessImage }} style={styles.businessImage} />
      <View style={styles.businessInfo}>
        <View style={styles.textContainer}>
          <Text style={styles.businessName}>{item.businessName}</Text>
          <Text style={styles.businessDescription}>{item.businessShortDescription}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Min: {item.businessMinPrice}₺</Text>
          <Text style={styles.priceText}>Max: {item.businessMaxPrice}₺</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  const navigateToDetail = (item) => {
    navigation.navigate('Detail', {businessItem:item, cusUserName:userName});
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="Tüm Kategoriler" value={null} />
          {categories.map((category, index) => (
            <Picker.Item key={category.id} label={category.name} value={category.id}/>
          ))}
        </Picker>
      </View>
      <FlatList
        data={filteredBusinessData}
        keyExtractor={(item) => item.businessId.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};



export default BusinessListScreen;
