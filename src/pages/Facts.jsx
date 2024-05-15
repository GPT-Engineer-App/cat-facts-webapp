import { useState, useEffect } from "react";
import { Container, Heading, Select, Input, VStack, Text } from "@chakra-ui/react";

const Facts = () => {
  const [facts, setFacts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [maxLength, setMaxLength] = useState(140);

  useEffect(() => {
    fetch(`https://catfact.ninja/facts?limit=${limit}&max_length=${maxLength}`)
      .then((response) => response.json())
      .then((data) => setFacts(data.data))
      .catch((error) => console.error("Error fetching facts:", error));
  }, [limit, maxLength]);

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={4}>Cat Facts</Heading>
      <Select mb={4} value={limit} onChange={(e) => setLimit(e.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </Select>
      <Input
        mb={4}
        type="number"
        value={maxLength}
        onChange={(e) => setMaxLength(e.target.value)}
        placeholder="Max Length"
      />
      <VStack spacing={4}>
        {facts.map((fact, index) => (
          <Text key={index}>{fact.fact}</Text>
        ))}
      </VStack>
    </Container>
  );
};

export default Facts;