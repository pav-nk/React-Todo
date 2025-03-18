import { Provider } from "../ui/provider";
import { Theme, Container } from "@chakra-ui/react";
import "./App.css";

import SearchPanel from "../SearchPanel";
import AppHeader from "../AppHeader";

function App() {
  return (
    <Provider>
      <Theme p="4" appearance="dark" colorPalette="green" height="100vh">
        <Container maxW="xl" px="2" paddingTop="5">
          <AppHeader />
          <SearchPanel />
        </Container>
      </Theme>
    </Provider>
  );
}

export default App;
