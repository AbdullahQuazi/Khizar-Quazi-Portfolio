import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-40"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="eyebrow mb-6">01 — About</p>
            <h2 className="display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.0]">
              The art of editing, shaped over countless unseen hours.
            </h2>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6 space-y-8 text-[17px] md:text-[18px] leading-[1.7]">
            <Reveal delay={0.1}>
              <p>
                I'm Khizar — a freelance video editor and motion designer who
                lives for the details. I specialize in long-form content,
                turning hours of raw footage into polished narratives that
                keep audiences locked in from first frame to last.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="muted">
                I work in Adobe Premiere Pro and After Effects. Every cut is
                deliberate. Every motion graphic serves the story. I don't
                just edit — I craft visual experiences that make your message
                land exactly the way it should.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-x-10 gap-y-4 pt-4 eyebrow">
                <span>Long-form editing</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <span>Motion design</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <span>Sound treatment</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <span>Color</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
