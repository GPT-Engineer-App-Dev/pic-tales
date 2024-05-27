import { Box, Container, Flex, Grid, GridItem, Heading, IconButton, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";

const photos = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">PhotoShare</Heading>
        <Flex>
          <Link href="#" p={2}>
            <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
          </Link>
          <Link href="#" p={2}>
            <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" color="white" />
          </Link>
          <Link href="#" p={2}>
            <IconButton aria-label="Upload" icon={<FaUpload />} variant="ghost" color="white" />
          </Link>
        </Flex>
      </Flex>

      <Box as="main" p={4}>
        <Heading size="lg" mb={4}>Feed</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={4}>
          {photos.map((src, index) => (
            <GridItem key={index}>
              <Image src={src} alt={`Photo ${index + 1}`} boxSize="150px" objectFit="cover" />
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box as="footer" p={4} bg="gray.100" textAlign="center">
        <Text>&copy; 2023 PhotoShare. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;