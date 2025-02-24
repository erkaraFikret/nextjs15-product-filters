import ProductCard from "@/components/ProductCard";
import getProducts from "@/server/product";
import ProductFilter from "@/components/ProductFilter";
import { loadSearchParams } from "@/app/SearchParams";
import type { SearchParams } from "nuqs/server";

type PageProps = {
  searchParams: Promise<SearchParams>;
};
export default async function Home({ searchParams }: PageProps) {
  const { search, perPage } = await loadSearchParams(searchParams);
  const products = await getProducts({
    search,
    perPage,
  });
  return (
    <main className="flex flex-col justify-center gap-10 max-w-6xl mx-auto ">
      <h1>Awoseme Products</h1>
      <ProductFilter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
