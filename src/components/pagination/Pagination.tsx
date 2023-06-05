import React, { Dispatch, SetStateAction } from "react";
import { PaginationContainer, PaginationItem } from "./Pagination.styles";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { usePagination } from "./usePagination";

const Pagination = () => {
  const { page, totalPages } = useSelector(
    (state: AppState) => state.transactions
  );
  const { changePage } = usePagination();

  return (
    <PaginationContainer>
      {Array(totalPages)
        .fill("")
        .map((item, index) => (
          <PaginationItem
            key={index}
            className={index === page ? "active" : ""}
            onClick={() => changePage(index)}
          >
            <Typography> {index + 1}</Typography>
          </PaginationItem>
        ))}
    </PaginationContainer>
  );
};

export default Pagination;
