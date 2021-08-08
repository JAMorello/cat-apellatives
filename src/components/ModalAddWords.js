import { useState } from "react";
import {
  VStack,
  HStack,
  Text,
  Button,
  Badge,
  Input,
  InputGroup,
  InputLeftAddon,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalAddWords = ({ isOpen, onClose, setPalabra1, setPalabra2 }) => {
  const toast = useToast();

  const checkWords = () => {
    const format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]+/;
    const check1 =
      (addPalabra1.trim() !== "" && addPalabra1.trim().length < 3) ||
      format.test(addPalabra1);
    const check2 =
      (addPalabra2.trim() !== "" && addPalabra2.trim().length < 3) ||
      format.test(addPalabra2);

    if (check1 || check2) {
      toast({
        title: "Error",
        description:
          "Las palabra a añadir debe tener 3 o más caracteres y no incluir símbolos inválidos",
        status: "error",
        variant: "solid",
        duration: 4000,
        isClosable: true,
      });
      return false;
    } else return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkWords()) {
      if (addPalabra1.trim() !== "") setPalabra1(addPalabra1);
      if (addPalabra2.trim() !== "") setPalabra2(addPalabra2);
    }
    return;
  };

  const [addPalabra1, setAddPalabra1] = useState("");
  const [addPalabra2, setAddPalabra2] = useState("");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar palabras</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Text>Los apelativos siguen la siguente estructura:</Text>
              <HStack
                border="1px"
                borderColor="gray.300"
                borderRadius="lg"
                p={2}
              >
                <Text>"</Text>
                <Badge colorScheme="purple">palabra 1</Badge>
                <Text> con </Text>
                <Badge colorScheme="purple">palabra 2</Badge>
                <Text>"</Text>
              </HStack>
              <Text>Puedes agregar una o dos palabras</Text>

              <form onSubmit={handleSubmit}>
                <InputGroup>
                  <InputLeftAddon children="Palabra 1" />
                  <Input
                    type="text"
                    value={addPalabra1}
                    onChange={(e) => setAddPalabra1(e.target.value)}
                  />
                </InputGroup>
                <InputGroup mt={2}>
                  <InputLeftAddon children="Palabra 2" />
                  <Input
                    type="text"
                    value={addPalabra2}
                    onChange={(e) => setAddPalabra2(e.target.value)}
                  />
                </InputGroup>
              </form>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" type="submit" mr={3}>
              Añadir
            </Button>
            <Button colorScheme="gray" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAddWords;
