import { useState, useEffect } from "react";
import {
  VStack,
  HStack,
  Center,
  Text,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import ModalAddWords from "./ModalAddWords";

const AppBody = () => {
  const words = {
    palabra1: [
      "Bola",
      "Empanada",
      "Canelón",
      "Raviol",
      "Tanque",
      "Surtidor",
      "Wrap",
      "Alfajor",
      "Sánguche",
      "Tortilla",
      "Sachet",
      "Muffin",
      "Medialuna",
      "Tetra Brik",
    ],
    palabra2: [
      "orejas",
      "ojos",
      "patas",
      "hocico",
      "bigotes",
      "pestañas",
      "orejas giratorias",
      "cola",
      "alarma de todo está bien",
      "problemas psiquiátricos",
      "uñas",
      "lengua rasposa",
      "pellejos estrujables",
    ],
  };

  const [apodo, setApodo] = useState("Aquí aparecerá el apodo aleatorio");

  const [palabra1, setPalabra1] = useState(
    () => JSON.parse(localStorage.getItem("palabra1")) || words["palabra1"]
  );

  const [palabra2, setPalabra2] = useState(
    () => JSON.parse(localStorage.getItem("palabra2")) || words["palabra2"]
  );

  useEffect(() => {
    localStorage.setItem("palabra1", JSON.stringify(palabra1));
  }, [palabra1]);

  useEffect(() => {
    localStorage.setItem("palabra2", JSON.stringify(palabra2));
  }, [palabra2]);

  const handleShowRandomApellative = () => {
    let yapa = "";
    if (Math.random() * 100 > 80) yapa = "de caca ";
    const index1 = Math.floor(Math.random() * palabra1.length);
    const index2 = Math.floor(Math.random() * palabra2.length);
    const newApodo = `${palabra1[index1]} ${yapa}con ${palabra2[index2]}`;
    if (newApodo !== apodo) {
      setApodo(newApodo);
    } else handleShowRandomApellative();
  };

  const toast = useToast();

  const notRepeated = (word) => {
    if (palabra1.includes(word) || palabra2.includes(word)) {
      toast({
        title: "Atención",
        description: "Las palabra ya está incluida en la app",
        status: "warning",
        variant: "solid",
        duration: 4000,
        isClosable: true,
      });
      return false;
    }
    return true;
  };

  // For Modal use
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddToList = (word, list) => {
    if (list === "1") setPalabra1([...palabra1, word]);
    if (list === "2") setPalabra2([...palabra2, word]);
  };

  return (
    <VStack>
      <Center
        w="100%"
        bgColor="gray.50"
        border="2px"
        borderColor="gray.500"
        borderRadius="lg"
        mb={2}
        p={2}
      >
        <Text size="2xl" fontWeight="bold">
          {apodo}
        </Text>
      </Center>
      <HStack>
        <Button
          colorScheme="pink"
          color="white"
          onClick={handleShowRandomApellative}
        >
          Apodo random!
        </Button>
        <Button colorScheme="yellow" onClick={onOpen}>
          Añadir palabras
        </Button>
      </HStack>
      <ModalAddWords
        isOpen={isOpen}
        onClose={onClose}
        notRepeated={notRepeated}
        handleAddToList={handleAddToList}
      />
    </VStack>
  );
};

export default AppBody;
