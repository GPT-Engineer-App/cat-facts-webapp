import { Box, Flex, Link, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">Cat Facts</Heading>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/breeds" px={2}>
            Breeds
          </Link>
          <Link as={RouterLink} to="/random-fact" px={2}>
            Random Fact
          </Link>
          <Link as={RouterLink} to="/facts" px={2}>
            Facts
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;