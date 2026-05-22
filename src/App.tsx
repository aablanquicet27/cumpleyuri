import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ASPECTOS, GALERIA, PLAN_JUNTOS, type Aspecto, type GaleriaItem, type PlanItem } from './data'

const RAW = 'https://raw.githubusercontent.com/aablanquicet27/cumpleyuri/main/'
const photo = (n: string) => RAW + encodeURIComponent(n)
const CANVA_EMBED_SRC = 'https://www.canva.com/design/DAHKVl4WeBU/xVwLGKmqywBkJRzxCc3inw/watch?embed'
const CANVA_OPEN_URL = 'https://www.canva.com/design/DAHKVl4WeBU/xVwLGKmqywBkJRzxCc3inw/watch'

const ease1: [number, number, number, number] = [0.22, 1, 0.36, 1]
const mkT = (duration: number, delay: number = 0) => ({ duration, delay, ease: ease1 })

const t06 = mkT(0.6)
const t08 = mkT(0.8)
const t10 = mkT(1.0)
const t14 = mkT(1.4)

const fadeUp = { opacity: 0, y: 40 }
const show = { opacity: 1, y: 0 }
const fadeIn = { opacity: 0 }
const showIn = { opacity: 1 }
const scaleIn = { opacity: 0, scale: 0.96 }
const scaleShow = { opacity: 1, scale: 1 }

const vpOnce = { once: true, amount: 0.2 } as const
const vpMore = { once: true, amount: 0.35 } as const

const collapsedV = { height: 0, opacity: 0 }
const expandedV = { height: 'auto' as const, opacity: 1 }
const rotPlus = { rotate: 45 }
const rotZero = { rotate: 0 }

const dividerStyle: React.CSSProperties = { width: '40%' }
const facetasBgStyle: React.CSSProperties = { background: 'linear-gradient(180deg, #F4EEE3 0%, #FAF6EE 50%, #F4EEE3 100%)' }
const despedidaBgStyle: React.CSSProperties = { background: 'linear-gradient(180deg, #FAF6EE 0%, #F4EEE3 60%, #EDE3D2 100%)' }
const big18Style: React.CSSProperties = { fontSize: 'clamp(8rem, 22vw, 16rem)' }
const heroBgStyle: React.CSSProperties = {
  background: 'radial-gradient(ellipse at 50% 30%, #FAF6EE 0%, #F4EEE3 45%, #EDE3D2 100%)',
}
const expandedCardStyle: React.CSSProperties = { overflow: 'hidden' }
const scrollBarStyleBase: React.CSSProperties = {
  transformOrigin: '0%',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '3px',
  background: '#8B1E2D',
  zIndex: 50,
}

// Canva iframe wrapper (mantiene aspect-ratio 16:9 con padding-top trick)
const canvaWrapStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: '56.25%',
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: '0 12px 40px rgba(42, 31, 24, 0.35)',
}
const canvaIframeStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
  padding: 0,
  margin: 0,
}

function ScrollProgress() {
  const sp = useScroll()
  const sx: MotionValue<number> = useTransform(sp.scrollYProgress, [0, 1], [0, 1])
  const style = Object.assign({}, scrollBarStyleBase, { scaleX: sx })
  return <motion.div style={style} />
}

function Ornament({ className = '' }: { className?: string }) {
  return (
    <div className={'flex items-center justify-center gap-4 ' + className}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-dorado/60" />
      <span className="text-dorado text-2xl shimmer">❦</span>
      <span className="text-dorado text-xl opacity-70">❧</span>
      <span className="text-dorado text-2xl shimmer">❦</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-dorado/60" />
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="text-center mb-6">
      <span className="sello text-lg uppercase tracking-wideish">{children}</span>
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden grain" style={heroBgStyle}>
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={fadeIn} animate={showIn} transition={mkT(1.0)} className="sello text-base md:text-lg mb-8">
          22 de mayo de 2026
        </motion.div>
        <motion.div initial={fadeIn} animate={showIn} transition={mkT(0.8, 0.3)} className="mb-6">
          <Ornament />
        </motion.div>
        <motion.h1 initial={fadeUp} animate={show} transition={mkT(1.4, 0.4)} className="serif text-rojo text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tightish max-w-4xl">
          Feliz Cumpleaños,<br/>
          <span className="italic font-light text-marronSuave">Yuri</span>
        </motion.h1>
        <motion.p initial={fadeIn} animate={showIn} transition={mkT(1.0, 0.9)} className="hand text-rojo text-2xl md:text-3xl mt-6">
          la mejor mujer del planeta
        </motion.p>
        <motion.div initial={fadeIn} animate={showIn} transition={mkT(1.4, 1.2)} className="mt-14 max-w-2xl ornament-frame">
          <p className="serif italic text-marron text-lg md:text-2xl leading-relaxed">
            «Mujeres buenas hay muchas, pero tú eres la mejor de todas.»
          </p>
          <p className="hand text-rojo text-xl mt-6">— Proverbios 31:29</p>
        </motion.div>
        <motion.div initial={fadeIn} animate={showIn} transition={mkT(1.0, 2.0)} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center text-marronSuave/80">
            <span className="hand text-base mb-2">desliza, mi amor</span>
            <span className="text-2xl animate-bounce">↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function VersiculoApertura() {
  return (
    <section className="relative py-28 md:py-40 px-6 grain">
      <div className="max-w-3xl mx-auto text-center relative">
        <Ornament className="mb-10" />
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="hand text-rojo text-xl mb-8 uppercase tracking-wideish">Antes que nada, Cristo</motion.p>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.2)}>
          <p className="serif italic text-2xl md:text-4xl leading-relaxed text-marron">
            «Porque los montes se moverán, y los collados temblarán; pero no se apartará de ti mi misericordia, ni el pacto de mi paz se quebrantará, dijo Jehová, el que tiene misericordia de ti.»
          </p>
          <p className="hand text-marronSuave text-lg mt-8">— Isaías 54:10</p>
        </motion.div>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.4)} className="hand text-2xl md:text-3xl text-rojo mt-12">
          Esta es la voz con la que Dios me habló de ti.
        </motion.p>
        <Ornament className="mt-12" />
      </div>
    </section>
  )
}

function FacetasIntro() {
  return (
    <section className="py-20 md:py-28 px-6 bg-marron text-crema text-center grain">
      <div className="max-w-3xl mx-auto">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-doradoSuave text-lg uppercase tracking-wideish mb-4">El corazón del regalo</motion.p>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-5xl md:text-7xl leading-tight">
          17 facetas<br/><span className="italic text-doradoSuave">en las que te amo</span>
        </motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.2)} className="serif italic text-crema/70 text-lg md:text-xl mt-6">
          Una foto por cada verdad. Mis palabras, tal cual.
        </motion.p>
        <Ornament className="mt-10" />
      </div>
    </section>
  )
}

function FacetaCard({ a, idx }: { a: Aspecto; idx: number }) {
  const right = idx % 2 === 1
  const hasText = a.texto.trim().length > 0
  const hasCaption = a.caption.trim().length > 0
  return (
    <motion.article
      initial={fadeUp}
      whileInView={show}
      viewport={vpMore}
      transition={mkT(0.9, 0.05)}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center py-20 md:py-28"
    >
      <div className={'md:col-span-6 ' + (right ? 'md:order-2' : '')}>
        <div className="vintage-frame mx-auto max-w-xl">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={photo(a.foto)} alt={a.titulo} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className={'md:col-span-6 ' + (right ? 'md:order-1 md:text-right' : '')}>
        <p className="script text-doradoSuave text-5xl md:text-7xl leading-none mb-3">{a.num}</p>
        <h3 className="serif text-4xl md:text-6xl text-rojo leading-[1.05] tracking-tightish">{a.titulo}</h3>
        {hasCaption && (
          <>
            <div className="divider-dorado my-6 mx-0" style={dividerStyle} />
            <p className="hand text-marronSuave text-2xl md:text-3xl italic">{a.caption}</p>
          </>
        )}
        {hasText && (
          <p className="serif text-marronSuave text-lg md:text-xl leading-relaxed mt-6 italic">{a.texto}</p>
        )}
      </div>
    </motion.article>
  )
}

function Facetas() {
  return (
    <section className="px-6 grain" style={facetasBgStyle}>
      <div className="max-w-6xl mx-auto divide-y divide-dorado/15">
        {ASPECTOS.map((a, i) => <FacetaCard key={a.num} a={a} idx={i} />)}
      </div>
    </section>
  )
}

function GaleriaItemCard({ g, i }: { g: GaleriaItem; i: number }) {
  const rotDeg = (i % 5 === 0 ? -2.5 : i % 5 === 1 ? 1.8 : i % 5 === 2 ? -1 : i % 5 === 3 ? 2.2 : 0.5)
  const rotStyle: React.CSSProperties = { transform: 'rotate(' + rotDeg + 'deg)' }
  return (
    <motion.div initial={scaleIn} whileInView={scaleShow} viewport={vpMore} transition={mkT(0.6, i * 0.04)} style={rotStyle} className="vintage-frame">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={photo(g.foto)} alt={g.caption} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <p className="hand text-rojo text-2xl text-center mt-4 px-2">{g.caption}</p>
    </motion.div>
  )
}

function Galeria() {
  return (
    <section className="py-28 md:py-36 px-6 bg-rojoOscuro text-crema grain relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <SectionLabel>Cada foto, una característica tuya</SectionLabel>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-crema text-center leading-tight">
          Y así te <span className="italic text-doradoSuave">veo yo</span>
        </motion.h2>
        <Ornament className="my-12" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {GALERIA.map((g, i) => <GaleriaItemCard key={i} g={g} i={i} />)}
        </div>
      </div>
    </section>
  )
}

function Cancion18Embed() {
  return (
    <section className="relative py-28 md:py-36 px-6 bg-marron text-crema overflow-hidden grain">
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-doradoSuave text-lg uppercase tracking-wideish mb-4">Nuestra versión de</motion.p>
        <motion.h2 initial={scaleIn} whileInView={scaleShow} viewport={vpOnce} transition={t10} className="script text-rojo leading-none" style={big18Style}>18</motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.6, 0.2)} className="serif italic text-crema/85 text-xl mt-4 max-w-2xl mx-auto">
          Desde que teníamos 18. Te hice un video. Dále play.
        </motion.p>
        <Ornament className="my-12" />
        <motion.div
          initial={scaleIn}
          whileInView={scaleShow}
          viewport={vpOnce}
          transition={mkT(0.9, 0.3)}
          className="max-w-3xl mx-auto"
        >
          <div style={canvaWrapStyle}>
            <iframe
              src={CANVA_EMBED_SRC}
              style={canvaIframeStyle}
              loading="lazy"
              allowFullScreen
              allow="fullscreen"
              title="Desde que teníamos 18"
            />
          </div>
          <p className="hand text-doradoSuave text-2xl md:text-3xl mt-8">
            18 · One Direction
          </p>
          <a
            href={CANVA_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="serif italic text-crema/60 hover:text-crema text-base mt-2 inline-block underline underline-offset-4"
          >
            abrir en Canva ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function PlanCard({ p, i }: { p: PlanItem; i: number }) {
  const [open, setOpen] = useState(false)
  const hasDetail = (p.pasos && p.pasos.length > 0) || (p.texto && p.texto.length > 0)
  const plusAnim = open ? rotPlus : rotZero
  return (
    <motion.div
      initial={fadeUp}
      whileInView={show}
      viewport={vpMore}
      transition={mkT(0.6, i * 0.06)}
      className="bg-cremaClara border border-dorado/25 hover:border-rojo/40 hover:shadow-lg transition-all"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left p-7 md:p-8 flex items-start justify-between gap-4 group"
      >
        <div className="flex-1">
          <h4 className="serif text-2xl md:text-3xl text-rojo mb-1 group-hover:text-rojoOscuro transition-colors">{p.titulo}</h4>
          <p className="serif italic text-marronSuave text-base md:text-lg">{p.resumen}</p>
        </div>
        {hasDetail && (
          <motion.span
            animate={plusAnim}
            transition={mkT(0.3)}
            className="text-dorado text-3xl leading-none shrink-0"
          >
            +
          </motion.span>
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && hasDetail && (
          <motion.div
            key="detail"
            initial={collapsedV}
            animate={expandedV}
            exit={collapsedV}
            transition={mkT(0.4)}
            style={expandedCardStyle}
          >
            <div className="px-7 pb-7 md:px-8 md:pb-8 border-t border-dorado/20 pt-5">
              {p.texto && (
                <p className="serif italic text-marronSuave text-base md:text-lg leading-relaxed">{p.texto}</p>
              )}
              {p.pasos && (
                <ol className="space-y-2 list-none">
                  {p.pasos.map((paso, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="script text-rojo text-2xl leading-none shrink-0 w-7">{idx + 1}</span>
                      <span className="serif text-marron text-base md:text-lg pt-1">{paso}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function PlanCompartido() {
  return (
    <section className="py-28 md:py-36 px-6 bg-marron text-crema grain">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Lo que vamos a hacer juntos</SectionLabel>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-crema text-center leading-tight">
          Plan <span className="italic text-doradoSuave">compartido</span>
        </motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.2)} className="serif italic text-crema/70 text-center text-lg mt-6 max-w-2xl mx-auto">
          Tu lenguaje de amor es tiempo de calidad. Tu regalo es estar.
        </motion.p>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.6, 0.4)} className="hand text-doradoSuave text-center text-base mt-4">
          — click en cada tarjeta para abrir —
        </motion.p>
        <Ornament className="my-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PLAN_JUNTOS.map((p, i) => <PlanCard key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}

function CierreEspiritual() {
  return (
    <section className="py-28 md:py-40 px-6 bg-rojo text-crema relative overflow-hidden grain">
      <div className="relative max-w-3xl mx-auto text-center">
        <SectionLabel>Lo que me dio Jehová</SectionLabel>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t10}>
          <p className="serif italic text-3xl md:text-5xl leading-relaxed text-crema">
            «El que halla esposa halla el bien, y alcanza la benevolencia de Jehová.»
          </p>
          <p className="hand text-doradoSuave text-xl mt-6">— Proverbios 18:22</p>
        </motion.div>
        <motion.p initial={scaleIn} whileInView={scaleShow} viewport={vpOnce} transition={mkT(1.4, 0.3)} className="script text-doradoSuave text-7xl md:text-9xl mt-16 leading-tight">
          Y yo te hallé a ti.
        </motion.p>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.6)} className="serif italic text-crema/85 text-lg md:text-xl mt-12 max-w-2xl mx-auto">
          La Biblia dice que los padres dan la herencia, pero una buena esposa la da Jehová. Sé que Dios te dio a mi vida.
        </motion.p>
      </div>
    </section>
  )
}

function Despedida() {
  return (
    <section className="relative min-h-[100svh] py-28 md:py-36 px-6 grain" style={despedidaBgStyle}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={scaleIn} whileInView={scaleShow} viewport={vpOnce} transition={t14} className="vintage-frame max-w-md mx-auto">
          <div className="aspect-[3/4] overflow-hidden">
            <img src={photo('DESDE TENIAMOS 18.jpg')} alt="Yuri" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <Ornament className="my-10" />
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(1.0, 0.2)} className="serif text-5xl md:text-7xl text-rojo leading-tight">
          Feliz cumpleaños,<br/><span className="italic">mi amor.</span>
        </motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.4)} className="serif italic text-marronSuave text-xl md:text-2xl mt-8 max-w-xl mx-auto">
          Gracias por dejarme amarte. Gracias por dejarte amar. Que este año Dios te corone con lo mejor.
        </motion.p>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(1.0, 0.6)} className="mt-16">
          <p className="script text-rojo text-6xl md:text-8xl leading-none">— Armando</p>
          <p className="hand text-marronSuave text-xl mt-4">22 de mayo de 2026 · Cartagena</p>
        </motion.div>
        <Ornament className="mt-20" />
        <p className="hand text-marronSuave/60 text-sm mt-8">hecho con manos temblando · 2026</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="text-marron">
      <ScrollProgress />
      <Hero />
      <VersiculoApertura />
      <FacetasIntro />
      <Facetas />
      <Galeria />
      <Cancion18Embed />
      <PlanCompartido />
      <CierreEspiritual />
      <Despedida />
    </main>
  )
}
