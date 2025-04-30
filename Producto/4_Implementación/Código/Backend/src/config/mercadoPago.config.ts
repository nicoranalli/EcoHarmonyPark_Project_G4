import { MercadoPagoConfig } from 'mercadopago';


export const client  = new MercadoPagoConfig({
  accessToken: "APP_USR-6172325612969491-041314-86ea476354c148e27aa611d23c0dae89-2385837839",
});



export interface CreatePreferenceResponse {
  id: string;
  init_point: string;
  sandbox_init_point: string;
}