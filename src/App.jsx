import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown, Instagram, Menu, X } from "lucide-react";
import {
  aboutCards,
  demands,
  faqs,
  footerLinks,
  heroMessages,
  links,
  navItems,
  steps,
  storySlots,
} from "./content.js";

const currentYear = new Date().getFullYear();

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

function WhatsAppIcon({ className = "", size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height={size}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.04 3C8.88 3 3.06 8.78 3.06 15.9c0 2.27.6 4.48 1.74 6.42L3 29l6.86-1.78a13 13 0 0 0 6.18 1.57C23.2 28.79 29 23 29 15.9S23.2 3 16.04 3Zm0 23.6c-1.98 0-3.91-.53-5.6-1.54l-.4-.24-4.06 1.05 1.08-3.94-.26-.41a10.66 10.66 0 0 1-1.64-5.62c0-5.9 4.88-10.7 10.88-10.7 5.98 0 10.86 4.8 10.86 10.7 0 5.9-4.88 10.7-10.86 10.7Zm5.96-8c-.33-.16-1.94-.95-2.24-1.06-.3-.1-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.2.21-.38.24-.7.08-.33-.16-1.38-.5-2.63-1.6a9.8 9.8 0 0 1-1.82-2.25c-.2-.32-.02-.5.14-.65.15-.15.33-.38.5-.57.16-.19.22-.32.33-.54.1-.21.05-.4-.03-.56-.08-.16-.74-1.77-1.02-2.42-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.15 1.12-1.15 2.72 0 1.6 1.18 3.15 1.34 3.36.16.22 2.33 3.52 5.64 4.94.8.34 1.42.54 1.9.7.8.25 1.52.22 2.1.13.64-.1 1.94-.8 2.22-1.56.27-.76.27-1.42.19-1.56-.08-.13-.3-.21-.63-.37Z" />
    </svg>
  );
}

function LeafBranch({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 220 520"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M86 496C115 397 126 296 105 183C96 132 76 76 43 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.2"
      />
      <path
        d="M104 189C72 163 43 151 15 153"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M119 261C86 236 55 226 25 232"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M121 331C91 313 62 307 35 316"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M110 205C137 173 166 153 205 145"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M125 282C153 252 183 237 213 238"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M119 363C145 341 174 330 205 335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <g fill="currentColor" opacity=".42">
        <path d="M83 147C58 137 39 119 29 94C59 94 80 115 83 147Z" />
        <path d="M102 207C72 200 49 184 35 158C69 153 96 175 102 207Z" />
        <path d="M116 276C85 269 62 252 47 226C83 220 110 242 116 276Z" />
        <path d="M118 345C89 337 66 320 52 294C86 290 113 312 118 345Z" />
        <path d="M103 409C78 400 59 383 47 358C78 357 100 379 103 409Z" />
      </g>
      <g fill="currentColor" opacity=".34">
        <path d="M111 184C125 153 147 134 179 127C175 161 151 181 111 184Z" />
        <path d="M126 263C143 236 168 223 201 226C190 258 165 272 126 263Z" />
        <path d="M122 350C140 327 164 317 194 323C181 351 156 361 122 350Z" />
        <path d="M67 82C48 63 38 43 38 19C63 29 74 50 67 82Z" />
        <path d="M91 470C108 448 130 438 157 443C144 468 122 478 91 470Z" />
      </g>
    </svg>
  );
}

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
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.18 }}
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
      : "border border-wine/25 bg-white/45 text-wine hover:border-wine hover:bg-white";

  return (
    <ExternalLink
      className={`button-link ${styles} ${className}`}
      href={href}
    >
      {children}
    </ExternalLink>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav aria-label="Navegação principal" className="site-nav">
        <a className="brand-mark" href="#inicio" onClick={() => setIsOpen(false)}>
          <span className="brand-name">Alexia Ferreira</span>
          <span className="brand-subtitle">Psicóloga | Desenvolvimento Infantil | ABA</span>
        </a>

        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a className="nav-link" href={href} key={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ExternalLink
            ariaLabel="Abrir Instagram de Alexia Ferreira"
            className="icon-link"
            href={links.instagram}
          >
            <Instagram aria-hidden="true" size={18} strokeWidth={1.8} />
          </ExternalLink>
          <ButtonLink className="min-h-11 px-5" href={links.whatsapp}>
            <WhatsAppIcon className="text-white" size={18} />
            Agendar conversa
          </ButtonLink>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="icon-link mobile-menu-button"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="mobile-panel"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
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
                <WhatsAppIcon className="text-white" />
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
    <div className="hero-art">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-arch">
        <div className="hero-monogram">AF</div>
        <h1>Alexia Ferreira</h1>
        <p>Psicóloga</p>
        <span>Desenvolvimento Infantil | ABA</span>
      </div>
      <div className="hero-block hero-block-rose" />
      <div className="hero-block hero-block-blue" />
    </div>
  );
}

function HeroTicker() {
  const items = [...heroMessages, ...heroMessages];

  return (
    <div
      aria-label="Mensagens sobre o atendimento"
      className="hero-ticker"
      tabIndex={0}
    >
      <div className="ticker-track">
        {items.map((message, index) => (
          <motion.article
            className="ticker-card"
            key={`${message}-${index}`}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            {message}
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <motion.div
        aria-hidden="true"
        animate={{ opacity: 0.36, x: 0 }}
        className="hero-leaves hero-leaves-left"
        initial={{ opacity: 0, x: "-42%" }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <LeafBranch />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ opacity: 0.36, x: 0 }}
        className="hero-leaves hero-leaves-right"
        initial={{ opacity: 0, x: "42%" }}
        transition={{ duration: 1.15, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <LeafBranch />
      </motion.div>
      <div className="hero-visual-wrap">
        <HeroArt />
      </div>
      <HeroTicker />
      <div className="hero-actions">
        <ButtonLink href={links.whatsapp}>
          <WhatsAppIcon className="text-white" />
          Agendar pelo WhatsApp
        </ButtonLink>
        <a className="ghost-button" href="#sobre">
          Conhecer meu trabalho
        </a>
      </div>
    </section>
  );
}

function NatureTree({ pathLength }) {
  return (
    <svg
      aria-hidden="true"
      className="nature-tree"
      fill="none"
      viewBox="0 0 520 760"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M266 724C258 626 284 555 266 464C247 365 232 293 257 200C270 151 286 104 306 42"
        className="tree-trunk"
        pathLength={1}
        style={{ pathLength }}
      />
      {[
        "M257 238C205 205 161 193 98 198",
        "M262 318C320 279 367 263 438 266",
        "M263 410C208 375 158 360 86 369",
        "M277 505C332 470 379 453 445 459",
        "M264 606C212 580 165 572 105 586",
      ].map((path) => (
        <motion.path
          className="tree-branch"
          d={path}
          key={path}
          pathLength={1}
          style={{ pathLength }}
        />
      ))}
      {[
        [106, 184, -8],
        [145, 207, 18],
        [193, 221, -20],
        [331, 277, 18],
        [382, 255, -8],
        [431, 277, 20],
        [91, 363, -18],
        [148, 352, 12],
        [207, 388, -10],
        [336, 463, 9],
        [390, 447, -18],
        [439, 469, 17],
        [111, 577, 12],
        [168, 566, -18],
        [218, 594, 8],
      ].map(([cx, cy, rotate], index) => (
        <motion.ellipse
          className="tree-leaf"
          cx={cx}
          cy={cy}
          initial={{ opacity: 0, scale: 0.4 }}
          key={`${cx}-${cy}`}
          rx="16"
          ry="33"
          style={{ rotate }}
          transition={{ duration: 0.45, delay: 0.05 * index }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        />
      ))}
    </svg>
  );
}

function ScrollTreeCard({ card, index, progress, activeIndex }) {
  const ranges = [
    [0, 0.1, 0.28],
    [0.16, 0.3, 0.5],
    [0.4, 0.56, 0.74],
    [0.64, 0.8, 1],
  ];
  const [start, mid, end] = ranges[index];
  const y = useTransform(progress, [start, mid, end], [28, 0, -18], { clamp: true });
  const isActive = activeIndex === index;

  return (
    <motion.article
      className={`scroll-tree-card scroll-tree-card-${index + 1} ${
        isActive ? "is-active" : ""
      }`}
      animate={{
        opacity: isActive ? 1 : index < activeIndex ? 0.32 : 0.22,
        scale: isActive ? 1.03 : 0.96,
      }}
      style={{ y }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </motion.article>
  );
}

function ReadingChild({ activeCard, y, x, rotate }) {
  return (
    <motion.div
      aria-label={`Criança lendo: ${activeCard.title}`}
      className="scroll-reading-child"
      style={{ x, y, rotate }}
    >
      <svg
        aria-hidden="true"
        className="child-illustration"
        fill="none"
        viewBox="0 0 210 260"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="child-shadow" d="M42 238C65 221 147 221 171 238C143 251 72 252 42 238Z" />
        <path className="child-neck" d="M93 83H116V111H93V83Z" />
        <path className="child-face" d="M69 45C69 20 89 8 110 11C134 14 149 32 144 58C139 84 119 101 96 96C78 92 69 73 69 45Z" />
        <path className="child-hair-svg" d="M69 49C64 25 82 3 110 7C138 11 153 31 146 58C132 48 111 47 91 50C83 52 76 52 69 49Z" />
        <path className="child-eye" d="M93 64C101 68 112 68 122 63" />
        <path className="child-body-svg" d="M61 226C64 155 76 103 105 103C135 103 149 154 153 226H61Z" />
        <path className="child-arm-svg" d="M71 134C52 148 42 166 39 191" />
        <path className="child-arm-svg" d="M139 134C158 148 169 166 172 191" />
        <path className="child-hand" d="M38 190C47 184 54 186 58 194" />
        <path className="child-hand" d="M172 190C163 184 156 186 152 194" />
      </svg>
      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          className="held-card"
          exit={{ opacity: 0, y: 14, rotate: 4 }}
          initial={{ opacity: 0, y: 14, rotate: -8 }}
          key={activeCard.title}
          transition={{ duration: 0.26 }}
        >
          <span>Lendo agora</span>
          <strong>{activeCard.title}</strong>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function AboutTree() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isPhone = useMediaQuery("(max-width: 767px)");
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const childY = useTransform(scrollYProgress, [0.05, 0.92], isPhone ? [16, 330] : [28, 570]);
  const childX = useTransform(
    scrollYProgress,
    [0.05, 0.32, 0.58, 0.92],
    isPhone ? [-28, 24, -22, 18] : [-64, 54, -42, 42],
  );
  const childRotate = useTransform(
    scrollYProgress,
    [0.05, 0.32, 0.58, 0.92],
    isPhone ? [-2, 2, -1, 2] : [-4, 3, -2, 3],
  );
  const pathLength = useTransform(scrollYProgress, [0.05, 0.9], [0.12, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      aboutCards.length - 1,
      Math.max(0, Math.floor(latest * aboutCards.length)),
    );
    setActiveIndex(nextIndex);
  });

  return (
    <section className="about-scroll-section" id="sobre" ref={sectionRef}>
      <div className="about-scroll-sticky">
        <div className="about-tree-intro">
          <p className="section-label">Sobre</p>
          <h2 className="section-title">Escuta, desenvolvimento e direção para cada história.</h2>
          <p>
            Alexia Ferreira atua com foco em desenvolvimento infantil, orientação
            familiar e práticas baseadas em ABA, sem promessas prontas e com
            atenção à singularidade de cada criança.
          </p>
          <span className="crp-pill">CRP: XX/XXXXX</span>
        </div>

        <div className="scroll-tree-stage">
          <NatureTree pathLength={shouldReduceMotion ? 1 : pathLength} />
          <ReadingChild
            activeCard={aboutCards[activeIndex]}
            rotate={shouldReduceMotion ? 0 : childRotate}
            x={shouldReduceMotion ? 0 : childX}
            y={shouldReduceMotion ? 0 : childY}
          />
          {aboutCards.map((card, index) => (
            <ScrollTreeCard
              activeIndex={activeIndex}
              card={card}
              index={index}
              key={card.title}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
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
        {demands.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            className="soft-card group"
            initial={{ opacity: 0, y: 28 }}
            key={title}
            transition={{ duration: 0.48, delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Icon
              aria-hidden="true"
              className="text-wine transition group-hover:-translate-y-1"
              size={28}
              strokeWidth={1.6}
            />
            <h3 className="mt-6 text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </motion.article>
        ))}
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
      <div className="process-steps">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            className="process-card"
            key={title}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ y: -8, scale: 1.015 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
          >
            <span>{index + 1}</span>
            <Icon aria-hidden="true" className="mt-8 text-petrol" size={30} />
            <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}

function InstagramSection() {
  const slots = [...storySlots, ...storySlots];

  return (
    <MotionSection className="stories-section" id="instagram">
      <div className="stories-copy">
        <p className="section-label">Instagram</p>
        <h2 className="section-title">
          Conteúdos em formato de stories
        </h2>
        <p>
          Esta área já está pronta para receber os conteúdos do próximo passo.
          Por enquanto, deixei os espaços vazios, com movimento suave e pausa ao
          passar o mouse.
        </p>
        <ButtonLink className="mt-7" href={links.instagram} variant="secondary">
          <Instagram aria-hidden="true" size={18} />
          Ver Instagram
        </ButtonLink>
      </div>
      <div aria-label="Carrossel de stories vazio" className="story-carousel" tabIndex={0}>
        <div className="story-track">
          {slots.map((slot, index) => (
            <motion.div
              aria-label={`Espaço vazio para story ${slot}`}
              className="story-card"
              key={`${slot}-${index}`}
              whileHover={{ y: -10, rotate: index % 2 ? 1.5 : -1.5 }}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function Faq() {
  const [open, setOpen] = useState(faqs[0].question);

  return (
    <MotionSection className="mx-auto max-w-5xl px-5 pb-20 lg:px-8" id="faq">
      <div className="text-center">
        <p className="section-label">Dúvidas frequentes</p>
        <h2 className="section-title">Perguntas frequentes</h2>
      </div>
      <div className="mt-10 space-y-3">
        {faqs.map(({ question, answer }) => {
          const isOpen = open === question;
          return (
            <motion.div className="faq-item" key={question} layout>
              <button
                aria-expanded={isOpen}
                className="faq-button"
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
            </motion.div>
          );
        })}
      </div>
    </MotionSection>
  );
}

function FinalCta() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-5 pb-20 lg:px-8" id="contato">
      <div className="final-cta">
        <h2>
          Cuidado, orientação e acolhimento para cada etapa do desenvolvimento.
        </h2>
        <p>
          Agende uma conversa e entenda como o acompanhamento psicológico pode
          ajudar sua família neste momento.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink className="bg-petrol text-white hover:bg-petrol-dark" href={links.whatsapp}>
            <WhatsAppIcon className="text-white" />
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
          <p className="footer-brand">Alexia Ferreira</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">
            Psicóloga | Desenvolvimento Infantil | ABA
          </p>
          <p className="mt-5 text-white/70">CRP: XX/XXXXX</p>
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
                {label === "WhatsApp" ? <WhatsAppIcon /> : <Icon aria-hidden="true" size={17} />}
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

function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
          exit={{ opacity: 0, y: 18 }}
          initial={{ opacity: 0, y: 18 }}
        >
          <ExternalLink
            ariaLabel="Agendar atendimento pelo WhatsApp"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-wine px-5 text-sm font-semibold text-white shadow-soft"
            href={links.whatsapp}
          >
            <WhatsAppIcon className="text-white" />
            Agendar pelo WhatsApp
          </ExternalLink>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <AboutTree />
        <Demands />
        <Process />
        <InstagramSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </MotionConfig>
  );
}

export default App;
