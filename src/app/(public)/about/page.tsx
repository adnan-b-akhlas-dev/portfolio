import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/constants/stats";
import { user } from "@/constants/user";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Section>
      <SectionTitle
        header="About Me"
        title="Crafting Scalable Web Experiences"
        summary="I build modular, maintainable systems that blend elegant design with powerful, developer-first engineering principles."
      />
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="flex justify-between lg:justify-end">
          <div className="group relative grow">
            <Card className="overflow-hidden p-0 lg:w-md 2xl:w-xl border-2 border-primary!">
              <CardContent className="aspect-square overflow-hidden p-0 relative">
                <Image
                  src={user.image}
                  alt={user.name}
                  loading="eager"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
                  className="rounded-lg object-cover object-[25%_100%]"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-foreground mb-2 text-3xl font-bold">
              {user.name}
            </h3>
            <p className="text-muted-foreground mb-4">{user.bio}</p>
            <p className="text-foreground text-lg leading-relaxed">
              {user.story}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="col-span-2 mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ label, count, icon }) => (
          <div key={label} className="relative overflow-hidden rounded-xl">
            {/* Top-left gradient */}
            <div className="from-primary/20 absolute top-16 -left-32 size-100 rounded-full bg-linear-to-br to-transparent blur-2xl" />
            {/* Bottom-right gradient */}
            <Card className="group border-border hover:border-primary relative border-2 bg-transparent p-6 text-center shadow-sm backdrop-blur-xl transition-all duration-300">
              <CardContent className="p-0">
                {/* subtle background glow */}
                <div className="bg-primary/5 absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* icon */}
                <div className="mb-3 flex justify-center">
                  <div className="bg-primary/10 group-hover:bg-primary/20 flex size-14 items-center justify-center rounded-2xl transition-all duration-300">
                    <HugeiconsIcon icon={icon} />
                  </div>
                </div>

                {/* count */}
                <div className="text-foreground text-4xl font-semibold tracking-tight">
                  {count ?? 0}
                </div>

                {/* label */}
                <div className="text-muted-foreground mt-1 text-sm font-medium tracking-wide uppercase">
                  {label}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
