import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { URLS } from "@/utils/route";

import { Separator } from "../ui/separator";
import { Icons } from "../assets/icon";
import NavigationItems from "./NavItems";
import { Button } from "../ui/button";

const MobileNav = () => {

  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="block cursor-pointer text-white outline-0 lg:hidden"
      >
        <Menu />
      </SheetTrigger>

      <SheetContent
        className="sm:max-w-[80vw] outline-0 flex flex-col justify-between "
        side="left"
        aria-describedby="sheet-description"
      >
        <SheetHeader id="menu-description" className="sr-only">
          <SheetTitle className="sr-only">Open Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile navigation menu.
          </SheetDescription>
        </SheetHeader>
        <section>
          <nav className="flex items-center justify-between pb-4 mb-2">
            <Link href={URLS.ALL_SEASONS} className="h-10 w-10">
              <SheetClose asChild>
                <Icons.LogoLight className="h-10 w-10" />
              </SheetClose>
            </Link>
            <SheetClose
              asChild
              className="border-none outline-0 bg-gray-500 rounded-full"
            >
              <X className="h-6 w-6 cursor-pointer text-2xl font-bold text-white p-1 " />
            </SheetClose>
          </nav>
          <div className="mt-2 mb-4">
            <div className="rounded-md p-2 px-3 flex items-center bg-[#F5F8FA]">
              <p className="mr-2 text-[#212934]">Balance:</p>
              <p className="mr-1 text-[#8895A7] text-xs font-semibold">NGN</p>
              <p className="mr-1 text-[#2A2E33] font-semibold">0.00</p>
              <div className="ml-auto">
                <Icons.EyeClose />
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col flex-grow justify-between">
            <div>
              <NavigationItems />
            </div>
            <SheetClose asChild></SheetClose>
          </div>
        </section>

        <div className="p-3 pt-4 border border-[#E1E7EC] rounded-xl">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center justify-center rounded-md w-9 h-9 bg-[#F5F8FA] border border-[#E1E7EC]">
              <p className="uppercase text-[#051B30]"></p>
            </div>
            <div>
              <p className="text-[#212934] text-sm"> </p>
              <p className="text-[#8895A7] text-xs">(emmahhokon@gmail.com)</p>
            </div>
          </div>
          <Button className="cursor-pointer py-2 px-4 flex justify-center items-center bg-[#F5F8FA] border border-[#E1E7EC] space-x-4 hover:bg-[##F5F8FAaa] text-center rounded disabled:opacity-50 disabled:cursor-not-allowed mt-3 w-full">
            <span className="text-[#6D7786] font-medium">Log out</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
