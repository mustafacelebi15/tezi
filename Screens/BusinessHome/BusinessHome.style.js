import { StyleSheet} from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: COLORS.secondary,
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
      borderRadius: 8,
      borderWidth: 3,
      borderColor: COLORS.primary, // Border rengi
      alignItems: 'center', // Kart içeriğini yatayda ortala
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
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
  });

  export default styles;