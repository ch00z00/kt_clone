import React from "react";
import Link from "next/link";
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="top-0 w-screen fixed h-[min(12vh)] text-white-100 pl-[min(3.05vw)] pr-[min(2.8vw)] z-20 flex items-center justify-between text-[min(0.95vw)]">
      <div className="flex items-center justify-between w-[min(17.3vw)]">
        <button
          type="button"
        >
          <Image src="/color-icon.png" alt="color-icon" width={12} height={12} />
        </button>
        <button
          type="button"
          className="tracking-wide"
        >
            <Link href="/" legacyBehavior>
              <div>KENTA <span className="font-extralight">©2021</span></div>
            </Link>
        </button>
      </div>
      <button
        type="button"
        className="relative inline-flex items-center justify-start overflow-hidden tracking-wider"
      >
        <Link href="/" legacyBehavior>
          <div className="font-light text-[min(0.95vw)]">PROFILE</div>
        </Link>
      </button>
    </header>
  )
}