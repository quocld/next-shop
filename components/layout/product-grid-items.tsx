import Grid from "components/grid";
import { GridTileImage } from "components/grid/tile";
import Label from "components/label";
import { Product } from "lib/shopify/types";
import Link from "next/link";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => {
        console.log(product)
        return (
          <Grid.Item key={product.handle} className="animate-fadeIn relative">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            <GridTileImage
              // alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode,
              }}
              // src={product.featuredImage?.url}
              images={product.images}
              // fill
              // sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>

          <div className="absolute top-0 right-0 bg-[#E6B2BA] text-[#AC1754] px-3 py-1 m-2 text-sm">SALE</div>

          <div className="w-full">
            {product.title ? (
              <Label
                title={product.title}
                amount={product.priceRange.maxVariantPrice.amount}
                currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              />
            ) : null}
          </div>
        </Grid.Item>
        )
      })}
    </>
  );
}
