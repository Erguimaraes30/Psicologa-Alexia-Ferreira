import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import {
  audiences,
  demands,
  faqs,
  footerLinks,
  links,
  navItems,
  socialCards,
  steps,
} from "./content.js";

const currentYear = new Date().getFullYear();

function ExternalLink({ href, children, className = "", ariaLabel }) {
  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function MotionSection({ id, className = "", children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      id={id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.section>
  );
}

function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const styles =
    variant === "primary"
      ? "bg-wine text-white shadow-soft hover:bg-wine-dark"
      : "border border-wine/35 bg-white/50 text-wine hover:border-wine hover:bg-white";

  return (
    <ExternalLink
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine ${styles} ${className}`}
      href={href}
    >
      {children}
    </ExternalLink>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-offwhite/90 backdrop-blur-xl">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <a className="group" href="#inicio" onClick={() => setIsOpen(false)}>
          <span className="block font-serif text-2xl leading-none text-ink">
            Alexia Ferreira
          </span>
          <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Psicóloga | Desenvolvimento Infantil | ABA
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              className="text-sm font-medium text-ink/75 transition hover:text-wine"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ExternalLink
            ariaLabel="Abrir Instagram de Alexia Ferreira"
            className="icon-link"
            href={links.instagram}
          >
            <Instagram aria-hidden="true" size={19} />
          </ExternalLink>
          <ExternalLink
            ariaLabel="Abrir WhatsApp de Alexia Ferreira"
            className="icon-link"
            href={links.whatsapp}
          >
            <MessageCircle aria-hidden="true" size={19} />
          </ExternalLink>
          <ButtonLink className="min-h-11 px-5" href={links.whatsapp}>
            Agendar conversa
          </ButtonLink>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="icon-link mobile-menu-button lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="border-t border-white/60 bg-offwhite px-5 pb-5 lg:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 pt-3">
              {navItems.map(([label, href]) => (
                <a
                  className="rounded-2xl px-2 py-3 text-base font-medium text-ink"
                  href={href}
                  key={href}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
              <ButtonLink className="mt-3 w-full" href={links.whatsapp}>
                Agendar pelo WhatsApp
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HeroArt() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-blush p-6 shadow-soft md:min-h-[540px]">
      <div className="absolute -right-12 top-12 h-72 w-72 rounded-full border border-white/50" />
      <div className="absolute bottom-0 right-0 h-64 w-40 rounded-tl-[5rem] bg-petrol" />
      <div className="absolute bottom-28 left-4 h-44 w-36 rounded-tr-[4rem] bg-wine/35" />
      <div className="absolute left-8 top-10 h-28 w-px rotate-12 bg-wine/30" />
      <div className="absolute left-20 top-20 h-20 w-px -rotate-12 bg-wine/20" />

      <div className="relative z-10 ml-auto flex h-full max-w-sm flex-col justify-between rounded-t-full border border-white/70 bg-offwhite/80 px-8 py-12 text-center backdrop-blur">
        <div>
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-wine/20 font-serif text-5xl text-wine">
            AF
          </div>
          <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-muted">
            Alexia Ferreira
          </p>
          <p className="mt-2 text-sm text-muted">Psicóloga</p>
        </div>
        <div className="mx-auto mt-10 h-24 w-px bg-gradient-to-b from-wine/40 to-transparent" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="section-grid min-h-[calc(100vh-80px)] items-center pb-14 pt-10" id="inicio">
      <div className="max-w-2xl">
        <h1 className="font-serif text-5xl leading-[0.98] text-ink md:text-7xl">
          Cuidado psicológico para o desenvolvimento infantil com acolhimento e
          direção.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
          Atendimento psicológico voltado ao desenvolvimento infantil, orientação
          familiar e práticas baseadas em ABA.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={links.whatsapp}>
            <MessageCircle aria-hidden="true" size={18} />
            Agendar pelo WhatsApp
          </ButtonLink>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-wine/30 px-6 text-sm font-semibold text-wine transition hover:border-wine hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            href="#sobre"
          >
            Conhecer meu trabalho
          </a>
        </div>
      </div>
      <HeroArt />
    </section>
  );
}

function About() {
  return (
    <MotionSection className="section-grid border-y border-white/70 bg-white/35 py-20" id="sobre">
      <div>
        <p className="section-label">Sobre</p>
        <h2 className="section-title">Quem é Alexia Ferreira?</h2>
      </div>
      <div className="space-y-6 text-lg leading-8 text-muted">
        <p>
          Alexia Ferreira é psicóloga e atua com foco em desenvolvimento
          infantil, auxiliando famílias na compreensão de comportamentos,
          habilidades e necessidades da criança com uma escuta profissional,
          ética e acolhedora.
        </p>
        <p className="inline-flex rounded-full border border-wine/20 bg-white/60 px-5 py-3 text-sm font-semibold text-wine">
          CRP: inserir número
        </p>
      </div>
    </MotionSection>
  );
}

function SplitSection() {
  return (
    <MotionSection className="grid md:grid-cols-2" id="desenvolvimento">
      <div className="bg-blush px-5 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-xl">
          <p className="section-label">Desenvolvimento infantil</p>
          <h2 className="section-title">
            Desenvolvimento infantil com olhar cuidadoso e individualizado.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Cada criança possui seu próprio ritmo. O acompanhamento psicológico
            pode ajudar na compreensão de comportamentos, comunicação, emoções,
            rotina e interação social, sempre com respeito à singularidade da
            criança e da família.
          </p>
        </div>
      </div>
      <div className="bg-petrol px-5 py-20 text-white md:px-12 lg:px-20" id="aba">
        <div className="mx-auto max-w-xl">
          <p className="section-label text-white/65">ABA</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            ABA: práticas estruturadas para apoiar habilidades e comportamentos.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/78">
            A ABA, Análise do Comportamento Aplicada, é uma abordagem baseada na
            observação e compreensão do comportamento, utilizada para planejar
            estratégias que favoreçam o desenvolvimento de habilidades e a
            qualidade de vida da criança e da família.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}

function Demands() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Principais demandas</p>
        <h2 className="section-title">Como posso ajudar</h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {demands.map(({ icon: Icon, title, text }) => (
          <article className="soft-card group" key={title}>
            <Icon
              aria-hidden="true"
              className="text-wine transition group-hover:-translate-y-1"
              size={28}
              strokeWidth={1.6}
            />
            <h3 className="mt-6 text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}

function Audience() {
  return (
    <MotionSection className="bg-white/45 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="section-label">Para quem é</p>
          <h2 className="section-title">
            Para famílias que buscam compreensão e caminhos possíveis.
          </h2>
        </div>
        <div className="grid gap-3">
          {audiences.map((item) => (
            <div
              className="rounded-3xl border border-white/70 bg-offwhite/70 p-5 text-ink shadow-subtle"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function Process() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-5 py-20 lg:px-8" id="atendimento">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Como funciona o atendimento</p>
        <h2 className="section-title">Um cuidado estruturado e personalizado</h2>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-4">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <article className="relative rounded-[1.6rem] bg-white/55 p-6 shadow-subtle" key={title}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-wine text-sm font-bold text-white">
              {index + 1}
            </span>
            <Icon aria-hidden="true" className="mt-8 text-petrol" size={30} />
            <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}

function CtaBand() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-petrol px-6 py-10 text-white shadow-soft md:px-12">
        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_auto]">
          <div>
            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Buscar orientação também é uma forma de cuidado.
            </h2>
            <p className="mt-4 max-w-2xl text-white/78">
              Entre em contato para tirar dúvidas e verificar disponibilidade de
              horários.
            </p>
          </div>
          <ButtonLink className="bg-white text-petrol hover:bg-blush" href={links.whatsapp}>
            Falar pelo WhatsApp
          </ButtonLink>
        </div>
      </div>
    </MotionSection>
  );
}

function InstagramSection() {
  return (
    <MotionSection className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <div>
        <p className="section-label">Instagram</p>
        <h2 className="section-title">
          Acompanhe conteúdos sobre desenvolvimento infantil
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted">
          No Instagram, Alexia Ferreira compartilha conteúdos e reflexões sobre
          desenvolvimento infantil, comportamento, orientação familiar e ABA.
        </p>
        <ButtonLink className="mt-7" href={links.instagram} variant="secondary">
          <Instagram aria-hidden="true" size={18} />
          Ver Instagram
        </ButtonLink>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {socialCards.map((card, index) => (
          <article className={`insta-card ${index === 3 ? "bg-wine text-white" : ""}`} key={card}>
            <p>{card}</p>
            <span aria-hidden="true">→</span>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}

function Faq() {
  const [open, setOpen] = useState(faqs[0].question);

  return (
    <MotionSection className="mx-auto max-w-5xl px-5 pb-20 lg:px-8">
      <div className="text-center">
        <p className="section-label">Dúvidas frequentes</p>
        <h2 className="section-title">Perguntas frequentes</h2>
      </div>
      <div className="mt-10 space-y-3">
        {faqs.map(({ question, answer }) => {
          const isOpen = open === question;
          return (
            <div className="rounded-2xl bg-white/65 shadow-subtle" key={question}>
              <button
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink"
                onClick={() => setOpen(isOpen ? "" : question)}
                type="button"
              >
                {question}
                <ChevronDown
                  aria-hidden="true"
                  className={`shrink-0 text-wine transition ${isOpen ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-5 pb-5 leading-7 text-muted">{answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </MotionSection>
  );
}

function FinalCta() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-5 pb-20 lg:px-8" id="contato">
      <div className="rounded-[2rem] bg-wine px-6 py-14 text-center text-white shadow-soft md:px-12">
        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Cuidado, orientação e acolhimento para cada etapa do desenvolvimento.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/78">
          Agende uma conversa e entenda como o acompanhamento psicológico pode
          ajudar sua família neste momento.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink className="bg-white text-wine hover:bg-blush" href={links.whatsapp}>
            Agendar pelo WhatsApp
          </ButtonLink>
          <ButtonLink className="border-white/45 text-white hover:bg-white/10" href={links.instagram} variant="secondary">
            Acompanhar no Instagram
          </ButtonLink>
        </div>
      </div>
    </MotionSection>
  );
}

function Footer() {
  return (
    <footer className="bg-petrol px-5 pb-24 pt-12 text-white md:pb-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl">Alexia Ferreira</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">
            Psicóloga | Desenvolvimento Infantil | ABA
          </p>
          <p className="mt-5 text-white/70">CRP: inserir número</p>
        </div>
        <div>
          <p className="footer-title">Navegação</p>
          <div className="mt-4 grid gap-2">
            {navItems.map(([label, href]) => (
              <a className="text-white/70 transition hover:text-white" href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-title">Contato</p>
          <div className="mt-4 grid gap-3">
            {footerLinks.map(([label, href, Icon]) => (
              <ExternalLink className="flex items-center gap-2 text-white/70 transition hover:text-white" href={href} key={label}>
                <Icon aria-hidden="true" size={17} />
                {label}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/12 pt-6 text-sm text-white/55">
        © {currentYear} Alexia Ferreira. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SplitSection />
        <Demands />
        <Audience />
        <Process />
        <CtaBand />
        <InstagramSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <ExternalLink
        ariaLabel="Agendar atendimento pelo WhatsApp"
        className="fixed bottom-4 left-4 right-4 z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wine px-5 text-sm font-semibold text-white shadow-soft md:hidden"
        href={links.whatsapp}
      >
        <MessageCircle aria-hidden="true" size={18} />
        Agendar pelo WhatsApp
      </ExternalLink>
    </>
  );
}

export default App;
