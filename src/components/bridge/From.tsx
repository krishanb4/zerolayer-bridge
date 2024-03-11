import React from "react";
import Image from "next/image";
import { WalletOne } from "./models/WalletOne";

export const From = () => {
  return (
    <div className="glassmorphism-card-from-to px-[5px]">
      <div className="grid grid-cols-2 mb-3 p-[20px] ">
        <div>From:</div>
        <WalletOne />
      </div>
      <div className="grid grid-cols-2 px-[20px] text-gray-400">
        <div className="grid grid-cols-1 ">
          <div>Token</div>
        </div>
        <div className="grid grid-cols-1">
          <div>Network</div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-2 px-[20px]">
        <div>
          <button className="flex gap-2">
            <div className="bg-[#ffffff1a] rounded-full p-1">
              <Image
                src="/images/tokens/bnb.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
            BNB
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              aria-hidden="true"
              className="ml-1 mt-[5px]"
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </button>
        </div>

        <div>
          <button className="flex gap-2">
            <div className="bg-[#ffffff1a] rounded-full p-1">
              <Image
                src="/images/chains/binance.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
            Binance
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              aria-hidden="true"
              className="ml-1 mt-[5px]"
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="glassmorphism-card-amount mt-10 ">
        <div className="grid grid-cols-3">
          <div className="text-sm">You send:</div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-0 justify-center justify-items-end">
              <div className="text-sm col-span-2 text-gray-500">
                Available: 0.0000000
              </div>
              <div className="text-center">
                <button className="text-sm text-yellow-500">MAX</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none  text-6xl text-end"
            placeholder="0.0"
          />
          <p className="text-sm text-end mr-4 text-gray-500">~$ 0</p>
        </div>
      </div>
    </div>
  );
};
