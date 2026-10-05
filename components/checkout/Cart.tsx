"use client"

import { useState, Fragment } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useFastSpring } from "@/context/FastSpringContext";

export const Cart = () => {
  const { callbackData, products } = useFastSpring();
  const [isSelectLoading, setIsSelectLoading] = useState(false);

  return (
    <>
      <Button
        className="!pl-0"
        variant="ghostLink"
      >
        {/* Full page load, not <Link>: SBL holds on to the iframe it drew on this page and won't redraw into another page's container after client-side navigation. */}
        <a href="/" className="flex items-center justify-center gap-1.5"><ArrowLeft /> Go Back</a>
      </Button>
      <div className="bg-transparent overflow-hidden mt-14 pr-10">
        {/* Product */}
        <div className="flex flex-col gap-4">
          {callbackData?.groups[0]?.items.length ? (
            callbackData?.groups[0]?.items.map((product) => (
              <Fragment key={product.path}>
                <div className="flex gap-4">
                  {/* Product thumbnail */}
                  <div className="w-16 h-16 rounded-xl">
                    {product.image ? (
                      <img src={product.image} />
                    ): (
                      <div className="w-16 h-16 rounded-xl bg-gray-400 rounded-lg" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm leading-snug">{product.display}</p>
                    {product.description?.summary &&
                        <div
                          className="text-xs text-gray-500 mt-0.5"
                          dangerouslySetInnerHTML={{ __html: product.description.summary }}
                        />
                    }
                    {product.discountPercentValue !== 0 && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">-{product.discountPercent}</span>
                        <span className="text-xs text-gray-400 line-through">{product.price}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-sm">{product.total}</p>
                    {product.future?.intervalUnit && <p className="text-xs text-gray-400 mt-0.5">/ {product.future.intervalUnit}</p>}
                  </div>
                </div>

              </Fragment>
            ))
          ): (
            <>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-gray-100 rounded-lg animate-pulse" />
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="h-5 bg-gray-100 rounded-lg animate-pulse" />
                  <div className="h-5 bg-gray-100 rounded-lg animate-pulse" />
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="h-5 w-14 bg-gray-100 rounded-lg animate-pulse" />
                </div>
              </div>
              <div className="mt-4 space-y-1.5 text-xs text-gray-500">
                <div className="h-5 w-[50%] bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-5 w-[50%] bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-5 w-[50%] bg-gray-100 rounded-lg animate-pulse" />
              </div>
            </>
          )}
        </div>

        {/* Price breakdown */}
        <div className="mt-12 border-t border-gray-100 space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            {callbackData ? (
              <>
                <span>Subtotal</span>
                <span>{callbackData.originalTotal}</span>
              </>
            ): (
              <>
                <span className="h-5 w-18 bg-gray-100 rounded-lg animate-pulse" />
                <span className="h-5 w-18 bg-gray-100 rounded-lg animate-pulse" />
              </>
            )}
          </div>
          <div className="flex justify-between text-green-600">
            {callbackData ? (
              <>
                <span>Discount</span>
                <span>-{callbackData.productLevelDiscountTotal}</span>
              </>
            ): (
              <>
                <span className="h-5 w-18 bg-gray-100 rounded-lg animate-pulse" />
                <span className="h-5 w-18 bg-gray-100 rounded-lg animate-pulse" />
              </>
            )}
          </div>
          <div className="flex justify-between text-gray-400 text-sm">
            {callbackData ? (
              <span>Inclusive of {callbackData.taxType} ({callbackData.taxRate})</span>
            ): (
              <span className="h-5 w-18 bg-gray-100 rounded-lg animate-pulse" />
            )}
            {callbackData ? (
              <span>{callbackData.tax}</span>
            ): (
              <span className="h-5 w-18 bg-gray-100 rounded-lg animate-pulse" />
            )}
          </div>
          <div className="flex justify-between font-bold text-base pt-3 border-t border-gray-100">
            {callbackData ? (
              <>
                <span>Total</span>
                <span>{callbackData.total}</span>
              </>
            ): (
              <>
                <span className="h-6 w-20 bg-gray-100 rounded-lg animate-pulse" />
                <span className="h-6 w-20 bg-gray-100 rounded-lg animate-pulse" />
              </>
            )}
          </div>
          <p className="text-xs text-gray-400 text-center mt-12">Billed annually. Cancel anytime.</p>
        </div>
      </div>
    </>
  );
}