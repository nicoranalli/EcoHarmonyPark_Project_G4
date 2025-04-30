import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import colors from '../constants/colors'


export default function Background({ children, loading = false }: {
    children?: React.ReactNode
    , loading?: boolean
},) {
    return (
        
        <View style={styles.container}>
            <LinearGradient
                colors={[colors.ligther, '#f7fee7', '#ffffff']}
                style={styles.gradient}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
            />
            {loading ? (
                <ActivityIndicator className=' flex-1 items-center justify-center' size="large" color="#3f6212" />
            ) : (
                <SafeAreaView style={{ flex: 1 }}>
                {children}

                </SafeAreaView>
            )}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});