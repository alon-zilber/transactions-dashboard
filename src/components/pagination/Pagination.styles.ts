import { Box, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

export const PaginationContainer = styled(Box)`
  display: flex;
  justify-content: center;
  column-gap: 1rem;

  padding: 3rem 0;
`;

export const PaginationItem = styled(Box)`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: ${grey[600]};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &.active {
    background-color: ${grey[400]};
  }

  p {
    color: #fff;
  }
`;
