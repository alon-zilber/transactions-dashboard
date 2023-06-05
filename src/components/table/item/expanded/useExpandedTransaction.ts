import { useDispatch } from "react-redux";
import { ITransaction } from "../../../../types/transactions/Transaction";
import { setIsTemporary } from "../../../../redux/transactions/transactionsSlice";

export const useExpandedTransaction = (
  transaction: ITransaction,
  index: number
) => {
  const dispatch = useDispatch();

  const toggleIsTemporarty = (newValue: boolean) => {
    dispatch(setIsTemporary({ index, value: !transaction.is_temporary }));
  };

  return { toggleIsTemporarty };
};
