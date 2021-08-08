import Header from "./components/Header";
import AppBody from "./components/AppBody";
import { VStack } from "@chakra-ui/react";

const App = () => {
  return (
    <VStack bgColor="#FFF5F7" w="100vw" h="100vh">
      <Header />
      <AppBody />
    </VStack>
  );
};

export default App;
