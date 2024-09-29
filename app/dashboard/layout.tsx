"use client";

import { usePathname } from "next/navigation";
import { Icons } from "@/components/assets/icon";

import { Button } from "@/components/ui/button";
import NavigationItems from "@/components/shared/NavItems";

import MobileNav from "@/components/shared/MobileNav";
import { navItems } from "@/utils/static";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Use usePathname to get the current pathname
  const activeRoute = navItems.find((item) => item.href === pathname);

  return (
    <section>
      <header className="bg-blue py-3 px-4 lg:px-8 sticky top-0 flex items-center justify-between z-[100]">
        <div className="flex items-center">
          <div className="md:px-10 flex-shrink-0">
            <Icons.LogoDark />
          </div>
        </div>
        <div className=" hidden lg:flex items-center justify-between flex-grow md:pl-32">
          <h1 className="text-white font-semibold text-lg">
            {activeRoute ? activeRoute.label : "Dashboard"}
          </h1>
          <div className="hidden lgflex items-center justify-between">
            <div className="flex items-center xl:mr-20">
              <Icons.Clock />
              <p className="ml-4 text-white">
                Time left until the end of this round
              </p>
            </div>
            <div className="h-10">
              <div className="flex">
                <div>timer</div>

                <div className="ml-1"></div>
                <div className="ml-1"></div>
                <div className="ml-1"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="rounded-md p-2 px-3 flex items-center mr-4 bg-[#F5F8FA]">
              <p className="mr-2 text-[#212934]">Balance:</p>
              <p className="mr-1 text-[#8895A7] text-xs font-semibold">NGN</p>
              <p className="mr-1 text-[#2A2E33] font-semibold">0.00</p>
              <div className="ml-1">
                <Icons.EyeOpen />
              </div>
            </div>
          </div>
        </div>
        <main className="lg:hidden">
          <Button className="bg-rose hover:bg-rose/80 p-1  rounded">
            <MobileNav />
          </Button>
        </main>
      </header>
      <main className="flex w-screen items-start">
        <aside className="sidebar flex-shrink-0 bg-white w-1/5 top-[80px] sticky pt-2.5 pb-10 hidden lg:flex flex-col">
          <div className="flex flex-col flex-grow justify-between px-3">
            <div>
              <NavigationItems />
            </div>
            <div className="p-3 pt-4 border border-[#E1E7EC] rounded-xl">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center rounded-md w-9 h-9 bg-[#F5F8FA] border border-[#E1E7EC]">
                  <p className="sc-dkrGBB fiNZeZ uppercase text-[#051B30] px-4"></p>
                </div>
                <div>
                  <p className="sc-dkrGBB fiNZeZ text-[#212934] text-sm"></p>
                  <p className="sc-dkrGBB fiNZeZ text-[#8895A7] text-xs text-wrap max-w-[150px] text-ellipsis overflow-hidden">
                    emmahhokon@gmail.com
                  </p>
                </div>
              </div>
              <Button className="sc-hLBatu cursor-pointer py-2 px-4 flex justify-center items-center bg-[#F5F8FA] border border-[#E1E7EC] space-x-4 hover:bg-[##F5F8FAaa] text-center rounded disabled:opacity-50 disabled:cursor-not-allowed mt-3 w-full">
                <span className="text-[#6D7786] font-medium">Log out</span>
              </Button>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </main>
    </section>
  );
}
