import Heading from "@/app/components/ui/heading";

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p>hello there, im ashwin.</p>
        <p>
          im a tech enthusiast, system tinkerer, and open-source creator. i love
          building minimalist software that i actually use every day for my own
          use-case.
        </p>
      </div>

      <div>
        <Heading level={2} className="mb-1">
          philosophy
        </Heading>
        <p className="flex flex-col gap-1">
          <span>- free and open-source software</span>
          <span>- freedom of info</span>
        </p>
      </div>

      <div>
        <Heading level={2} className="mb-1">
          interests
        </Heading>
        <p className="flex flex-col gap-1">
          <span>- linux and unix-like operating systems</span>
          <span>- digital minimalism</span>
          <span>- moosic</span>
          <span>- formula 1</span>
          <span>- programming</span>
        </p>
      </div>

      <div className="space-y-2">
        <Heading level={2} className="mb-3">
          workstation
        </Heading>
        <p className="font-semibold">dell latitude 5420</p>
        <p className="flex flex-col gap-1">
          <span>- intel i5 1145g7</span>
          <span>- 16gb ram</span>
          <span>- 512gb nvme ssd</span>
        </p>

        <p>this laptop is a beast, its a tiny 14inches, yet powerful</p>
      </div>

      <div className="space-y-4">
        <Heading level={2} className="mb-3">
          oses
        </Heading>
        <div>
          <p className="font-semibold">main: arch linux</p>
          <p className="flex flex-col gap-1">
            <span>- kernel: cachyos</span>
            <span>- wc: nauka</span>
          </p>

          <p>my main os installed on the 512gb nvme, i use this everyday</p>
        </div>
        <div>
          <p className="font-semibold">side: nixos</p>
          <p className="flex flex-col gap-1">
            <span>- kernel: lts</span>
            <span>- wc: nauka</span>
          </p>

          <p>
            trying to build a nixos config in a vm might switch from arch to
            nixos on real hardware
          </p>
        </div>
      </div>
    </section>
  );
}
