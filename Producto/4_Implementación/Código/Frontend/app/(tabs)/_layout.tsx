import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { TabBar } from '@/components/TabBar';


export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen name="tickets"


                options={{
                    title: 'Tickets',
                    
                    headerStyle: { backgroundColor: '#65a30d' },


                    tabBarIcon: ({ color }) => <Entypo name="ticket" size={28} color={color} />,
                }} />
            <Tabs.Screen name="actividades"

                options={{
                    title: 'Actividades',
                    headerStyle: { backgroundColor: '#65a30d' },
                    tabBarIcon: ({ color }) => <Feather name="list" size={28} color={color} />,
                }} />
            <Tabs.Screen name="perfil"
                options={{
                    title: 'Perfil',

                    headerStyle: { backgroundColor: '#65a30d' },

                    tabBarIcon: ({ color }) => <AntDesign name="user" size={28} color={color} />,
                }} />

        </Tabs>
    );
}