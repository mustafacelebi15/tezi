import { StyleSheet, Platform } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: COLORS.primary,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    reservationItem: {
      backgroundColor: '#fff',
      padding: 15,
      marginBottom: 15,
      borderRadius: 20,
      borderWidth: 3,
      borderColor: 'black',
      alignItems: 'center', 
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    value: {
      marginBottom: 10,
    },
    description: {
      fontStyle: 'italic',
    },
    istek:{
       color:'black', 
       textAlign: 'center', 
       marginTop: 10,
  
    },
    button: {
        borderWidth: 1,
        backgroundColor:'black',
        borderColor: 'black',
        borderRadius: 20,
        marginTop:10,
        paddingHorizontal: 15,
        paddingVertical: 8,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
  });

  export default styles;