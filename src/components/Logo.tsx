import Image from "next/image";
import Link from "next/link";
import mark from "@/assets/brand/palmgate-mark.png";
import wordmark from "@/assets/brand/palmgate-wordmark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="PalmGate International home" className={`group flex items-center gap-2.5 ${className}`}>
      <Image
        src={mark}
        alt=""
        priority
        className="h-10 w-auto transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
      />
      <span className="flex flex-col leading-none">
        <Image src={wordmark} alt="PalmGate" priority className="h-7 w-auto" />
        <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.28em] text-palm-300/80 uppercase">
          International
        </span>
      </span>
    </Link>
  );
}
