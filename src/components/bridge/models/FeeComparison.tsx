import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";

const FeeComparison = () => {
  const PlatformFees = [
    {
      name: "LayerZero",
      image: "/images/platforms/layerzero.png",
      fee: "0.01 BNB",
      inUsd: "0.5 USD",
      time: "10-15 minutes",
    },
    {
      name: "Wormhole",
      image: "/images/platforms/wormhole.png",
      fee: "0.01 BNB",
      inUsd: "0.5 USD",
      time: "10-15 minutes",
    },
    {
      name: "Orbitter",
      image: "/images/platforms/orbitter.png",
      fee: "0.01 BNB",
      inUsd: "0.5 USD",
      time: "10-15 minutes",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="p-5 px-8 bg-[#ffffff1a] rounded-2xl mt-5">
      <div className="grid md:grid-cols-1 grid-cols-1 gap-4 ">
        <div className="grid">
          <div className="bg-[#030303a1] p-3 rounded-xl grid md:grid-cols-4 grid-cols-2 text-sm ">
            <div className="grid grid-cols-1  text-center">
              <div className="grid justify-items-center mb-3 mt-3">
                <span className=" indicator-item font-extrabold bg-yellow-500 badge text-xl text-black z-[99999] left-[34px] ">
                  50% Off
                </span>
                <Image
                  src="/images/platforms/zerolayer-white.png"
                  alt="ZeroLayer"
                  width={50}
                  height={50}
                  className="text-center bg-yellow-500 animate-bounce p-1 rounded-full"
                />
              </div>

              <div className="text-yellow-500">~0.005(0.25 USD)</div>
            </div>
            {PlatformFees.map((platform, index) => (
              <div key={index} className="grid grid-cols-1  text-center">
                <div className="grid justify-items-center mb-3 mt-3">
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    width={50}
                    height={50}
                    className="text-center bg-red-500 p-1 rounded-full"
                  />
                </div>

                <div className="text-red-500">
                  ~{platform.fee}({platform.inUsd})
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeComparison;
