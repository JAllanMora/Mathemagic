import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

type FooterLogoProps = {
  descripcion: string;
  image: string;
  linkFacebook: string;
  linkLinkedin: string;
  linkWhatsapp: string;
  bgColor: string;
};
export const FooterLogo: React.FC<FooterLogoProps> = ({
  descripcion,
  image,
  linkFacebook,
  linkLinkedin,
  linkWhatsapp,
  bgColor,
}) => {
  return (
    <Box
      bg={bgColor}
      color="fg.accent.default"
      as="footer"
      role="contentinfo"
      py={{ base: "12", md: "16" }}
    >
      <Stack justify="space-between" direction="row" align="center" px="120px">
        <Image
          maxW="200px"
          maxH="100px"
          mt="10px"
          src={image}
          alt="Img Footer"
        />
        <ButtonGroup variant="tertiary.accent">
          <IconButton
            as="a"
            href={linkFacebook}
            fontSize="40px"
            aria-label="Facebook"
            icon={<FaFacebook color="blue.500" />}
          />
          <IconButton
            as="a"
            href={linkLinkedin}
            fontSize="40px"
            aria-label="Linkedin"
            icon={<FaLinkedin />}
          />
          <IconButton
            as="a"
            href={linkWhatsapp}
            fontSize="40px"
            aria-label="Whatsapp"
            icon={<FaWhatsapp />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.accent.subtle" px="120px" pt="10px">
        &copy; {new Date().getFullYear()} {descripcion}
      </Text>
    </Box>
  );
};
