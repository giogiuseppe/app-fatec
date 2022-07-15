import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function AccountRecovery() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <StatusBar style="auto" />

            <Text style={styles.textRecuperarConta}>Perdeu sua Conta?</Text>

            <Text style={styles.subTextRecuperarConta}>Um link para redefinir sua senha será enviado para o e-mail cadastrado em sua conta.</Text>

            <TextInput
                style={styles.input}
                placeholder='Insira seu E-mail'
                placeholderTextColor={'#fff'}
            />

            <TouchableOpacity style={styles.btn}>
                <Text style={{ color: '#fff' }}>ENVIAR</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191d3a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRecuperarConta: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        bottom: 70,
    },
    subTextRecuperarConta: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        width: 330,
        bottom: 35,
    },
    input: {
        height: 40,
        padding: 7,
        width: '70%',
        color: '#fff',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        borderColor: '#fff',
    },
    btn: {
        height: 40,
        width: '70%',
        color: '#fff',
        borderRadius: 4,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e2a4a',
        top: 30,
    },
});