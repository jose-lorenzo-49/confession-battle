// 🤫 CONFESIONES INICIALES - INDUSTRIAL UNMSM 2DO CICLO

const CONFESIONES = [
    // 💣 BOMBA NUCLEAR: Wong & Arbayza
    {
        id: 1,
        text: "Wong se lleva el sueldo COMPLETO de profesor sin dar clases. Arbayza hace TODO el trabajo y él le 'mocha' su pago. Esto debería ser ilegal. ¿Cómo nadie ha denunciado esto?",
        category: "polemico",
        icon: "💰",
        votes: 3456,
        trending: true,
        timestamp: Date.now()
    },

    {
        id: 2,
        text: "Plot twist: Wong cobra como profesor titular, Arbayza hace todo el trabajo real, y él le paga una 'comisión' miserable. Es explotación laboral disfrazada de 'asistencia'.",
        category: "polemico",
        icon: "🔥",
        votes: 3289,
        trending: true,
        timestamp: Date.now()
    },

    {
        id: 3,
        text: "Arbayza: Da Realidad Nacional ✅ Da Redacción ✅ Hace el trabajo de Wong ✅ Cobra una fracción del sueldo ❌. Esto es injusticia en su máxima expresión.",
        category: "rant",
        icon: "😤",
        votes: 3127,
        trending: true,
        timestamp: Date.now()
    },

    {
        id: 4,
        text: "¿Soy el único que piensa que deberíamos hacer algo sobre Wong? No puede seguir robándole el sueldo a Arbayza mientras ella hace TODO su trabajo.",
        category: "pregunta",
        icon: "⚖️",
        votes: 2934,
        timestamp: Date.now()
    },

    {
        id: 5,
        text: "Si Wong va a ser el nuevo decano, básicamente un tipo que se roba sueldos y no da clases va a dirigir toda la facultad. Déjenme salir de esta realidad paralela.",
        category: "polemico",
        icon: "🤯",
        votes: 3567,
        trending: true,
        timestamp: Date.now()
    },

    {
        id: 6,
        text: "Teoría: Wong tiene contactos poderosos en la universidad. Es la ÚNICA explicación de cómo sigue cobrando sin hacer nada y nadie lo investiga.",
        category: "secreto",
        icon: "🤫",
        votes: 2856,
        timestamp: Date.now()
    },

    {
        id: 7,
        text: "Arbayza debería exponer públicamente a Wong. Pero probablemente tiene miedo de perder su trabajo. Esto es lo que está mal con el sistema.",
        category: "polemico",
        icon: "💔",
        votes: 2734,
        timestamp: Date.now()
    },

    {
        id: 8,
        text: "Unpopular opinion: Si nosotros como alumnos no hacemos algo, Wong va a seguir explotando a Arbayza forever. ¿Nadie más quiere actuar?",
        category: "polemico",
        icon: "🔥",
        votes: 2645,
        timestamp: Date.now()
    },

    // 📚 NÚÑEZ (PPT Reader Simulator)
    {
        id: 10,
        text: "Núñez literalmente lee el PPT en voz alta como si fuéramos analfabetos. Hermano, puedo leer solo. ¿Para qué vienes a clase entonces?",
        category: "rant",
        icon: "📊",
        votes: 2456,
        timestamp: Date.now()
    },

    {
        id: 11,
        text: "Ranking de profes: Nivel 1: Explican bien. Nivel 5: Leen el PPT. Nivel 10: Son Núñez (lee el PPT que descargó de internet sin siquiera revisarlo).",
        category: "humor",
        icon: "😂",
        votes: 2789,
        timestamp: Date.now()
    },

    {
        id: 12,
        text: "Núñez pone exposiciones grupales porque no quiere dar clases. Change my mind. Es pura flojera disfrazada de 'aprendizaje colaborativo'.",
        category: "polemico",
        icon: "🔥",
        votes: 2567,
        timestamp: Date.now()
    },

    {
        id: 13,
        text: "En Cálculo II con Núñez, los que exponen saben más que el profesor. Él solo está ahí para poner la nota al final. Es un NPC.",
        category: "academico",
        icon: "🎮",
        votes: 2234,
        timestamp: Date.now()
    },

    {
        id: 14,
        text: "Núñez cobra sueldo de profesor para leer PPTs que ni él hizo. Básicamente nos cobra por usar proyector. Stonks del sistema educativo.",
        category: "humor",
        icon: "📈",
        votes: 2678,
        timestamp: Date.now()
    },

    {
        id: 15,
        text: "Protip: Si tienen a Núñez, descarguen el PPT y lean en su casa. Van a aprender lo mismo y ahorran 2 horas de su vida.",
        category: "secreto",
        icon: "💡",
        votes: 2345,
        timestamp: Date.now()
    },

    {
        id: 16,
        text: "Las exposiciones grupales con Núñez son una farsa. Él no corrige nada, solo pone notas al azar. Todos sabemos que no escucha.",
        category: "academico",
        icon: "🎭",
        votes: 2123,
        timestamp: Date.now()
    },

    {
        id: 17,
        text: "Núñez es la versión universitaria de un profesor de colegio que pone videos en clase porque está con resaca. Pero esto es UNIVERSIDAD.",
        category: "rant",
        icon: "🍺",
        votes: 2456,
        timestamp: Date.now()
    },

    // 📝 PARIONA (El Corrector Ausente)
    {
        id: 20,
        text: "Pariona falta 3 de cada 5 clases. Cuando viene, no explica. Su único aporte es corregir exámenes que hace su asistente. ¿Por qué sigue en planilla?",
        category: "rant",
        icon: "❌",
        votes: 2567,
        timestamp: Date.now()
    },

    {
        id: 21,
        text: "Teoría confirmada: Pariona solo aparece para firmar actas y corregir (mal) los exámenes. El resto del tiempo está en modo fantasma.",
        category: "secreto",
        icon: "👻",
        votes: 2234,
        timestamp: Date.now()
    },

    {
        id: 22,
        text: "Química con Pariona es básicamente un curso de autoaprendizaje obligatorio. Pagas pensión para que un tipo no te enseñe nada.",
        category: "academico",
        icon: "⚗️",
        votes: 2456,
        timestamp: Date.now()
    },

    {
        id: 23,
        text: "Pariona corrige exámenes como si estuviera enojado con la vida. Te quita puntos por cosas que ni siquiera están mal. Pura subjetividad.",
        category: "rant",
        icon: "😤",
        votes: 2678,
        timestamp: Date.now()
    },

    {
        id: 24,
        text: "Si Pariona pusiera el mismo esfuerzo en enseñar que en encontrar excusas para no venir, sería el mejor profe de la facultad.",
        category: "humor",
        icon: "🎪",
        votes: 2345,
        timestamp: Date.now()
    },

    {
        id: 25,
        text: "Ranking de ausencias 2do ciclo: 🥇 Pariona (50% de asistencia) 🥈 Núñez (60% presente pero 100% inútil) 🥉 Wong (0% existe)",
        category: "humor",
        icon: "🏆",
        votes: 2789,
        timestamp: Date.now()
    },

    // 🎯 CONFESIONES COMPARATIVAS (Drama Triple)
    {
        id: 30,
        text: "Trinity del fraude académico: Wong (cobra sin trabajar), Núñez (lee PPTs), Pariona (falta y corrige mal). Y nosotros pagando pensión para esto.",
        category: "polemico",
        icon: "💸",
        votes: 3234,
        trending: true,
        timestamp: Date.now()
    },

    {
        id: 31,
        text: "Si sumamos los sueldos de Wong, Núñez y Pariona, podríamos contratar 3 profesores que SÍ enseñen. Pero aquí estamos, financiando mediocridad.",
        category: "rant",
        icon: "💰",
        votes: 2934,
        timestamp: Date.now()
    },

    {
        id: 32,
        text: "Plot twist: Arbayza gana menos que cualquiera de estos tres y hace 10 veces más trabajo. El sistema está ROTÍSIMO.",
        category: "polemico",
        icon: "⚖️",
        votes: 3127,
        trending: true,
        timestamp: Date.now()
    },

    {
        id: 33,
        text: "Comparación: Arbayza (da 2-3 cursos reales, cobra migajas) vs Wong (cero cursos, cobra completo). Explíquenme la lógica.",
        category: "polemico",
        icon: "🤯",
        votes: 2856,
        timestamp: Date.now()
    },

    {
        id: 34,
        text: "Si hiciéramos una evaluación anónima de profes, Wong, Núñez y Pariona tendrían menos de 2/20. Pero el sistema los protege porque tienen antigüedad.",
        category: "academico",
        icon: "📊",
        votes: 2678,
        timestamp: Date.now()
    },

    // 🔥 LLAMADO A LA ACCIÓN (Peligrosamente Viral)
    {
        id: 40,
        text: "Idea loca: ¿Y si hacemos una carta colectiva de 2do ciclo denunciando la situación de Wong-Arbayza? Somos como 200 alumnos. Números hablan.",
        category: "pregunta",
        icon: "📝",
        votes: 2567,
        timestamp: Date.now()
    },

    {
        id: 41,
        text: "¿Cuántos de ustedes firmarían una petición para que investiguen a Wong por cobrar sin trabajar? Solo reaccionen para ver si somos suficientes.",
        category: "pregunta",
        icon: "✍️",
        votes: 2845,
        timestamp: Date.now()
    },

    {
        id: 42,
        text: "Si Villena fue votado, ¿por qué Wong sigue intocable? Al menos Villena SÍ daba clases. Esto es hipocresía pura.",
        category: "polemico",
        icon: "🔥",
        votes: 3067,
        trending: true,
        timestamp: Date.now()
    },

    {
        id: 43,
        text: "Unpopular opinion: Deberíamos boicotear las evaluaciones de Wong (las que Arbayza realmente prepara) hasta que le paguen lo justo a ella.",
        category: "polemico",
        icon: "🚫",
        votes: 2456,
        timestamp: Date.now()
    },

    // 😂 HUMOR NEGRO (Catártico)
    {
        id: 50,
        text: "Si los profes fueran personajes de videojuego: Wong = NPC que roba tu oro, Núñez = Tutorial que solo muestra texto, Pariona = Boss que ni aparece.",
        category: "humor",
        icon: "🎮",
        votes: 2789,
        timestamp: Date.now()
    },

    {
        id: 51,
        text: "Bingo de 2do ciclo versión completa: ☑️ Pariona ausente ☑️ Núñez lee PPT ☑️ Wong no existe ☑️ Arbayza hace 3 trabajos ☑️ Nosotros lloramos",
        category: "humor",
        icon: "😭",
        votes: 3012,
        timestamp: Date.now()
    },

    {
        id: 52,
        text: "Ranking de injusticia: 10. Thanos (mató a la mitad). 20. Voldemort (era malo). 100. Wong (roba sueldos de Arbayza).",
        category: "humor",
        icon: "🦹",
        votes: 2678,
        timestamp: Date.now()
    },

    {
        id: 53,
        text: "Si esto fuera una serie, nadie creería el plot. 'Un profesor fantasma roba el sueldo de quien hace su trabajo mientras será el próximo decano.' Guión rechazado por irreal.",
        category: "humor",
        icon: "📺",
        votes: 2934,
        timestamp: Date.now()
    }
];

// Categorías disponibles
const CATEGORIAS = {
    polemico: { nombre: "🔥 POLÉMICO", color: "#e74c3c" },
    academico: { nombre: "📚 ACADÉMICO", color: "#3498db" },
    secreto: { nombre: "🤫 SECRETO", color: "#9b59b6" },
    humor: { nombre: "😂 HUMOR", color: "#f39c12" },
    rant: { nombre: "😤 RANT", color: "#e67e22" },
    crush: { nombre: "💕 CRUSH", color: "#e91e63" },
    social: { nombre: "👥 SOCIAL", color: "#16a085" },
    consejo: { nombre: "💡 CONSEJO", color: "#27ae60" },
    pregunta: { nombre: "❓ PREGUNTA", color: "#34495e" }
};

// Export para Node.js / import para browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFESIONES, CATEGORIAS };
}
