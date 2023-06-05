import axios, { AxiosResponse } from "axios";
import { ITransaction } from "../types/transactions/Transaction";

export const fetchTransactions = async () => {
  const res: AxiosResponse<ITransaction[]> = await axios.get(
    "transactions.json"
  );

  return res.data;
};
