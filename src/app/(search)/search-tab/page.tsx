import React from "react";
import Image from "next/image";

export default function SearchTabDetails(){
    return (
        <div className="relative w-[390px] h-[42px] rounded-[99px] overflow-hidden border border-solid border-[#3d3d3d] top-10 left-4">
      <Image alt="Mingcute search icon" src="/search.svg" width={24} height={24} />



      <p className="absolute w-[241px] top-[12px] left-[12px] [font-family:'LINE_Seed_Sans-Regular',Helvetica] font-normal text-[#9e9ea2] text-[14px] tracking-[0] leading-[16px]">
        Search Sircles, Interests and more...
      </p>
    </div>
    );
}