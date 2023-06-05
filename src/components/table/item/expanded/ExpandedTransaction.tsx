import React from "react";
import { ITransaction } from "../../../../types/transactions/Transaction";
import { Box, Checkbox, Stack, Typography } from "@mui/material";
import { ExpandedTransactionContainer } from "./ExpandedTransaction.styles";
import { useDispatch } from "react-redux";
import { setIsTemporary } from "../../../../redux/transactions/transactionsSlice";
import { useExpandedTransaction } from "./useExpandedTransaction";

type TProps = {
  transaction: ITransaction;
  index: number;
};

const ExpandedTransaction = ({ transaction, index }: TProps) => {
  const { toggleIsTemporarty } = useExpandedTransaction(transaction, index);

  return (
    <ExpandedTransactionContainer>
      <Typography variant="h4">{transaction.bank}</Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>Is Temporary</Typography>
        <Checkbox
          value={transaction.is_temporary}
          onChange={toggleIsTemporarty}
        />
      </Box>
    </ExpandedTransactionContainer>
  );
};

export default ExpandedTransaction;
