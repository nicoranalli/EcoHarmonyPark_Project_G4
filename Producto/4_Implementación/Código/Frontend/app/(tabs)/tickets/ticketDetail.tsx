import Background from "@/components/BackgroundScreen";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function TicketDetailScreen() {

    useEffect(() => {
        const fetchTicketDetails = async () => {
            
        };

        fetchTicketDetails();

    },
        []);
    return (
        <Background>
            <Text className="text-3xl font-bold text-center mb-4">
                Detalle del ticket
            </Text>
    
        </Background>
    )
}