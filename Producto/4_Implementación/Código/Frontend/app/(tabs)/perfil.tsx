import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Background from '@/components/BackgroundScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function ProfileScreen() {

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        router.push('/');
    };
    return (
        <Background>
                <View className="flex-1 items-center justify-center">

                    <View className="p-6 grow shrink basis-0  ">

                        <TouchableOpacity
                            onPress={handleLogout}
                        >
                            <Text className="text-xl font-bold">Cerrar sesion</Text>
                        </TouchableOpacity>

                    </View>
                </View>
        </Background>
    );
}