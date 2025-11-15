// 🤫 CONFESIONES INICIALES - INDUSTRIAL UNMSM 2DO CICLO

const CONFESIONES = [
    // 🚨 EXAMEN DE BARRERA - La Leyenda
    {
        id: 1,
        text: "CONFESIÓN BOMBA: En el examen de Barrera, el profe se SALE del salón. Puedes copiar tranquilamente. Por eso todos lo quieren. Es el Robin Hood de los exámenes. 😂",
        category: "secreto",
        icon: "🤫",
        votes: 3234,
        trending: true,
        timestamp: Date.now()
    },

    // 💰 WONG & ARBAIZA - La Bomba
    {
        id: 2,
        text: "Wong es 'Responsable del Curso (Teoría)' en el sílabo. Arbaiza da toda la práctica. ¿Adivinen quién realmente hace TODO el trabajo? Arbaiza. ¿Quién cobra más? Wong. Sistema justo, ¿no? 🤡",
        category: "polemico",
        icon: "💰",
        votes: 3456,
        trending: true,
        timestamp: Date.now()
    },

    // 👑 ARBAIZA QUEEN
    {
        id: 3,
        text: "Arbaiza es la profe más chevere de 2do ciclo. Te permite ponderar, explica bien, y realmente se preocupa. Mientras tanto Wong solo aparece en el sílabo. Respeten a la queen.",
        category: "academico",
        icon: "👑",
        votes: 3289,
        trending: true,
        timestamp: Date.now()
    },

    // 🔥 ROBO ACADÉMICO
    {
        id: 4,
        text: "Plot twist: Wong pone su nombre en 'Teoría' del curso, pero Arbaiza da literalmente TODO. Ella debería estar como titular, no como 'práctica'. Esto es robo académico.",
        category: "polemico",
        icon: "🔥",
        votes: 3127,
        trending: true,
        timestamp: Date.now()
    },

    // 📊 TIER LIST
    {
        id: 5,
        text: "Tier list de profes 2do ciclo:\nS: Arbaiza, Profe de Barrera\nA: Yaringaño\nB: Normal\nC: Núñez, Chicana\nD: Pariona\nF: Montalvo, Wong (porque ni existe)",
        category: "humor",
        icon: "📊",
        votes: 3345,
        trending: true,
        timestamp: Date.now()
    },

    // 🤯 WONG DECANO
    {
        id: 6,
        text: "Si Wong va a ser decano, básicamente un tipo que solo pone su nombre en sílabos pero no da clases va a dirigir la facultad. Alguien explíqueme la lógica.",
        category: "polemico",
        icon: "🤯",
        votes: 3567,
        trending: true,
        timestamp: Date.now()
    },

    // 💀 MONTALVO
    {
        id: 7,
        text: "Montalvo en Física I es una MIERDA. Cero ponderación, cero flexibilidad, cero empatía. Te caes en un examen y F por todo el ciclo. Díganme por qué sigue dando clases.",
        category: "rant",
        icon: "😤",
        votes: 2934,
        trending: true,
        timestamp: Date.now()
    },

    // 🕵️ NÚÑEZ PPT ROBADO
    {
        id: 8,
        text: "Plot twist: Busqué en Google el título del PPT de Núñez. Encontré uno IDÉNTICO de otra universidad con otro autor. Solo cambió la carátula. Stonks.",
        category: "secreto",
        icon: "🕵️",
        votes: 2934,
        trending: true,
        timestamp: Date.now()
    },

    // 👑 PROFE BARRERA MVP
    {
        id: 9,
        text: "El profesor de Barrera es el MVP. Se va del salón durante el examen y 'no ve nada'. Básicamente nos regala el aprobado. Leyenda viviente.",
        category: "humor",
        icon: "👑",
        votes: 3127,
        trending: true,
        timestamp: Date.now()
    },

    // 📊 ARBAIZA vs WONG
    {
        id: 10,
        text: "Datos: Arbaiza da teoría + práctica. Permite ponderar. Explica bien. Wong aparece en el papel. No permite nada porque ni existe. ¿Quién debería cobrar más? 🤔",
        category: "polemico",
        icon: "📊",
        votes: 2856,
        timestamp: Date.now()
    },

    // 🤫 NÚÑEZ NO HIZO ESE PPT
    {
        id: 11,
        text: "Teoría no confirmada: Núñez no hizo ese PPT que usa. Solo le cambió el nombre al autor original. ¿Alguien más lo notó o solo yo?",
        category: "secreto",
        icon: "🤫",
        votes: 2678,
        timestamp: Date.now()
    },

    // 📺 NÚÑEZ PILOTO AUTOMÁTICO
    {
        id: 12,
        text: "Núñez literalmente lee el PPT en piloto automático. Nunca se sale del script. Es como ver Netflix con subtítulos que el mismo actor lee en voz alta.",
        category: "humor",
        icon: "📺",
        votes: 2456,
        timestamp: Date.now()
    },

    // ⚖️ MONTALVO vs ARBAIZA
    {
        id: 13,
        text: "Comparación: Arbaiza (te deja ponderar, explica, se preocupa) vs Montalvo (cero ponderación, explica mal, le vale). ¿Por qué Montalvo gana más? Sistema roto.",
        category: "polemico",
        icon: "⚖️",
        votes: 2678,
        timestamp: Date.now()
    },

    // 🔥 MONTALVO FRUSTRADO
    {
        id: 14,
        text: "Montalvo cree que ser estricto = ser buen profesor. Noticia flash: Solo eres un profesor frustrante que disfruta viendo sufrir a sus alumnos.",
        category: "rant",
        icon: "🔥",
        votes: 2456,
        timestamp: Date.now()
    },

    // 🦸 BARRERA HÉROE
    {
        id: 15,
        text: "Plot twist: El profe de Barrera sabe EXACTAMENTE lo que pasa cuando se va. Pero hace la vista gorda porque entiende que el sistema es injusto. Héroe sin capa.",
        category: "secreto",
        icon: "🦸",
        votes: 2678,
        timestamp: Date.now()
    },

    // 📱 EXAMEN BARRERA PROCESO
    {
        id: 16,
        text: "Examen de Barrera es básicamente: 'Profesor sale → Todos sacan sus celulares → Búsqueda en Google intensifies → Aprobado general'. Sistema eficiente.",
        category: "humor",
        icon: "📱",
        votes: 3056,
        trending: true,
        timestamp: Date.now()
    },

    // 💡 PROTIP ARBAIZA
    {
        id: 17,
        text: "PROTIP: Si tienes a Arbaiza, relájate. Ella te deja ponderar y explica bien. Si tienes a Montalvo, F hermano, empieza a rezar desde ahora.",
        category: "secreto",
        icon: "💡",
        votes: 2567,
        timestamp: Date.now()
    },

    // 🤐 PROTIP BARRERA
    {
        id: 18,
        text: "PROTIP: En examen de Barrera, espera 10 minutos. El profe se va 'al baño'. Saca tu celular discretamente. Profit. 🤫",
        category: "secreto",
        icon: "🤐",
        votes: 2934,
        trending: true,
        timestamp: Date.now()
    },

    // 💾 NÚÑEZ USB
    {
        id: 19,
        text: "Núñez en Cálculo II es básicamente un USB con patas. Conecta el proyector, reproduce el PPT, y espera que termine la hora. Cero valor agregado.",
        category: "rant",
        icon: "💾",
        votes: 2567,
        timestamp: Date.now()
    },

    // 😴 CHICANA VAGO
    {
        id: 20,
        text: "Chicana es otro vago nivel Pariona. Llega, hace lo mínimo, y se va. Cero compromiso. ¿Cuántos profes vagos tiene esta facultad?",
        category: "rant",
        icon: "😴",
        votes: 2234,
        timestamp: Date.now()
    },

    // ⭐ ARBAIZA > TODOS
    {
        id: 21,
        text: "Arbaiza > cualquier otro profe de 2do ciclo. Cambio mi mente. La única que te deja ponderar Y realmente enseña. Ojalá diera todos los cursos.",
        category: "academico",
        icon: "⭐",
        votes: 2934,
        timestamp: Date.now()
    },

    // 🎮 DARK SOULS
    {
        id: 22,
        text: "Física I con Montalvo es como jugar Dark Souls en modo difícil sin guardar. Un error y empiezas de cero. Cero segundas oportunidades.",
        category: "humor",
        icon: "🎮",
        votes: 2345,
        timestamp: Date.now()
    },

    // 📱 MONTALVO vs YOUTUBE
    {
        id: 23,
        text: "Si tuviera que elegir entre Montalvo y un tutorial de YouTube, elijo YouTube 10/10 veces. Al menos puedo pausar cuando no entiendo.",
        category: "humor",
        icon: "📱",
        votes: 2567,
        timestamp: Date.now()
    },

    // 👤 ARBAIZA HUMANA
    {
        id: 24,
        text: "Arbaiza te trata como humano. Montalvo te trata como un número en su lista de reprobados. Adivinen con quién aprendes más.",
        category: "academico",
        icon: "👤",
        votes: 2789,
        timestamp: Date.now()
    },

    // 🏆 RANKING VAGOS
    {
        id: 25,
        text: "Ranking de profes vagos: 🥇 Pariona (ni aparece) 🥈 Chicana (viene pero no hace nada) 🥉 Núñez (hace, pero mal)",
        category: "humor",
        icon: "🏆",
        votes: 2678,
        timestamp: Date.now()
    },

    // ⏰ PROTIP NÚÑEZ
    {
        id: 26,
        text: "PROTIP: Núñez solo lee el PPT. Descárgalo, léelo en casa, no vayas a clase. Usaste tu tiempo mejor que él.",
        category: "secreto",
        icon: "⏰",
        votes: 2456,
        timestamp: Date.now()
    },

    // ⚠️ PROTIP MONTALVO
    {
        id: 27,
        text: "PROTIP: Si Montalvo te desaprueba en el primer examen, cambia de sección INMEDIATAMENTE. No hay ponderación. Una bomba y mueres.",
        category: "secreto",
        icon: "⚠️",
        votes: 2678,
        timestamp: Date.now()
    },

    // 🎯 BARRERA TEORÍA
    {
        id: 28,
        text: "Teoría: El profe de Barrera se va del salón a propósito porque sabe que el examen está horrible y nadie lo pasaría sin ayuda. Es su forma de rebelarse contra el sistema.",
        category: "secreto",
        icon: "🕵️",
        votes: 2934,
        timestamp: Date.now()
    },

    // 💯 CICLO IDEAL
    {
        id: 29,
        text: "Si pudiera elegir profes: Todo con Arbaiza + exámenes con el profe de Barrera. Aprobaría con 18+ y realmente aprendiendo.",
        category: "humor",
        icon: "💯",
        votes: 2789,
        timestamp: Date.now()
    },

    // 😶 NÚÑEZ BLANCO
    {
        id: 30,
        text: "Si le preguntas algo fuera del PPT a Núñez, se queda en blanco. Porque probablemente ni él entendió lo que está leyendo.",
        category: "academico",
        icon: "😶",
        votes: 2345,
        timestamp: Date.now()
    },

    // 🤔 CHICANA ASUME
    {
        id: 31,
        text: "Chicana en Física explica como si todos ya supiéramos. Hermano, si ya supiera no estaría aquí. Esa es la razón de tu trabajo.",
        category: "academico",
        icon: "🤔",
        votes: 2456,
        timestamp: Date.now()
    },

    // 👁️ CHICANA PILOTO AUTOMÁTICO
    {
        id: 32,
        text: "Chicana da su clase en piloto automático. Puedes ver en sus ojos que mentalmente ya se fue a su casa desde hace 30 minutos.",
        category: "humor",
        icon: "👁️",
        votes: 2345,
        timestamp: Date.now()
    },

    // 🎓 BARRERA SALVACIÓN
    {
        id: 33,
        text: "Si todos los profes fueran como el de Barrera (que se va y nos deja), habría 0% de desaprobados en la facultad. Change my mind.",
        category: "humor",
        icon: "🎓",
        votes: 2789,
        timestamp: Date.now()
    },

    // 🏃 BARRERA PRIORIDADES
    {
        id: 34,
        text: "La mayoría quiere al profe de Barrera no porque enseñe bien, sino porque se va del salón en exámenes. Prioridades de supervivencia universitaria. 😅",
        category: "humor",
        icon: "🏃",
        votes: 2856,
        timestamp: Date.now()
    },

    // ⚖️ BARRERA EQUILIBRIO
    {
        id: 35,
        text: "Si el profe de Barrera se retira, la mitad de 2do ciclo reprobaría ese examen. Es el equilibrio que mantiene el universo. No lo toquen.",
        category: "humor",
        icon: "⚖️",
        votes: 2567,
        timestamp: Date.now()
    },

    // 👻 BUENOS VS MALOS
    {
        id: 36,
        text: "Buenos profes: Arbaiza (chevere + ponderar). Malos profes: Montalvo (0 ponderar + mala onda). Profes fantasma: Wong (solo en sílabo).",
        category: "academico",
        icon: "👻",
        votes: 2934,
        timestamp: Date.now()
    },

    // 🔥 PEORES COMBINACIONES
    {
        id: 37,
        text: "Peores combinaciones: Montalvo (sin ponderar) + Chicana (vago) + Núñez (PPT robado) + Wong (no existe) = Ciclo del infierno.",
        category: "humor",
        icon: "🔥",
        votes: 2678,
        timestamp: Date.now()
    },

    // 😤 ARBAIZA PARADISE
    {
        id: 38,
        text: "Si Arbaiza diera todos los cursos, 2do ciclo sería paradise. Pero no, tenemos a Montalvo arruinando vidas y a Wong cobrando sin trabajar.",
        category: "rant",
        icon: "😤",
        votes: 2856,
        timestamp: Date.now()
    },

    // 📋 PROTIP CHICANA
    {
        id: 39,
        text: "PROTIP: Chicana no revisa tareas con detalle. Puedes copiar y pegar de internet. Solo cámbiale el formato. Easy points.",
        category: "secreto",
        icon: "📋",
        votes: 2345,
        timestamp: Date.now()
    },

    // 💡 PROTIP NÚÑEZ DESCARGAR
    {
        id: 40,
        text: "Protip: Descarguen el PPT de Núñez, léanlo en 30 minutos, y no vayan a clase. Van a aprender lo mismo y ahorran 2 horas + pasaje.",
        category: "secreto",
        icon: "💡",
        votes: 2789,
        timestamp: Date.now()
    },

    // ❤️ CONFESIONES UNIVERSALES (Balance)
    {
        id: 41,
        text: "Llevo 1 año enamorado de alguien de mi salón pero cada vez que intento hablarle me paralizo completamente...",
        category: "amor",
        icon: "💔",
        votes: 1156,
        timestamp: Date.now() - 86400000
    },
    {
        id: 42,
        text: "Me gusta el chico que siempre se sienta adelante. Él ni sabe que existo y ya me lo imagino presentándome a su familia.",
        category: "amor",
        icon: "💘",
        votes: 1234,
        timestamp: Date.now() - 172800000
    },
    {
        id: 43,
        text: "Besé a mi mejor amigo en una fiesta y ahora todo es súper incómodo. No hablamos del tema.",
        category: "amor",
        icon: "😳",
        votes: 1189,
        timestamp: Date.now() - 259200000
    },
    {
        id: 44,
        text: "Fingí entender Cálculo 1 todo el ciclo. Aprobé con 11 y aún no sé qué es una derivada parcial.",
        category: "academico",
        icon: "🤯",
        votes: 1278,
        timestamp: Date.now() - 518400000
    },
    {
        id: 45,
        text: "Me quedé dormido en pleno examen presencial. El profe tuvo que despertarme.",
        category: "humor",
        icon: "😴",
        votes: 1445,
        timestamp: Date.now() - 1296000000
    },
    {
        id: 46,
        text: "Llamé 'mamá' a mi profesora. Ella se rió. Yo quería que me tragara la tierra.",
        category: "humor",
        icon: "🤦",
        votes: 1523,
        timestamp: Date.now() - 1382400000
    },
    {
        id: 47,
        text: "¿Alguien más siente que eligió mal la carrera pero ya está muy metido para cambiar?",
        category: "pregunta",
        icon: "🤔",
        votes: 1678,
        timestamp: Date.now() - 1555200000
    },
    {
        id: 48,
        text: "¿Es normal sentir que todos son más inteligentes que tú en la universidad?",
        category: "pregunta",
        icon: "🧠",
        votes: 1534,
        timestamp: Date.now() - 1641600000
    },
    {
        id: 49,
        text: "Trabajo de día y estudio de noche. Estoy agotado pero nadie me va a detener.",
        category: "logro",
        icon: "💪",
        votes: 1789,
        timestamp: Date.now() - 1814400000
    },
    {
        id: 50,
        text: "Cada vez que tengo que exponer, vomito antes. Literal. Todos los días.",
        category: "miedo",
        icon: "🤢",
        votes: 1345,
        timestamp: Date.now() - 2073600000
    },

    // 😴 PARIONA - El Vago Legendario
    {
        id: 51,
        text: "Pariona es el profe más vago de 2do ciclo. Llega tarde, se va temprano, y la mitad del tiempo no explica nada. Solo lee las diapositivas. ¿Cómo sigue dando clases?",
        category: "rant",
        icon: "😴",
        votes: 2456,
        timestamp: Date.now()
    },
    {
        id: 52,
        text: "En Química con Pariona aprendí más de YouTube que de sus clases. El tipo literalmente nos dijo 'lean el capítulo 5' y se fue. WTF.",
        category: "rant",
        icon: "🙄",
        votes: 1923,
        timestamp: Date.now()
    },

    // 📝 CARRERA = ACUÑA 2.0 (Jeroglíficos)
    {
        id: 53,
        text: "Carrera Barrantes escribe en la pizarra como si fuera código egipcio. Después de 1 hora de clase, mi cuaderno parece arte abstracto. No entiendo NADA.",
        category: "humor",
        icon: "😵",
        votes: 2389,
        timestamp: Date.now()
    },
    {
        id: 54,
        text: "Carrera es Acuña 2.0. Mismo estilo de explicar (no explicar), misma letra ilegible, mismos exámenes imposibles. ¿Los clonaron o qué?",
        category: "academico",
        icon: "🤯",
        votes: 2156,
        timestamp: Date.now()
    },
    {
        id: 55,
        text: "Si Carrera y Acuña escribieran juntos en la pizarra, crearían un portal dimensional. Nadie entendería absolutamente nada del universo.",
        category: "humor",
        icon: "🌌",
        votes: 2234,
        timestamp: Date.now()
    },

    // 🎯 ACUÑA - El Legendario
    {
        id: 56,
        text: "Tuve a Acuña en Cálculo I. Literalmente aprobé sin saber cómo. Sus clases son experiencias traumáticas. Lo peor es que él cree que explica súper bien.",
        category: "humor",
        icon: "💀",
        votes: 2567,
        timestamp: Date.now()
    },
    {
        id: 57,
        text: "Acuña escribe en jeroglíficos y explica en Klingon. Si entiendes algo en su clase, eres un genio certificado.",
        category: "academico",
        icon: "📝",
        votes: 2234,
        timestamp: Date.now()
    },
    {
        id: 58,
        text: "Sobreviví a Acuña en Cálculo I. Mi consejo: siéntate adelante, toma fotos de la pizarra, y descifra los jeroglíficos después con ayuda de YouTube.",
        category: "secreto",
        icon: "📸",
        votes: 1967,
        timestamp: Date.now()
    },

    // 👩‍🏫 YARINGAÑO - Perspectiva Diferente
    {
        id: 59,
        text: "No entiendo por qué todos le tienen miedo a Yaringaño en Física. Es literalmente la más piola. Explica bien y sus exámenes son justos. La gente solo se queja porque no estudia.",
        category: "polemico",
        icon: "🔥",
        votes: 1567,
        timestamp: Date.now()
    },
    {
        id: 60,
        text: "Yaringaño > todos los demás profes de Física. Change my mind. Es la única que realmente se preocupa porque entendamos.",
        category: "academico",
        icon: "👩‍🏫",
        votes: 1834,
        timestamp: Date.now()
    },
    {
        id: 61,
        text: "Yaringaño tiene fama de difícil pero en realidad es la más justa. La gente reproeba porque no estudia, no porque ella sea mala.",
        category: "secreto",
        icon: "✅",
        votes: 1834,
        timestamp: Date.now()
    },

    // 👔 TINOCO - El Decano
    {
        id: 62,
        text: "Tinoco es DECANO y aún así da clases. Respeto infinito. Aunque honestamente no sé cómo le alcanza el tiempo para todo.",
        category: "academico",
        icon: "👔",
        votes: 1678,
        timestamp: Date.now()
    },
    {
        id: 64,
        text: "Si Wong reemplaza a Tinoco como decano, básicamente Arbaiza va a dirigir toda la facultad sin que nadie lo sepa oficialmente.",
        category: "humor",
        icon: "😂",
        votes: 2089,
        timestamp: Date.now()
    },

    // 🗳️ VILLENA - El Drama
    {
        id: 65,
        text: "¿Villena fue votado del curso y su reemplazo supuestamente será Wong? O sea... ¿nadie? ¿Arbaiza va a asumir Investigación Formativa también?",
        category: "polemico",
        icon: "🤯",
        votes: 2678,
        trending: true,
        timestamp: Date.now()
    },
    {
        id: 66,
        text: "Desde que votaron a Villena, Investigación Formativa es un caos. Nadie sabe quién realmente está a cargo. Cada semana cambian las reglas del juego.",
        category: "rant",
        icon: "😤",
        votes: 2234,
        timestamp: Date.now()
    },
    {
        id: 67,
        text: "Honestamente prefería a Villena. Era estricto pero al menos sabías qué esperar. Ahora es lotería cada clase.",
        category: "academico",
        icon: "🎲",
        votes: 1923,
        timestamp: Date.now()
    },

    // 🎯 BINGO & HUMOR INSIDER
    {
        id: 68,
        text: "Bingo de 2do ciclo: ✅ Pariona llega tarde ✅ Núñez falta ✅ Carrera escribe ilegible ✅ Wong no aparece ✅ Arbaiza salva la clase",
        category: "humor",
        icon: "🎯",
        votes: 2789,
        trending: true,
        timestamp: Date.now()
    },
    {
        id: 69,
        text: "Ranking de profes fantasma: 1. Wong (casi nunca lo vi) 2. Núñez (usb andante) 3. Pariona (llega pero no da clase)",
        category: "humor",
        icon: "👻",
        votes: 2456,
        timestamp: Date.now()
    },
    {
        id: 70,
        text: "El día que Wong aparezca físicamente en clase, voy a pensar que estoy alucinando. 'Oye bro, ¿tú también lo ves o solo yo?'",
        category: "humor",
        icon: "😂",
        votes: 2345,
        timestamp: Date.now()
    },

    // 💡 PROTIPS ADICIONALES
    {
        id: 71,
        text: "PROTIP: Si tienes dudas en Realidad Nacional o Redacción, búscale a Arbaiza directamente. Wong no te va a responder porque no existe.",
        category: "secreto",
        icon: "💡",
        votes: 2345,
        timestamp: Date.now()
    },
    {
        id: 72,
        text: "El secreto para aprobar con Carrera: no intentes entender su letra. Graba las clases con tu celular y transcríbelas en casa con paciencia infinita.",
        category: "secreto",
        icon: "📱",
        votes: 2189,
        timestamp: Date.now()
    },
    {
        id: 73,
        text: "Si te toca Pariona o Núñez, básicamente tienes que aprender solo. Ellos solo están ahí para firmar las notas al final del ciclo.",
        category: "secreto",
        icon: "🤫",
        votes: 2456,
        timestamp: Date.now()
    },

    // 🔥 POLÉMICAS FINALES
    {
        id: 74,
        text: "Arbaiza merece un aumento del 300%. Está haciendo el trabajo de Wong en 2 cursos y probablemente más. Queen behavior.",
        category: "polemico",
        icon: "👑",
        votes: 2678,
        trending: true,
        timestamp: Date.now()
    },
    {
        id: 75,
        text: "Todos saben que Arbaiza hace el trabajo de 3 profesores pero nadie oficialmente lo reconoce. Es la MVP invisible de 2do ciclo.",
        category: "polemico",
        icon: "🏆",
        votes: 2567,
        timestamp: Date.now()
    },
    {
        id: 76,
        text: "Cambio de opinión impopular: Pariona y Núñez deberían ser reemplazados. Si no quieren enseñar, que dejen el puesto a alguien que sí quiera.",
        category: "polemico",
        icon: "🔥",
        votes: 2567,
        trending: true,
        timestamp: Date.now()
    },
    {
        id: 77,
        text: "Arbaiza debería tener el crédito oficial de los cursos que realmente dicta. Es injusto que Wong se lleve el reconocimiento de su trabajo.",
        category: "polemico",
        icon: "⚖️",
        votes: 2789,
        trending: true,
        timestamp: Date.now()
    },
    {
        id: 78,
        text: "Si Wong va a reemplazar a Tinoco, que al menos se aparezca en las clases primero. ¿Cómo vas a ser decano si eres un fantasma?",
        category: "polemico",
        icon: "👻",
        votes: 2456,
        timestamp: Date.now()
    }
];

// Categorías con configuración visual
const CATEGORIAS = {
    amor: { 
        nombre: "Amor & Crush",
        color: "#FF6B9D",
        icon: "💔"
    },
    academico: { 
        nombre: "Académico",
        color: "#4ECDC4",
        icon: "📚"
    },
    rant: { 
        nombre: "Rants",
        color: "#FF6B6B",
        icon: "😤"
    },
    secreto: { 
        nombre: "Secretos",
        color: "#FFE66D",
        icon: "🤫"
    },
    humor: { 
        nombre: "Humor & Fails",
        color: "#95E1D3",
        icon: "😂"
    },
    pregunta: { 
        nombre: "Preguntas",
        color: "#A8E6CF",
        icon: "🤔"
    },
    logro: { 
        nombre: "Logros",
        color: "#FFD93D",
        icon: "💪"
    },
    miedo: { 
        nombre: "Miedos",
        color: "#C7CEEA",
        icon: "😨"
    },
    social: { 
        nombre: "Vida Social",
        color: "#B4A7D6",
        icon: "🎭"
    },
    desamor: { 
        nombre: "Desamor",
        color: "#8B8C89",
        icon: "💔"
    },
    polemico: { 
        nombre: "Polémico",
        color: "#FF4500",
        icon: "🔥"
    }
};

module.exports = { CONFESIONES, CATEGORIAS };
