import React, {useEffect, useState} from "react";
import { Text, SafeAreaView, View, TextInput, Alert, TouchableOpacity,Image, ScrollView} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from "./BusRegister.style";
import Button from "../../Components/Button";
import UploadsComponent from "../../Components/UploadsComponents";

    

   

const BusRegister = ({route, navigation}) => {
 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [BusinessName, setBusinessName] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState(null);
  const [Adress, setAdress] = useState(null);
  const [Description, setDescription] = useState(null);
  const [SDescription, setSDescription] = useState(null);
  const [MinPrice, setMinPrice] = useState(0);
  const [MaxPrice, setMaxPrice] = useState(0) 
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchData = async () =>{
      try{
        const categoriesResponse = await axios.get('http://mcelebi44-001-site1.btempurl.com/Category/getall');
        console.log
        setCategories(categoriesResponse.data.data);
      }
      catch(error){
        console.error('Veri getirme hatası:', error.message);
      }
    };
    fetchData();
  }, []);

  function handleSubmit() {
    if(!PhoneNumber || !Adress || !Description || !profileImage){
Alert.alert('Bilgiler boş bırakılamaz');
return;
    }
  const apiUrl = 'http://mcelebi44-001-site1.btempurl.com/Business/add';
  const BusinessData = {
    categoryId: parseInt(selectedCategory, 10),
    userName: route.params.businessData.userName,
    businessName: BusinessName,
    businessPhoneNumber: PhoneNumber,
    businessAdress: Adress,
    businessImage: profileImage,
    businessMinPrice: MinPrice,
    businessMaxPrice: MaxPrice,
    businessShortDescription: SDescription,
    businessDescription: Description,   
  };
  axios.post(apiUrl, BusinessData)
    .then(response => {
      console.log('Registration successful:');
      console.log(selectedCategory);
      navigation.navigate('Login');
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
    
      launchImageLibrary(options, async (response) => {
        if (response.assets && response.assets.length > 0) {
          const fileUri = response.assets[0].uri;
          const fileName = "Images/" + fileUri.split('/').pop();
          console.log(response);
          setSelectedImage(response);
          console.log(selectedImage);
    

          await uploadImage();
        }
      });
    
    
    const uploadImage = async () => {
    
      console.log("Merhaba");
    
      const formData = new FormData();
      formData.append('file', {
        uri: selectedImage.assets[0].uri,
        type: selectedImage.assets[0].type,
        name: selectedImage.assets[0].fileName,
      });
    
      try {
        const response = await axios.post('https://yavuz45-001-site1.htempurl.com/api/Upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        console.log('Image uploaded successfully:', response.data);
        setProfileImage(response.data.dbPath);
        
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  };
    


    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
        <SafeAreaView>
        <View style={styles.contentContainer}>
        <Text style={styles.title}>Merhaba {route.params.businessData.firstName}</Text>
        <TextInput style={styles.input} placeholder=" İşletme Adını giriniz" value={BusinessName} onChangeText={(text) => setBusinessName(text)} />
        <TextInput style={styles.input} placeholder="İşletme numarası giriniz" value={PhoneNumber} onChangeText={(text) => setPhoneNumber(text)} />
        <TextInput style={styles.input} placeholder="İşletme adresi giriniz" value={Adress} onChangeText={(text) => setAdress(text)} /> 
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryLabel}>Kategori Seçin:</Text>
            <Picker
    style={styles.picker}
    selectedValue={selectedCategory}
    onValueChange={(itemValue) => setSelectedCategory(itemValue)}
  >
    <Picker.Item label="Seçiniz" value={null} />
    {categories.map((category, index) => (
      <Picker.Item key={category.categoryId} label={category.categoryName} value={category.categoryId} />
    ))}
  </Picker>
 
          </View>
        <TextInput style={styles.input} placeholder="İşletmenizi kısaca açıklayınız." value={SDescription} onChangeText={(text) => setSDescription(text)} />
        <TextInput style={styles.input} placeholder="Minimum Ücret." value={MinPrice} onChangeText={(text) => setMinPrice(text)} />
        <TextInput style={styles.input} placeholder="Maksimum Ücret." value={MaxPrice} onChangeText={(text) => setMaxPrice(text)} />
        <TextInput style={styles.input} placeholder="İşletme Açıklaması." value={Description} onChangeText={(text) => setDescription(text)} />      
        <View style={styles.ButtonContainer}>
        {profileImage && (
  <Image source={{ uri: "http://mcelebi44-001-site1.btempurl.com/"+profileImage }} style={styles.profileImage} />
)}    
        <TouchableOpacity style={styles.button} onPress={handleImagePick}>
              <Text style={styles.buttonText}>Profil Resmi Seçiniz</Text>
    </TouchableOpacity>
          <Button title="Kaydol" onPress={handleSubmit}/>
        </View>
        </View>
        </SafeAreaView>
        </View>
        </ScrollView>
    )
}

export default BusRegister;