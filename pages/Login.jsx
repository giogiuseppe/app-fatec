import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  email: yup.string().email('E-mail inválido').required('Informe seu e-mail'),
  password: yup.string().min(8, 'Mínimo de 8 digitos').required('Informe sua senha'),
})

import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSingIn(data) {
    console.log(data);
  }

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Controller
        control={control}
        name='name'
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            style={styles.input}
            placeholder='Usuário'
            onChangeText={onChange}
            placeholderTextColor={'#fff'}
          />
        )}
      />
      {errors.name && <Text style={styles.labelError}>{errors.name?.message}</Text>}

      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            style={styles.input}
            placeholder='E-mail'
            onChangeText={onChange}
            placeholderTextColor={'#fff'}
          />
        )}
      />
      {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onBlur={onBlur}
              placeholder='Senha'
              style={styles.input}
              secureTextEntry={true}
              onChangeText={onChange}
              placeholderTextColor={'#fff'}
            />
          )}
        />
        {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

      
      <TouchableOpacity style={styles.btn} onPress={handleSubmit(handleSingIn)}>
        <Text style={{ color: '#fff' }}>ACESSAR</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity>
          <Text style={styles.recuperarConta} onPress={() => navigation.navigate('AccountRecovery')}>Recuperar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.criarConta} onPress={() => navigation.navigate('Register')}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

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
  },
  labelError: {
    marginLeft: 62,
    color: '#ff375b',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  recuperarConta: {
    color: '#fff',
    top: 10,
    left: 85,
  },
  criarConta: {
    color: '#fff',
    top: -10,
    left: -85,
  },
});