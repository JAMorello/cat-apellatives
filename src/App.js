import Header from "./components/Header";
import AppBody from "./components/AppBody";
import { VStack } from "@chakra-ui/react";

const App = () => {
  return (
    <VStack>
      <Header />
      <AppBody />
    </VStack>
  );
};

export default App;
