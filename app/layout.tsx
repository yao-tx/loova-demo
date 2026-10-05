import { Space_Grotesk, Host_Grotesk } from "next/font/google";
import { FastSpringProvider } from "@/context/FastSpringContext";

import "./globals.css"
import { cn } from "@/lib/utils";

const hostGrotesk = Host_Grotesk({subsets:['latin'],variable:'--font-sans'});
const spaceGrotesk = Space_Grotesk({subsets:['latin'],variable:'--font-space-grotesk'});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(hostGrotesk.className, spaceGrotesk.variable)}
    >
      <body>
        <svg className="absolute w-0 h-0">
          <symbol aria-hidden="true" viewBox="0 0 24 24" fill="none" id="pricingupgrade"><path fillRule="evenodd" clipRule="evenodd" d="m15.502 14.324-4 3.177v1.565c0 .19.203.31.37.22l3.5-1.91a.25.25 0 0 0 .13-.22v-2.832Zm-5.5 3.126L6.551 14H4.936A1.75 1.75 0 0 1 3.4 11.412l1.909-3.5A1.75 1.75 0 0 1 6.845 7h4.058c2.61-2.776 5.523-4.66 9.29-4.959A1.64 1.64 0 0 1 21.96 3.81c-.297 3.767-2.182 6.68-4.959 9.29v4.058c0 .64-.35 1.23-.912 1.536l-3.5 1.909a1.75 1.75 0 0 1-2.588-1.536V17.45ZM9.677 8.5H6.845a.25.25 0 0 0-.22.13l-1.908 3.5a.25.25 0 0 0 .22.37H6.5l3.176-4Z" fill="currentColor"></path><path d="M2 19.195A2.806 2.806 0 1 1 4.806 22H2.75a.75.75 0 0 1-.75-.75v-2.055Z" fill="currentColor"></path></symbol>
          <symbol fill="none" viewBox="0 0 16 16" id="pricingstar"><path d="M8.976 5.816c.402-1.088 1.942-1.088 2.344 0l.654 1.767c.127.342.397.612.739.739l1.767.654c1.088.402 1.088 1.942 0 2.344l-1.767.654a1.25 1.25 0 0 0-.739.739l-.654 1.767c-.402 1.088-1.942 1.088-2.344 0l-.654-1.767a1.25 1.25 0 0 0-.739-.739l-1.767-.654c-1.088-.402-1.088-1.942 0-2.344l1.767-.654a1.25 1.25 0 0 0 .739-.739l.654-1.767ZM2.31.816c.402-1.088 1.941-1.088 2.344 0l.203.55c.127.343.397.613.739.74l.55.203c1.089.403 1.089 1.942 0 2.345l-.55.203a1.25 1.25 0 0 0-.739.739l-.203.55c-.403 1.089-1.942 1.089-2.345 0l-.204-.55a1.25 1.25 0 0 0-.738-.739l-.55-.203c-1.09-.403-1.09-1.942 0-2.345l.55-.204a1.25 1.25 0 0 0 .738-.738l.204-.55Z" fill="currentColor"></path></symbol>
          <symbol aria-hidden="true" viewBox="0 0 24 24" fill="none" id="pricinginfinity"><path fillRule="evenodd" clipRule="evenodd" d="M1.58 8.116a5.348 5.348 0 0 1 7.66 0L12 10.929l2.76-2.813a5.348 5.348 0 0 1 7.66 0c2.106 2.147 2.106 5.621 0 7.768a5.348 5.348 0 0 1-7.66 0L12 13.071l-2.76 2.813a5.348 5.348 0 0 1-7.66 0c-2.106-2.147-2.106-5.621 0-7.768ZM10.95 12 8.17 9.166a3.848 3.848 0 0 0-5.52 0 4.065 4.065 0 0 0 0 5.668 3.848 3.848 0 0 0 5.52 0L10.95 12Zm2.1 0 2.78 2.834a3.848 3.848 0 0 0 5.52 0 4.065 4.065 0 0 0 0-5.668 3.848 3.848 0 0 0-5.52 0L13.05 12Z" fill="currentColor"></path></symbol>
          <symbol className="size-5 text-font-primary shrink-0" aria-hidden="true" fill="none" viewBox="0 0 24 24" id="correct"><path d="M6.75 13.063 9.9 16.25l7.35-8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></symbol>
          <symbol fill="none" viewBox="0 0 14 14" id="commonClose"><path d="M13 1 7 7m0 0-6 6m6-6L1 1m6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></symbol>
          <symbol className="size-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" id="pricingUnlock"><path fillRule="evenodd" clipRule="evenodd" d="M12 2a5 5 0 0 0-5 5v2H5.75A1.75 1.75 0 0 0 4 10.75v9.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 20.25v-9.5A1.75 1.75 0 0 0 18.25 9H8.5V7a3.5 3.5 0 0 1 6.946-.615.75.75 0 1 0 1.477-.262A5.001 5.001 0 0 0 12 2Zm0 11.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" fill="currentColor"></path></symbol>
          <symbol fill="none" viewBox="0 0 14 14" id="IconPlus"><path d="M7 2.916v8.167M2.917 6.999h8.167" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></symbol>
          <symbol className="size-3" aria-hidden="true" fill="none" viewBox="0 0 24 24" id="pricingdiamond"><path fillRule="evenodd" clipRule="evenodd" d="M6.562 3.523A1.75 1.75 0 0 1 7.81 3h8.376c.47 0 .92.189 1.248.523l5.154 5.244a1.75 1.75 0 0 1-.01 2.464l-9.342 9.342a1.75 1.75 0 0 1-2.475 0l-9.342-9.342a1.75 1.75 0 0 1-.01-2.464l5.153-5.244ZM9.028 7.22a.75.75 0 0 1 0 1.06L7.308 10l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2.25-2.25a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0Z" fill="currentColor"></path></symbol>
        </svg>
        <FastSpringProvider>{children}</FastSpringProvider>
      </body>
    </html>
  )
}
