import { useLoaderData, Form } from "@remix-run/react";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";

import { Product } from "./productos._index";
import { Container } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { getProductById, updateProduct } from "~/models/bigcommerce";
import GeneralLayout from "~/layouts/GeneralLayout";

export const loader: LoaderFunction = async ({ params }) => {
  console.log("Params received:", params);
  const productId = params.id;
  if (!productId) {
    throw new Error("Product ID is missing");
  }
  return getProductById(Number(productId));
};
export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const productData = {
    name: formData.get("name"),
    type: formData.get("type"),
    sku: formData.get("sku"),
    description: formData.get("description"),
    price: formData.get("price"),
    image_url: formData.get("image_url"),
  };

  try {
    await updateProduct(Number(params.id), productData);
    return redirect(`/edit-product/${params.id}?status=success`);
  } catch (error) {
    return redirect(`/edit-product/${params.id}?status=error`);
  }
};

export default function EditProduct() {
  const product = useLoaderData<Product>();
  return (
    <GeneralLayout>
      <Container maxW="container.md" mt={8}>
        <Form method="post">
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel htmlFor="name">Product Name</FormLabel>
              <Input id="name" name="name" defaultValue={product.name} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="type">Product Type</FormLabel>
              <Select id="type" name="type" defaultValue={product.type}>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="sku">SKU</FormLabel>
              <Input id="sku" name="sku" defaultValue={product.sku} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea id="description" name="description" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="image_url">Image URL</FormLabel>
              <Input
                id="image_url"
                name="image_url"
                defaultValue={product.image_url}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="price">Price</FormLabel>
              <NumberInput step={0.01} defaultValue={product.price}>
                <NumberInputField id="price" name="price" />
              </NumberInput>
            </FormControl>

            <Button colorScheme="blue" type="submit">
              Update Product
            </Button>
          </VStack>
        </Form>
      </Container>
    </GeneralLayout>
  );
}
