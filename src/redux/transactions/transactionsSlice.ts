import { createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "../../types/transactions/Transaction";

interface IInitialState {
  page: number;
  transactions: ITransaction[];
  itemsOnPage: number;
  totalPages: number;
}

const initialState: IInitialState = {
  page: 0,
  transactions: [],
  itemsOnPage: 10,
  totalPages: 0,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setPage: (state, { payload }: { payload: number }) => {
      state.page = payload;
    },
    setTransactions: (state, { payload }) => {
      state.transactions = payload;
      state.totalPages = Math.ceil(payload.length / state.itemsOnPage);
    },
    setIsTemporary: (state, { payload }) => {
      state.transactions[payload.index].is_temporary = payload.value;
    },
    setNumItemsOnPage: (state, {payload}) => {
        state.itemsOnPage = payload
    }
  },
});

export const { setPage, setTransactions, setIsTemporary } = transactionsSlice.actions;

export default transactionsSlice.reducer;
