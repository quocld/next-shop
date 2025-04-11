import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import CartModal from "components/cart/modal";
import { getMenu } from "lib/shopify";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import { SearchSkeleton } from "./search";
// const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="relative flex items-center justify-between md:p-4 lg:px-6">
      <div className="flex items-center justify-start w-full">
        <div className="flex md:w-1/3 items-center">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
          <Suspense fallback={<SearchSkeleton />}>
            <Link href="/search">
              <MagnifyingGlassIcon className="h-4 md:h-5" />
            </Link>
          </Suspense>
        </div>
        <div className="flex justify-center flex-1 md:w-1/3">
          <Link href="/">
            <h1 className="text-4xl font-carattere tracking-wider text-gray-900 dark:text-white [font-family:var(--font-carattere)]">Seraphine Jewelry</h1>
          </Link>
        </div>
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
