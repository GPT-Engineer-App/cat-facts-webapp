import { useState, useEffect } from "react";
import { Container, Heading, Input, VStack, Text } from "@chakra-ui/react";

const RandomFact = () => {
  const [fact, setFact] = useState("");
  const [maxLength, setMaxLength] = useState(140);

  useEffect(() => {
    fetch(`https://catfact.ninja/fact?max_length=${maxLength}`)
      .then((response) => response.json())
      .then((data) => setFact(data.fact))
      .catch((error) => console.error("Error fetching random fact:", error));
  }, [maxLength]);

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={4}>Random Cat Fact</Heading>
      <Input
        mb={4}
        type="number"
        value={maxLength}
        onChange={(e) => setMaxLength(e.target.value)}
        placeholder="Max Length"
      />
      <VStack spacing={4}>
        <Text>{fact}</Text>
      </VStack>
    </Container>
  );
};

export default RandomFact;