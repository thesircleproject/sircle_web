import React from "react";
import Image from "next/image";

export default function Chat(){
    return (
    <div className="flex flex-row items-start content-start w-96 h-18 p-4 rounded-button bg-IconBackgroundBlack hover:bg-inputStroke border-inputStroke ">
    <Image alt="Profile" src="/icon.png" width={48} height={48} />
    <div className="flex flex-col items-start content-start pl-4 gap-4">
     <h1 className="font-title text-xl">   
         에이요
     </h1>
     <p>
         테스트 메시지입니다.
     </p>
     </div>
      </div>
    );
}