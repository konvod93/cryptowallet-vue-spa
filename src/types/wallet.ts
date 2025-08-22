import type { Currency } from "./currency";
import type { Transaction } from "./transaction";

export interface Wallet {
    balance: number,
    currency: Currency,
    transactions: Transaction[]
}