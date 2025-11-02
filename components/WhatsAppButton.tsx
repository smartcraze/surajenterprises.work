"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function WhatsAppButton() {
  const phone = "7488659074";
  const msg = encodeURIComponent(
    "Hello, I want to discuss a construction project."
  );

  return (
    <Link
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping"></span>

        <Button
          className="
            relative bg-[#25D366] text-white w-16 h-16 rounded-full
            flex items-center justify-center
            shadow-[0_4px_12px_rgba(0,0,0,0.25)]
            hover:scale-110 transition-transform
            border border-white/20
          "
        >
          <Image
            src="/whatsapp.svg" 
            alt="WhatsApp"
            width={34}
            height={34}
            className="pointer-events-none text-white"
          />
        </Button>
      </div>
    </Link>
  );
}
