"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LoaderCircle, Lock } from "lucide-react";
import { FastSpringCheckout } from "@/components/FastSpringCheckout";

import { useState } from "react";

export default function Page() {
  const [plan, setPlan] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const openPaymentPicker = (planPath: string) => {
    setPlan(planPath);
    setPickerOpen(true);
  };

  return (
    <div className="bg-[#070707] font-normal">
      <h1 className="text-white text-[42px] text-center pt-[32px] font-bold">Pick a Plan, Buy Credits, or Get Unlimited</h1>
      <div className="text-[14px] text-white/60 text-center mb-[16px]"><span>Choose a higher plan for increased limits, or add extra credits</span></div>
      <div className="px-20 box-border max-w-[1574px] box-border mx-auto w-full">
        <div className="flex justify-center relative mb-[2px]">
          <div className="bg-[#1f2022] border-white/6 border-solid border-1 flex justify-center items-center p-[2px] box-border rounded-full backdrop-blur-[8px]">
            <div className="rounded-full relative flex gap-[4px] justify-center h-[36px] min-w-[126px] text-[14px] font-semibold items-center cursor-pointer px-[12px] box-border text-[#070707] bg-white">
              <svg aria-hidden="true" className="svg-icon" width="16" height="16" fill="#070707"><use xlinkHref="#pricingupgrade"></use></svg>
              <h2 className="font-medium text-[14px]">Upgrade</h2>
            </div>
            <div className="rounded-full relative flex gap-[4px] justify-center h-[36px] min-w-[126px] text-[14px] font-semibold items-center text-white cursor-pointer px-[12px] box-border">
              <svg aria-hidden="true" className="svg-icon" width="16" height="16" color="#fff"><use xlinkHref="#pricingstar" fill="currentColor"></use></svg>
              <h2 className="font-medium text-[14px]">Top-up Credits</h2>
            </div>
            <div className="rounded-full relative flex gap-[4px] justify-center h-[36px] min-w-[126px] text-[14px] font-semibold items-center text-white cursor-pointer px-[12px] box-border">
              <svg aria-hidden="true" className="svg-icon" width="16" height="16" color="#fff"><use xlinkHref="#pricinginfinity" fill="currentColor"></use></svg>
              <h2 className="font-medium text-[14px]">Unlimited Models</h2>
            </div>
          </div>
        </div>
        <div className="mt-[6px] w-full md:px-[16px] box-border">
          <div className="flex justify-center w-full mt-[20px] pt-[10px] pb-[80px] gap-[16px] grid grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col min-w-[277px] xl:max-w-full box-border relative rounded-[16px] shrink-0 flex-1 max-w-[444px]">
              <div className="h-[32px] w-full flex justify-center items-center"></div>
              <div className="flex relative box-border shrink-0 flex-1 rounded-[16px] relative z-2 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] bg-[rgb(28,30,32)] shadow-[rgba(0, 0, 0, 0.33) 0px 4px 24px 0px]">
                <div className="z-2 relative flex-1 flex flex-col">
                  <div className="px-[16px] pt-[20px] pb-[12px] border-b-1 border-b-solid border-white/6">
                    <div className="flex items-center gap-[4px] mb-[2px]">
                      <div className="text-white text-[14px] md:text-[20px] font-medium">Lite</div>
                      <div className="flex gap-[4px]"></div>
                    </div>
                    <p className="text-white/40 text-[12px] m-0 mb-[4px] leading-[24px] truncate">For beginners first exploring AI creation</p>
                    <div className="bg-white/5 min-h-[109px] border border-[rgba(217,217,217,0.04)] rounded-[12px] p-[12px] box-border flex flex-col justify-between">
                      <div className="flex gap-[8px] text-white text-[14px] font-normal">
                        <div className="flex justify-center items-center h-[16px]">
                          <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#pricingstar" fill="currentColor"></use></svg>
                        </div>
                        <div className="flex flex-col flex-4">
                          <div className="flex items-center gap-[4px] text-[14px]">
                            <div className="display: flex; align-items: center;">
                              300 credits/mo.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-[12px] h-[36px] box-border flex justify-center items-center text-[12px] gap-[4px] text-white/50">
                        <svg aria-hidden="true" className="svg-icon" width="18" height="18"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                        Fixed amount of 300 credits/mo
                      </div>
                    </div>
                    <div className="mb-[10px] SpaceGrotesk mt-[12px]">
                      <span className="text-white text-[28px] font-semibold">$15</span>
                      <span className="text-white/60 text-[14px] ml-[4px] font-semibold">/mo</span>
                    </div>
                    <div className="text-[12px] text-white/60">Billed annually</div>
                    <div className="flex flex-col mt-[12px] rounded-[12px] bg-white/5">
                      <div className="h-[48px] flex items-center justify-center">
                        <button type="button" onClick={() => openPaymentPicker("loova-lite")} className="text-black w-full h-full rounded-[12px] text-[16px] ui-el-button-primary-green cursor-pointer">Upgrade to Lite</button>
                      </div>
                      <div className="text-[12px] flex justify-center items-center text-white/40 gap-[4px] h-[34px]">
                        <span>No difference compared to monthly</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-[16px] box-border">
                    <div className="list-none flex flex-col gap-[10px] p-0 m-0 mb-[12px]">
                      <div className="flex flex-col items-start justify-between gap-[4px]">
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Concurrent: Video 2 & Image 4</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to basic image & video models</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to basic editing models</div></div>
                        </div>
                        <div className="flex items-start text-white/80 opacity-40">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to AI Agent & advanced AI features</div></div>
                        </div>
                        <div className="flex items-start text-white/80 opacity-40">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Lowest cost per credit</div></div>
                        </div>
                        <div className="flex items-start text-white/80 opacity-40">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">15% off extra credits</div></div>
                        </div>
                      </div>
                      <div className="border border-[rgba(217,217,217,0.04)] border-solid rounded-[12px] bg-white/10 border-white/4 border-solid border-1 backdrop-blur-[4.5px] p-[12px] box-border mb-[20px]">
                        <div className="flex h-[24px] mb-[8px]">
                          <div className="text-white flex text-[14px] font-semibold flex items-center">
                            <svg aria-hidden="true" className="svg-icon mr-2" width="14" height="14"><use xlinkHref="#pricingUnlock" fill="currentColor"></use></svg>
                            <span className="el-tooltip__trigger">BEST PRICE</span>
                          </div>
                          <div className="flex-1"></div>
                          <div className="ml-[8px]"><a href="/ai-video-model/seedance/seedance-best-price" className=""><span className="text-[11px] text-white/60 font-medium underline">Compare Pricing</span></a></div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40 text-white text-white" style={{backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)"}}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedance 2.5</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[4px] font-medium text-nowrap bg-white/20 text-white/80 el-tooltip__trigger el-tooltip__trigger"><span>NO ACCESS</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40 text-white" style={{ backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)"}}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedance 2.0</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[4px] font-medium text-nowrap bg-white/20 text-white/80 el-tooltip__trigger el-tooltip__trigger"><span>NO ACCESS</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Wan 3.0 / 3.0 Prime</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-[#ffe500] text-black font-medium mr-[5px] text-nowrap"><span>-40%</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-[rgba(217,217,217,0.04)] border-solid rounded-[12px] bg-white/10 border-white/4 border-solid border-1 backdrop-blur-[4.5px] p-[12px] box-border" style={{ background: "radial-gradient(211% 211% at 50.16% 100%, rgba(60, 140, 255, 0.2) 0%, rgba(60, 140, 255, 0) 100%), radial-gradient(64.4% 64.4% at 50.16% 100%, rgba(60, 216, 255, 0.2) 0%, rgba(60, 216, 255, 0) 100%), rgba(255, 255, 255, 0.05)" }}>
                        <div className="flex h-[24px] mb-[8px]">
                          <div className="text-white flex text-[14px] font-semibold items-center">
                            <svg aria-hidden="true" className="svg-icon mr-2" width="14" height="14"><use xlinkHref="#pricingUnlock" fill="currentColor"></use></svg>
                            <span>UNLIMITED GENERATION</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling O1 Video & Edit</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling Motion Control</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Nano Banana 2 & Pro</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">GPT Imag 2.5 & 2</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedream 5.0 Pro</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">MiniMax H3</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Wan 3.0 & Prime</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling 3.0</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedance 2.0</span></div>
                              <div className="flex-1"></div>
                            </div>
                          </div>
                          <div className="flex text-[12px] w-full items-center gap-[6px] pt-[10px] text-left text-white/60">No Additional Unlimited Models</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[277px] xl:max-w-full box-border relative rounded-[16px] shrink-0 flex-1 max-w-[444px]">
              <div className="h-[32px] w-full flex justify-center items-center"></div>
              <div className="flex relative box-border shrink-0 flex-1 rounded-[16px] relative z-2 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)]" style={{ background: "linear-gradient(rgba(12, 192, 251, 0.09), rgba(12, 192, 251, 0.3)), rgb(15, 17, 19)" }}>
                <div className="z-2 relative flex-1 flex flex-col">
                  <div className="px-[16px] pt-[20px] pb-[12px] border-b-1 border-b-solid border-white/6">
                    <div className="flex items-center gap-[4px] mb-[2px]">
                      <div className="text-white text-[14px] md:text-[20px] font-medium">Pro</div>
                      <div className="flex gap-[4px]">
                        <div className="tag text-[12px] flex justify-center items-center font-medium gap-[4px] text-white rounded-full px-[6px] h-[26px]">20% OFF</div>
                      </div>
                    </div>
                    <p className="text-white/40 text-[12px] m-0 mb-[4px] leading-[24px] truncate">For enthusiasts creating occasionally</p>
                    <div className="bg-white/5 min-h-[109px] border border-[rgba(217,217,217,0.04)] rounded-[12px] p-[12px] box-border flex flex-col justify-between">
                      <div className="flex gap-[8px] text-white text-[14px] font-normal">
                        <div className="flex justify-center items-center h-[16px]">
                          <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#pricingstar" fill="currentColor"></use></svg>
                        </div>
                        <div className="flex flex-col flex-4">
                          <div className="flex items-center gap-[4px] text-[14px]">
                            <div className="display: flex; align-items: center;">
                              1200 credits/mo.
                            </div>
                          </div>
                          <div className="text-white/80 font-normal text-[12px] mt-[4px] mb-[4px]">= 25 Seedance 2.5 videos</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-[12px] h-[36px] box-border flex justify-center items-center text-[12px] gap-[4px] text-white/50">
                        <svg aria-hidden="true" className="svg-icon" width="18" height="18"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                        Fixed amount of 1200 credits/mo
                      </div>
                    </div>
                    <div className="mb-[10px] SpaceGrotesk mt-[12px]">
                      <span className="text-[#ff005b] text-[28px] mr-[10px] line-through">$49</span>
                      <span className="text-white text-[28px] font-semibold">$39.2</span>
                      <span className="text-white/60 text-[14px] ml-[4px] font-semibold">/mo</span>
                    </div>
                    <div className="text-[12px] text-white/60">Billed annually</div>
                    <div className="flex flex-col mt-[12px] rounded-[12px] bg-white/5">
                      <div className="h-[48px] flex items-center justify-center">
                        <button type="button" onClick={() => openPaymentPicker("loova-pro")} className="text-black w-full h-full rounded-[12px] text-[14px] ui-el-button-primary-green cursor-pointer">
                          <span className="text-[16px]">Upgrade to Pro</span>
                        </button>
                      </div>
                      <div className="text-[12px] flex justify-center items-center text-white/40 gap-[4px] h-[34px]">
                        <span>Save ~$118 compared to monthly</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-[16px] box-border">
                    <div className="list-none flex flex-col gap-[10px] p-0 m-0 mb-[12px]">
                      <div className="flex flex-col items-start justify-between gap-[4px]">
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Concurrent: Video 2 & Image 4</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to basic image & video models</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to basic editing models</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to AI Agent & advanced AI features</div></div>
                        </div>
                        <div className="flex items-start text-white/80 opacity-40">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Lowest cost per credit</div></div>
                        </div>
                        <div className="flex items-start text-white/80 opacity-40">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">15% off extra credits</div></div>
                        </div>
                      </div>
                      <div className="border border-[rgba(217,217,217,0.04)] border-solid rounded-[12px] bg-white/10 border-white/4 border-solid border-1 backdrop-blur-[4.5px] p-[12px] box-border mb-[20px]">
                        <div className="flex h-[24px] mb-[8px]">
                          <div className="text-white flex text-[14px] font-semibold flex items-center">
                            <svg aria-hidden="true" className="svg-icon mr-2" width="14" height="14"><use xlinkHref="#pricingUnlock" fill="currentColor"></use></svg>
                            <span className="el-tooltip__trigger">BEST PRICE</span>
                          </div>
                          <div className="flex-1"></div>
                          <div className="ml-[8px]"><a href="/ai-video-model/seedance/seedance-best-price" className=""><span className="text-[11px] text-white/60 font-medium underline">Compare Pricing</span></a></div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedance 2.5</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[4px] font-medium text-nowrap exclusive-tag text-black"><span>ACCESS</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedance 2.0</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap">4K</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[4px] font-medium text-nowrap exclusive-tag text-black"><span>ACCESS</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Wan 3.0 / 3.0 Prime</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-[#ffe500] text-black font-medium mr-[5px] text-nowrap"><span>-40%</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-[rgba(217,217,217,0.04)] border-solid rounded-[12px] bg-white/10 border-white/4 border-solid border-1 backdrop-blur-[4.5px] p-[12px] box-border" style={{ background: "radial-gradient(211% 211% at 50.16% 100%, rgba(60, 140, 255, 0.2) 0%, rgba(60, 140, 255, 0) 100%), radial-gradient(64.4% 64.4% at 50.16% 100%, rgba(60, 216, 255, 0.2) 0%, rgba(60, 216, 255, 0) 100%), rgba(255, 255, 255, 0.05)" }}>
                        <div className="flex h-[24px] mb-[8px]">
                          <div className="text-white flex text-[14px] font-semibold items-center">
                            <svg aria-hidden="true" className="svg-icon mr-2" width="14" height="14"><use xlinkHref="#pricingUnlock" fill="currentColor"></use></svg>
                            <span>UNLIMITED GENERATION</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling O1 Video & Edit</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling Motion Control</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 229, 0)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Nano Banana 2 & Pro</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap">2K</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 229, 0)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">GPT Image 2.5 & 2</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap">2K</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 229, 0)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedream 5.0 Pro</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">MiniMax H3</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Wan 3.0 & Prime</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling 3.0</span></div>
                              <div className="flex-1"></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedance 2.0</span></div>
                              <div className="flex-1"></div>
                            </div>
                          </div>
                          <div className="flex text-[12px] w-full cursor-pointer items-center gap-[6px] pt-[10px] text-left text-[#d1fe17]">
                            <svg aria-hidden="true" className="svg-icon" width="12" height="12"><use xlinkHref="#IconPlus" fill="currentColor"></use></svg>
                            <div className="flex-1">3 Other Unlimited Models</div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[16px] shrink-0 text-font-brand"><path data-v-4e907435="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 16 3.646-3.646a.5.5 0 0 0 0-.708L10 8"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[277px] xl:max-w-full box-border relative rounded-[16px] shrink-0 flex-1 max-w-[444px] bg-[rgb(0,245,160)]">
              <div className="h-[32px] w-full flex justify-center items-center">
                <div className="flex items-center justify-center gap-[10px] text-[11px]">
                  <div className="flex items-center gap-[4px] text-[rgb(19, 21, 23)]">
                    <svg aria-hidden="true" className="svg-icon" width="11" height="11"><use xlinkHref="#pricingdiamond" fill="currentColor"></use></svg>
                    <div className="font-semibold box-border">MOST POPULAR</div>
                    <div className="font-semibold backdrop-blur-[20px] box-border h-[26px] flex items-center justify-center px-[8px] rounded-full text-[rgb(19, 21, 23)]" style={{ background: "radial-gradient(57.09% 62.67% at 50% 100%, rgba(0, 245, 160, 0.3) 0%, rgba(209, 254, 23, 0.1) 100%), rgb(255, 255, 255)", boxShadow: "rgba(28, 29, 30, 0.16) 0px 12px 24px 0px, rgba(66, 75, 79, 0.16) 0px 6px 12px 0px", border: "2px solid rgba(255, 255, 255, 0)" }}>Access to Seedance 2.5</div>
                  </div>
                </div>
              </div>
              <div className="flex relative box-border shrink-0 flex-1 rounded-[16px] relative z-2 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)]" style={{ background: "linear-gradient(rgba(0, 245, 160, 0.09), rgba(0, 245, 160, 0.3)), rgb(15, 17, 19)", borderWidth: "medium 2px 2px", borderStyle: "none solid solid", borderColor: "currentcolor rgb(0, 245, 160) rgb(0, 245, 160)", borderImage: "none" }}>
                <div className="z-2 relative flex-1 flex flex-col">
                  <div className="px-[16px] pt-[20px] pb-[12px] border-b-1 border-b-solid border-white/6">
                    <div className="flex items-center gap-[4px] mb-[2px]">
                      <div className="text-white text-[14px] md:text-[20px] font-medium">Max</div>
                      <div className="flex gap-[4px]">
                        <div className="tag text-[12px] flex justify-center items-center font-medium gap-[4px] text-white rounded-full px-[6px] h-[26px]"><svg className="size-[14px]" aria-hidden="true" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-19671287="" fillRule="evenodd" clipRule="evenodd" d="M5 3.5H3.75C3.33579 3.5 3 3.16421 3 2.75C3 2.33579 3.33579 2 3.75 2H20.25C20.6642 2 21 2.33579 21 2.75C21 3.16421 20.6642 3.5 20.25 3.5H19V7.45273C19 8.04945 18.6959 8.60505 18.1933 8.92671L13.3913 12L18.1933 15.0733C18.6959 15.395 19 15.9505 19 16.5473V20.5H20.25C20.6642 20.5 21 20.8358 21 21.25C21 21.6642 20.6642 22 20.25 22H3.75C3.33579 22 3 21.6642 3 21.25C3 20.8358 3.33579 20.5 3.75 20.5H5V16.5473C5 15.9505 5.30406 15.395 5.80666 15.0733L10.6087 12L5.80666 8.92671C5.30406 8.60505 5 8.04945 5 7.45273V3.5ZM6.5 7H17.5V3.5H6.5V7ZM17.5 16.5473V18H6.5V16.5473C6.5 16.462 6.54344 16.3827 6.61524 16.3367L12 12.8904L17.3848 16.3367C17.4566 16.3827 17.5 16.462 17.5 16.5473Z" fill="currentColor"></path></svg>LIMITED OFFER</div>
                        <div className="tag text-[12px] flex justify-center items-center font-medium gap-[4px] text-white rounded-full px-[6px] h-[26px]">20% OFF</div>
                      </div>
                    </div>
                    <p className="text-white/40 text-[12px] m-0 mb-[4px] leading-[24px] truncate">The smart choice for pros creating daily</p>
                    <div className="bg-white/5 min-h-[109px] border border-[rgba(217,217,217,0.04)] rounded-[12px] p-[12px] box-border flex flex-col justify-between">
                      <div className="flex gap-[8px] text-white text-[14px] font-normal">
                        <div className="flex justify-center items-center h-[16px]">
                          <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#pricingstar" fill="currentColor"></use></svg>
                        </div>
                        <div className="flex flex-col flex-4">
                          <div className="flex items-center gap-[4px] text-[14px]">
                            <div className="display: flex; align-items: center;">
                              3000 credits/mo.
                            </div>
                          </div>
                          <div className="text-white/80 font-normal text-[12px] mt-[4px] mb-[4px]">= 62 Seedance 2.5 videos</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-[12px] h-[36px] box-border flex justify-center items-center text-[12px] gap-[4px] text-white/50">
                        <svg aria-hidden="true" className="svg-icon" width="18" height="18"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                        Fixed amount of 3000 credits/mo
                      </div>
                    </div>
                    <div className="mb-[10px] SpaceGrotesk mt-[12px]">
                      <span className="text-[#ff005b] text-[28px] mr-[10px] line-through">$99</span>
                      <span className="text-white text-[28px] font-semibold">$59.4</span>
                      <span className="text-white/60 text-[14px] ml-[4px] font-semibold">/mo</span>
                    </div>
                    <div className="text-[12px] text-white/60">Billed annually</div>
                    <div className="flex flex-col mt-[12px] rounded-[12px] bg-white/5">
                      <div className="h-[48px] flex items-center justify-center">
                        <button type="button" onClick={() => openPaymentPicker("loova-max")} className="text-black w-full h-full rounded-[12px] text-[14px] ui-el-button-primary-green cursor-pointer">
                          <span className="text-[16px]">Upgrade to Max</span>
                        </button>
                      </div>
                      <div className="text-[12px] flex justify-center items-center text-white/40 gap-[4px] h-[34px]">
                        <span>Save ~$475 compared to monthly</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-[16px] box-border">
                    <div className="list-none flex flex-col gap-[10px] p-0 m-0 mb-[12px]">
                      <div className="flex flex-col items-start justify-between gap-[4px]">
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Concurrent: Video 8 & Image 12</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to basic image & video models</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to basic editing models</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to AI Agent & advanced AI features</div></div>
                        </div>
                        <div className="flex items-start text-white/80 opacity-40">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Lowest cost per credit</div></div>
                        </div>
                        <div className="flex items-start text-white/80 opacity-40">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">15% off extra credits</div></div>
                        </div>
                      </div>
                      <div className="border border-[rgba(217,217,217,0.04)] border-solid rounded-[12px] bg-white/10 border-white/4 border-solid border-1 backdrop-blur-[4.5px] p-[12px] box-border mb-[20px]">
                        <div className="flex h-[24px] mb-[8px]">
                          <div className="text-white flex text-[14px] font-semibold flex items-center">
                            <svg aria-hidden="true" className="svg-icon mr-2" width="14" height="14"><use xlinkHref="#pricingUnlock" fill="currentColor"></use></svg>
                            <span className="el-tooltip__trigger">BEST PRICE</span>
                          </div>
                          <div className="flex-1"></div>
                          <div className="ml-[8px]"><a href="/ai-video-model/seedance/seedance-best-price" className=""><span className="text-[11px] text-white/60 font-medium underline">Compare Pricing</span></a></div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]" style={{ color: "transparent", backgroundImage: "radial-gradient(circle, rgb(0, 217, 245) 0px, rgb(0, 217, 245) 50%, rgb(0, 217, 245) 100%)", backgroundClip: "text" }}>Seedance 2.5</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-[#ffe500] text-black font-medium mr-[5px] text-nowrap"><span>-40%</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedance 2.0</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap">4K</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-[#ffe500] text-black font-medium mr-[5px] text-nowrap"><span>-20%</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Wan 3.0 / 3.0 Prime</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-[#ffe500] text-black font-medium mr-[5px] text-nowrap"><span>-40%</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-[rgba(217,217,217,0.04)] border-solid rounded-[12px] bg-white/10 border-white/4 border-solid border-1 backdrop-blur-[4.5px] p-[12px] box-border" style={{ background: "radial-gradient(211% 211% at 50.16% 100%, rgba(60, 140, 255, 0.2) 0%, rgba(60, 140, 255, 0) 100%), radial-gradient(64.4% 64.4% at 50.16% 100%, rgba(60, 216, 255, 0.2) 0%, rgba(60, 216, 255, 0) 100%), rgba(255, 255, 255, 0.05)" }}>
                        <div className="flex h-[24px] mb-[8px]">
                          <div className="text-white flex text-[14px] font-semibold items-center">
                            <svg aria-hidden="true" className="svg-icon mr-2" width="14" height="14"><use xlinkHref="#pricingUnlock" fill="currentColor"></use></svg>
                            <span>UNLIMITED GENERATION</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling O1 Video & Edit</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling Motion Control</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 229, 0)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Nano Banana 2 & Pro</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap">2K</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 229, 0)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">GPT Image 2.5 & 2</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap">2K</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 229, 0)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedream 5.0 Pro</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] text-[rgb(0, 217, 245)]" style={{ backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]" style={{ color: "transparent", backgroundImage: "radial-gradient(circle, rgb(0, 217, 245) 0px, rgb(0, 217, 245) 50%, rgb(0, 217, 245) 100%)", backgroundClip: "text" }}>MiniMax H3</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(0,217,245)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]text-[rgb(0, 217, 245)]" style={{ backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]" style={{ color: "transparent", backgroundImage: "radial-gradient(circle, rgb(0, 217, 245) 0px, rgb(0, 217, 245) 50%, rgb(0, 217, 245) 100%)", backgroundClip: "text" }}>Wan 3.0 & Prime</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(0,217,245)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(0, 230, 168)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling 3.0</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(0,230,168)]"><span>30-DAY UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px] opacity-40" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="8" height="8"><use xlinkHref="#commonClose" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedance 2.0</span></div>
                              <div className="flex-1"></div>
                            </div>
                          </div>
                          <div className="flex text-[12px] w-full cursor-pointer items-center gap-[6px] pt-[10px] text-left text-[#d1fe17]">
                            <svg aria-hidden="true" className="svg-icon" width="12" height="12"><use xlinkHref="#IconPlus" fill="currentColor"></use></svg>
                            <div className="flex-1">7 Other Unlimited Models</div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[16px] shrink-0 text-font-brand"><path data-v-4e907435="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 16 3.646-3.646a.5.5 0 0 0 0-.708L10 8"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[277px] xl:max-w-full box-border relative rounded-[16px] shrink-0 flex-1 max-w-[444px] bg-[rgb(255,0,91)]">
              <div className="h-[32px] w-full flex justify-center items-center">
                <div className="flex items-center justify-center gap-[10px] text-[11px]">
                  <div className="flex items-center gap-[4px] text-white">
                    <svg aria-hidden="true" className="svg-icon" width="11" height="11"><use xlinkHref="#pricingstar" fill="currentColor"></use></svg>
                    <div className="font-semibold box-border">BEST VALUE</div>
                    <div className="font-semibold backdrop-blur-[20px] box-border h-[26px] flex items-center justify-center px-[8px] rounded-full text-[rgb(237,21,114)]" style={{ background: "radial-gradient(57.09% 62.67% at 50% 100%, rgba(237, 21, 114, 0.5) 0%, rgba(237, 21, 114, 0.1) 100%), rgb(255, 255, 255)", boxShadow: "rgba(28, 29, 30, 0.16) 0px 12px 24px 0px, rgba(66, 75, 79, 0.16) 0px 6px 12px 0px", border: "2px solid rgba(255, 255, 255, 0)"}}>Seedance 2.5 Best Price</div>
                  </div>
                </div>
              </div>
              <div className="flex relative box-border shrink-0 flex-1 rounded-[16px] relative z-2 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)]" style={{ background: "linear-gradient(rgba(237, 21, 114, 0.09), rgba(237, 21, 114, 0.3)), rgb(15, 17, 19)", borderWidth: "medium 2px 2px", borderStyle: "none solid solid", borderColor: "currentcolor rgb(255, 0, 91) rgb(255, 0, 91)", borderImage: "none" }}>
                <div className="z-2 relative flex-1 flex flex-col">
                  <div className="px-[16px] pt-[20px] pb-[12px] border-b-1 border-b-solid border-white/6">
                    <div className="flex items-center gap-[4px] mb-[2px]">
                      <div className="text-white text-[14px] md:text-[20px] font-medium">Ultimate</div>
                      <div className="flex gap-[4px]">
                        <div className="tag text-[12px] flex justify-center items-center font-medium gap-[4px] text-white rounded-full px-[6px] h-[26px]"><svg className="size-[14px]" aria-hidden="true" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-19671287="" fillRule="evenodd" clipRule="evenodd" d="M5 3.5H3.75C3.33579 3.5 3 3.16421 3 2.75C3 2.33579 3.33579 2 3.75 2H20.25C20.6642 2 21 2.33579 21 2.75C21 3.16421 20.6642 3.5 20.25 3.5H19V7.45273C19 8.04945 18.6959 8.60505 18.1933 8.92671L13.3913 12L18.1933 15.0733C18.6959 15.395 19 15.9505 19 16.5473V20.5H20.25C20.6642 20.5 21 20.8358 21 21.25C21 21.6642 20.6642 22 20.25 22H3.75C3.33579 22 3 21.6642 3 21.25C3 20.8358 3.33579 20.5 3.75 20.5H5V16.5473C5 15.9505 5.30406 15.395 5.80666 15.0733L10.6087 12L5.80666 8.92671C5.30406 8.60505 5 8.04945 5 7.45273V3.5ZM6.5 7H17.5V3.5H6.5V7ZM17.5 16.5473V18H6.5V16.5473C6.5 16.462 6.54344 16.3827 6.61524 16.3367L12 12.8904L17.3848 16.3367C17.4566 16.3827 17.5 16.462 17.5 16.5473Z" fill="currentColor"></path></svg>LIMITED OFFER</div>
                        <div className="tag text-[12px] flex justify-center items-center font-medium gap-[4px] text-white rounded-full px-[6px] h-[26px]">52% OFF</div>
                      </div>
                    </div>
                    <p className="text-white/40 text-[12px] m-0 mb-[4px] leading-[24px] truncate">For experts scaling production to the max</p>
                    <div className="bg-white/5 min-h-[109px] border border-[rgba(217,217,217,0.04)] rounded-[12px] p-[12px] box-border flex flex-col justify-between">
                      <div className="flex gap-[8px] text-white text-[14px] font-normal">
                        <div className="flex justify-center items-center h-[16px]">
                          <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#pricingstar" fill="currentColor"></use></svg>
                        </div>
                        <div className="flex flex-col flex-4">
                          <div className="flex items-center gap-[4px] text-[14px]">
                            <div className="display: flex; align-items: center;">
                              8000 credits/mo.
                            </div>
                          </div>
                          <div className="text-white/80 font-normal text-[12px] mt-[4px] mb-[4px]">= 166 Seedance 2.5 videos</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-[12px] h-[36px] box-border flex justify-center items-center text-[12px] gap-[4px] text-white/50">
                        <svg aria-hidden="true" className="svg-icon" width="18" height="18"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                        Fixed amount of 8000 credits/mo
                      </div>
                    </div>
                    <div className="mb-[10px] SpaceGrotesk mt-[12px]">
                      <span className="text-[#ff005b] text-[28px] mr-[10px] line-through">$229</span>
                      <span className="text-white text-[28px] font-semibold">$109.6</span>
                      <span className="text-white/60 text-[14px] ml-[4px] font-semibold">/mo</span>
                    </div>
                    <div className="text-[12px] text-white/60">Billed annually</div>
                    <div className="flex flex-col mt-[12px] rounded-[12px] bg-white/5">
                      <div className="h-[48px] flex items-center justify-center">
                        <button type="button" onClick={() => window.location.assign("/checkout?plan=loova-ultimate")} className="text-black w-full h-full rounded-[12px] text-[14px] ui-el-button-primary-green cursor-pointer">
                          <span className="text-[16px]">Upgrade to Ultimate</span>
                        </button>
                      </div>
                      <div className="text-[12px] flex justify-center items-center text-white/40 gap-[4px] h-[34px]">
                        <span>Save ~$1429 compared to monthly</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-[16px] box-border">
                    <div className="list-none flex flex-col gap-[10px] p-0 m-0 mb-[12px]">
                      <div className="flex flex-col items-start justify-between gap-[4px]">
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Concurrent: Video 12 & Image 21</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to basic image & video models</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to basic editing models</div></div>
                        </div>
                        <div className="flex items-start text-white/80">
                          <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                          <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Access to AI Agent & advanced AI features</div></div>
                        </div>
                        <div className="flex items-start justify-between gap-[4px] w-full">
                          <div className="flex items-start text-white/80">
                            <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                            <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">Lowest cost per credit</div></div>
                          </div>
                          <div className="flex items-center justify-center text-[10px] rounded-[6px] h-[18px] px-[4px] text-black font-medium bg-[rgb(255,229,0)]">80% cheaper</div>
                        </div>
                        <div className="flex items-start justify-between gap-[4px] w-full">
                          <div className="flex items-start text-white/80">
                            <div className="h-[22px] w-[16px] flex justify-center items-center shrink-0 mr-[6px] relative"><svg aria-hidden="true" className="svg-icon" width="16" height="16"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                            <div className="leading-[20px]"><div className="text-[12px] leading-[20px] el-tooltip__trigger el-tooltip__trigger">15% off extra credits</div></div>
                          </div>
                          <div className="flex items-center justify-center text-[10px] rounded-[6px] h-[18px] px-[4px] text-black font-medium bg-[rgb(255,229,0)]">Extra</div>
                        </div>
                      </div>
                      <div className="border border-[rgba(217,217,217,0.04)] border-solid rounded-[12px] bg-white/10 border-white/4 border-solid border-1 backdrop-blur-[4.5px] p-[12px] box-border mb-[20px]">
                        <div className="flex h-[24px] mb-[8px]">
                          <div className="text-white flex text-[14px] font-semibold flex items-center">
                            <svg aria-hidden="true" className="svg-icon mr-2" width="14" height="14"><use xlinkHref="#pricingUnlock" fill="currentColor"></use></svg>
                            <span className="el-tooltip__trigger">BEST PRICE</span>
                          </div>
                          <div className="flex-1"></div>
                          <div className="ml-[8px]"><a href="/ai-video-model/seedance/seedance-best-price" className=""><span className="text-[11px] text-white/60 font-medium underline">Compare Pricing</span></a></div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 0, 91)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]" style={{ color: "transparent", backgroundImage: "radial-gradient(circle, rgb(247, 121, 200) 0px, rgb(255, 105, 180) 50%, rgb(255, 0, 91) 100%)", backgroundClip: "text" }}>Seedance 2.5</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-[#ffe500] text-black font-medium mr-[5px] text-nowrap"><span>-60%</span></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap" style={{ background: "linear-gradient(270deg, rgb(238, 21, 119) 0%, rgb(243, 25, 157) 50%, rgb(239, 23, 120) 100%); color: rgb(0, 0, 0)" }}>30s</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] text-center leading-[1.1] py-[1px] px-[4px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger" style={{ backgroundImage: "radial-gradient(circle, rgb(247, 121, 200) 0px, rgb(255, 105, 180) 50%, rgb(255, 0, 91) 100%)" }}>30 FREE GENS</div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 0, 91)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]" style={{ color: "transparent", backgroundImage: "radial-gradient(circle, rgb(247, 121, 200) 0px, rgb(255, 105, 180) 50%, rgb(255, 0, 91) 100%)", backgroundClip: "text" }}>Seedance 2.0</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap">4K</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-[#ffe500] text-black font-medium mr-[5px] text-nowrap"><span>-40%</span></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[4px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger" style={{ backgroundImage: "radial-gradient(circle, rgb(247, 121, 200) 0px, rgb(255, 105, 180) 50%, rgb(255, 0, 91) 100%)" }}><span>720p · $0.08/s</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Wan 3.0 / 3.0 Prime</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-[#ffe500] text-black font-medium mr-[5px] text-nowrap"><span>-40%</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-[rgba(217,217,217,0.04)] border-solid rounded-[12px] bg-white/10 border-white/4 border-solid border-1 backdrop-blur-[4.5px] p-[12px] box-border" style={{ background: "radial-gradient(211% 211% at 50.16% 100%, rgba(60, 140, 255, 0.2) 0%, rgba(60, 140, 255, 0) 100%), radial-gradient(64.4% 64.4% at 50.16% 100%, rgba(60, 216, 255, 0.2) 0%, rgba(60, 216, 255, 0) 100%), rgba(255, 255, 255, 0.05)" }}>
                        <div className="flex h-[24px] mb-[8px]">
                          <div className="text-white flex text-[14px] font-semibold items-center">
                            <svg aria-hidden="true" className="svg-icon mr-2" width="14" height="14"><use xlinkHref="#pricingUnlock" fill="currentColor"></use></svg>
                            <span>UNLIMITED GENERATION</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling O1 Video & Edit</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 255, 255)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling Motion Control</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 229, 0)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Nano Banana 2 & Pro</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap">2K</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 229, 0)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">GPT Image 2.5 & 2</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] h-[18px] px-[4px] bg-white/10 text-white font-medium mr-[5px] text-nowrap">2K</div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 229, 0)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedream 5.0 Pro</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(255,229,0)]"><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 0, 91)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]" style={{ color: "transparent", backgroundImage: "radial-gradient(circle, rgb(247, 121, 200) 0px, rgb(255, 105, 180) 50%, rgb(255, 0, 91) 100%)", backgroundClip: "text" }}>MiniMax H3</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger" style={{ backgroundImage: "radial-gradient(circle, rgb(247, 121, 200) 0px, rgb(255, 105, 180) 50%, rgb(255, 0, 91) 100%)" }}><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(255, 0, 91)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]" style={{ color: "transparent", backgroundImage: "radial-gradient(circle, rgb(247, 121, 200) 0px, rgb(255, 105, 180) 50%, rgb(255, 0, 91) 100%)", backgroundClip: "text" }}>Wan 3.0 & Prime</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger" style={{ backgroundImage: "radial-gradient(circle, rgb(247, 121, 200) 0px, rgb(255, 105, 180) 50%, rgb(255, 0, 91) 100%)" }}><span>365 UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(0, 230, 168)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Kling 3.0</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(0,230,168)]"><span>30-DAY UNLIMITED</span></div>
                            </div>
                            <div className="flex h-[36px] items-center rounded-[8px] box-border px-[6px]" style={{ color: "rgb(0, 230, 168)", backgroundColor: "color-mix(rgb(255, 255, 255) 5%, transparent 95%)" }}>
                              <div className="w-[14px] flex justify-center items-center"><svg aria-hidden="true" className="svg-icon" width="14" height="14"><use xlinkHref="#correct" fill="currentColor"></use></svg></div>
                              <div className="flex flex-col justify-center ml-[4px] gap-[2px] el-tooltip__trigger el-tooltip__trigger"><span className="text-[12px] leading-[1.2]">Seedance 2.0</span></div>
                              <div className="flex-1"></div>
                              <div className="flex justify-center items-center text-[10px] rounded-[6px] min-h-[16px] text-center leading-[1.1] py-[1px] px-[5px] font-medium text-nowrap exclusive-tag text-black el-tooltip__trigger el-tooltip__trigger bg-[rgb(0,230,168)]"><span>30-DAY UNLIMITED</span></div>
                            </div>
                          </div>
                          <div className="flex text-[12px] w-full cursor-pointer items-center gap-[6px] pt-[10px] text-left text-[#d1fe17]">
                            <svg aria-hidden="true" className="svg-icon" width="12" height="12"><use xlinkHref="#IconPlus" fill="currentColor"></use></svg>
                            <div className="flex-1">7 Other Unlimited Models</div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[16px] shrink-0 text-font-brand"><path data-v-4e907435="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 16 3.646-3.646a.5.5 0 0 0 0-.708L10 8"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Choose Payment Method</DialogTitle>
            <DialogDescription>
              Pick your preferred way to pay. All transactions are secure and encrypted.
            </DialogDescription>
          </DialogHeader>
          <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value)} className="w-full">
            <FieldLabel htmlFor="card">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Credit Card</FieldTitle>
                    <FieldDescription className="flex flex-row gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g className="nc-icon-wrapper">
                          <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#fff" strokeWidth="0"></rect>
                          <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15"></path>
                          <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0"></path>
                          <path fill="#ff5f00" strokeWidth="0" d="M13.597 11.677H18.407V20.32H13.597z"></path>
                          <path d="m13.902,15.999c0-1.68.779-3.283,2.092-4.322-2.382-1.878-5.849-1.466-7.727.932-1.863,2.382-1.451,5.833.947,7.712,2,1.573,4.795,1.573,6.795,0-1.329-1.038-2.107-2.642-2.107-4.322Z" fill="#eb001b" strokeWidth="0"></path>
                          <path d="m24.897,15.999c0,3.039-2.459,5.497-5.497,5.497-1.237,0-2.428-.412-3.39-1.176,2.382-1.878,2.795-5.329.916-7.727-.275-.336-.58-.657-.916-.916,2.382-1.878,5.849-1.466,7.712.932.764.962,1.176,2.153,1.176,3.39Z" fill="#f79e1b" strokeWidth="0"></path>
                        </g>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g className="nc-icon-wrapper">
                          <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#fff" strokeWidth="0"></rect>
                          <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15"></path>
                          <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0"></path>
                          <path d="m13.392,12.624l-2.838,6.77h-1.851l-1.397-5.403c-.085-.332-.158-.454-.416-.595-.421-.229-1.117-.443-1.728-.576l.041-.196h2.98c.38,0,.721.253.808.69l.738,3.918,1.822-4.608h1.84Z" fill="#1434cb" strokeWidth="0"></path>
                          <path d="m20.646,17.183c.008-1.787-2.47-1.886-2.453-2.684.005-.243.237-.501.743-.567.251-.032.943-.058,1.727.303l.307-1.436c-.421-.152-.964-.299-1.638-.299-1.732,0-2.95.92-2.959,2.238-.011.975.87,1.518,1.533,1.843.683.332.912.545.909.841-.005.454-.545.655-1.047.663-.881.014-1.392-.238-1.799-.428l-.318,1.484c.41.188,1.165.351,1.947.359,1.841,0,3.044-.909,3.05-2.317" fill="#1434cb" strokeWidth="0"></path>
                          <path d="m25.423,12.624h-1.494c-.337,0-.62.195-.746.496l-2.628,6.274h1.839l.365-1.011h2.247l.212,1.011h1.62l-1.415-6.77Zm-2.16,4.372l.922-2.542.53,2.542h-1.452Z" fill="#1434cb" strokeWidth="0"></path>
                          <path fill="#1434cb" strokeWidth="0" d="M15.894 12.624L14.446 19.394 12.695 19.394 14.143 12.624 15.894 12.624z"></path>
                        </g>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g className="nc-icon-wrapper">
                          <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#0f70ce" strokeWidth="0"></rect>
                          <path d="m27.026,9l-.719,1.965-.708-1.965h-3.885v2.582l-1.136-2.582h-3.119l-3.259,7.409h2.637v6.591h8.097l1.316-1.458,1.322,1.458h2.244c.112-.314.184-.647.184-1v-1.041l-1.58-1.698,1.58-1.655v-7.606c0-.353-.072-.686-.184-1h-2.79Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m17.679,14.433h2.61l.502,1.148h1.78l-2.531-5.754h-2.039l-2.531,5.754h1.734l.477-1.148Zm1.307-3.135l.775,1.844h-1.535l.761-1.844Z" fill="#0f70ce" strokeWidth="0"></path>
                          <path fill="#0f70ce" strokeWidth="0" d="M22.542 9.827L25.018 9.827 26.302 13.39 27.604 9.827 30 9.827 30 15.581 28.45 15.581 28.45 11.603 26.977 15.581 25.608 15.581 24.124 11.631 24.124 15.581 22.542 15.581 22.542 9.827z"></path>
                          <path fill="#0f70ce" strokeWidth="0" d="M19.24 20.82L19.24 19.944 22.484 19.944 22.484 18.624 19.24 18.624 19.24 17.748 22.565 17.748 22.565 16.409 17.664 16.409 17.664 22.173 22.565 22.173 22.565 20.82 19.24 20.82z"></path>
                          <path fill="#0f70ce" strokeWidth="0" d="M24.638 16.409L26.271 18.234 27.968 16.409 30 16.409 27.283 19.254 30 22.173 27.939 22.173 26.249 20.309 24.567 22.173 22.537 22.173 25.272 19.275 22.537 16.409 24.638 16.409z"></path>
                          <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15"></path>
                          <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0"></path>
                        </g>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g className="nc-icon-wrapper">
                          <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#fff" strokeWidth="0"></rect>
                          <path d="m27,7h-8c4.971,0,9,4.029,9,9s-4.029,9-9,9h8c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Z" fill="#f47922" strokeWidth="0"></path>
                          <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15"></path>
                          <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0"></path>
                          <path d="m5.081,14.116h-1.081v3.777h1.076c.572,0,.985-.135,1.348-.436.431-.357.686-.894.686-1.45,0-1.115-.833-1.891-2.027-1.891Zm.86,2.837c-.231.209-.532.3-1.008.3h-.198v-2.497h.198c.476,0,.765.085,1.008.305.255.227.408.578.408.94s-.153.725-.408.952Z" fill="#231f20" strokeWidth="0"></path>
                          <path fill="#231f20" strokeWidth="0" d="M7.448 14.116H8.185V17.893H7.448z"></path>
                          <path d="m9.986,15.565c-.442-.164-.572-.271-.572-.475,0-.238.231-.419.549-.419.221,0,.402.091.594.306l.386-.505c-.317-.277-.696-.419-1.11-.419-.668,0-1.178.464-1.178,1.082,0,.52.237.787.929,1.036.288.102.435.17.509.215.147.096.221.232.221.391,0,.306-.243.533-.572.533-.351,0-.634-.175-.804-.504l-.476.458c.339.498.747.719,1.308.719.766,0,1.303-.509,1.303-1.24,0-.6-.248-.872-1.086-1.178Z" fill="#231f20" strokeWidth="0"></path>
                          <path d="m11.305,16.007c0,1.11.872,1.971,1.994,1.971.317,0,.589-.062.924-.22v-.867c-.295.295-.555.414-.889.414-.742,0-1.269-.538-1.269-1.303,0-.725.543-1.297,1.234-1.297.351,0,.617.125.924.425v-.867c-.323-.164-.589-.232-.906-.232-1.116,0-2.011.878-2.011,1.976Z" fill="#231f20" strokeWidth="0"></path>
                          <path fill="#231f20" strokeWidth="0" d="M20.063 16.653L19.056 14.116 18.251 14.116 19.854 17.99 20.25 17.99 21.882 14.116 21.083 14.116 20.063 16.653z"></path>
                          <path fill="#231f20" strokeWidth="0" d="M22.215 17.893L24.304 17.893 24.304 17.253 22.951 17.253 22.951 16.234 24.254 16.234 24.254 15.594 22.951 15.594 22.951 14.756 24.304 14.756 24.304 14.116 22.215 14.116 22.215 17.893z"></path>
                          <path d="m27.221,15.231c0-.707-.487-1.115-1.337-1.115h-1.092v3.777h.736v-1.517h.096l1.02,1.517h.906l-1.189-1.591c.555-.113.861-.492.861-1.071Zm-1.478.624h-.216v-1.144h.227c.459,0,.708.192.708.56,0,.38-.249.584-.72.584Z" fill="#231f20" strokeWidth="0"></path>
                          <path d="m18.461,16c0,1.105-.895,2-2,2s-2-.895-2-2,.895-2,2-2,2,.895,2,2Z" fill="#f47922" strokeWidth="0"></path>
                        </g>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g className="nc-icon-wrapper">
                          <defs>
                            <linearGradient id="1713519663151-4901204_linear-gradient" x1="-19.684" y1="197.034" x2="-16.872" y2="197.034" gradientTransform="matrix(2.049 0 0 -2.049 59.917 420.647)" gradientUnits="userSpaceOnUse">
                              <stop offset="0" stopColor="#007940"></stop>
                              <stop offset=".228" stopColor="#00873f"></stop>
                              <stop offset=".743" stopColor="#40a737"></stop>
                              <stop offset="1" stopColor="#5cb531"></stop>
                            </linearGradient>
                            <linearGradient id="1713519663151-4901204_linear-gradient-2" x1="-19.684" y1="197.469" x2="-16.875" y2="197.469" href="#1713519663151-4901204_linear-gradient"></linearGradient>
                            <linearGradient id="1713519663151-4901204_linear-gradient-3" x1="-19.684" y1="197.947" x2="-16.872" y2="197.947" href="#1713519663151-4901204_linear-gradient"></linearGradient>
                            <linearGradient id="1713519663151-4901204_linear-gradient-4" x1="-25.978" y1="197.472" x2="-23.123" y2="197.472" gradientTransform="matrix(2.049 0 0 -2.049 59.917 420.647)" gradientUnits="userSpaceOnUse">
                              <stop offset="0" stopColor="#1f286f"></stop>
                              <stop offset=".475" stopColor="#004e94"></stop>
                              <stop offset=".826" stopColor="#0066b1"></stop>
                              <stop offset="1" stopColor="#006fbc"></stop>
                            </linearGradient>
                            <linearGradient id="1713519663151-4901204_linear-gradient-5" x1="-22.846" y1="197.466" x2="-20.073" y2="197.466" gradientTransform="matrix(2.049 0 0 -2.049 59.917 420.647)" gradientUnits="userSpaceOnUse">
                              <stop offset="0" stopColor="#6c2c2f"></stop>
                              <stop offset=".174" stopColor="#882730"></stop>
                              <stop offset=".573" stopColor="#be1833"></stop>
                              <stop offset=".858" stopColor="#dc0436"></stop>
                              <stop offset="1" stopColor="#e60039"></stop>
                            </linearGradient>
                          </defs>
                          <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#fff" strokeWidth="0"></rect>
                          <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15"></path>
                          <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0"></path>
                          <path id="1713519663151-4901204_path6338" d="m20.724,17.5h1.346c.038,0,.128-.013.167-.013.256-.051.474-.282.474-.603,0-.308-.218-.538-.474-.603-.038-.013-.115-.013-.167-.013h-1.346v1.231h0Z" fill="url(#1713519663151-4901204_linear-gradient)" strokeWidth="0"></path>
                          <path id="1713519663151-4901204_path6349" d="m21.917,9c-1.282,0-2.333,1.038-2.333,2.333v2.423h3.295c.077,0,.167,0,.231.013.744.038,1.295.423,1.295,1.09,0,.526-.372.974-1.064,1.064v.026c.756.051,1.333.474,1.333,1.128,0,.705-.641,1.167-1.487,1.167h-3.615v4.744h3.423c1.282,0,2.333-1.038,2.333-2.333v-11.654h-3.41,0Z" fill="url(#1713519663151-4901204_linear-gradient-2)" strokeWidth="0"></path>
                          <path id="1713519663151-4901204_path6360" d="m22.545,15.013c0-.308-.218-.513-.474-.551-.026,0-.09-.013-.128-.013h-1.218v1.128h1.218c.038,0,.115,0,.128-.013.256-.038.474-.244.474-.551Z" fill="url(#1713519663151-4901204_linear-gradient-3)" strokeWidth="0"></path>
                          <path id="1713519663151-4901204_path6371" d="m9.019,9c-1.282,0-2.333,1.038-2.333,2.333v5.756c.654.321,1.333.526,2.013.526.808,0,1.244-.487,1.244-1.154v-2.718h2v2.705c0,1.051-.654,1.91-2.872,1.91-1.346,0-2.397-.295-2.397-.295v4.91h3.423c1.282,0,2.333-1.038,2.333-2.333v-11.641s-3.41,0-3.41,0Z" fill="url(#1713519663151-4901204_linear-gradient-4)" strokeWidth="0"></path>
                          <path id="1713519663151-4901204_path6384" d="m15.468,9c-1.282,0-2.333,1.038-2.333,2.333v3.051c.59-.5,1.615-.821,3.269-.744.885.038,1.833.282,1.833.282v.987c-.474-.244-1.038-.462-1.769-.513-1.256-.09-2.013.526-2.013,1.603,0,1.09.756,1.705,2.013,1.603.731-.051,1.295-.282,1.769-.513v.987s-.936.244-1.833.282c-1.654.077-2.679-.244-3.269-.744v5.385h3.423c1.282,0,2.333-1.038,2.333-2.333v-11.667s-3.423,0-3.423,0Z" fill="url(#1713519663151-4901204_linear-gradient-5)" strokeWidth="0"></path>
                        </g>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g className="nc-icon-wrapper">
                          <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#fff" strokeWidth="0"></rect>
                          <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15"></path>
                          <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0"></path>
                          <path d="m9.193,9h5.586c.78,0,1.265.636,1.083,1.419l-2.601,11.165c-.184.781-.964,1.416-1.744,1.416h-5.586c-.78,0-1.265-.636-1.083-1.416l2.602-11.165c.181-.783.961-1.419,1.743-1.419" fill="#ed171f" strokeWidth="0"></path>
                          <path d="m14.314,9h6.424c.78,0,.428.636.245,1.419l-2.601,11.165c-.182.781-.125,1.416-.906,1.416h-6.423c-.781,0-1.265-.636-1.081-1.416l2.6-11.165c.184-.783.963-1.419,1.743-1.419" fill="#082f67" strokeWidth="0"></path>
                          <path d="m20.484,9h5.585c.78,0,1.265.636,1.082,1.419l-2.601,11.165c-.183.781-.963,1.416-1.745,1.416h-5.584c-.782,0-1.266-.636-1.082-1.416l2.6-11.165c.183-.783.963-1.419,1.745-1.419" fill="#006a65" strokeWidth="0"></path>
                          <path d="m19.551,19.504h.527l.152-.506h-.527l-.152.506Zm.421-1.397l-.181.599s.2-.103.308-.134c.108-.025.272-.045.272-.045l.128-.419h-.527Zm.262-.862l-.175.576s.196-.088.303-.118c.108-.028.271-.039.271-.039l.126-.419h-.526Zm1.165,0l-.681,2.253h.183l-.141.466h-.183l-.042.145h-.648l.044-.145h-1.317l.132-.431h.133l.691-2.287.138-.462h.661l-.069.234s.176-.127.343-.17c.167-.044,1.125-.06,1.125-.06l-.142.459h-.226Z" fill="#fff" fillRule="evenodd" strokeWidth="0"></path>
                          <path d="m21.69,16.786h.705l.008.263c-.004.044.034.065.115.065h.143l-.131.434h-.381c-.33.024-.455-.118-.448-.277l-.013-.485Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m21.783,18.845h-.672l.115-.387h.768l.11-.352h-.759l.13-.436h2.112l-.132.436h-.708l-.111.352h.71l-.117.387h-.769l-.136.163h.311l.076.487c.008.048.01.079.025.1.016.018.109.026.163.026h.095l-.144.474h-.24c-.037,0-.092-.003-.167-.007-.073-.006-.124-.048-.172-.071-.044-.022-.11-.075-.125-.166l-.075-.486-.349.479c-.111.151-.261.266-.514.266h-.49l.128-.423h.187c.054,0,.102-.021.137-.039.036-.015.068-.033.104-.087l.508-.717Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m14.419,17.787h1.78l-.132.425h-.712l-.111.361h.728l-.133.439h-.728l-.176.589c-.022.065.172.075.242.075l.365-.05-.146.485h-.821c-.065,0-.115-.009-.187-.025-.069-.017-.1-.048-.13-.095-.03-.048-.075-.087-.044-.19l.236-.78h-.404l.134-.446h.407l.108-.361h-.405l.13-.425Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m15.618,17.023h.73l-.134.444h-.998l-.108.093c-.046.045-.062.026-.122.059-.056.029-.175.085-.329.085h-.32l.13-.427h.096c.081,0,.137-.007.164-.025.032-.02.067-.065.108-.139l.183-.333h.727l-.127.243Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m17.019,17.754s.199-.182.54-.241c.078-.015.563-.01.563-.01l.073-.244h-1.028l-.149.495Zm.963.186h-1.02l-.062.206h.882c.104-.013.126.002.134-.003l.066-.203Zm-1.321-1.154h.622l-.09.313s.196-.157.334-.213c.137-.051.447-.097.447-.097l1.006-.005-.343,1.142c-.057.196-.125.323-.167.38-.038.059-.083.108-.171.156-.085.045-.162.072-.233.079-.067.005-.169.008-.31.009h-.969l-.274.904c-.026.089-.038.132-.021.156.014.022.047.046.093.046l.427-.04-.146.496h-.479c-.152,0-.263-.003-.341-.009-.074-.006-.151,0-.202-.04-.045-.039-.113-.09-.111-.143.005-.049.025-.131.057-.242l.871-2.89Z" fill="#fff" fillRule="evenodd" strokeWidth="0"></path>
                          <path d="m18.475,18.63l-.057.274c-.025.085-.047.151-.111.206-.067.057-.148.118-.335.118l-.345.014-.003.311c-.005.088.019.079.033.093.016.015.03.022.046.027l.109-.005.33-.019-.136.453h-.379c-.265,0-.462-.006-.527-.057-.063-.04-.072-.091-.07-.178l.024-1.209h.604l-.008.247h.146c.049,0,.082-.005.104-.018.018-.014.031-.033.041-.064l.059-.193h.475Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m9.854,12.567c-.022.097-.409,1.886-.411,1.887-.084.362-.143.621-.35.786-.117.096-.254.144-.412.144-.254,0-.403-.126-.429-.367l-.005-.082s.077-.485.078-.487c0,0,.407-1.63.479-1.845.003-.012.005-.018.006-.024-.792.007-.933,0-.942-.012-.005.016-.026.117-.026.117l-.416,1.836-.036.157-.068.509c0,.15.03.274.089.379.19.332.73.381,1.035.381.394,0,.762-.084,1.011-.236.433-.256.547-.657.648-1.012l.047-.182s.419-1.693.491-1.914c.002-.012.003-.018.006-.024-.574.006-.743,0-.797-.012" fill="#fff" strokeWidth="0"></path>
                          <path d="m12.172,15.927c-.281-.004-.38-.004-.708.013l-.013-.024c.029-.125.06-.248.088-.375l.04-.171c.061-.266.121-.576.128-.669.006-.057.024-.199-.137-.199-.069,0-.14.034-.211.066-.04.142-.12.538-.157.72-.082.382-.087.425-.123.614l-.024.025c-.29-.004-.39-.004-.723.013l-.016-.028c.056-.227.111-.456.165-.682.14-.615.173-.85.212-1.162l.026-.019c.325-.046.404-.055.755-.127l.03.033-.053.196c.059-.035.115-.071.177-.102.166-.082.35-.106.452-.106.153,0,.322.043.392.221.067.159.023.355-.065.74l-.045.196c-.09.429-.105.508-.155.802l-.033.025Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m13.313,15.927c-.169,0-.278-.004-.384,0-.106,0-.209.006-.366.014l-.01-.014-.011-.014c.043-.163.067-.22.088-.277.022-.057.042-.115.08-.28.049-.215.079-.366.101-.497.022-.128.035-.236.051-.362l.013-.01.014-.012c.168-.024.276-.039.384-.056.11-.016.222-.038.396-.071l.007.015.005.015c-.032.133-.065.266-.097.402-.031.135-.064.267-.093.401-.064.283-.088.388-.104.464-.014.072-.019.111-.044.258l-.015.013-.016.012Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m15.103,14.929c-.015.073-.079.344-.166.459-.06.085-.131.136-.21.136-.022,0-.161,0-.164-.206-.002-.101.02-.207.045-.319.074-.327.161-.602.384-.602.175,0,.187.204.111.532m.734.031c.099-.432.023-.634-.073-.758-.147-.187-.405-.247-.673-.247-.161,0-.545.016-.845.294-.215.199-.315.47-.375.729-.06.264-.13.741.308.918.136.057.329.073.455.073.321,0,.65-.088.896-.351.192-.213.279-.529.308-.659" fill="#fff" strokeWidth="0"></path>
                          <path d="m22.706,15.957c-.339-.003-.436-.003-.75.01l-.021-.025c.086-.322.171-.644.247-.969.098-.423.121-.602.154-.85l.025-.021c.336-.048.43-.062.781-.126l.011.029c-.064.265-.129.53-.19.797-.129.557-.176.841-.226,1.132l-.031.024Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m22.196,14.967c-.016.069-.08.343-.167.457-.057.081-.194.133-.273.133-.022,0-.16,0-.165-.204-.001-.1.02-.206.046-.319.074-.32.161-.594.384-.594.175,0,.25.199.175.528m.67.032c.098-.43-.298-.038-.361-.18-.097-.221-.036-.67-.427-.82-.15-.058-.503.017-.804.292-.213.198-.315.466-.374.725-.061.26-.13.737.305.907.138.058.264.075.389.07.438-.024.772-.685,1.019-.947.191-.207.224.078.253-.048" fill="#fff" strokeWidth="0"></path>
                          <path d="m17.756,15.927c-.282-.004-.377-.004-.708.013l-.012-.024c.028-.125.06-.248.089-.375l.039-.171c.061-.266.121-.576.127-.669.006-.057.024-.199-.136-.199-.07,0-.14.034-.212.066-.039.142-.12.538-.158.72-.08.382-.086.425-.122.614l-.024.025c-.29-.004-.389-.004-.722.013l-.015-.028c.055-.227.11-.456.163-.682.14-.615.173-.85.211-1.162l.026-.019c.325-.046.404-.055.755-.127l.028.033-.051.196c.058-.035.116-.071.176-.102.165-.082.351-.106.45-.106.154,0,.323.043.395.221.066.159.021.355-.067.74l-.044.196c-.092.429-.106.508-.155.802l-.035.025Z" fill="#fff" strokeWidth="0"></path>
                          <path d="m20.191,12.564s-.233.003-.233.003c-.607.007-.851.004-.951-.008-.01.044-.026.123-.026.123l-.217,1.01s-.52,2.144-.545,2.245c.53-.006.747-.006.838.003.021-.101.145-.699.145-.699,0,0,.106-.44.112-.456,0,0,.033-.045.066-.063h.048c.457,0,.974,0,1.378-.298.275-.204.464-.506.548-.871.022-.09.038-.198.038-.304,0-.14-.028-.279-.11-.388-.206-.289-.616-.293-1.091-.296m.304,1.05c-.05.223-.194.412-.381.503-.155.078-.343.083-.537.083h-.125l.009-.05s.232-1.007.231-1.004l.007-.051.004-.04.092.01s.476.041.488.043c.189.072.266.261.211.506" fill="#fff" strokeWidth="0"></path>
                          <path d="m25.481,13.972l-.027-.03c-.346.069-.409.081-.728.123l-.024.023s-.002.01-.003.015l-.002-.005c-.237.548-.23.43-.423.861-.001-.02-.002-.033-.002-.054l-.048-.934-.03-.03c-.362.069-.372.081-.707.123l-.027.023c-.002.012-.003.024-.005.037l.003.005c.042.215.032.167.074.504.02.166.045.333.065.497.034.274.052.41.092.828-.226.375-.28.516-.496.845l.012.03c.328-.012.404-.012.646-.012l.054-.06c.183-.395,1.579-2.791,1.579-2.791" fill="#fff" strokeWidth="0"></path>
                          <path d="m13.622,14.204c.185-.129.209-.308.052-.401-.159-.093-.436-.064-.623.066-.188.128-.209.307-.052.4.157.091.435.065.623-.065" fill="#fff" strokeWidth="0"></path>
                          <path d="m23.878,16.796l-.273.467c-.086.159-.246.279-.501.28l-.435-.007.126-.421h.084c.045,0,.077-.003.103-.015.021-.007.037-.024.055-.049l.16-.255h.68Z" fill="#fff" strokeWidth="0"></path>
                        </g>
                      </svg>
                    </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="card" id="card" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="paypal">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>PayPal</FieldTitle>
                    <FieldDescription className="flex flex-row gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g className="nc-icon-wrapper">
                          <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#fff" strokeWidth="0"></rect>
                          <path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0" opacity=".15"></path>
                          <path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0"></path>
                          <path d="m5.03,12.792c-.069,0-.128.05-.139.119l-.801,5.082c-.011.071.037.138.108.149.007.001.013.002.02.002h.95c.069,0,.128-.05.139-.119l.235-1.492c.011-.068.07-.119.139-.119h.864c1.01,0,1.866-.737,2.023-1.735.158-1.007-.629-1.884-1.743-1.886h-1.796Zm.924,1.134h.691c.569,0,.754.336.696.707-.059.372-.346.646-.897.646h-.704l.213-1.353Zm4.548.345c-.24,0-.516.05-.826.179-.711.296-1.053.909-1.198,1.355,0,0-.462,1.362.581,2.111,0,0,.967.721,2.056-.044l-.019.119c-.011.071.037.138.108.149.007.001.013.002.02.002h.902c.069,0,.128-.05.139-.119l.549-3.48c.011-.071-.037-.138-.108-.149-.007-.001-.013-.002-.02-.002h-.902c-.069,0-.128.05-.139.119l-.029.187s-.394-.43-1.114-.428h0Zm.029,1.099c.104,0,.198.014.283.042.389.125.61.499.546.904-.079.499-.488.867-1.013.867-.103,0-.198-.014-.283-.042-.389-.125-.611-.499-.547-.904.079-.499.489-.867,1.014-.867h0Z" fill="#003087" strokeWidth="0"></path>
                          <path d="m18.022,12.792c-.069,0-.128.05-.139.119l-.801,5.082c-.011.071.037.138.108.149.007.001.013.002.02.002h.95c.069,0,.128-.05.139-.119l.235-1.492c.011-.068.07-.119.139-.119h.864c1.01,0,1.866-.737,2.023-1.735.158-1.007-.628-1.884-1.743-1.886h-1.796Zm.924,1.134h.691c.569,0,.754.336.696.707-.059.372-.346.646-.897.646h-.704l.213-1.353Zm4.548.345c-.24,0-.516.05-.826.179-.711.296-1.053.909-1.198,1.355,0,0-.461,1.362.581,2.111,0,0,.967.721,2.056-.044l-.019.119c-.011.071.037.138.108.149.007.001.013.002.02.002h.902c.069,0,.128-.05.139-.119l.549-3.48c.011-.071-.037-.138-.108-.149-.007-.001-.014-.002-.02-.002h-.902c-.069,0-.128.05-.139.119l-.029.187s-.394-.43-1.114-.428h0Zm.029,1.099c.104,0,.198.014.283.042.389.125.61.499.546.904-.079.499-.488.867-1.013.867-.103,0-.198-.014-.283-.042-.389-.125-.611-.499-.547-.904.079-.499.489-.867,1.014-.867h0Z" fill="#0070e0" strokeWidth="0"></path>
                          <path d="m13.243,14.394c-.072,0-.122.07-.101.138l.989,3.069-.894,1.446c-.043.07.007.161.09.161h1.057c.061,0,.118-.032.15-.085l2.762-4.569c.042-.07-.008-.16-.09-.16h-1.057c-.062,0-.12.033-.151.086l-1.087,1.836-.552-1.822c-.018-.059-.073-.1-.135-.1h-.981Z" fill="#003087" strokeWidth="0"></path>
                          <path d="m26.831,12.792c-.069,0-.128.05-.139.119l-.802,5.082c-.011.071.037.138.108.149.007.001.014.002.02.002h.95c.069,0,.128-.05.139-.119l.801-5.082c.011-.071-.037-.138-.108-.149-.007-.001-.013-.002-.02-.002h-.95Z" fill="#0070e0" strokeWidth="0"></path>
                        </g>
                      </svg>
                    </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="paypal" id="paypal" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="applepay">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Apple Pay</FieldTitle>
                    <FieldDescription className="flex flex-row gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g className="nc-icon-wrapper">
                          <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#e6e6e6" strokeWidth="0"></rect>
                          <g opacity=".15">
                            <path d="m27,7H5c-1.6569,0-3,1.3431-3,3v12c0,1.6569,1.3431,3,3,3h22c1.6569,0,3-1.3431,3-3v-12c0-1.6569-1.3431-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0"></path>
                          </g>
                          <path d="m27,8H5c-1.1046,0-2,.8954-2,2v1c0-1.1046.8954-2,2-2h22c1.1046,0,2,.8954,2,2v-1c0-1.1046-.8954-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0"></path>
                          <path d="m8.8469,12.8798c.2708-.3387.4545-.7935.4061-1.2582-.3964.0197-.8801.2615-1.1602.6005-.2515.2903-.474.7641-.416,1.2093.445.0386.8895-.2224,1.1701-.5516" fill="#1a1a1a" strokeWidth="0"></path>
                          <path d="m9.2479,13.5184c-.6462-.0385-1.1956.3668-1.5042.3668-.3088,0-.7813-.3474-1.2924-.338-.6652.0098-1.2825.3859-1.6201.9841-.6944,1.1968-.1832,2.972.492,3.9467.3279.4822.7231,1.0132,1.2438.9941.492-.0193.6848-.3186,1.2828-.3186.5976,0,.7713.3186,1.2921.3089.5401-.0097.8777-.4825,1.2056-.9651.3762-.5497.5302-1.0805.5398-1.1096-.0097-.0097-1.0414-.4055-1.051-1.5923-.0097-.9937.81-1.4664.8486-1.4957-.4629-.6847-1.1863-.7619-1.437-.7813" fill="#1a1a1a" strokeWidth="0"></path>
                          <path d="m14.8746,12.1735c1.4045,0,2.3825.9681,2.3825,2.3777,0,1.4146-.9981,2.3878-2.4178,2.3878h-1.5551v2.473h-1.1235v-7.2385h2.7138Zm-1.5903,3.8224h1.2892c.9782,0,1.535-.5266,1.535-1.4396s-.5567-1.4346-1.5299-1.4346h-1.2942v2.8743Z" fill="#1a1a1a" strokeWidth="0"></path>
                          <path d="m17.5507,17.9121c0-.9231.7073-1.4899,1.9615-1.5601l1.4446-.0852v-.4063c0-.5869-.3963-.9381-1.0583-.9381-.6272,0-1.0185.3009-1.1137.7725h-1.0233c.0602-.9532.8727-1.6554,2.177-1.6554,1.2791,0,2.0967.6772,2.0967,1.7356v3.6368h-1.0384v-.8678h-.025c-.3059.5869-.9732.9581-1.6654.9581-1.0334,0-1.7557-.6421-1.7557-1.5901Zm3.406-.4765v-.4163l-1.2993.0802c-.6471.0452-1.0132.3311-1.0132.7826,0,.4614.3812.7624.9631.7624.7574,0,1.3494-.5217,1.3494-1.2089Z" fill="#1a1a1a" strokeWidth="0"></path>
                          <path d="m23.0155,21.3533v-.8779c.0801.02.2607.02.351.02.5016,0,.7725-.2106.938-.7524,0-.0101.0954-.321.0954-.3261l-1.9061-5.2821h1.1737l1.3345,4.294h.0199l1.3345-4.294h1.1437l-1.9765,5.553c-.4513,1.2792-.973,1.6905-2.0665,1.6905-.0904,0-.3613-.0101-.4414-.0251Z" fill="#1a1a1a" strokeWidth="0"></path>
                        </g>
                      </svg>
                    </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="applepay" id="applepay" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="googlepay">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Google Pay</FieldTitle>
                    <FieldDescription className="flex flex-row gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g className="nc-icon-wrapper">
                          <rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#fff" strokeWidth="0"></rect>
                          <g opacity=".15">
                            <path d="m27,7H5c-1.6569,0-3,1.3431-3,3v12c0,1.6569,1.3431,3,3,3h22c1.6569,0,3-1.3431,3-3v-12c0-1.6569-1.3431-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" strokeWidth="0"></path>
                          </g>
                          <path d="m27,8H5c-1.1046,0-2,.8954-2,2v1c0-1.1046.8954-2,2-2h22c1.1046,0,2,.8954,2,2v-1c0-1.1046-.8954-2-2-2Z" fill="#fff" opacity=".2" strokeWidth="0"></path>
                          <path d="m14.8969,16.1308v2.7891h-.8997v-6.8978h2.3393c.5698,0,1.1097.2099,1.5295.5998.4199.3599.6298.8997.6298,1.4695s-.2099,1.0797-.6298,1.4695c-.4199.3899-.9297.5998-1.5295.5998l-1.4395-.03h0Zm0-3.269v2.3992h1.4995c.3299,0,.6598-.12.8697-.3599.4798-.4499.4798-1.1996.03-1.6495l-.03-.03c-.2399-.2399-.5398-.3899-.8697-.3599h-1.4995Z" fill="#5f6368" strokeWidth="0"></path>
                          <path d="m20.5651,14.0615c.6598,0,1.1696.1799,1.5595.5398s.5698.8397.5698,1.4396v2.8791h-.8397v-.6598h-.03c-.3599.5398-.8697.8097-1.4695.8097-.5098,0-.9597-.15-1.3196-.4499-.3299-.2999-.5398-.7198-.5398-1.1696,0-.4799.1799-.8697.5398-1.1696s.8697-.4199,1.4695-.4199c.5398,0,.9597.09,1.2896.2999v-.2099c0-.2999-.12-.5998-.3599-.7798-.2399-.2099-.5398-.3299-.8697-.3299-.5098,0-.8997.2099-1.1696.6298l-.7798-.4799c.4799-.6298,1.1097-.9297,1.9494-.9297Zm-1.1396,3.4189c0,.2399.12.4499.2999.5698.2099.15.4499.2399.6898.2399.3599,0,.7198-.15.9897-.4199.2999-.2699.4499-.5998.4499-.9597-.2699-.2099-.6598-.3299-1.1696-.3299-.3599,0-.6598.09-.8997.2699-.2399.15-.3599.3599-.3599.6298Z" fill="#5f6368" strokeWidth="0"></path>
                          <path d="m27.5529,14.2114l-2.9691,6.8079h-.8997l1.1097-2.3693-1.9494-4.4086h.9597l1.4096,3.3889h.03l1.3796-3.3889h.9297v-.03Z" fill="#5f6368" strokeWidth="0"></path>
                          <path d="m12.2324,15.531c0-.2699-.03-.5398-.06-.8097h-3.7488v1.5295h2.1293c-.09.4799-.3599.9297-.7798,1.1996v.9897h1.2896c.7498-.6898,1.1696-1.7095,1.1696-2.9091Z" fill="#4285f4" strokeWidth="0"></path>
                          <path d="m8.4236,19.3998c1.0797,0,1.9794-.3599,2.6392-.9597l-1.2896-.9897c-.3599.2399-.8097.3899-1.3496.3899-1.0197,0-1.9194-.6898-2.2193-1.6495h-1.3196v1.0197c.6898,1.3496,2.0394,2.1893,3.5389,2.1893Z" fill="#34a853" strokeWidth="0"></path>
                          <path d="m6.2043,16.1908c-.1799-.4799-.1799-1.0197,0-1.5295v-1.0197h-1.3196c-.5698,1.1097-.5698,2.4292,0,3.5689l1.3196-1.0197Z" fill="#fbbc04" strokeWidth="0"></path>
                          <path d="m8.4236,13.0418c.5698,0,1.1097.2099,1.5295.5998h0l1.1396-1.1396c-.7198-.6598-1.6795-1.0497-2.6392-1.0197-1.4995,0-2.8791.8397-3.5389,2.1893l1.3196,1.0197c.2699-.9597,1.1696-1.6495,2.1893-1.6495Z" fill="#ea4335" strokeWidth="0"></path>
                        </g>
                      </svg>
                    </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="googlepay" id="googlepay" />
              </Field>
            </FieldLabel>
          </RadioGroup>
          <DialogFooter>
            <button
              type="button"
              onClick={() => { setPickerOpen(false); setCheckoutOpen(true); }}
              className="text-black w-full h-full rounded-[12px] text-[16px] py-4 ui-el-button-primary-green cursor-pointer"
            >
              Continue to Payment
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={checkoutOpen}
        onOpenChange={(open) => {
          setCheckoutOpen(open);
          // Closing the checkout steps back to the payment method picker instead of ending the flow.
          if (!open) setPickerOpen(true);
        }}
      >
        <DialogContent keepMounted>
          <DialogHeader>
            <DialogTitle className="flex flex-row gap-2 items-center justify-center text-2xl font-bold"><Lock /> Secure Checkout</DialogTitle>
          </DialogHeader>
          <FastSpringCheckout plan={plan} paymentMethod={paymentMethod} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
