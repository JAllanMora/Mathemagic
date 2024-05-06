import { ActionFunction, json } from "@remix-run/node";
import { getAllProducts, updateProduct } from "~/models/bigcommerce";
import { verifyToken } from "~/utils/jwt";

export const action: ActionFunction = async ({ request }) => {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return json({ error: "Unauthorized" }, 401);
    }

    const token = authHeader.split(" ")[1];
    try {
        await verifyToken(token);
    } catch (error) {
        return json({ error: "Invalid token" }, 401);
    }

    const { method } = request;
    switch (method) {
        case "POST":
            try {
                const products = await getAllProducts();
                return json({ products }, 200);
            } catch (error) {
                console.error("Error fetching products:", error);
                return json({ error: "Internal Server Error" }, 500);
            }

        case "PUT":
            try {
                const productId = Number(new URL(request.url).searchParams.get("id"));
                const productData = await request.json();
                const updatedProduct = await updateProduct(productId, productData);
                return json({ product: updatedProduct }, 200);
            } catch (error) {
                console.error("Error updating product:", error);
                return json({ error: "Internal Server Error" }, 500);
            }

        default:
            return json({ error: "Method not allowed" }, 405);
    }
};