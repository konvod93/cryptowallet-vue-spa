import type { Currency } from "./currency";

export interface Wallet {
    balance: number,
    currency: Currency
}