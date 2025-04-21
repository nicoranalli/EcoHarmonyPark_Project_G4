import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { TabBar } from '@/components/TabBar';
import colors from '@/constants/colors';


export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen name="tickets"


                options={{
                    title: 'Tickets',

                    headerStyle: { backgroundColor: '#65a30d' },

                    tabBarLabelStyle: { fontSize: 12 }, // 🔥 cambia el color del texto

                    // el color lo manejás con tabBarActive/InactiveTintColor
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.secondary,

                    tabBarIcon: ({ focused, size }) => <Entypo name="ticket" size={focused ? 30 : 28} color={focused ? colors.primary : colors.secondary}/>,
                }} />
            <Tabs.Screen name="actividades"

                options={{
                    title: 'Actividades',
                    headerStyle: { backgroundColor: '#65a30d' },
                    // el texto del tabbar (abajo)
                    tabBarLabelStyle: { fontSize: 12 }, // 🔥 cambia el color del texto

                    // el color lo manejás con tabBarActive/InactiveTintColor
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.secondary,
                
                    tabBarIcon: ({ focused, size }) => <Feather name="list" size={focused ? 30 : 28} color={focused ? colors.primary : colors.secondary}/>,
                }} />
            <Tabs.Screen
                name="perfil"
                options={{
                    title: 'Perfil',
                    headerStyle: { backgroundColor: '#65a30d' },

                    // el texto del tabbar (abajo)
                    tabBarLabelStyle: { fontSize: 12 }, // 🔥 cambia el color del texto

                    // el color lo manejás con tabBarActive/InactiveTintColor
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.secondary,
                

                    // el ícono cambia de color según si está enfocado
                    tabBarIcon: ({ focused, size }) => (
                        <AntDesign
                            name="user"
                            size={focused ? 30 : 28}
                            color={focused ? colors.primary : colors.secondary} // 🔥 cambia el color del icono'}
                        />
                    ),
                }}
            />


        </Tabs>
    );
}


