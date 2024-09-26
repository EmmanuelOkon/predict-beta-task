"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import * as React from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();
  React.useEffect(() => {
    
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col text-center items-center justify-center h-screen max-w-md mx-auto gap-3">
      <h2 className="font-bold text-3xl text-blue">You appear lost!</h2>
      <p className="text-base">
        It seems you entered an invalid URL, do not worry! It happens to
        everyone at one point or the other
      </p>
      <Button
        className="bg-rose hover:bg-rose/90 text-lg font-normal p-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.push("/")
        }
      >
        Take a ride home
      </Button>
    </div>
  );
}
