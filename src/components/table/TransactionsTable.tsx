import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { ITransaction } from "../../types/transactions/Transaction";
import TransactionItem from "./item/TransactionItem";
import { TransactionsTableContainer } from "./TransactionsTable.styles";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const TransactionsTable = () => {
  const { transactions, page, itemsOnPage } = useSelector(
    (state: AppState) => state.transactions
  );

  const displayedTransactions = transactions.slice(
    page * itemsOnPage,
    (page + 1) * itemsOnPage
  );

  return (
    <TransactionsTableContainer>
      <TableHead>
        <TableRow>
          <TableCell>Accout uuid</TableCell>
          <TableCell>Organization uuid</TableCell>
          <TableCell>Currency</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Temporary</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Money In</TableCell>
          <TableCell>Day</TableCell>
          <TableCell>Total Amount</TableCell>
          <TableCell>Total Amount in use</TableCell>
          <TableCell>Bank</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {displayedTransactions.map((tr, ind) => (
          <TransactionItem key={tr.account_uuid + ind} transaction={tr} index={ind} />
        ))}
      </TableBody>
    </TransactionsTableContainer>
  );
};

export default TransactionsTable;
