import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";

type CardProps = {
  image: string;
  title: string;
  Descripcion: string;
  price: string;
  priceDesc?: string;
  onAddClickHandler: (type: string) => void;
  loading?: boolean;
  stock?: number;
  to: string;
  libraryLink?: React.ElementType;
  colorScheme: string;
  colorPrice: string;
  textColorButton: string;
};
export const Card: React.FC<CardProps> = ({
  image,
  title,
  Descripcion,
  price,
  priceDesc,
  onAddClickHandler,
  loading,
  stock,
  to,
  libraryLink,
  colorScheme,
  colorPrice,
  textColorButton,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edit-product/${to}`);
  };
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={{ base: 1, md: 2, lg: 6 }}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        onClick={handleClick}
        cursor="pointer"
      >
        <Link to={`/productos/${to}`} as={libraryLink}>
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={{ base: 150, md: 170, lg: 175 }}
              width={{ base: 170, md: 185, lg: 190 }}
              objectFit={"cover"}
              src={image}
              alt={title}
              draggable="false"
              margin="0 auto"
              fallback={<Skeleton />}
            />
          </Box>
        </Link>
        <Stack pt={5} align={"center"} textAlign={"center"}>
          <Heading
            fontSize={"md"}
            fontFamily={"body"}
            h={"50px"}
            w={"220px"}
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            lineHeight={"0.9"}
            overflow="hidden"
          >
            {title}
          </Heading>
          <Text
            w={"220px"}
            h={"20px"}
            color={"gray.500"}
            fontSize={"sm"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            textTransform={"uppercase"}
          >
            {Descripcion}
          </Text>
          {priceDesc ? (
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"} color={colorPrice}>
                {priceDesc}
              </Text>
              <Text
                fontSize={"sm"}
                textDecoration={"line-through"}
                color={"red.200"}
              >
                {price}
              </Text>
            </Stack>
          ) : (
            <Text fontWeight={800} fontSize={"xl"} color={colorPrice}>
              {price}
            </Text>
          )}
        </Stack>
        <Stack align="center" p="10px">
          <Button
            bg={colorScheme}
            color={textColorButton}
            _hover={{
              bg: colorScheme,
            }}
            width="full"
            onClick={() => onAddClickHandler("add")}
            isLoading={loading}
            loadingText="Agregando..."
            spinnerPlacement="end"
            isDisabled={Number(stock) < 1}
          >
            {Number(stock) === 0
              ? "Producto no disponible"
              : "Agregar al carrito"}
          </Button>
          <Button
            color={colorScheme}
            variant="link"
            isLoading={loading}
            loadingText="Agregando..."
            spinnerPlacement="end"
            onClick={() => onAddClickHandler("buy")}
            textDecoration="underline"
            isDisabled={Number(stock) < 1}
          >
            Comprar ahora
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};
