import { useState } from "react";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

    //Constantes
    const[altura, setAltura] = useState(null) //Inserir altura
    const[peso, setPeso] = useState(null) //Inserir peso
    const[messageImc, setMessageImc] = useState("Preencha a altura e o peso!") //Vai INSERIR (set) o valor
    const[imc, setImc] = useState(null)
    const[textButton, setTextButton] = useState("Calcular") //Botão "calcular"

    //Função que realiza um calculo IMC recebendo um peso e uma altura
    function imcCalculator(){
        return setImc((peso/(altura*altura)).toFixed(2))
    }

    //Função que valida o IMC 
    function validationImc(){
        if(peso != null && altura != null){
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual a: ") 
            setTextButton("Calcular novamente") 
            return
        }
        setImc(null)
        setMessageImc("Preencha a altura e o peso")
        setTextButton("Calcular")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput //Essa função vai mostrar o valor do IMC (o INPUT vai receber od dados fornecidos pelo usuário)
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex.: 1.75"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex.: 75.365"
                    keyboardType="numeric"
                />
               
               <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => {
                validationImc()
                }}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc = {imc}/>      
        </View>
    );
}