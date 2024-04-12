import { StyleSheet } from "react-native";
import ResultImc from ".";

// Função responsavel pela estilização do resultado do IMC (cor, tamanho[...])
const styles = StyleSheet.create({
    resultImc:{
        flex: 1,
        marginTop: 15,
        marginTop: 60,  
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    information:{
        fontSize: 18,
        color: "#010469",
        fontWeight: "bold",
    },
    numberImc: {
        fontSize: 48,
        color: "#010469",
        fontWeight: "bold",
    }
});

export default styles 