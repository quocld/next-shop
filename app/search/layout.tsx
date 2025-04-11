import Footer from "components/layout/footer";
import Search from "components/layout/navbar/search";
import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import { sorting } from "lib/constants";
import { Suspense } from "react";
import ChildrenWrapper from "./children-wrapper";
export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto max-w-(--breakpoint-2xl)">
        <div className="flex w-full items-center justify-center w-full md:my-6 p-4">
          <Search />
        </div>
        <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
          <div className="order-first w-full flex flex-col gap-4 md:max-w-[125px]">
            <Collections />
            <FilterList list={sorting} title="Sort by" />
          </div>
          <div className="order-last min-h-screen w-full md:order-none">
            <Suspense fallback={null}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
