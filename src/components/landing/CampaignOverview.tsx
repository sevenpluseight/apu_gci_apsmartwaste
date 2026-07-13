import { ExternalLink, Leaf } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    value: "15",
    title: "Planned Posts",
    subtitle: "Educational waste management content",
  },
  {
    value: "3",
    title: "Campaign Phases",
    subtitle: "Pre • Execution • Post Campaign",
  },
];

export default function CampaignOverview() {
  return (
    <section id="campaign" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          {/* Heading */}
          <div className="flex items-center justify-center gap-3 text-[#0BCB51]">
            <Leaf size={32} />
            <h2 className="text-4xl font-medium">Awareness Campaign</h2>
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-white">
            Our Instagram awareness campaign promotes responsible waste management and recycling through educational content aligned with{" "}
            <span className="font-semibold text-[#0BCB51]">SDG 11.6</span>
            .
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#191919] py-20 text-center"
            >
              <h3 className="text-8xl font-bold">{item.value}</h3>
              <h4 className="mt-8 text-2xl font-medium">{item.title}</h4>
              <p className="mt-5 text-[#B2B2B2]">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Instagram Campaign Card */}
        <div className="mt-14 rounded-2xl border border-[#2F2F2F] bg-[#191919] p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl">
                <Image 
                  src="/logos/instagram-logo.svg"
                  alt="Instagram @APU_GCI"
                  width={20}
                  height={20}
                  className="h-18 w-18"
                />
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#0BCB51]/15 px-3 py-1 text-sm font-medium text-[#0BCB51]">
                    @apu_gci
                  </span>

                  <span className="rounded-full bg-[#0BCB51]/15 px-3 py-1 text-sm font-medium text-[#0BCB51]">
                    SDG 11.6
                  </span>
                </div>

                <h3 className="text-2xl font-semibold">Follow Our Instagram Campaign</h3>

                <p className="mt-3 max-w-3xl leading-7 text-[#B2B2B2]">
                  Stay connected with the Green Campus Initiative through our official Instagram. Explore sustainability tips, waste segregation awareness and educational campaign posts.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/apu_gci?igsh=Ymp2dmw5c2dhcWls"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0BCB51_0%,#393BB2_50%,#0BCB51_100%)]" />

              <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-medium text-white backdrop-blur-3xl">
                Follow @apu_gci
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
