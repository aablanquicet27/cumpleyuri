import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ASPECTOS, GALERIA, VIDEO_18, VIERNES, SABADO, PLAN_JUNTOS, SONGS, type Aspecto, type GaleriaItem } from './data'

const RAW = 'https://raw.githubusercontent.com/aablanquicet27/cumpleyuri/main/'
const photo = (n: string) => RAW + encodeURIComponent(n)
const AUDIO_18 = RAW + encodeURIComponent('18 - One Direction (lyrics).mp3')
const CANVA_VIDEO = 'https://canva.link/cumpleyuri'

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
const slideR = { opacity: 0, x: -50 }
const slideShow = { opacity: 1, x: 0 }

const vpOnce = { once: true, amount: 0.2 } as const
const vpMore = { once: true, amount: 0.35 } as const

// === ESTILOS INLINE EXTRAIDOS (cero corrupcion de llaves) ===
const dividerStyle: React.CSSProperties = { width: '40%' }
const facetasBgStyle: React.CSSProperties = { background: 'linear-gradient(180deg, #F4EEE3 0%, #FAF6EE 50%, #F4EEE3 100%)' }
const soundtrackBgStyle: React.CSSProperties = { background: 'linear-gradient(180deg, #FAF6EE 0%, #F4EEE3 100%)' }
const hojaRutaBgStyle: React.CSSProperties = { background: 'linear-gradient(180deg, #F4EEE3 0%, #FAF6EE 100%)' }
const despedidaBgStyle: React.CSSProperties = { background: 'linear-gradient(180deg, #FAF6EE 0%, #F4EEE3 60%, #EDE3D2 100%)' }
const big18Style: React.CSSProperties = { fontSize: 'clamp(8rem, 22vw, 16rem)' }

function ScrollProgress() {
  const sp = useScroll()
  const sx: MotionValue<number> = useTransform(sp.scrollYProgress, [0, 1], [0, 1])
  const style = {
    transformOrigin: '0%',
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: '#8B1E2D',
    zIndex: 50,
    scaleX: sx,
  }
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
  const ref = useRef<HTMLDivElement>(null)
  const sp = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBg = useTransform(sp.scrollYProgress, [0, 1], ['0%', '30%'])
  const opacityBg = useTransform(sp.scrollYProgress, [0, 1], [1, 0.25])
  const bgStyle = {
    y: yBg,
    opacity: opacityBg,
    backgroundImage: 'url(' + photo('BUENA PAREJA.jpg') + ')',
  }
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[700px] w-full overflow-hidden bg-marron">
      <motion.div style={bgStyle} className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-marron/55 via-rojoOscuro/40 to-crema" />
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={fadeIn} animate={showIn} transition={mkT(1.0)} className="sello text-doradoSuave/95 border-doradoSuave/60 text-base md:text-lg mb-6 bg-marron/30 backdrop-blur-sm">22 de mayo de 2026</motion.div>
        <motion.h1 initial={fadeUp} animate={show} transition={mkT(1.4)} className="serif text-crema text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tightish max-w-4xl drop-shadow-lg">
          Feliz Cumpleaños,<br/><span className="italic font-light text-doradoSuave">la mejor mujer del planeta</span>
        </motion.h1>
        <motion.div initial={fadeIn} animate={showIn} transition={mkT(1.4, 0.6)} className="mt-12 max-w-2xl ornament-frame">
          <p className="serif italic text-crema/95 text-lg md:text-2xl leading-relaxed">
            «Mujeres buenas hay muchas, pero tú eres la mejor de todas.»
          </p>
          <p className="hand text-doradoSuave text-xl mt-6">— Proverbios 31:29</p>
        </motion.div>
        <motion.div initial={fadeIn} animate={showIn} transition={mkT(1.0, 2.0)} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center text-crema/80">
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
            «Levántate, oh amiga mía, hermosa mía, y ven. Porque he aquí ha pasado el invierno, se ha mudado, la lluvia se fue; se han mostrado las flores en la tierra, el tiempo de la canción ha venido, y en nuestro país se ha oído la voz de la tórtola.»
          </p>
          <p className="hand text-marronSuave text-lg mt-8">— Cantares 2:10–12</p>
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
          Una foto por cada verdad. Sin inventos.
        </motion.p>
        <Ornament className="mt-10" />
      </div>
    </section>
  )
}

function FacetaCard({ a, idx }: { a: Aspecto; idx: number }) {
  const right = idx % 2 === 1
  return (
    <motion.article
      initial={fadeUp}
      whileInView={show}
      viewport={vpMore}
      transition={mkT(0.9, 0.05)}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center py-20 md:py-28"
    >
      <div className={'md:col-span-7 ' + (right ? 'md:order-2' : '')}>
        <div className="vintage-frame mx-auto max-w-xl">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={photo(a.foto)} alt={a.titulo} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className={'md:col-span-5 ' + (right ? 'md:order-1 md:text-right' : '')}>
        <p className="script text-doradoSuave text-5xl md:text-7xl leading-none mb-3">{a.num}</p>
        <h3 className="serif text-4xl md:text-6xl text-rojo leading-[1.05] tracking-tightish">{a.titulo}</h3>
        <div className="divider-dorado my-6 mx-0" style={dividerStyle} />
        <p className="hand text-marronSuave text-2xl md:text-3xl italic">{a.caption}</p>
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
        <SectionLabel>Pruebas visibles</SectionLabel>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-crema text-center leading-tight">
          Cada foto es <span className="italic text-doradoSuave">una verdad</span>
        </motion.h2>
        <Ornament className="my-12" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {GALERIA.map((g, i) => <GaleriaItemCard key={i} g={g} i={i} />)}
        </div>
      </div>
    </section>
  )
}

function SongRow({ s, i }: { s: { n: number; t: string; sub: string }; i: number }) {
  return (
    <motion.li initial={slideR} whileInView={slideShow} viewport={vpMore} transition={mkT(0.6, i * 0.05)} className="flex items-center gap-5 p-5 md:p-6 bg-cremaClara border border-dorado/25 hover:border-rojo/50 transition-all hover:shadow-md">
      <span className="script text-5xl md:text-6xl text-rojo w-16 text-center leading-none">{s.n}</span>
      <div className="flex-1">
        <p className="serif text-2xl md:text-3xl text-marron">{s.t}</p>
        <p className="hand text-marronSuave text-lg md:text-xl">{s.sub}</p>
      </div>
      {s.t === '18' && <span className="hand text-rojo text-lg">↓ esta es especial</span>}
    </motion.li>
  )
}

function Soundtrack() {
  return (
    <section className="py-28 md:py-36 px-6 grain" style={soundtrackBgStyle}>
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Nuestro soundtrack</SectionLabel>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-marron text-center leading-tight mb-4">
          One Direction <span className="italic text-rojo">y nosotros</span>
        </motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.2)} className="serif italic text-marronSuave text-center text-lg max-w-2xl mx-auto">
          Diez canciones que cuentan nuestra historia, en orden.
        </motion.p>
        <Ornament className="my-12" />
        <ol className="space-y-3 md:space-y-4">
          {SONGS.map((s, i) => <SongRow key={s.n} s={s} i={i} />)}
        </ol>
      </div>
    </section>
  )
}

function Lyric18Row({ v, i }: { v: GaleriaItem; i: number }) {
  const isRight = i % 2 === 1
  return (
    <motion.div initial={fadeUp} whileInView={show} viewport={vpMore} transition={mkT(0.8, i * 0.08)} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className={'vintage-frame ' + (isRight ? 'md:order-2' : '')}>
        <div className="aspect-[4/5] overflow-hidden">
          <img src={photo(v.foto)} alt={v.caption} loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
      <p className={'dance text-3xl md:text-5xl text-doradoSuave leading-snug ' + (isRight ? 'md:order-1 md:text-right' : '')}>
        {v.caption}
      </p>
    </motion.div>
  )
}

function Cancion18() {
  return (
    <section className="relative py-28 md:py-36 px-6 bg-marron text-crema overflow-hidden grain">
      <div className="absolute inset-0 opacity-15">
        <img src={photo('DESDE TENIAMOS 18.jpg')} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-marron/75" />
      <div className="relative max-w-4xl mx-auto">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-doradoSuave text-lg uppercase tracking-wideish text-center mb-4">Nuestra versión de</motion.p>
        <motion.h2 initial={scaleIn} whileInView={scaleShow} viewport={vpOnce} transition={t10} className="script text-rojo text-center leading-none" style={big18Style}>18</motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.6, 0.2)} className="serif italic text-center text-crema/85 text-xl mt-6 max-w-2xl mx-auto">
          Yo hice nuestro propio video con esta canción. Vívelo ahora. Súbele al volumen.
        </motion.p>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.4)} className="mt-12 max-w-2xl mx-auto">
          <p className="hand text-doradoSuave text-center text-base mb-3">la canción original ↓</p>
          <audio controls className="w-full" preload="metadata">
            <source src={AUDIO_18} type="audio/mpeg" />
          </audio>
        </motion.div>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.5)} className="mt-16 max-w-3xl mx-auto">
          <p className="hand text-doradoSuave text-center text-base mb-3">nuestro video ↓</p>
          <div className="aspect-video border-2 border-doradoSuave/40 overflow-hidden bg-marronSuave/20 shadow-2xl">
            <iframe
              src={CANVA_VIDEO}
              className="w-full h-full"
              allow="fullscreen; autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
              title="Nuestra versión de 18"
            />
          </div>
        </motion.div>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.6, 0.7)} className="text-center mt-5">
          <a href={CANVA_VIDEO} target="_blank" rel="noopener noreferrer" className="hand text-doradoSuave hover:text-crema text-lg underline underline-offset-4">
            si no carga aquí, ábrelo en pantalla completa ↗
          </a>
        </motion.p>
        <Ornament className="my-20" />
        <div className="space-y-16">
          {VIDEO_18.map((v, i) => <Lyric18Row key={i} v={v} i={i} />)}
        </div>
        <motion.p initial={fadeIn} whileInView={showIn} viewport={vpOnce} transition={t10} className="hand text-crema/80 text-center text-xl md:text-2xl mt-20">
          Quiero amarte así. Desde los 18. Hasta los 80.
        </motion.p>
      </div>
    </section>
  )
}

function TimelineItem({ item, i }: { item: { hora: string; titulo: string; texto: string }; i: number }) {
  return (
    <motion.div initial={slideR} whileInView={slideShow} viewport={vpMore} transition={mkT(0.6, i * 0.06)} className="relative pl-10 pb-10 border-l-2 border-dorado/40 last:border-l-transparent">
      <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-rojo ring-4 ring-crema" />
      <p className="hand text-rojo text-2xl mb-1">{item.hora}</p>
      <h4 className="serif text-2xl md:text-3xl text-marron">{item.titulo}</h4>
      <p className="serif italic text-marronSuave text-base md:text-lg mt-1">{item.texto}</p>
    </motion.div>
  )
}

function HojaRuta() {
  return (
    <section className="py-28 md:py-36 px-6 grain" style={hojaRutaBgStyle}>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Hoja de ruta</SectionLabel>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-marron text-center leading-tight">
          Lo que <span className="italic text-rojo">vamos a vivir</span>
        </motion.h2>
        <Ornament className="my-12" />
        <h3 className="script text-rojo text-5xl mb-8">Viernes 22</h3>
        <div>{VIERNES.map((v, i) => <TimelineItem key={i} item={v} i={i} />)}</div>
        <h3 className="script text-rojo text-5xl mt-12 mb-8">Sábado 23</h3>
        <div>{SABADO.map((v, i) => <TimelineItem key={i} item={v} i={i} />)}</div>
      </div>
    </section>
  )
}

function PlanCard({ p, i }: { p: { emoji: string; titulo: string; texto: string }; i: number }) {
  return (
    <motion.div initial={fadeUp} whileInView={show} viewport={vpMore} transition={mkT(0.6, i * 0.06)} className="bg-cremaClara border border-dorado/25 p-8 hover:border-rojo/40 hover:shadow-lg transition-all">
      <p className="text-5xl mb-4">{p.emoji}</p>
      <h4 className="serif text-2xl md:text-3xl text-rojo mb-2">{p.titulo}</h4>
      <p className="serif italic text-marronSuave text-lg">{p.texto}</p>
    </motion.div>
  )
}

function PlanCompartido() {
  return (
    <section className="py-28 md:py-36 px-6 bg-marron text-crema grain">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Plan compartido</SectionLabel>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-crema text-center leading-tight">
          Lo que vamos a hacer <span className="italic text-doradoSuave">juntos</span>
        </motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={mkT(0.8, 0.2)} className="serif italic text-crema/70 text-center text-lg mt-6 max-w-2xl mx-auto">
          Tu lenguaje de amor es tiempo de calidad. Tu regalo es estar.
        </motion.p>
        <Ornament className="my-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <Soundtrack />
      <Cancion18 />
      <HojaRuta />
      <PlanCompartido />
      <CierreEspiritual />
      <Despedida />
    </main>
  )
}
