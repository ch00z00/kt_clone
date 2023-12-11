import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="top-0 w-screen fixed h-[min(12vh)] text-yellow-200 px-[min(4vw)] z-20 flex items-center justify-between sm:text-[min(1.5vw)] text-[min(4vw)]">
      <button
        type="button"
        className="relative inline-flex items-center justify-start overflow-hidden tracking-wider"
      >
          <Link href="/" legacyBehavior>Annvision</Link>
      </button>
      <button>
        <svg width="30" height="30" viewBox="0 0 45 45" fill="none" className="hover:rotate-[135deg] hover:scale-125 duration-[600ms]">
          <path className="fill-yellow-200" d="M18.25 26.805L22.535 45L26.79 26.775L45 22.525L26.765 18.23L22.51 0L18.215 18.255L0 22.545L18.25 26.805Z"></path>
        </svg>
      </button>
    </header>
  )
}