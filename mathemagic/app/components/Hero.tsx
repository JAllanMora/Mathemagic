import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

type HeroProps = {
  title: string;
  descripcion: string;
  image: string;
};
export const Hero: React.FC<HeroProps> = ({ title, descripcion, image }) => {
  return (
    <Box bg="gray.800" as="section" minH="500px" position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Heading size="4xl" fontWeight="extrabold" fontSize="6xl">
            {title}
          </Heading>
          <Text fontSize={{ md: "4xl" }} mt="4" maxW="lg">
            {descripcion}
          </Text>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src={image}
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  );
};
