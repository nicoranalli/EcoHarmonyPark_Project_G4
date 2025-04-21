import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface MercadoPagoRedirectScreenProps {
    onContinuar: () => void; // Tipo de la prop
  }
export default function MercadoPagoRedirectScreen({onContinuar}: MercadoPagoRedirectScreenProps) {
    return (
        <>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="handshake" size={40} color="#009EE3" />
                </View>

                <Text style={styles.title}>
                    Seras redirigido a Mercado Pago
                </Text>

                <Text style={styles.description}>
                    Pago para completar el{'\n'}pago con tarjeta de crédito
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => { router.back() }}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonC} className='mt-4' onPress={() => { onContinuar() }}>
                    <Text style={styles.buttonTextC}>Continuar</Text>
                </TouchableOpacity>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#E6F5FA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 4,
    }, buttonText: {
        color: '#90A955',
        fontSize: 16,
        fontWeight: '500',
    },
    buttonC: {
        backgroundColor: '#90A955',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 4,
    }, buttonTextC: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    }
});
