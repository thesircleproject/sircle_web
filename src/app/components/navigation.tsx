"use client"
//this components need to be interactive in client(정적 html로 변환 한 다음에, react로 interactive하게 변환함.)

import Link from "next/link"
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation(){
    const [activeLink, setActiveLink] = useState(""); // 클릭한 링크의 상태를 저장하는 state

    const handleLinkClick = (path:string) => {
        setActiveLink(path); // 클릭한 링크의 경로를 상태에 저장
    };

    return (
        <nav className="fixed bottom-4 left-0 right-0 bg-697420">
            <ul className="flex justify-center">
                <li className="mr-4">
                    <Link href="/">

                        <div
                            className={`flex items-center justify-center w-16 h-16 rounded-lg ${activeLink === "/" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/" ? 'filter brightness-0' : 'fill-white'}`}
                            src="/home.svg" alt="home" width={36} height={36}/>
                        </div>
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/search-tab">
                        <div
                            className={`flex items-center justify-center w-16 h-16 rounded-lg ${activeLink === "/search" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/search")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/search" ? 'filter brightness-0' : 'fill-white'}`} src="/search.svg" alt="search" width={36} height={36}  />
                        </div>
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/messages/t">
                        <div
                            className={`flex items-center justify-center w-16 h-16 rounded-lg ${activeLink === "/messages/t" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/messages/t")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/messages/t" ? 'filter brightness-0' : 'fill-white'}`} src="/chat.svg" alt="Messages" width={36} height={36}  />
                        </div>
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/notifications">
                        <div
                            className={`flex items-center justify-center w-16 h-16 rounded-lg ${activeLink === "/notifications" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/notifications")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/notifications" ? 'filter brightness-0' : 'fill-white'}`} src="/noti.svg" alt="notification" width={36} height={36}  />
                        </div>
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/my-card">
                        <div
                            className={`flex items-center justify-center w-16 h-16 rounded-lg ${activeLink === "/my-card" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/my-card")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/my-card" ? 'filter brightness-0' : 'fill-white'}`} src="/my.svg" alt="my-card" width={36} height={36}  />
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}