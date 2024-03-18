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
            <ul className="flex flex-row justify-center gap-button">
                <li>
                    <Link href="/">

                        <button
                            className={`transition duration-100 ease-in-out hover:scale-105 active:scale-100 flex items-center justify-center w-16 h-16 rounded-button ${activeLink === "/" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/" ? 'filter brightness-0' : 'fill-white'}`}
                            src="/svgs/home.svg" alt="home" width={36} height={36}/>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/search-tab">
                        <button
                            className={`transition duration-100 ease-in-out hover:scale-105 active:scale-100 flex items-center justify-center w-16 h-16 rounded-button ${activeLink === "/search" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/search")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/search" ? 'filter brightness-0' : 'fill-white'}`} src="/svgs/search.svg" alt="search" width={36} height={36}  />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/messages/t">
                        <button
                            className={`transition duration-100 ease-in-out hover:scale-105 active:scale-100 flex items-center justify-center w-16 h-16 rounded-button ${activeLink === "/messages/t" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/messages/t")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/messages/t" ? 'filter brightness-0' : 'fill-white'}`} src="/svgs/chat.svg" alt="Messages" width={36} height={36}  />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/notifications">
                        <button
                            className={`transition duration-100 ease-in-out hover:scale-105 active:scale-100 flex items-center justify-center w-16 h-16 rounded-button ${activeLink === "/notifications" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/notifications")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/notifications" ? 'filter brightness-0' : 'fill-white'}`} src="/svgs/noti.svg" alt="notification" width={36} height={36}  />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/my-card">
                        <button
                            className={`transition duration-100 ease-in-out hover:scale-105 active:scale-100 flex items-center justify-center w-16 h-16 rounded-button ${activeLink === "/my-card" ? 'bg-AccentColor' : 'bg-IconBackgroundBlack'}`}
                            onClick={() => handleLinkClick("/my-card")} // 클릭 시 상태 변경
                        >
                            <Image className={`${activeLink === "/my-card" ? 'filter brightness-0' : 'fill-white'}`} src="/svgs/my.svg" alt="my-card" width={36} height={36}  />
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}