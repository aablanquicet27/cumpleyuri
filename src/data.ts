export type Aspecto = {
  num: string
  titulo: string
  caption: string
  texto: string
  foto: string
}

// 17 facetas. Tus palabras, corregidas, sin perder tu esencia.
export const ASPECTOS: Aspecto[] = [
  {
    num: '01',
    titulo: 'La mejor psicóloga',
    caption: 'tu vocación',
    texto: 'Admito que en la psicología te tomas en serio tu trabajo. Y aunque sé que estás pasando por una etapa complicada con el tema de la terapia clínica, admiro que incluso aunque no tengas ganas te propones ser una buena psicóloga — tanto en conocimiento como en entender que estás tratando personas. Ejemplo: la persona que atendiste ayer, a pesar de que te generó cosas, hiciste tu trabajo. Sé que fue fuerte, pero eres muy valiente.',
    foto: 'LA MEJOR PSICOLOGA.jpg',
  },
  {
    num: '02',
    titulo: 'Psicóloga bonita',
    caption: 'simplemente bonita',
    texto: 'Escogí esta foto simplemente porque te ves bonita jajaja.',
    foto: 'LA MEJOR PSICOLOGA (2).jpg',
  },
  {
    num: '03',
    titulo: 'Eres buena amiga',
    caption: 'aunque no siempre te lo digan',
    texto: 'Sé que muchas veces no te sientes valorada por tus amigos. Pero yo tenía que decírtelo: eres una buena amiga, y confiable. Que las desilusiones con tus expectativas no cambien la excelente persona que eres. No lo digo para victimizarte ni nada de eso, sino porque sé que eres una buena amiga — no solo porque las personas contamos contigo, sino porque nos infundes ánimo y temor a Dios. Y creo que eso es invaluable.',
    foto: 'BUENA AMIGA.jpg',
  },
  {
    num: '04',
    titulo: 'Interesante y sexy',
    caption: 'esa combinación',
    texto: 'La escogí porque te ves interesante jajaja. Y sexy.',
    foto: 'INTLIGENTE SEXY.jpg',
  },
  {
    num: '05',
    titulo: 'HERMOSA.',
    caption: '',
    texto: '',
    foto: 'SIMPLEMENTE HERMOSA.jpg',
  },
  {
    num: '06',
    titulo: 'OTRA DONDE TE VES HERMOSA.',
    caption: '',
    texto: '',
    foto: 'SIMPLEMENTE HERMOSA 2.jpg',
  },
  {
    num: '07',
    titulo: 'Resiliencia',
    caption: 'a pesar de todo',
    texto: 'Escogí una foto que sé que te representa un corrientazo y te hace tragar en seco, porque sé que es mal recuerdo. Pero fíjate — a veces nosotros menospreciamos lo que hacemos. Yo te digo: es un recuerdo que tengo de ti como un momento de resiliencia, y siempre lo veo así. Siempre lo digo y lo seguiré diciendo: a pesar de todos los problemas que hubo, y a pesar de los miedos, vas para adelante. Eso siempre me hace sorprenderme. A pesar del riesgo de muerte, falta de plata, falta de motivación, groserías de tu jefa — hiciste un trabajo perfecto. Te admiro demasiado.',
    foto: 'VOLUNTAD DETERINADA.jpg',
  },
  {
    num: '08',
    titulo: 'Danzarina hermosa',
    caption: 'un don de Dios',
    texto: 'Es un don que Dios te dio, y siempre me transmites. Sabes que yo no tengo sentido del arte, pero lo que tú transmites es algo de Dios. El Espíritu Santo. Lo sé, estoy seguro.',
    foto: 'LA MEJOR DANZARINA.jpg',
  },
  {
    num: '09',
    titulo: 'Otra de ti danzarina',
    caption: '',
    texto: '',
    foto: 'LA MEJOR DANZARINA (2).jpg',
  },
  {
    num: '10',
    titulo: 'Cariñosa',
    caption: 'physical touch escondido',
    texto: 'Me gusta que eres cariñosa. Dicen que tu lenguaje no es physical touch — no sé si te pega — pero eres bastante touch. Me das siempre abrazos, besos y cariño.',
    foto: 'CARIÑOSA.jpg',
  },
  {
    num: '11',
    titulo: 'Mía',
    caption: 'la más sexy',
    texto: 'Esta ricura de aquí me pertenece. La mujer más sexy que conozco. Es loco — de verdad pareces una mujer de 30 y yo de 15 jajaja. Van a creer que te estás aprovechando de mí. No le puedo decir mucho a Carlos Daniel.',
    foto: 'SEXY.jpg',
  },
  {
    num: '12',
    titulo: 'Evangelista',
    caption: 'don escondido',
    texto: 'Tienes ese don para el evangelismo. Sé que nunca te has considerado así, pero creo que muchas veces los dones se descubren ejerciéndose.',
    foto: 'EVANGELISTA.jpg',
  },
  {
    num: '13',
    titulo: 'LoKitá',
    caption: 'conectamos en eso',
    texto: 'jajaja aquí una foto loquita de ti. Creo que conectamos mucho en ese sentido — porque eres loKitá jajaja.',
    foto: 'DIVERTIDA.jpg',
  },
  {
    num: '14',
    titulo: 'Juguetona',
    caption: 'te gustan todos los juegos',
    texto: 'jajaja te gustan todos los juegos jajaja 🎮',
    foto: 'JUGUETONA.jpg',
  },
  {
    num: '15',
    titulo: 'Mi esposa',
    caption: 'más de lo que merecía',
    texto: 'Como esposa, sinceramente eres más de lo que sé que merecía. Dios me bendijo. Sé que no te merezco — por eso vivo tan agradecido con Dios y contigo, por la esposa que me dio.',
    foto: 'BUENA PAREJA.jpg',
  },
  {
    num: '16',
    titulo: 'Hipnotizado',
    caption: 'el vestido cumplió',
    texto: 'Ahora que me dijiste que te pusiste este vestido por mí, te puedo decir que sí cumpliste tu cometido — porque quedé hipnotizado.',
    foto: 'DESDE TENIAMOS 18.jpg',
  },
  {
    num: '17',
    titulo: 'Te amo desde que teníamos 18',
    caption: 'y hasta los 80',
    texto: '',
    foto: 'IMG_20191215_201404.jpg',
  },
]

export type GaleriaItem = { foto: string; caption: string }

export const GALERIA: GaleriaItem[] = [
  { foto: 'BUENA PAREJA.jpg', caption: 'buena pareja' },
  { foto: 'LA MEJOR DANZARINA.jpg', caption: 'danzarina' },
  { foto: 'LA MEJOR PSICOLOGA.jpg', caption: 'psicóloga' },
  { foto: 'EVANGELISTA.jpg', caption: 'evangelista' },
  { foto: 'DIVERTIDA.jpg', caption: 'divertida' },
  { foto: 'CARIÑOSA.jpg', caption: 'cariñosa' },
  { foto: 'BUENA AMIGA.jpg', caption: 'buena amiga' },
  { foto: 'INTLIGENTE SEXY.jpg', caption: 'inteligente y mía' },
  { foto: 'VOLUNTAD DETERINADA.jpg', caption: 'voluntad' },
  { foto: 'JUGUETONA.jpg', caption: 'juguetona' },
  { foto: 'SIMPLEMENTE HERMOSA.jpg', caption: 'hermosa' },
  { foto: 'SIMPLEMENTE HERMOSA 2.jpg', caption: 'mi favorita' },
  { foto: 'SEXY.jpg', caption: 'mía' },
  { foto: 'LA MEJOR PSICOLOGA (2).jpg', caption: 'bonita' },
  { foto: 'LA MEJOR DANZARINA (2).jpg', caption: 'adoración' },
  { foto: 'DESDE TENIAMOS 18.jpg', caption: 'desde los 18' },
  { foto: 'IMG_20191215_201404.jpg', caption: 'nosotros' },
]

export type PlanItem = {
  titulo: string
  resumen: string
  pasos?: string[]
  texto?: string
}

export const PLAN_JUNTOS: PlanItem[] = [
  {
    titulo: 'Escoger el vino',
    resumen: 'Tinto. Que te guste a ti.',
    pasos: [
      'Ir al D1 más cerca',
      'Escoger un tinto que te guste',
      'Listo, volver a casa',
    ],
  },
  {
    titulo: 'Sangría',
    resumen: 'Frutas + vino + paciencia.',
    pasos: [
      'Vino tinto en una jarra grande',
      'Picar piña, naranja y manzana en cuadritos',
      'Agregar las frutas al vino',
      'Un toque de azúcar y canela',
      'Dejar reposar mínimo 1 hora en la nevera',
    ],
  },
  {
    titulo: 'Cebolla caramelizada',
    resumen: 'Lento, como te gusta.',
    pasos: [
      'Cortar 2 cebollas en juliana fina',
      'Mantequilla + aceite de oliva en sartén a fuego bajo',
      'Cebolla 5 min sin tocar',
      'Mover, pizca de sal y de azúcar',
      'Cocinar 30–40 min revolviendo de vez en cuando',
      'Cuando esté dorada oscura, lista',
    ],
  },
  {
    titulo: 'Postres',
    resumen: 'Dos. Uno cada uno.',
    pasos: [
      'Napoleón — el clásico',
      'Otro sencillo — el que escojamos juntos',
    ],
  },
  {
    titulo: 'Playlist Spotify',
    resumen: 'La lista ya está hecha.',
    pasos: [
      'Abrir Spotify',
      '(pendiente: el link de tu playlist)',
    ],
  },
  {
    titulo: 'Orar antes de dormir',
    resumen: 'Cerrar el día con Él, juntos.',
    texto: 'La fe en Dios ha sido el pilar de esta relación. Sé que SI seguimos aferrados a Él, no nos va a soltar. Y a la inversa: si soltamos a Dios, nada nos va a funcionar. Cerrar el día con Él, juntos.',
  },
]
