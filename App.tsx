import { StatusBar } from 'expo-status-bar';
import {  View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularAgua = () => {
    const pesoNumerico = parseFloat(peso);
    if (!nome || isNaN(pesoNumerico) || pesoNumerico <= 0) {
      setResultado('Por favor, insira um nome e um peso válido.');
      return;
    }

    const litros = (pesoNumerico * 0.035).toFixed(2);
    setResultado(`${nome}, Você deve beber aproximadamente ${litros} litros de água por dia.`);
  };


   return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.title}>Calculadora de Consumo de Água</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Button title="Calcular Consumo de Água" onPress={calcularAgua} />

      {resultado ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{resultado}</Text>
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0D47A1',
  },
  input: {
    width: '50%',
    borderColor: '#90CAF9',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#BBDEFB',
    borderRadius: 10,
  },
  resultText: {
    fontSize: 18,
    color: '#0D47A1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
