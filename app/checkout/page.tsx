"use client"

import { Suspense } from "react";
import { useSearchParams, notFound } from "next/navigation";

import dynamic from "next/dynamic";
import { Cart } from "@/components/checkout/Cart";

// Client-only: the SBL script runs before hydration and injects its skeleton iframe into
// #fsc-embedded-checkout-container, so a server-rendered container causes a hydration mismatch.
const Checkout = dynamic(
  () => import("@/components/checkout/Checkout").then((mod) => mod.Checkout),
  { ssr: false },
);

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  if (!plan) {
    return notFound();
  }

  return (
    <div className="w-full bg-neutral-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full max-w-2/3 mx-auto">
        <div className="pt-12 text-left">
          <Cart />
        </div>
        <div className="relative lg:before:content-[' '] lg:before:fixed lg:before:top-0 lg:before:right-0 lg:before:h-full lg:before:w-1/2 lg:before:bg-white">
          <Checkout plan={plan} />
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}
