import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import products from 'lib/mock-data/products.json';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  // Filter products based on search query
  const filteredProducts = searchValue
    ? products.products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : products.products;

  const resultsText = filteredProducts.length > 1 ? 'results' : 'result';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold mb-4">Search Products</h1> */}
      {searchValue && (
        <p className="mb-4">
          {filteredProducts.length === 0
            ? 'There are no products that match '
            : `Showing ${filteredProducts.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-13">
        <ProductGridItems products={filteredProducts} />
      </div>
    </div>
  );
}
