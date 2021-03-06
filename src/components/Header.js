import { VStack, Heading, Divider, Icon } from "@chakra-ui/react";
import { GiCat } from "react-icons/gi";

const Header = () => {
  return (
    <VStack p={2}>
      <Heading fontSize={{ base: "3xl", md: "4xl" }}>
        <Icon as={GiCat} color="gray.500" /> Apelativos Gatunos
      </Heading>
      <Divider />
    </VStack>
  );
};

export default Header;
