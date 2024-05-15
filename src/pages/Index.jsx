import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to Cat Facts</Heading>
        <Text fontSize="lg">Explore various facts about cats, their breeds, and more!</Text>
      </VStack>
    </Container>
  );
};

export default Index;