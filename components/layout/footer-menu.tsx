"use client";

import clsx from "clsx";
// import { Menu } from 'lib/shopify/types';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import footerMenu from "../../data/footer-menu.json";

interface MenuItem {
  label: string;
  href: string;
  icon?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface FooterMenuData {
  footerMenu: {
    customerService: MenuSection;
    aboutUs: MenuSection;
    payment: MenuSection;
    shipping: MenuSection;
    legal: MenuSection;
    social: MenuSection;
  };
}

export function FooterMenuItem({ item }: { item: MenuItem }) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.href);

  useEffect(() => {
    setActive(pathname === item.href);
  }, [pathname, item.href]);

  return (
    <li>
      <Link
        href={item.href}
        className={clsx(
          "block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300",
          {
            "text-black dark:text-neutral-300": active,
          }
        )}
      >
        {item.label}
      </Link>
    </li>
  );
}

export default function FooterMenu() {
  const { footerMenu: menu } = footerMenu as FooterMenuData;

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {menu.customerService.title}
          </h3>
          <ul>
            {menu.customerService.items.map((item, index) => (
              <FooterMenuItem key={index} item={item} />
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{menu.aboutUs.title}</h3>
          <ul>
            {menu.aboutUs.items.map((item, index) => (
              <FooterMenuItem key={index} item={item} />
            ))}
          </ul>
        </div>

        {/* Payment & Shipping */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{menu.payment.title}</h3>
          <ul>
            {menu.payment.items.map((item, index) => (
              <FooterMenuItem key={index} item={item} />
            ))}
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{menu.legal.title}</h3>
          <ul>
            {menu.legal.items.map((item, index) => (
              <FooterMenuItem key={index} item={item} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mt-6 mb-4">
            {menu.social.title}
          </h3>
          <div className="flex space-x-4">
            {menu.social.items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="sr-only">{item.label}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Brand name. All
        rights reserved.
      </div>
    </div>
  );
}
