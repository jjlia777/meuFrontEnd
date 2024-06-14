import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

export function Home() {

    const [qtde, defineQtde] = useState(6)

    return (
        <View style={ESTILO.container}>
            <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
            <Text  style={ESTILO.caracteres}>
                {qtde} Caracteres
            </Text>
            <View style={ESTILO.area}>
                <Slider style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    minimumTrackTintColor="#E0B313"
                    maximumTrackTintColor="#000"
                    thumbTintColor="#392de9"
                    value={qtde}
                    onValueChange={(value) => defineQtde(value.toFixed(0))}
                />
            </View>
            <TouchableOpacity style={ESTILO.button}>
                <Text style={ESTILO.buttonText}>
                    Gerar ID
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C2C0A6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 60,
        width: '250px',
        height: '250px',
    },
    area: {
        marginBottom: 14,
        marginTop: 14,
        width: '80%',
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8
    },
    button: {
        backgroundColor: "#6A8C69",
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFF"
    },
})