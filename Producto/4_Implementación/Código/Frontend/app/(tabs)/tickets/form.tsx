import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useTicket } from '../../../context/ticketContext';
import { router } from 'expo-router';
import Background from '@/components/BackgroundScreen';

export default function BookingForm() {
  const { tickets, setTickets, date, setDate, total, setTotal } = useTicket();

  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const [ticketCount, setTicketCount] = useState(1);

  useEffect(() => {
    if (ticketCount > 0) {
      setTickets([
        {
          age: '',
          type: 'Regular',
          esJubilado: false,
          amount: calculateTicketPrice({ age: '', type: 'Regular', esJubilado: false }),
        },
      ]);
    }
  }, []);

  const calculateTicketPrice = (ticket: { age: string, type: string, esJubilado: boolean }) => {
    const basePrice = ticket.type === 'VIP' ? 10000 : 6000;
    const age = parseInt(ticket.age);
    const hasDiscount = ticket.esJubilado || (!isNaN(age) && age < 12);
    const amount = hasDiscount ? basePrice / 2 : basePrice;
    return amount
  };
  useEffect(() => {
    const totalCalculado = tickets.reduce(
      (total, ticket) => total + calculateTicketPrice(ticket),
      0
    );
    setTotal(totalCalculado);
  }, [tickets]);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      // Verificar si el día es martes (1) o jueves (3)
      // Los días en JS: 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
      const dayOfWeek = selectedDate.getDay();
      
      if (dayOfWeek === 2 || dayOfWeek === 4) { // Martes (2) o Jueves (4)
        alert('No se permiten reservas los días martes y jueves');
        return;
      }
      
      setDate(selectedDate);
    }
  };

  const updateTicketCount = (increment: boolean) => {
    const newCount = increment
      ? Math.min(ticketCount + 1, 10)
      : Math.max(ticketCount - 1, 1);

    setTicketCount(newCount);

    // Actualizar el array de tickets
    if (increment && newCount > tickets.length) {
      setTickets([...tickets, {
        age: '',
        type: 'Regular',
        esJubilado: false,
        amount: calculateTicketPrice({ age: '', type: 'Regular', esJubilado: false })
      }]);    } else if (!increment && newCount < tickets.length) {
      setTickets(tickets.slice(0, -1));
    }
  };

  const updateTicketAge = (index: number, age: string) => {
    const newTickets = [...tickets];
    // Solo actualizar la edad si no es jubilado
    if (!newTickets[index].esJubilado) {
      newTickets[index] = { ...newTickets[index], age };
      setTickets(newTickets);
    }
  }; const toggleTicketType = (index: number) => {
    const newTickets = [...tickets];
    newTickets[index] = {
      ...newTickets[index],
      type: newTickets[index].type === 'Regular' ? 'VIP' : 'Regular'
    };
    setTickets(newTickets);
  };

  const toggleRetired = (index: number) => {
    const newTickets = [...tickets];
    newTickets[index] = {
      ...newTickets[index],
      esJubilado: !newTickets[index].esJubilado,
      age: newTickets[index].esJubilado ? '' : '65'
    };
    setTickets(newTickets);
  };

  const handleSubmit = () => {
    // Validar que todas las edades estén ingresadas
    if (date.getDay() === 2 || date.getDay() === 4) {
      alert('No se permiten reservas los días martes y jueves');
      return;
    }

    const allAgesEntered = tickets.every(ticket => ticket.age !== '');
    if (!allAgesEntered) {
      alert('Por favor, completa todas las edades de las entradas.');
      return;
    }

    router.push('./paymentMethod')
  };


  return (
    <Background>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Reserva de Entradas</Text>

        {/* Selector de Fecha */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fecha de Visita</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateButtonText}>
              {date.toLocaleDateString()}
            </Text>
            <MaterialIcons name="date-range" size={24} color={colors.dark} />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display='default'
              minimumDate={new Date()}
              maximumDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}
              onChange={handleDateChange}
            />
          )}
        </View>

        {/* Selector de Cantidad de Entradas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cantidad de Entradas</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => updateTicketCount(false)}
            >
              <MaterialIcons name="remove" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.counterText}>{ticketCount}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => updateTicketCount(true)}
            >
              <MaterialIcons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Detalles de cada entrada */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detalles de Entradas</Text>
          {tickets.map((ticket, index) => (<View key={index} style={styles.ticketDetail}>
            <Text style={styles.ticketNumber}>Entrada {index + 1}</Text>
            <View style={styles.ticketContent}>
              <View style={styles.ticketInputRow}>
                <TextInput
                  style={[
                    styles.ageInput,
                    ticket.esJubilado && styles.disabledInput
                  ]}
                  placeholder="Edad"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  value={ticket.age}
                  onChangeText={(text) => updateTicketAge(index, text)}
                  editable={!ticket.esJubilado}
                />
                <TouchableOpacity
                  style={[
                    styles.typeButton,
                    { backgroundColor: ticket.type === 'VIP' ? '#FFD700' : colors.hunter }
                  ]}
                  onPress={() => toggleTicketType(index)}
                >
                  <Text style={styles.typeButtonText}>{ticket.type}</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.retiredRow}
                onPress={() => toggleRetired(index)}
              >
                <View style={[
                  styles.checkbox,
                  ticket.esJubilado && styles.checkboxChecked
                ]}>
                  {ticket.esJubilado && (
                    <MaterialIcons name="check" size={16} color="white" />
                  )}
                </View>
                <Text style={styles.checkboxLabel}>Soy jubilado</Text>
              </TouchableOpacity>

              <Text style={styles.priceText}>
                Precio: ${calculateTicketPrice(ticket).toLocaleString()}
              </Text>
            </View>
          </View>
          ))}
        </View>
        <View style={styles.totalSection}>
          <Text style={styles.totalText}>Total: ${total.toLocaleString()}</Text>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </Background>

  );
}

const styles = StyleSheet.create({
  // ... (estilos existentes)
  disabledInput: {
    backgroundColor: '#f0f0f0',
    color: '#666',
  },
  retiredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.secondary,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  priceText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.secondary,
    marginTop: 8,
  },
  ticketContent: {
    gap: 4,
  },
  totalSection: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 16,
    marginTop: 16,
    marginBottom: 32,
    shadowColor: colors.dark,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 16,
  },
  scrollView: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.dark,
  },
  section: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: colors.ligther,
    borderRadius: 20,
  },
  dateButtonText: {
    fontSize: 16,
    color: colors.dark,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButton: {
    backgroundColor: colors.dark,
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  ticketDetail: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: colors.ligther,
    borderRadius: 15,
  },
  ticketNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  ticketInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  ageInput: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  typeButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: colors.secondary,
  },
  typeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});