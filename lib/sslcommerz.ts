import { SslCommerzPayment } from "sslcommerz";

const storeId = process.env.SSL_STORE_ID;
const storePassword = process.env.SSL_SECRET_KEY;
const live = true;

export const sslcommerz = new SslCommerzPayment(storeId, storePassword, live);
