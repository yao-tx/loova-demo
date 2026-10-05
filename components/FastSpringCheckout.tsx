"use client"

import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { FS_AFTER_REQUESTS_EVENT } from "@/context/FastSpringContext";

// Upper bound on how long the overlay can stay up if FastSpring never signals completion.
const MAX_UPDATING_MS = 3000;

export const FastSpringCheckout = ({
  plan,
  paymentMethod,
}: {
  plan: string;
  paymentMethod: string;
}) => {
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!plan) return;

    // The iframe keeps showing the previous session until FastSpring finishes its requests
    // and redraws, so hide it until then: wait for the request chain to drain, then for the
    // iframe's next resize message (sent after it re-renders).
    setUpdating(true);
    let requestsDone = false;
    const done = () => setUpdating(false);

    const onAfterRequests = () => {
      requestsDone = true;
    };
    const onMessage = (event: MessageEvent) => {
      if (requestsDone && event.data?.fscPopupMessage?.action === "resizeInlineContainer") {
        done();
      }
    };
    const timeout = setTimeout(done, MAX_UPDATING_MS);

    window.addEventListener(FS_AFTER_REQUESTS_EVENT, onAfterRequests);
    window.addEventListener("message", onMessage);

    window.fastspring?.builder?.reset();
    window.fastspring?.builder?.secure({
      contact: {
        "country": "US",
      },
      items: [{
        product: plan,
        quantity: 1,
      }],
      paymentMethod: paymentMethod,
      hideOtherPaymentMethods: true,
    });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener(FS_AFTER_REQUESTS_EVENT, onAfterRequests);
      window.removeEventListener("message", onMessage);
    };
  }, [plan, paymentMethod]);

  return (
    <div className={updating ? "relative min-h-40" : "relative"}>
      {/* isolate: SBL gives its iframe a huge z-index; keep it scoped so the overlay can sit above it. */}
      <div id="fsc-embedded-checkout-container" className="relative isolate"></div>
      {updating && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-popover">
          <LoaderCircle className="animate-spin" />
        </div>
      )}
    </div>
  );
}
