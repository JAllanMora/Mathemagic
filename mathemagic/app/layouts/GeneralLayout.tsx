import {
  Container,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { HStack, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { Link } from "@remix-run/react";
import { LINKS, FOOTER } from "~/constants/constants";
import { NavLink } from "~/components/NavLink";
import { FooterLogo } from "~/components/FooterLogo";
const links = LINKS;
const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.200", "gray.300");
  return (
    <>
      <Box
        bg={bgColor}
        sx={{
          backdropFilter: "blur(10px)",
        }}
        px={4}
        position="fixed"
        w="full"
        zIndex="banner"
      >
        <Flex
          maxW="container.xl"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx="auto"
          px={{ base: "4", md: "0" }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={"transparent"}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              maxW="200px"
              maxH="100px"
              mt="10px"
              src="./playa.jpg"
              alt="logo"
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color={"gray.600"}
            >
              {links.map((link) => (
                <NavLink key={link.name} href={link.route} libraryLink={Link}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle color mode"
            onClick={toggleColorMode}
            mx={2}
          />
        </Flex>

        {isOpen ? (
          <Stack as={"nav"} spacing={4} pb={4} display={{ md: "none" }}>
            {links.map((link) => (
              <NavLink key={link.name} href={link.route} libraryLink={Link}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        ) : null}
      </Box>
      <Container py="20" maxW="container.xl">
        {children}
      </Container>
      <FooterLogo
        descripcion={FOOTER.decripcion}
        image={FOOTER.image}
        linkFacebook={FOOTER.linkFacebook}
        linkLinkedin={FOOTER.linkLinkedin}
        linkWhatsapp={FOOTER.linkWhatsapp}
        bgColor={bgColor}
      />
    </>
  );
};
export default GeneralLayout;
