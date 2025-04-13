"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { type MouseEventHandler } from "react";

export default function BackIconButton() {

  // Router Handler for back button
  const router = useRouter();

  // Back Button Click Handler
  const handleBack: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <button
      className="cursor-pointer"
      aria-label="Back to home"
      onClick={handleBack}
    >
      <ArrowLeft />
    </button>
  );
}
