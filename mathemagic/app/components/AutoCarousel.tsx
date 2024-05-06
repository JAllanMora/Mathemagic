import { Box, Text, Image, Heading, ChakraProps } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
type Card = {
  title: string;
  text: string;
  image: string;
};

type AutoCarouselProps = {
  rootProps?: ChakraProps;
  cards: Card[];
};

export const AutoCarousel: React.FC<AutoCarouselProps> = ({
  rootProps,
  cards,
}) => {
  return (
    <Box {...rootProps}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/react-responsive-carousel@3.2.23/lib/styles/carousel.min.css"
      />
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        swipeable={true}
        showIndicators={true}
        showArrows={false}
        stopOnHover={true}
      >
        {cards.map((card) => (
          <Box key={card.title}>
            <Image
              src={card.image}
              boxSize={{
                base: "200px",
                sm: "250px",
                md: "300px",
                lg: "700px",
              }}
              objectFit="cover"
            />
            <Box
              position={"absolute"}
              bottom={{ base: "5px", lg: "10px" }}
              left={{ base: 0, lg: "10%" }}
              top={{ base: "5px", lg: "10px" }}
              margin={"auto 0"}
              borderRadius="10px"
              color={"white"}
              textAlign="center"
              width={{ base: "full", lg: "30%" }}
              padding={{ base: 2, md: 10 }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={{ base: 0, lg: 5 }}
            >
              <Heading size={"lg"}>{card.title}</Heading>
              <Text fontSize={"md"}>{card.text}</Text>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
