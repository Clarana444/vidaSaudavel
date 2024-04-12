import React from "react";
import { View, Text } from "react-native";
import styles from "./style"

// Essa função vai mostrar o titulo inicial e principal do app
export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>App - Vida Saudável</Text>
        </View>
    );
}