import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    businessImage: {
      width: "100%",
      height: 200,
      resizeMode: "cover",
      borderWidth: 2, // Sınır genişliği
      borderColor: "black", // Sınır rengi
    },
    businessInfo: {
      padding: 16,
    },
    businessName: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    businessDescription: {
      fontSize: 16,
      fontWeight: '400',
      marginBottom: 16,
    },
    priceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    priceText: {
      fontSize: 16,
      fontWeight:'bold',
    },
    additionalInfo: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    separator: {
      borderBottomWidth: 1,
      borderBottomColor: "#dddddd",
      marginVertical: 8,
    },
    ButtonT:{
      marginTop:20,
    }
  });