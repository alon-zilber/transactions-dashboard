import React from "react";
import { useDashboard } from "./useDashboard";
import Table from "../table/TransactionsTable";
import Pagination from "../pagination/Pagination";
import { Box, CircularProgress } from "@mui/material";
import { LoaderContainer } from "./Dashboard.styles";

const Dashboard = () => {
  const { isLoading } = useDashboard();

  if (isLoading)
    return (
      <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>
    );

  return (
    <div>
      <Table />
      <Pagination />
    </div>
  );
};

export default Dashboard;
