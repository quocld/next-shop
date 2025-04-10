import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/mock-data/products';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.id} className="animate-fadeIn list-none">
        <Link
          className="relative inline-block h-full w-full"
          href={`/product/${product.id}`}
          prefetch={true}
        >
          <GridTileImage
            alt={product.title}
            label={{
              title: product.title,
              amount: '200',
              currencyCode: 'USD',
            }}
            src={product.image}
            fill
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </Link>
      </Grid.Item>
      ))}
    </>
  );
}
