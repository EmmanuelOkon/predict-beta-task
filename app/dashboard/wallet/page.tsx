import Link from "next/link";
import React from "react";

const Wallet = () => {
  return (
    <section className="flex-grow">
      <section className="px-4 lg:px-8 py-4 flex items-center justify-end gap-x-4">
        <Link href="https://www.hallabet.com" target="_blank">
          <button
            type="button"
            className="py-2 px-4 bg-blue space-x-4 hover:bg-[#051B30aa] text-center rounded-md disabled:opacity-50 disabled:cursor-not-allowed undefined"
          >
            <span className="text-white">Withdraw </span>
          </button>
        </Link>
      </section>
      <section className="w-screen lg:w-full p-4 lg:p-8">
        <div className="flex items-center justify-center flex-col py-20 lg:py-32">
          <h3 className="font-bold text-3xl mb-2">Check later!</h3>
          <p className="sc-dkrGBB fiNZeZ">Nothing to show</p>
        </div>
      </section>
    </section>
  );
};

export default Wallet;
