export type Aspecto = {
  num: string
  titulo: string
  caption: string
  foto: string
}

// Una faceta por foto real. Sin filler. Solo lo que es verdad.
export const ASPECTOS: Aspecto[] = [
  { num: '01', titulo: 'La mejor psicóloga', caption: 'tu vocación', foto: 'LA MEJOR PSICOLOGA.jpg' },
  { num: '02', titulo: 'Mi refugio', caption: 'cuando escuchas', foto: 'LA MEJOR PSICOLOGA (2).jpg' },
  { num: '03', titulo: 'La mejor amiga', caption: 'la que aparece', foto: 'BUENA AMIGA.jpg' },
  { num: '04', titulo: 'Inteligente y sexy', caption: 'a la vez', foto: 'INTLIGENTE SEXY.jpg' },
  { num: '05', titulo: 'Simplemente hermosa', caption: 'sin esforzarte', foto: 'SIMPLEMENTE HERMOSA.jpg' },
  { num: '06', titulo: 'Mi favorita', caption: 'siempre', foto: 'SIMPLEMENTE HERMOSA 2.jpg' },
  { num: '07', titulo: 'Voluntad determinada', caption: 'cuando decides, terminas', foto: 'VOLUNTAD DETERINADA.jpg' },
  { num: '08', titulo: 'La mejor danzarina', caption: 'cuando adoras', foto: 'LA MEJOR DANZARINA.jpg' },
  { num: '09', titulo: 'Pura adoración', caption: 'tu cuerpo en oración', foto: 'LA MEJOR DANZARINA (2).jpg' },
  { num: '10', titulo: 'Cariñosa', caption: 'mi hogar', foto: 'CARIÑOSA.jpg' },
  { num: '11', titulo: 'Mía', caption: 'eso es lo más loco', foto: 'SEXY.jpg' },
  { num: '12', titulo: 'Evangelista', caption: 'mujer de Dios', foto: 'EVANGELISTA.jpg' },
  { num: '13', titulo: 'Divertida', caption: 'tu risa', foto: 'DIVERTIDA.jpg' },
  { num: '14', titulo: 'Juguetona', caption: 'sin filtros', foto: 'JUGUETONA.jpg' },
  { num: '15', titulo: 'Buena pareja', caption: 'la mejor del planeta', foto: 'BUENA PAREJA.jpg' },
  { num: '16', titulo: 'Desde teíamos 18', caption: 'y hasta los 80', foto: 'DESDE TENIAMOS 18.jpg' },
  { num: '17', titulo: 'Nosotros', caption: 'diciembre 2019', foto: 'IMG_20191215_201404.jpg' },
]

export type GaleriaItem = { foto: string; caption: string }

export const GALERIA: GaleriaItem[] = [
  { foto: 'BUENA PAREJA.jpg', caption: 'la mejor pareja' },
  { foto: 'LA MEJOR DANZARINA.jpg', caption: 'la mejor danzarina' },
  { foto: 'LA MEJOR PSICOLOGA.jpg', caption: 'la mejor psicóloga' },
  { foto: 'EVANGELISTA.jpg', caption: 'evangelista' },
  { foto: 'DIVERTIDA.jpg', caption: 'divertida' },
  { foto: 'CARIÑOSA.jpg', caption: 'cariñosa' },
  { foto: 'BUENA AMIGA.jpg', caption: 'buena amiga' },
  { foto: 'INTLIGENTE SEXY.jpg', caption: 'inteligente y mía' },
  { foto: 'VOLUNTAD DETERINADA.jpg', caption: 'voluntad' },
  { foto: 'JUGUETONA.jpg', caption: 'juguetona' },
  { foto: 'SIMPLEMENTE HERMOSA.jpg', caption: 'simplemente hermosa' },
  { foto: 'SIMPLEMENTE HERMOSA 2.jpg', caption: 'mi favorita' },
  { foto: 'SEXY.jpg', caption: 'mía' },
  { foto: 'LA MEJOR PSICOLOGA (2).jpg', caption: 'mi refugio' },
  { foto: 'LA MEJOR DANZARINA (2).jpg', caption: 'cuando adoras' },
  { foto: 'DESDE TENIAMOS 18.jpg', caption: 'desde los 18' },
  { foto: 'IMG_20191215_201404.jpg', caption: 'nosotros' },
]

export const VIDEO_18: GaleriaItem[] = [
  { foto: 'DESDE TENIAMOS 18.jpg', caption: 'I have loved you since we were 18' },
  { foto: 'IMG_20191215_201404.jpg', caption: 'long before we both thought the same thing' },
  { foto: 'BUENA PAREJA.jpg', caption: 'I got a heart and I got a soul' },
  { foto: 'CARIÑOSA.jpg', caption: 'believe me I will use them both' },
  { foto: 'LA MEJOR DANZARINA.jpg', caption: 'let me kiss you while we both pretend' },
  { foto: 'SIMPLEMENTE HERMOSA.jpg', caption: 'to be loved' },
  { foto: 'SEXY.jpg', caption: 'to be in love' },
  { foto: 'DESDE TENIAMOS 18.jpg', caption: 'all I wanted was to break your walls' },
]

export const VIERNES = [
  { hora: '7:30 AM', titulo: 'Despertar', texto: 'Beso, feliz cumpleaños, el QR, la carta.' },
  { hora: '8:00 AM', titulo: 'Desayuno juntos', texto: 'Sin afán. Café. Tiempo.' },
  { hora: '11:00 AM', titulo: 'Almuerzo especial', texto: 'Lo que te encante. Solo nosotros.' },
  { hora: '3:00 PM', titulo: 'Check-in Airbnb', texto: 'Llegar, soltar maletas, respirar.' },
  { hora: '5:00 PM', titulo: 'Mercar juntos', texto: 'Vino, frutas, queso, cebolla, piña, tres leches.' },
  { hora: '7:30 PM', titulo: 'Cocinar contigo', texto: 'Caramelizar cebolla. Armar sangría. Reírnos.' },
  { hora: '9:00 PM', titulo: 'Cena y carta', texto: 'Playlist sonando. Abrir el Incendiario. Leer la carta.' }
]

export const SABADO = [
  { hora: '9:00 AM', titulo: 'Desayuno tranquilo', texto: 'Sin agenda.' },
  { hora: '10:00 AM', titulo: 'Oración juntos', texto: 'Empezar tu nuevo año con Él.' },
  { hora: 'Tarde', titulo: 'Tiempo de calidad', texto: 'Caminar, descansar, soñar.' }
]

export const PLAN_JUNTOS = [
  { emoji: '🍷', titulo: 'Escoger el vino', texto: 'Tinto. Que te guste a ti.' },
  { emoji: '🥤', titulo: 'Mercar la sangría', texto: 'Frutas, piña, naranja, manzana.' },
  { emoji: '🧅', titulo: 'Caramelizar la cebolla', texto: 'Lento, como te gusta.' },
  { emoji: '🍰', titulo: 'Tres leches y chantilly', texto: 'Tu favorito. Te lo debo.' },
  { emoji: '🎶', titulo: 'Playlist de fondo', texto: 'One Direction bajito.' },
  { emoji: '🙏', titulo: 'Orar antes de dormir', texto: 'Cerrar el día con Él, juntos.' }
]

export const SONGS = [
  { n: 1, t: 'What Makes You Beautiful', sub: 'cuando nos conocimos' },
  { n: 2, t: 'Little Things', sub: 'lo pequeño que te amo' },
  { n: 3, t: 'Last First Kiss', sub: 'el primer beso' },
  { n: 4, t: 'Moments', sub: 'noviazgo profundo' },
  { n: 5, t: '18', sub: 'desde teíamos 18' },
  { n: 6, t: 'You & I', sub: 'matrimonio' },
  { n: 7, t: 'Story of My Life', sub: 'la vida que construimos' },
  { n: 8, t: 'If I Could Fly', sub: 'intimidad presente' },
  { n: 9, t: 'End of the Day', sub: 'el día a día' },
  { n: 10, t: 'History', sub: 'futuro juntos' },
]
