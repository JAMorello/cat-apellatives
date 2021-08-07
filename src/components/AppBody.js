import { useState, useEffect } from "react";
import { VStack, HStack, Text, Button } from "@chakra-ui/react";
// import ModalAddWords from "./ModalAddWords";

const AppBody = () => {
  const getStarterWords = (wordType) => {
    fetch("./utilities/randomWords.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data[wordType];
      });
  };

  const [apodo, setApodo] = useState("Aquí aparecerá el apodo aleatorio");

  const [palabra1, setPalabra1] = useState(
    () =>
      JSON.parse(localStorage.getItem("palabra1")) ||
      getStarterWords("palabra1")
  );

  const [palabra2, setPalabra2] = useState(
    () =>
      JSON.parse(localStorage.getItem("palabra2")) ||
      getStarterWords("palabra2")
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
    if (newApodo === apodo) {
      setApodo(newApodo);
    } else handleShowRandomApellative();
  };

  return (
    <VStack>
      <Text size="2xl" fontSize="md">
        {apodo}
      </Text>
      <HStack>
        <Button onClick={handleShowRandomApellative}>Apodo random!</Button>
        <Button>Añadir palabras</Button>
      </HStack>
      {/* <ModalAddWords /> */}
    </VStack>
  );
};

export default AppBody;
