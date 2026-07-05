import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex items-center gap-4">
          <Image 
            src="/logos/apu-gci-logo.svg"
            alt="APU GCI Logo"
            width={120}
            height={120}
            className="rounded-full"
          />

          <h3 className="text-3xl font-medium text-[#B2B2B2]">
            Developed by @APU_GCI
          </h3>
        </div>

        <p className="mt-5 text-sm text-[#B2B2B2]">
          Supporting SDG 11.6 • Phase 1 Prototype
        </p>
      </div>
    </footer>
  )
}
