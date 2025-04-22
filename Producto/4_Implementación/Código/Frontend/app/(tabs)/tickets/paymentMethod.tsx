import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Background from '@/components/BackgroundScreen';
import { useTicket } from '@/context/ticketContext';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '@/constants/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const paymentMethods = [
  { label: 'Efectivo', value: 'efectivo' },
  { label: 'Mercado Pago', value: 'tarjeta' },
]

export default function PaymentMethodFormScreen() {

  const { tickets, date, total } = useTicket();

  const [method, setMethod] = useState('efectivo');

  const ticketCount = tickets.length;
  const handlePressConfirm = () => {
    if (method == 'efectivo') {
      router.replace(`./paymentResult?method=cash&ticketCount=${ticketCount}`);
    }
    else {
      router.replace(`./checkout?amount=${total}`);
    }
  }

  const renderItem = (item: { label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; value: string; }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === method}
      </View>
    );
  };


  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator >
        <View className="p-6 grow shrink basis-0  ">

          <Text className="text-3xl font-bold text-center mb-4">
            Selecciona el metodo de pago
          </Text>

    <View className="mb-4">
    <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={paymentMethods}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Selecciona un metodo de pago"
            value={method}
            onChange={item => {
              setMethod(item.value);
            }}
            renderLeftIcon={() => (
              (
                method == 'efectivo' ? (
                  <MaterialCommunityIcons name="cash" size={20} color={colors.primary} />
                ) : (
                  <FontAwesome6 name="handshake-angle" size={16} color={colors.dark}/>)
              )            )}
            renderItem={renderItem}
          />

          <Text className="text-gray-500 text-center mt-2">Total a pagar: <Text className="text-primary font-bold">${total}</Text></Text>
          <Text className="text-gray-500 text-center mt-2">Cantidad de entradas: <Text className="text-primary font-bold">{ticketCount}</Text></Text>
          <Text className="text-gray-500 text-center mt-2">Fecha de visita: <Text className="text-primary font-bold">{date.toLocaleDateString()}</Text></Text>

    </View>
          
          <TouchableOpacity
            onPress={handlePressConfirm}
            className="bg-primary p-5 rounded-2xl items-center shadow-md">
            <Text className='text-white font-bold text-2xl '>Confirmar compra</Text>

          </TouchableOpacity>


        </View>
      </ScrollView>
    </Background >
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});