import { Meta, Links, Scripts, LiveReload } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Img,
  LightMode,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import { Testimonial } from "./Testimonial";
import { testimonials } from "~/models/data";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Image } from "@chakra-ui/react";

export default function Index() {
  return (
    <>
      <Box bg="gray.800" as="section" minH="140px" position="relative">
        <Box py="32" position="relative" zIndex={1} bgImage="/fondo1.jpg">
          <Box
            maxW={{ base: "xl", md: "7xl" }}
            mx="auto"
            px={{ base: "6", md: "8" }}
            color="white"
          >
            <Box maxW="xl">
              <Heading as="h1" size="3xl" fontWeight="extrabold">
                MATHEMAGIC
              </Heading>
              <Text fontSize={{ md: "2xl" }} mt="4" maxW="lg">
                Desbloquea tu potencial con la magia de las matemáticas.
              </Text>
              <Stack
                direction={{ base: "column", md: "row" }}
                mt="10"
                spacing="4"
              >
                <Button
                  as="a"
                  href="#"
                  colorScheme="blue"
                  px="8"
                  rounded="full"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                >
                  Registrate
                  <HiChevronRight />
                </Button>
                <Button
                  as="a"
                  href="#"
                  colorScheme="blue"
                  px="8"
                  rounded="full"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                >
                  Despues
                  <HiChevronRight />
                </Button>
              </Stack>
            </Box>
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
              src="/fondo1.jpg"
              alt="Imagen Principal"
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
      <Box as="section" py={{ base: "16", md: "24" }}>
        <Container>
          <Stack direction={{ base: "column", md: "row" }} spacing="16">
            {testimonials.map((testimonial, id) => (
              <Testimonial key={id} {...testimonial} />
            ))}
          </Stack>
        </Container>
      </Box>
      <Box
        as="section"
        bg="gray.800"
        py="12"
        position="relative"
        h={{ base: "560px", md: "640px" }}
        bgImage="/fondo2.jpg"
        bgSize="cover"
        bgPosition="center"
        _after={{
          content: `""`,
          display: "block",
          w: "full",
          h: "full",
          bg: "blackAlpha.700",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          h="full"
          zIndex={1}
          position="relative"
        >
          <Center
            flexDirection="column"
            textAlign="center"
            color="white"
            h="full"
          >
            <Heading size="2xl" fontWeight="extrabold">
              MATHEMAGICT TEAM
            </Heading>
            <Text fontSize="lg" fontWeight="medium" mt="3">
              No se que poner aqui pero esto ayudara a que las personas puedan
              inscribirce y quieram contactar
            </Text>
            <LightMode>
              <Button
                colorScheme="blue"
                size="xl"
                mt="6"
                fontWeight="bold"
                fontSize="md"
              >
                Become a Seller
              </Button>
            </LightMode>
          </Center>
        </Box>
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          zIndex={2}
          w="full"
          bottom="0"
          py="4"
          bg="blackAlpha.400"
        >
          <Box maxW={{ base: "xl", md: "7xl" }} mx="auto">
            <SimpleGrid columns={{ base: 1, md: 3 }}>
              <Box textAlign="center" color="white">
                <Text>A Gig is won every</Text>
                <Text fontSize="3xl">10 MIN</Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Transactions</Text>
                <Text fontSize="3xl">6.4M+</Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Price Range</Text>
                <Text fontSize="3xl">$5k - $12K</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box as="footer" role="contentinfo" bgColor={"black"}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            <ButtonGroup variant="tertiary">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin color="red.500" fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub color="red.500" fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter color="red.500" fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="red">
            &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
            reserved.
          </Text>
        </Stack>
      </Box>
    </>
  );
}
