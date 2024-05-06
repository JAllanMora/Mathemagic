import { SimpleGrid } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";

import { Card } from "~/components/Card";

import GeneralLayout from "~/layouts/GeneralLayout";
import { getAllProducts } from "~/models/bigcommerce";

export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  type: string;
  inventory_level: number;
  brand_id: number;
  image_url: string;
  description?: any;
}

export const loader = async () => {
  const products = await getAllProducts();
  return products;
};
export default function Index() {
  const products = useLoaderData<Product[]>();
  const defaultImageUrl = "https://wincaja.s3.amazonaws.com/ImageProduct.png";
  return (
    <GeneralLayout>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        gap={{ base: "8", lg: "10" }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image_url || defaultImageUrl}
            title={product.name}
            Descripcion={`SKU: ${product.sku} - Type: ${product.type}`}
            price={`$${product.price.toFixed(2)}`}
            stock={product.inventory_level}
            to={product.id.toString()}
            colorScheme="teal"
            colorPrice="green.400"
            textColorButton="white"
            onAddClickHandler={function (type: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </SimpleGrid>
    </GeneralLayout>
  );
}
