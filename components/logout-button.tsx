"use client";

import { useFormStatus } from "react-dom";


export default function LogOutButton() {
  const {pending} = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-zinc-800 active:bg-zinc-900 rounded-xs p-2 mt-2 text-zinc-50 cursor-pointer"
    >
      Log out
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-7 p-1 inline-block ml-1 aria-hidden:invisible aria-hidden:w-0"
        aria-hidden={!pending ? "true" : "false"}
      >
        <circle
          cx={12}
          cy={12}
          r={10}
          pathLength={1}
          strokeDasharray="1 1"
          strokeDashoffset=".25"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1s"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            begin="1s"
            dur="3s"
            values="0;1;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </button>
  );
}
