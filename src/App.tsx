import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ASPECTOS, GALERIA, VIDEO_18, VIERNES, SABADO, PLAN_JUNTOS, SONGS, type Aspecto, type GaleriaItem } from './data'

const RAW = 'https://raw.githubusercontent.com/aablanquicet27/cumpleyuri/main/'
const photo = (n: string) => RAW + encodeURIComponent(n)
const AUDIO_18 = RAW + encodeURIComponent('18 - One Direction (lyrics).mp3')

const ease1: any = [0.22, 1, 0.36, 1]
const mkT = (duration: number, delay: number = 0) => ({ duration, delay, ease: ease1 })

// Common transitions
const t06 = mkT(0.6)
const t08 = mkT(0.8)
const t10 = mkT(1.0)
const t14 = mkT(1.4)

// Variants
const fadeUp = { opacity: 0, y: 40 }
const show = { opacity: 1, y: 0 }
const fadeIn = { opacity: 0 }
const showIn = { opacity: 1 }
const scaleIn = { opacity: 0, scale: 0.96 }
const scaleShow = { opacity: 1, scale: 1 }
const slideR = { opacity: 0, x: -50 }
const slideL = { opacity: 0, x: 50 }
const slideShow = { opacity: 1, x: 0 }

// Viewport configs
const vpOnce = { once: true, amount: 0.2 }
const vpMore = { once: true, amount: 0.35 }

// Style constants
const progressStyle: any = { transformOrigin: '0%', position: 'fixed', top: 0, left: 0, right: 0, height: '3px', background: '#8B1E2D', zIndex: 50 }
const patternStyle: any = { backgroundImage: 'radial-gradient(#F4EEE3 1px, transparent 1px)', backgroundSize: '20px 20px' }

function ScrollProgress() {
  const sp = useScroll()
  const sx = useTransform(sp.scrollYProgress, [0, 1], [0, 1])
  const dyn = { scaleX: sx }
  return <motion.div style={progressStyle} animate={dyn} />
}

function Divider() {
  return (
    <div className="flex items-center justify-center my-12">
      <span className="h-px w-12 bg-dorado opacity-50" />
      <span className="mx-4 text-dorado text-lg">✦</span>
      <span className="h-px w-12 bg-dorado opacity-50" />
    </div>
  )
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const heroOffset: any = ['start start', 'end start']
  const sp = useScroll({ target: ref, offset: heroOffset })
  const yBg = useTransform(sp.scrollYProgress, [0, 1], ['0%', '30%'])
  const opacityBg = useTransform(sp.scrollYProgress, [0, 1], [1, 0.3])
  const bgStyle: any = { y: yBg, opacity: opacityBg, backgroundImage: 'url(' + photo('BUENA PAREJA.jpg') + ')' }
  const tHeroQuote = mkT(1.4, 0.6)
  const tHeroArrow = mkT(1.0, 2.0)
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
      <motion.div style={bgStyle} className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-marron/40 via-marron/30 to-crema" />
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <motion.p initial={fadeIn} animate={showIn} transition={t14} className="hand text-crema text-2xl md:text-3xl mb-6 tracking-wide">22 de mayo de 2026</motion.p>
        <motion.h1 initial={fadeUp} animate={show} transition={t14} className="serif text-crema text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tightish max-w-4xl">
          Feliz Cumpleaños,<br/><span className="italic font-light">la mejor mujer del planeta</span>
        </motion.h1>
        <motion.div initial={fadeIn} animate={showIn} transition={tHeroQuote} className="mt-10 max-w-2xl">
          <p className="serif italic text-crema/90 text-lg md:text-xl leading-relaxed">
            «Mujeres buenas hay muchas, pero tú eres la mejor de todas.»
          </p>
          <p className="hand text-doradoSuave text-lg mt-4">— Proverbios 31</p>
        </motion.div>
        <motion.div initial={fadeIn} animate={showIn} transition={tHeroArrow} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center text-crema/80">
            <span className="hand text-sm mb-2">desliza, mi amor</span>
            <span className="text-xl animate-bounce">↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const tVerse1 = mkT(0.8, 0.2)
const tVerse2 = mkT(0.8, 0.4)

function VersiculoApertura() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-crema grain">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="hand text-rojo text-xl mb-8 uppercase tracking-wideish">Antes que nada, Cristo</motion.p>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={tVerse1}>
          <p className="serif italic text-2xl md:text-4xl leading-relaxed text-marron">
            «Levántate, oh amiga mía, hermosa mía, y ven. Porque he aquí ha pasado el invierno, se ha mudado, la lluvia se fue; se han mostrado las flores en la tierra, el tiempo de la canción ha venido, y en nuestro país se ha oído la voz de la tórtola.»
          </p>
          <p className="hand text-marronSuave text-lg mt-8">— Cantares 2:10–12</p>
        </motion.div>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={tVerse2} className="hand text-2xl md:text-3xl text-rojo mt-12">
          Esta es la voz con la que Dios me habló de ti.
        </motion.p>
      </div>
    </section>
  )
}

const tIntroSub = mkT(0.8, 0.2)

function FacetasIntro() {
  return (
    <section className="py-20 md:py-28 px-6 bg-cremaClara text-center">
      <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-rojo text-lg uppercase tracking-wideish mb-4">El corazón del regalo</motion.p>
      <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-5xl md:text-6xl text-marron leading-tight max-w-3xl mx-auto">
        25 maneras<br/><span className="italic">en las que te amo</span>
      </motion.h2>
      <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={tIntroSub} className="serif italic text-marronSuave text-lg md:text-xl mt-6 max-w-xl mx-auto">
        No son palabras inventadas. Son cosas que he visto en ti.
      </motion.p>
      <div className="divider-dorado mt-10" />
    </section>
  )
}

const tFacetaTxt = mkT(1.0, 0.15)

function FacetaCard({ a, idx }: { a: Aspecto; idx: number }) {
  const right = idx % 2 === 1
  const imgInit = right ? slideL : slideR
  const txtInit = right ? slideR : slideL
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-24">
      <motion.div initial={imgInit} whileInView={slideShow} viewport={vpMore} transition={t10} className={'relative ' + (right ? 'md:order-2' : '')}>
        <div className="relative aspect-[3/4] overflow-hidden img-frame bg-marron/5">
          <img src={photo(a.foto)} alt={a.caption} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-marron/10" />
        </div>
        <p className="hand text-rojo text-xl md:text-2xl mt-4 text-center italic">{a.caption}</p>
      </motion.div>
      <motion.div initial={txtInit} whileInView={slideShow} viewport={vpMore} transition={tFacetaTxt} className={right ? 'md:order-1' : ''}>
        <p className="script text-doradoSuave text-3xl md:text-4xl mb-2">{a.num}</p>
        <h3 className="serif text-3xl md:text-5xl text-rojo leading-tight mb-6">{a.titulo}</h3>
        <p className="text-lg md:text-xl text-marron leading-relaxed mb-6">{a.texto}</p>
        <div className="flex items-start gap-3">
          <span className="text-dorado text-2xl leading-none mt-1">·</span>
          <p className="serif italic text-marronSuave text-base md:text-lg leading-relaxed">{a.momento}</p>
        </div>
      </motion.div>
    </article>
  )
}

function Facetas() {
  return (
    <section className="bg-crema px-6">
      <div className="max-w-5xl mx-auto divide-y divide-dorado/20">
        {ASPECTOS.map((a, i) => <FacetaCard key={a.num} a={a} idx={i} />)}
      </div>
    </section>
  )
}

function GaleriaItemCard({ g, i }: { g: GaleriaItem; i: number }) {
  const rotDeg = (i % 5 === 0 ? -2 : i % 5 === 1 ? 1.5 : i % 5 === 2 ? -1 : i % 5 === 3 ? 2 : 0)
  const rotStyle: any = { transform: 'rotate(' + rotDeg + 'deg)' }
  const tCard = mkT(0.6, i * 0.04)
  return (
    <motion.div initial={scaleIn} whileInView={scaleShow} viewport={vpMore} transition={tCard} style={rotStyle} className="bg-cremaClara p-3 pb-12 img-frame">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={photo(g.foto)} alt={g.caption} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <p className="hand text-rojo text-xl text-center mt-4">{g.caption}</p>
    </motion.div>
  )
}

function Galeria() {
  return (
    <section className="py-28 md:py-36 px-6 bg-cremaClara">
      <div className="max-w-6xl mx-auto">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-rojo text-lg uppercase tracking-wideish text-center mb-4">Pruebas visibles</motion.p>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-marron text-center leading-tight">
          Cada foto es <span className="italic">una verdad</span>
        </motion.h2>
        <Divider />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {GALERIA.map((g, i) => <GaleriaItemCard key={i} g={g} i={i} />)}
        </div>
      </div>
    </section>
  )
}

const tSoundSub = mkT(0.8, 0.2)

function SongRow({ s, i }: { s: { n: number; t: string; sub: string }; i: number }) {
  const tRow = mkT(0.6, i * 0.05)
  return (
    <motion.li initial={slideR} whileInView={slideShow} viewport={vpMore} transition={tRow} className="flex items-center gap-5 p-4 md:p-5 bg-cremaClara border border-dorado/20 hover:border-rojo/30 transition-colors">
      <span className="serif italic text-3xl md:text-4xl text-rojo w-12 text-center">{s.n}</span>
      <div className="flex-1">
        <p className="serif text-xl md:text-2xl text-marron">{s.t}</p>
        <p className="hand text-marronSuave text-base md:text-lg">{s.sub}</p>
      </div>
      {s.t === '18' && <span className="hand text-rojo text-lg">↓ esta es especial</span>}
    </motion.li>
  )
}

function Soundtrack() {
  return (
    <section className="py-28 md:py-36 px-6 bg-crema">
      <div className="max-w-4xl mx-auto">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-rojo text-lg uppercase tracking-wideish text-center mb-4">Nuestro soundtrack</motion.p>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-marron text-center leading-tight mb-4">
          One Direction <span className="italic">y nosotros</span>
        </motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={tSoundSub} className="serif italic text-marronSuave text-center text-lg max-w-2xl mx-auto">
          Diez canciones que cuentan nuestra historia, en orden.
        </motion.p>
        <Divider />
        <ol className="space-y-3 md:space-y-4">
          {SONGS.map((s, i) => <SongRow key={s.n} s={s} i={i} />)}
        </ol>
      </div>
    </section>
  )
}

const t18Sub = mkT(0.6, 0.2)
const t18Audio = mkT(0.8, 0.4)
const t18Video = mkT(0.8, 0.5)

function Lyric18Row({ v, i }: { v: GaleriaItem; i: number }) {
  const t = mkT(0.8, i * 0.08)
  const isRight = i % 2 === 1
  return (
    <motion.div initial={fadeUp} whileInView={show} viewport={vpMore} transition={t} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className={'aspect-[4/5] overflow-hidden img-frame ' + (isRight ? 'md:order-2' : '')}>
        <img src={photo(v.foto)} alt={v.caption} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <p className={'dance text-3xl md:text-5xl text-doradoSuave leading-snug ' + (isRight ? 'md:order-1 md:text-right' : '')}>
        {v.caption}
      </p>
    </motion.div>
  )
}

function Cancion18() {
  return (
    <section className="relative py-28 md:py-36 px-6 bg-marron text-crema overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={photo('DESDE TENIAMOS 18.jpg')} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-marron/70" />
      <div className="relative max-w-4xl mx-auto">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-doradoSuave text-lg uppercase tracking-wideish text-center mb-4">Nuestra versión de</motion.p>
        <motion.h2 initial={scaleIn} whileInView={scaleShow} viewport={vpOnce} transition={t10} className="serif text-7xl md:text-9xl text-rojo text-center leading-none">18</motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t18Sub} className="serif italic text-center text-crema/80 text-xl mt-6 max-w-2xl mx-auto">
          Yo hice nuestro propio video con esta canción. Cuando lo tengas listo, vívelo aquí. Mientras tanto, escúchala.
        </motion.p>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t18Audio} className="mt-12 max-w-2xl mx-auto">
          <audio controls className="w-full" preload="metadata">
            <source src={AUDIO_18} type="audio/mpeg" />
          </audio>
        </motion.div>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t18Video} className="mt-12 max-w-3xl mx-auto">
          <div className="aspect-video bg-marronSuave/40 border border-doradoSuave/30 flex items-center justify-center text-center p-8">
            <div>
              <p className="hand text-doradoSuave text-2xl mb-2">Aquí va nuestro video</p>
              <p className="serif italic text-crema/60 text-sm">— pegar embed de Canva o link directo —</p>
            </div>
          </div>
        </motion.div>
        <div className="mt-20 space-y-12">
          {VIDEO_18.map((v, i) => <Lyric18Row key={i} v={v} i={i} />)}
        </div>
        <motion.p initial={fadeIn} whileInView={showIn} viewport={vpOnce} transition={t10} className="hand text-crema/70 text-center text-lg mt-16">
          Quiero amarte así. Desde los 18. Hasta los 80.
        </motion.p>
      </div>
    </section>
  )
}

function TimelineItem({ item, i }: { item: { hora: string; titulo: string; texto: string }; i: number }) {
  const t = mkT(0.6, i * 0.06)
  return (
    <motion.div initial={slideR} whileInView={slideShow} viewport={vpMore} transition={t} className="relative pl-10 pb-10 border-l border-dorado/40 last:border-l-transparent">
      <span className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-rojo ring-4 ring-crema" />
      <p className="hand text-rojo text-xl mb-1">{item.hora}</p>
      <h4 className="serif text-2xl md:text-3xl text-marron">{item.titulo}</h4>
      <p className="serif italic text-marronSuave text-base md:text-lg mt-1">{item.texto}</p>
    </motion.div>
  )
}

function HojaRuta() {
  return (
    <section className="py-28 md:py-36 px-6 bg-cremaClara">
      <div className="max-w-3xl mx-auto">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-rojo text-lg uppercase tracking-wideish text-center mb-4">Hoja de ruta</motion.p>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-marron text-center leading-tight">
          Lo que <span className="italic">vamos a vivir</span> este fin de semana
        </motion.h2>
        <Divider />
        <h3 className="hand text-rojo text-3xl mb-8">Viernes 22</h3>
        <div>{VIERNES.map((v, i) => <TimelineItem key={i} item={v} i={i} />)}</div>
        <h3 className="hand text-rojo text-3xl mt-12 mb-8">Sábado 23</h3>
        <div>{SABADO.map((v, i) => <TimelineItem key={i} item={v} i={i} />)}</div>
      </div>
    </section>
  )
}

const tPlanSub = mkT(0.8, 0.2)

function PlanCard({ p, i }: { p: { emoji: string; titulo: string; texto: string }; i: number }) {
  const t = mkT(0.6, i * 0.06)
  return (
    <motion.div initial={fadeUp} whileInView={show} viewport={vpMore} transition={t} className="bg-cremaClara border border-dorado/20 p-8 hover:border-rojo/30 transition-colors">
      <p className="text-4xl mb-4">{p.emoji}</p>
      <h4 className="serif text-2xl text-rojo mb-2">{p.titulo}</h4>
      <p className="serif italic text-marronSuave">{p.texto}</p>
    </motion.div>
  )
}

function PlanCompartido() {
  return (
    <section className="py-28 md:py-36 px-6 bg-crema">
      <div className="max-w-5xl mx-auto">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-rojo text-lg uppercase tracking-wideish text-center mb-4">Plan compartido</motion.p>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t08} className="serif text-4xl md:text-6xl text-marron text-center leading-tight">
          Lo que vamos a hacer <span className="italic">juntos</span>
        </motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={tPlanSub} className="serif italic text-marronSuave text-center text-lg mt-6 max-w-2xl mx-auto">
          Tu lenguaje de amor es tiempo de calidad. Tu regalo es estar.
        </motion.p>
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAN_JUNTOS.map((p, i) => <PlanCard key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}

const tHalle = mkT(1.4, 0.3)
const tCierreP = mkT(0.8, 0.6)

function CierreEspiritual() {
  return (
    <section className="py-28 md:py-40 px-6 bg-rojo text-crema relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={patternStyle} />
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t06} className="hand text-doradoSuave text-lg uppercase tracking-wideish mb-4">Lo que me dio Jehová</motion.p>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={t10}>
          <p className="serif italic text-3xl md:text-5xl leading-relaxed text-crema">
            «El que halla esposa halla el bien, y alcanza la benevolencia de Jehová.»
          </p>
          <p className="hand text-doradoSuave text-lg mt-6">— Proverbios 18:22</p>
        </motion.div>
        <motion.p initial={scaleIn} whileInView={scaleShow} viewport={vpOnce} transition={tHalle} className="script text-doradoSuave text-6xl md:text-8xl mt-16 leading-tight">
          Y yo te hallé a ti.
        </motion.p>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={tCierreP} className="serif italic text-crema/80 text-lg md:text-xl mt-12 max-w-2xl mx-auto">
          La Biblia dice que los padres dan la herencia, pero una buena esposa la da Jehová. Sé que Dios te dio a mi vida.
        </motion.p>
      </div>
    </section>
  )
}

const tDespH = mkT(1.0, 0.2)
const tDespP = mkT(0.8, 0.4)
const tDespS = mkT(1.0, 0.6)

function Despedida() {
  return (
    <section className="relative min-h-[100svh] py-28 md:py-36 px-6 bg-crema overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={scaleIn} whileInView={scaleShow} viewport={vpOnce} transition={t14} className="aspect-[3/4] max-w-md mx-auto overflow-hidden img-frame">
          <img src={photo('DESDE TENIAMOS 18.jpg')} alt="Yuri" className="w-full h-full object-cover" />
        </motion.div>
        <motion.h2 initial={fadeUp} whileInView={show} viewport={vpOnce} transition={tDespH} className="serif text-5xl md:text-7xl text-rojo mt-12 leading-tight">
          Feliz cumpleaños,<br/><span className="italic">mi amor.</span>
        </motion.h2>
        <motion.p initial={fadeUp} whileInView={show} viewport={vpOnce} transition={tDespP} className="serif italic text-marronSuave text-xl md:text-2xl mt-8 max-w-xl mx-auto">
          Gracias por dejarme amarte. Gracias por dejarte amar. Que este año Dios te corone con lo mejor.
        </motion.p>
        <motion.div initial={fadeUp} whileInView={show} viewport={vpOnce} transition={tDespS} className="mt-16">
          <p className="script text-rojo text-5xl md:text-7xl leading-none">— Armando</p>
          <p className="hand text-marronSuave text-xl mt-4">22 de mayo de 2026</p>
        </motion.div>
        <div className="divider-dorado mt-20" />
        <p className="hand text-marronSuave/60 text-sm mt-8">🦞 hecho con manos temblando · cartagena 2026</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-crema text-marron">
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
