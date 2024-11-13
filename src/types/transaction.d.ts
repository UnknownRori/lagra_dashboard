import type { Item } from "./item";
import type { Displayuser } from "./display_user";

export interface Transaction {
  uuid: string;
  pay: string;
  payType: string;
  displayuser: Displayuser;
}

export interface DetailTransaction {
  uuid: string;
  pay: string;
  payType: string;
  displayuser: Displayuser;
  transactionItem: TransactionItem[];
}

export interface TransactionItem {
  uuid: string;
  total: string;
  item: Item;
}
