import { VStack, Heading, Divider, Icon } from "@chakra-ui/react";
import { GiCat } from "react-icons/gi";

const Header = () => {
  return (
    <VStack p={2}>
      <Heading size="2xl">
        <Icon as={GiCat} size="2xl" color="gray.500" /> Apelativos Gatunos
      </Heading>
      <Divider />
    </VStack>
  );
};

export default Header;
