import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ //Aqui vai conter toda a "personalização" do formulário
    formContext:{
        width:"100%", // Width -> Largura 
        height:"100%", // Height -> Altura
        bottom:0, 
        backgroundColor:"#ffffff", // Os números ou letras acompanhados de "#" vão indicar a cor de acordo com a tabela hexadecimal de cor
        alignItems: "center", // Centraliza os itens
        borderTopLeftRadius:30, // Essa função arredonda as bordas (Left - Esquerda) e (Right - Direita)
        borderTopRightRadius:30,
        marginTop:30, // Espaço que tem em relação ao topo
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding: 10, // Define a distancia entre os elementos
    },
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20, // Define a distancia mas dessa vez para uma direção, esquerda

    },
    input:{
        width:"90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    textButtonCalculator:{
        fontSize: 20, // Define o tamanho da fonte do botão de calcular
        color:"#ffffff",
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center", // Alinha, centraliza
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#010469",
        paddingTop: 14, // Distancia -> topo
        paddingBottom: 14, // Distancia -> botão
        marginLeft: 12,
        marginTop: 30,
    }
});

export default styles
