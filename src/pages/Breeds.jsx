import { useState, useEffect } from "react";
import { Container, Heading, Select, VStack, Text } from "@chakra-ui/react";

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch(`https://catfact.ninja/breeds?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => setBreeds(data.data))
      .catch((error) => console.error("Error fetching breeds:", error));
  }, [limit]);

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={4}>Cat Breeds</Heading>
      <Select mb={4} value={limit} onChange={(e) => setLimit(e.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </Select>
      <VStack spacing={4}>
        {breeds.map((breed) => (
          <Text key={breed.breed}>{breed.breed}</Text>
        ))}
      </VStack>
    </Container>
  );
};

export default Breeds;