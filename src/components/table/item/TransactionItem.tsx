import React, { useState } from "react";
import { ITransaction } from "../../../types/transactions/Transaction";
import { Checkbox, Drawer, TableCell, TableRow } from "@mui/material";
import ExpandedTransaction from "./expanded/ExpandedTransaction";

type TProps = {
  transaction: ITransaction;
  index: number;
};

const TransactionItem = ({ transaction, index }: TProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <TableRow onClick={() => setExpanded(!expanded)}>
        <TableCell>{transaction.account_uuid}</TableCell>
        <TableCell>{transaction.organization_uuid}</TableCell>
        <TableCell>{transaction.currency}</TableCell>
        <TableCell>{transaction.status}</TableCell>
        <TableCell>
          <Checkbox checked={transaction.is_temporary} />
        </TableCell>
        <TableCell>{transaction.type}</TableCell>
        <TableCell>
          <Checkbox checked={transaction.is_money_in} />
        </TableCell>
        <TableCell>{transaction.day}</TableCell>
        <TableCell>{transaction.amount}</TableCell>
        <TableCell>{transaction.amount_in_usd}</TableCell>
        <TableCell>{transaction.bank}</TableCell>
      </TableRow>
      <Drawer open={expanded} anchor="right" onClose={() => setExpanded(false)}>
        <ExpandedTransaction transaction={transaction} index={index} />
      </Drawer>
    </>
  );
};

export default TransactionItem;
