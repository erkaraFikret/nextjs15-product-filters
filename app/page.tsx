import ProductCard from "@/components/ProductCard";
import getProducts from "../server/product";

export default async function Home() {
  const products = getProducts();
  return (
    <main className="flex flex-col justify-center gap-10 max-w-6xl mx-auto ">
      <h1>Awoseme Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {(await products).map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </main>
  );
}
