import axios from 'axios';
const API_PATH = process.env.BIGCOMMERCE_API_PATH;
const ACCESS_TOKEN = process.env.BIGCOMMERCE_ACCESS_TOKEN;

export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  type: string;
  inventory_level: number;
  brand_id: number;
  image_url: string;
  description?: string;
}

const bigCommerceClient = axios.create({
  baseURL: API_PATH,
  headers: {
    'X-Auth-Token': ACCESS_TOKEN,
    'Content-Type': 'application/json'
  }
});

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await bigCommerceClient.get<{ data: any[] }>('catalog/products?include=images');
    return response.data.data.map(product => {
      const mainImage = product.images.find((image: any) => image.is_thumbnail);
      return {
        id: product.id,
        name: product.name,
        sku: product.sku,
        price: product.price,
        type: product.type,
        inventory_level: product.inventory_level,
        brand_id: product.brand_id,
        image_url: mainImage ? mainImage.url_standard : '',
      };
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
export const getProductById = async (productId: number): Promise<Product> => {
  try {
    const response = await bigCommerceClient.get<{ data: any }>(`catalog/products/${productId}?include=images`);
    const product = response.data.data;
    const mainImage = product.images.find((image: any) => image.is_thumbnail);
    return {
      id: product.id,
      name: product.name,
      sku: product.sku,
      price: product.price,
      type: product.type,
      inventory_level: product.inventory_level,
      brand_id: product.brand_id,
      image_url: mainImage ? mainImage.url_standard : '',
      description: product.description
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const updateProduct = async (productId: number, productData: any): Promise<any> => {
  try {
    const response = await bigCommerceClient.put(`catalog/products/${productId}`, {
      ...productData,
      images: [
        {
          image_url: productData.image_url,
          is_thumbnail: true,
          sort_order: 1,
          description: 'Main product image'
        }
      ]
    });
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};