import BackgroundScreen from "@/components/BackgroundScreen";
import { getTickets } from "@/services/tickets/ticketsService";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import colors from "@/constants/colors";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Background from "@/components/BackgroundScreen";


interface Ticket {
  id: string;
  type: string;
  edad: number;
  esJubilado: boolean;
  amount: number;
}


interface Operation {
  idOperation: string;
  tickets: Ticket[];
  total: number;
  date: Date;
  userId: number;
  qrCode?: string;
  paymentMethod: string;
  usedOperation: boolean;
}

export default function TicketsHistoryScreen() {

  const [tickets, setTickets] = useState<Operation[] | null>(null);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const { errors, tickets } = await getTickets();
        setErrors(errors);
        setTickets(tickets);
      } catch (error) {
        setErrors("Error fetching tickets.");
      }
    };

    fetchTickets();
  }, []);

  const getPaymentIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'mercado pago':
        return <FontAwesome5 name="credit-card" size={20} color={colors.primary} />;
      case 'cash':
        return <MaterialCommunityIcons name="cash" size={24} color={colors.primary} />;
      default:
        return <MaterialCommunityIcons name="wallet" size={24} color={colors.primary} />;
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };


  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Historial de Compras</Text>
          <Text style={styles.subTitle}>
            {tickets?.length} {tickets?.length === 1 ? 'operación' : 'operaciones'} encontradas
          </Text>
        </View>

        <ScrollView style={styles.scrollView}>
          {tickets?.map((operation) => (
            <TouchableOpacity
              className="bg-ligther"
              key={operation.idOperation}
              style={[
                styles.card,
                operation.usedOperation && styles.usedOperation
              ]}
              onPress={() => {
                router.push(`./ticketDetail?idOperation=${operation.idOperation}`);
              }}
            >
              <View style={styles.cardHeader} >
                <View style={styles.operationIdContainer} >
                  <Text style={styles.operationId}>#{operation.idOperation}</Text>
                  {operation.usedOperation && (
                    <View style={styles.usedBadge}>
                      <Text style={styles.usedBadgeText}>Usado</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.date}>{formatDate(operation.date)}</Text>
              </View>

              <View style={styles.cardBody}>
                <View style={styles.paymentInfo}>
                  {getPaymentIcon(operation.paymentMethod)}
                  <Text style={styles.paymentMethod}>{operation.paymentMethod}</Text>
                </View>

                <View style={styles.ticketInfo}>
                  <Text style={styles.ticketCount}>
                    {operation.tickets.length} {operation.tickets.length === 1 ? 'ticket' : 'tickets'}
                  </Text>
                  <Text style={styles.total}>$ {operation.total}</Text>
                </View>
              </View>

              <View style={styles.cardFooter}>
                <TouchableOpacity
                  onPress={() => {
                    router.push(`./ticketDetail?idOperation=${operation.idOperation}`);
                  }}
                >
                  <Text style={styles.viewDetails} className="text-2xl text-primary font-bold">
                    Ver detalle
                    <Ionicons name="chevron-forward" size={16} color={colors.primary} />
                  </Text>
                </TouchableOpacity>

              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subTitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  scrollView: {
    padding: 16,
  },
  card: {
    backgroundColor: colors.ligther,
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  usedOperation: {
    backgroundColor: '#f8fafc',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  operationIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  operationId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  usedBadge: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  usedBadgeText: {
    fontSize: 12,
    color: '#4b5563',
  },
  date: {
    fontSize: 14,
    color: '#6b7280',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f3f4f6',
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  paymentMethod: {
    fontSize: 15,
    color: '#4b5563',
  },
  ticketInfo: {
    alignItems: 'flex-end',
  },
  ticketCount: {
    fontSize: 14,
    color: '#6b7280',
  },
  total: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  cardFooter: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  viewDetails: {
    fontSize: 14,
    color: '#6b7280',
  },
});