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

const ModalAddWords = ({ isOpen, onClose, notRepeated, handleAddToList }) => {
  const [addPalabra1, setAddPalabra1] = useState("");
  const [addPalabra2, setAddPalabra2] = useState("");
  const toast = useToast();

  const validateWord = (word) => {
    const format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]+/;
    const isValid = word.trim().length >= 3 && !format.test(word);

    if (!isValid) {
      toast({
        title: "Error",
        description:
          "Las palabra a añadir debe tener 3 o más caracteres y no incluir símbolos inválidos",
        status: "error",
        variant: "solid",
        duration: 4000,
        isClosable: true,
      });
    }
    return isValid;
  };

  const standarize = (word, operation) => {
    if (operation === "1")
      return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
    if (operation === "2") return word.toLowerCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccessful1 =
      addPalabra1.trim() !== "" &&
      validateWord(addPalabra1) &&
      notRepeated(standarize(addPalabra1, "1"));

    const isSuccessful2 =
      addPalabra2.trim() !== "" &&
      validateWord(addPalabra2) &&
      notRepeated(standarize(addPalabra2, "2"));

    if (isSuccessful1 || isSuccessful2) {
      if (isSuccessful1) handleAddToList(standarize(addPalabra1, "1"), "1");
      if (isSuccessful2) handleAddToList(standarize(addPalabra2, "2"), "2");
      toast({
        title: "Éxito",
        description: "La(s) palabra(s) se han añadido correctamente",
        status: "success",
        variant: "solid",
        duration: 4000,
        isClosable: true,
      });
    }
    return;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar palabras</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Text>Los apelativos tienen la siguente estructura:</Text>
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

              <form>
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
            <Button colorScheme="yellow" onClick={handleSubmit} mr={3}>
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
