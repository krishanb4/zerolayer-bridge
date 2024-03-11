import React, { useState } from "react";
import { From } from "./From";
import { To } from "./To";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import FeeComparison from "./models/FeeComparison";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function BridgWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="bg-cover bg-[url('/images/bg4.png')] min-h-screen w-full flex justify-center items-center">
      <div className="glassmorphism-card flex flex-col m-3">
        <div className="text-center text-gray-400">
          <div className="px-2 py-3 sm:px-0 flex justify-start justify-items-center gap-2 items-center ml-3">
            <div className="py-3">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-blue-600" : "bg-red-700"}
                  relative inline-flex h-[30px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? "translate-x-9" : "translate-x-0"}
                    pointer-events-none inline-block h-[26px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
            <div className="">
              Instant bridge mode{" "}
              <span className={`${enabled ? "text-blue-600" : "text-red-700"}`}>
                {enabled ? "ON" : "OFF"}
              </span>
            </div>
            <div className="flex-grow" />
            <div className="flex justify-end mr-3">
              <button className="text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  id="refresh"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path
                    fill="#fff"
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </button>
              <button className="text-sm ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="setting"
                >
                  <path
                    fill="#fff"
                    d="M10.2143,0.0004 C10.7643,-0.0096 11.2853,0.1894 11.6743,0.5704 C12.0653,0.9394 12.2743,1.4504 12.2743,1.9904 C12.2743,3.0904 13.1843,3.9814 14.3153,3.9814 C14.6643,3.9814 15.0143,3.8804 15.3253,3.7104 C16.2943,3.1894 17.5043,3.5204 18.0543,4.4504 L18.0543,4.4504 L18.7353,5.6204 C18.9053,5.9204 19.0043,6.2604 19.0043,6.6104 C19.0043,7.3204 18.6153,7.9814 17.9853,8.3304 C17.6743,8.5004 17.4143,8.7604 17.2353,9.0614 C16.7043,10.0004 17.0353,11.1894 17.9853,11.7314 C18.9443,12.2804 19.2743,13.4814 18.7353,14.4304 L18.7353,14.4304 L18.0543,15.5614 C17.6943,16.1804 17.0243,16.5614 16.3043,16.5614 C15.9443,16.5614 15.5843,16.4704 15.2853,16.2904 C14.9643,16.1204 14.6153,16.0204 14.2643,16.0204 C13.7243,16.0204 13.2043,16.2314 12.8253,16.6104 C12.4343,16.9814 12.2243,17.4904 12.2243,18.0204 C12.2243,19.1104 11.3153,20.0004 10.1843,20.0004 L10.1843,20.0004 L8.8153,20.0004 C8.2743,20.0004 7.7643,19.7804 7.3943,19.4104 C7.0143,19.0304 6.8153,18.5304 6.8153,18.0104 C6.8153,16.9104 5.9143,16.0204 4.7853,16.0204 C4.4143,16.0204 4.0543,16.1204 3.7443,16.3114 C3.2743,16.5704 2.7143,16.6404 2.1943,16.5104 C1.6743,16.3704 1.2243,16.0304 0.9543,15.5804 L0.9543,15.5804 L0.3153,14.4504 C0.0143,13.9814 -0.0757,13.4204 0.0653,12.8904 C0.2043,12.3604 0.5653,11.9104 1.0543,11.6404 C1.3653,11.4704 1.6243,11.2204 1.8043,10.9104 C2.3253,9.9704 1.9943,8.7904 1.0543,8.2404 C0.1043,7.7004 -0.2257,6.5104 0.3153,5.5704 L0.3153,5.5704 L0.9543,4.4504 C1.2243,3.9814 1.6743,3.6404 2.2043,3.5004 C2.7353,3.3604 3.2943,3.4394 3.7643,3.7104 C4.0843,3.8804 4.4343,3.9704 4.7853,3.9704 C5.3253,3.9704 5.8443,3.7604 6.2243,3.3904 C6.6043,3.0204 6.8153,2.5104 6.8153,1.9904 C6.8153,0.8904 7.7243,0.0004 8.8543,0.0004 L8.8543,0.0004 Z M10.6153,7.4814 C9.5653,7.0504 8.3543,7.2804 7.5443,8.0704 C6.7443,8.8504 6.4943,10.0404 6.9343,11.0614 C7.3653,12.0904 8.3843,12.7604 9.5243,12.7604 L9.5243,12.7604 L9.5353,12.7604 C10.2853,12.7704 10.9853,12.4814 11.5143,11.9604 C12.0443,11.4504 12.3443,10.7504 12.3443,10.0204 C12.3543,8.9104 11.6643,7.9004 10.6153,7.4814 Z"
                    transform="translate(2.5 2)"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1  justify-items-center -gap-1">
          <From />
          <To />
        </div>
        <div className="text-center mt-5">
          <button className="text-2xl px-10 w-full py-3 bg-yellow-500 rounded-lg">
            BRIDGE
          </button>
        </div>
        <FeeComparison />
      </div>

      <div className="absolute left-0 right-0 mt-[-175px] mb-[-9px] flex items-center justify-center">
        <button
          type="button"
          className="group bg-[#0a0a0a85] hover:bg-[#ffffff1a] p-2 border-white transition-all rounded-full cursor-pointer"
        >
          <div className="transition-transform rotate-0 group-hover:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              width="50px"
              height="50px"
              fill="#fff"
            >
              <path d="M 36 12 C 32.048 12 28.321156 12.957344 25.035156 14.652344 C 22.801156 15.803344 22.129313 18.662203 23.695312 20.658203 C 24.942312 22.247203 26.947906 22.679734 28.628906 21.802734 C 30.834906 20.651734 33.34 20 36 20 C 44.158366 20 50.877492 26.108883 51.863281 34 L 48.845703 34 C 47.372703 34 46.503844 35.654188 47.339844 36.867188 L 54.492188 47.248047 C 55.219187 48.303047 56.778859 48.303047 57.505859 47.248047 L 64.658203 36.867188 C 65.495203 35.654188 64.626344 34 63.152344 34 L 59.910156 34 C 58.892553 21.682129 48.580543 12 36 12 z M 16 23.958984 C 15.4285 23.958984 14.857641 24.224453 14.494141 24.751953 L 7.3398438 35.132812 C 6.5028438 36.345812 7.3717031 38 8.8457031 38 L 12.089844 38 C 13.107447 50.317871 23.419457 60 36 60 C 39.952 60 43.678844 59.042656 46.964844 57.347656 C 49.198844 56.196656 49.870688 53.337797 48.304688 51.341797 C 47.057688 49.752797 45.052094 49.320266 43.371094 50.197266 C 41.165094 51.348266 38.66 52 36 52 C 27.841634 52 21.122508 45.891117 20.136719 38 L 23.154297 38 C 24.627297 38 25.495156 36.345812 24.660156 35.132812 L 17.507812 24.751953 C 17.144313 24.224453 16.5715 23.958984 16 23.958984 z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default BridgWidget;
