import { Container, CssBaseline } from "@mui/material";
import Dashboard from "./components/dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Dashboard />
      </Container>
      <CssBaseline />
    </Provider>
  );
}

export default App;
