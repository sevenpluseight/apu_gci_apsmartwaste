import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StudentNavBar() {
  return (
    <header className="h-20 w-full border-b border-[#2A2A2A] bg-[#191919]">
      <div className="mx-auto flex h-full max-w-360 items-center justify-between px-10">

        <div className="flex items-center gap-10">
          <Link 
            href="/"
            className="flex items-center gap-1.5 text-sm text-[#B2B2B2] transition-colors hover:text-white"
          >
            <ArrowLeft size={18} />
            APSpace
          </Link>

          <Image 
            src="/logos/apsmartwaste-logo-small.svg"
            width={180}
            height={45}
            alt="APSmartWaste"
            priority
          />
        </div>

        <div className="flex h-full items-center gap-8 text-[#B2B2B2]">
          <p>Janitor 6 • Cleaning Staff</p>
        </div>
      </div>
    </header>
  );
}