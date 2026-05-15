import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "We align on your vision — goals, audience, tone, and style. I study your footage, brand, and references so every edit decision has purpose from the start.",
  },
  {
    n: "02",
    title: "Create",
    body: "The timeline comes alive. Precision cuts, dynamic motion graphics, sound design, and color grading — all woven together through focused feedback rounds.",
  },
  {
    n: "03",
    title: "Deliver",
    body: "Pixel-perfect final render. Audio mastered, colors locked, every frame inspected. Delivered in all formats your platforms need, on time.",
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      className="relative py-24 md:py-40"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      data-testid="process-section"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <Reveal>
          <p className="eyebrow mb-5">03 — Process</p>
          <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] max-w-[18ch]">
            From concept to final cut. Seamlessly.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div
                className="p-8 md:p-10 h-full"
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  background: "var(--surface)",
                }}
                data-testid={`process-step-${i}`}
              >
                <div
                  className="display text-5xl md:text-6xl lg:text-7xl tracking-tight"
                  style={{ color: "var(--accent)" }}
                >
                  {s.n}
                </div>
                <h3 className="mt-8 text-xl md:text-2xl tracking-tight">{s.title}</h3>
                <p className="muted mt-4 leading-relaxed text-[15px] md:text-[16px]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
