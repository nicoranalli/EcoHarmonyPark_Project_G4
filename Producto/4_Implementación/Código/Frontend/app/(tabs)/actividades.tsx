import { SafeAreaView, Text, View } from 'react-native';
import Background from '@/components/BackgroundScreen';

export default function actividadesScreen() {
    return (
        <Background>
            <SafeAreaView className='flex-1 '>

                <View className="flex-1 items-center justify-center">

                    <View className="p-6 grow shrink basis-0  ">

                        <Text className="text-xl font-bold">Bienvenido a la pantalla Actividades 🎉</Text>

                    </View>
                </View>
            </SafeAreaView>
        </Background>
    );
}