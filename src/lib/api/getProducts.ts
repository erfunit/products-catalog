import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"
      }/api/products`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json() || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
