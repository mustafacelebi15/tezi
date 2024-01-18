import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.primary,
      paddingVertical: 16,
    },
    businessItemContainer: {
      backgroundColor: "white",
      borderRadius: 8,
      margin: 16,
      padding: 16,
      flexDirection: "row",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    businessImage: {
      width: 100,
      height: 100,
      borderRadius: 8,
      marginRight: 16,
      borderWidth: 2,
      borderColor: "black",
    },
    businessInfo: {
      flex: 1,
      flexDirection: "column",
    },
    textContainer: {
      marginBottom: 8,
    },
    businessName: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 8,
    },
    businessDescription: {
      fontSize: 16,
      color: "#666",
    },
    priceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderTopWidth: 1,
      borderColor: "black", 
      paddingTop: 8,
      marginTop: 8,
    },
    priceText: {
      fontSize: 16,
      fontWeight: "bold",
      color: COLORS.secondary,
    },
    pickerContainer: {
      backgroundColor: "white",
      borderRadius: 8,
      margin: 16,
      padding: 16,
    },
    headerButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 10,
    },
    headerButton: {
      backgroundColor: COLORS.primary,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 8,
      marginLeft: 10,
    },
    headerButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });