"use client";

import Link from "next/link";
import * as React from "react";

import { NavigationMenuItem } from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { navItems } from "@/utils/static";
import { usePathname } from "next/navigation";

import MobileNav from "./MobileNav";

export const NavigationItems = () => {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <NavigationMenuItem key={item.label} className="list-none">
          <Link
            key={item.label}
            href={{ pathname: item.href }}
            className={cn(
              "rounded-md p-3 flex items-center mb-3 gap-3 bg-[#F5F8FA] text-blue font-light ",
              {
                "font-normal bg-blue text-white": pathname === item.href,
              }
            )}
          >
            {item.icon}

            <span className="text-sm">{item.label}</span>
          </Link>
        </NavigationMenuItem>
      ))}
      <MobileNav />
    </>
  );
};

export default NavigationItems;
