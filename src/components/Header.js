import { HStack, Heading, Divider } from "@chakra-ui/react";
import { GiCat } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <HStack>
        <GiCat />
        <Heading>Apelativos Gatunos</Heading>
      </HStack>
      <Divider />
    </>
  );
};

export default Header;
