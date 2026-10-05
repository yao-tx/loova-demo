"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import Script from "next/script";
import type { ProductData, CallbackData } from "@/types/fs-callback";

interface FastSpringContextType {
  products: { [key: string]: ProductData };
  setProducts: React.Dispatch<React.SetStateAction<{ [key: string]: ProductData }>>;
  callbackData: CallbackData | undefined;
  setCallbackData: React.Dispatch<React.SetStateAction<CallbackData | undefined>>;
};

// Dispatched on window when SBL's request chain drains (data-after-requests-callback).
export const FS_AFTER_REQUESTS_EVENT = "fsc:after-requests";

const FastSpringContext = createContext<FastSpringContextType | undefined>(undefined);

export const useFastSpring = () => {
  const context = useContext(FastSpringContext);

  if (!context) {
    throw new Error("useFastSpring must be used within FastSpringContext");
  }

  return context;
};

export const FastSpringProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [products, setProducts] = useState<{ [key: string]: ProductData }>({});
  const [callbackData, setCallbackData] = useState<CallbackData | undefined>(undefined);

  const contextValue = {
    products,
    setProducts,
    callbackData,
    setCallbackData,
  };

  useEffect(() => {
    window.fsOnWebhookReceived = (orderReference: any) => {
      if (orderReference?.id) {
        window.location.replace("success?orderId=" + orderReference.id);
      }
    };

    window.fsAfterRequests = () => {
      window.dispatchEvent(new Event(FS_AFTER_REQUESTS_EVENT));
    };

    window.fsDataCallback = (fsData: any) => {
      setCallbackData(fsData);

      if (fsData?.groups) {
        const newProducts = fsData.groups
          .filter((group: any) => Array.isArray(group.items))
          .flatMap((group: any) => group.items)
          .reduce((acc: Record<string, any>, item: any) => {
            if (item.path) {
              acc[item.path] = item;
            }

            return acc;
          }, {});

        setProducts(newProducts);
      }
    };
  }, []);


  return (
    <>
      <Script
        id="fsc-api"
        src={process.env.NEXT_PUBLIC_FASTSPRING_JS_URL}
        strategy="beforeInteractive"
        data-storefront={process.env.NEXT_PUBLIC_FASTSPRING_STOREFRONT}
        data-data-callback="fsDataCallback"
        data-popup-webhook-received="fsOnWebhookReceived"
        data-after-requests-callback="fsAfterRequests"
        data-continuous="true"
        data-access-key={process.env.NEXT_PUBLIC_FASTSPRING_DATA_ACCESS_KEY}
      />
      <FastSpringContext.Provider value={contextValue}>
        {children}
      </FastSpringContext.Provider>
    </>
  );
};