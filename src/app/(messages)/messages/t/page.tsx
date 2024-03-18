"use client"
import React from "react";
import Image from "next/image";

export default function MessagesDetails(){
    return (
        <div className="flex flex-col items-center py-4 space-y-4">
            <h1 className="font-title text-xl">   
                메시지
            </h1>

            <div className="flex flex-row items-center content-center w-96 h-11 px-3 rounded-full overflow-hidden border border-solid border-inputStroke focus:border-BackgroundBlack">
                <input type="text" placeholder="서클, 관심사 등을 입력하세요..." className="w-full h-full outline-none bg-BackgroundBlack focus:bg-IconBackgroundBlack text-sm" />
                    <a>
                     <Image alt="Search" src="/svgs/search.svg" width={24} height={24} />
                    </a>
            </div>

            <div className="flex flex-col space-y-4">
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

            </div>
        </div>
    );
}