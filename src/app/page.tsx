import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Home() {
  console.log(OrbitControls)
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-[min(90vw)] h-[min(40vw)] items-center justify-center rounded-3xl bg-white-200">
        <div className="text-black-100 text-[min(20vw)] tracking-tighter animate-[pulse_2s_ease-in-out_infinite]">Annvision</div>
        <div className="text-black-100 text-[min(20vw)] tracking-tighter"></div>
      </div>
    </div>
  )
}
