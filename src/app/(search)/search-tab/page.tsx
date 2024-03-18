"use client"
import React from "react";
import Image from "next/image";

export default function SearchTabDetails(){
    return (
      <div className="flex flex-col items-center gap-x-4">
      <h1 className="font-title text-xl p-4">   
          검색
      </h1>

        <div className="flex flex-row items-center content-center w-96 h-11 px-3 rounded-full overflow-hidden border border-solid border-inputStroke focus:border-BackgroundBlack">
            <input type="text" placeholder="서클, 관심사 등을 입력하세요..." className="w-full h-full outline-none bg-BackgroundBlack focus:bg-IconBackgroundBlack text-sm" />
            <a>
              <Image alt="Search" src="/svgs/search.svg" width={24} height={24} />
            </a>
    </div>
    </div>
    );
}