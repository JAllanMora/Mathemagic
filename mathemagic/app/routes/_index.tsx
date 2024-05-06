import { Hero } from "~/components/Hero";
import { HERO_CONTENT_IMG } from "~/constants/constants";
import GeneralLayout from "~/layouts/GeneralLayout";
import { AutoCarousel } from "~/components/AutoCarousel";
import { Box, Spacer } from "@chakra-ui/react";

export default function Index() {
  return (
    <GeneralLayout>
      <AutoCarousel
        rootProps={{
          mt: { base: "113px", lg: "0" },
        }}
        cards={[
          {
            title: "TituloPrimeImagen",
            text: "TextoPrimeImagen",
            image: "./playa3.jpg",
          },
          {
            title: "TituloSegundaImage",
            text: "TextoSegundaImagen",
            image: "./playa4.jpg",
          },
          {
            title: "TituloTerceraImagen",
            text: "TextoTerceraImagen",
            image: "./playa5.jpg",
          },
        ]}
      />
      <Box paddingBottom={"400px"}></Box>

      <Hero
        title={HERO_CONTENT_IMG.title}
        descripcion={HERO_CONTENT_IMG.descripcion}
        image={HERO_CONTENT_IMG.image}
      ></Hero>
    </GeneralLayout>
  );
}
