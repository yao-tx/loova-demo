"use client"

import { useEffect } from "react";

export const Checkout = ({ plan }: { plan: string;}) => {

  useEffect(() => {
    window.fastspring?.builder?.reset();
    window.fastspring?.builder?.country("us");
    // window.fastspring?.builder?.add(plan);
    window.fastspring?.builder?.secure({
      items: [{
        product: plan,
      }],
    });
  }, [plan]);

  return (
    <div id="fsc-embedded-checkout-container"></div>
  );
}