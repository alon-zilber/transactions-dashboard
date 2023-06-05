import { useEffect, useState } from "react";
import { fetchTransactions } from "../../services/transactionsService";
import { useDispatch, useSelector } from "react-redux";
import { setTransactions } from "../../redux/transactions/transactionsSlice";
import { AppState } from "../../redux/store";

export const useDashboard = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { transactions } = useSelector((state: AppState) => state.transactions);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchTransactions();
      dispatch(setTransactions(data));
      setIsLoading(false);
    };

    const storedLocally = JSON.parse(localStorage.getItem("transactions"));
    if (storedLocally?.length) {
      dispatch(setTransactions(storedLocally));
    } else {
      void fetchData();
    }
  }, []);

  useEffect(() => {
    if (transactions?.length) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

  return { isLoading };
};
