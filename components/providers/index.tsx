"use client";
import ToastProvider from "@/components/providers/toastProvider";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";
import { ReactQueryProvider } from "./reactQueryProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ProgressBar
        options={{ showSpinner: true }}
        shallowRouting
        color="#EB1536"
        height={"2px"}
      />
      {children}
      <ToastProvider />
    </ReactQueryProvider>
  );
};
