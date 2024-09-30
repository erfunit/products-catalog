export async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
