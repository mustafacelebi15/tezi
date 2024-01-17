import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";


export default StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor: COLORS.primary,
    },
    title: {
        fontSize:40,
        color: "white",
        fontWeight:"800",
        marginBottom: 16,
    },
    contentContainer:{
        padding:16,
        marginTop:20,
    },
    input:{
        backgroundColor: "white",
        fontSize: 15,
        marginTop: 16,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 7,
    },
    ButtonContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 20,
            },
            button: {
                alignItems:"center",
                paddingVertical: 15,
                paddingHorizontal: 15,
              },
              buttonText: {
                color: 'white',
                fontSize: 17,
                fontWeight:'bold',
                textDecorationLine: 'underline',
              },
              showPasswordButtonText:{
                color: 'white',
                fontSize:15,
                textDecorationLine:'underline'
              },
              gizle:{
                paddingTop:3,
                paddingLeft: 140,
              },
              profileImage: {
                width: 100,
                height: 100,
                borderRadius: 50,
                marginVertical: 10,
              },
              

})