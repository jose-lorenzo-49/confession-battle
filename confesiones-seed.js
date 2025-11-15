// 🤫 CONFESIONES INICIALES PARA CONFESSION BATTLE UNMSM

const CONFESIONES = [
    // ❤️ AMOR Y CRUSH
    {
        id: 1,
        text: "Llevo 2 años enamorado de alguien de mi salón pero cada vez que intento hablarle me paralizo completamente...",
        category: "amor",
        icon: "💔",
        votes: 156,
        timestamp: Date.now() - 86400000
    },
    {
        id: 2,
        text: "Me gusta el chico que siempre se sienta adelante. Él ni sabe que existo y ya me lo imagino presentándome a su familia.",
        category: "amor",
        icon: "💘",
        votes: 234,
        timestamp: Date.now() - 172800000
    },
    {
        id: 3,
        text: "Besé a mi mejor amigo en una fiesta y ahora todo es súper incómodo. No hablamos del tema.",
        category: "amor",
        icon: "😳",
        votes: 189,
        timestamp: Date.now() - 259200000
    },
    {
        id: 4,
        text: "Le pedí su número a alguien por primera vez en mi vida. Me lo dio. Llevo 3 días sin atreverme a escribirle.",
        category: "amor",
        icon: "📱",
        votes: 145,
        timestamp: Date.now() - 345600000
    },

    // 📚 ACADÉMICO
    {
        id: 5,
        text: "Copio en TODOS los exámenes online y nadie se ha dado cuenta. Me siento culpable pero no puedo parar.",
        category: "academico",
        icon: "📝",
        votes: 312,
        timestamp: Date.now() - 432000000
    },
    {
        id: 6,
        text: "Fingí entender Cálculo 1 todo el ciclo. Aprobé con 11 y aún no sé qué es una derivada parcial.",
        category: "academico",
        icon: "🤯",
        votes: 278,
        timestamp: Date.now() - 518400000
    },
    {
        id: 7,
        text: "Pagué a alguien para que me hiciera el trabajo Extension Universitaria. Nadie lo sabe.",
        category: "academico",
        icon: "💰",
        votes: 167,
        timestamp: Date.now() - 604800000
    },
    {
        id: 8,
        text: "Elegí esta carrera solo porque mi papá quería. Odio cada día pero ya estoy en 2do ciclo.",
        category: "academico",
        icon: "😔",
        votes: 423,
        timestamp: Date.now() - 691200000
    },

    // 😤 RANTS Y QUEJAS
    {
        id: 9,
        text: "Odio cuando los profes ponen trabajos grupales. SIEMPRE termino haciéndolo todo yo solo.",
        category: "rant",
        icon: "😤",
        votes: 567,
        timestamp: Date.now() - 777600000
    },
    {
        id: 10,
        text: "Hay un grupo de 'populares' en mi facultad que me caen HORRIBLE. Se creen lo máximo.",
        category: "rant",
        icon: "🙄",
        votes: 234,
        timestamp: Date.now() - 864000000
    },
    {
        id: 11,
        text: "Ese profesor que todos adoran es un patán conmigo. Nunca entenderé por qué me tiene mala.",
        category: "rant",
        icon: "😠",
        votes: 198,
        timestamp: Date.now() - 950400000
    },

    // 🤫 SECRETOS
    {
        id: 12,
        text: "Soy el único de mi familia que llegó a la universidad. La presión de no decepcionar es horrible.",
        category: "secreto",
        icon: "🤫",
        votes: 389,
        timestamp: Date.now() - 1036800000
    },
    {
        id: 13,
        text: "Tengo depresión diagnosticada pero mis padres no lo saben. Voy a terapia a escondidas.",
        category: "secreto",
        icon: "💭",
        votes: 412,
        timestamp: Date.now() - 1123200000
    },
    {
        id: 14,
        text: "Robé dinero de la caja de mi trabajo anterior. Renuncié antes de que se dieran cuenta.",
        category: "secreto",
        icon: "😰",
        votes: 156,
        timestamp: Date.now() - 1209600000
    },

    // 😂 HUMOR Y FAIL
    {
        id: 15,
        text: "Me quedé dormido en pleno examen presencial. El profe tuvo que despertarme.",
        category: "humor",
        icon: "😴",
        votes: 445,
        timestamp: Date.now() - 1296000000
    },
    {
        id: 16,
        text: "Llamé 'mamá' a mi profesora. Ella se rió. Yo quería que me tragara la tierra.",
        category: "humor",
        icon: "🤦",
        votes: 523,
        timestamp: Date.now() - 1382400000
    },
    {
        id: 17,
        text: "Entré a clase equivocada y me quedé 30 minutos porque me dio pena pararme y salir.",
        category: "humor",
        icon: "🚪",
        votes: 389,
        timestamp: Date.now() - 1468800000
    },

    // 🤔 PREGUNTAS Y DUDAS
    {
        id: 18,
        text: "¿Alguien más siente que eligió mal la carrera pero ya está muy metido para cambiar?",
        category: "pregunta",
        icon: "🤔",
        votes: 678,
        timestamp: Date.now() - 1555200000
    },
    {
        id: 19,
        text: "¿Es normal sentir que todos son más inteligentes que tú en la universidad?",
        category: "pregunta",
        icon: "🧠",
        votes: 534,
        timestamp: Date.now() - 1641600000
    },
    {
        id: 20,
        text: "¿Realmente vale la pena el esfuerzo? A veces siento que nada tiene sentido.",
        category: "pregunta",
        icon: "❓",
        votes: 456,
        timestamp: Date.now() - 1728000000
    },

    // 💪 LOGROS Y MOTIVACIÓN
    {
        id: 21,
        text: "Trabajo de día y estudio de noche. Estoy agotado pero nadie me va a detener.",
        category: "logro",
        icon: "💪",
        votes: 789,
        timestamp: Date.now() - 1814400000
    },
    {
        id: 22,
        text: "Saqué 20 en el examen más difícil del ciclo. Lloré de felicidad.",
        category: "logro",
        icon: "🎉",
        votes: 612,
        timestamp: Date.now() - 1900800000
    },

    // 😨 MIEDO Y ANSIEDAD
    {
        id: 23,
        text: "Tengo tanto miedo de fracasar que a veces preferiría no intentarlo.",
        category: "miedo",
        icon: "😨",
        votes: 467,
        timestamp: Date.now() - 1987200000
    },
    {
        id: 24,
        text: "Cada vez que tengo que exponer, vomito antes. Literal. Todos los días.",
        category: "miedo",
        icon: "🤢",
        votes: 345,
        timestamp: Date.now() - 2073600000
    },

    // 🎭 VIDA SOCIAL
    {
        id: 25,
        text: "No tengo amigos en la universidad. Solo conozco gente de mi salón.",
        category: "social",
        icon: "😞",
        votes: 556,
        timestamp: Date.now() - 2160000000
    },
    {
        id: 26,
        text: "Todos salen a fiestas y yo me quedo en casa viendo series. No me siento mal pero a veces me pregunto si me estoy perdiendo algo.",
        category: "social",
        icon: "🏠",
        votes: 423,
        timestamp: Date.now() - 2246400000
    },

    // 💔 DESAMOR
    {
        id: 27,
        text: "Mi ex está con alguien de mi facultad. Verlos juntos todos los días me destruye.",
        category: "desamor",
        icon: "💔",
        votes: 389,
        timestamp: Date.now() - 2332800000
    },
    {
        id: 28,
        text: "Me declaré y me rechazó. Seguimos siendo 'amigos' pero ya no es lo mismo.",
        category: "desamor",
        icon: "😢",
        votes: 445,
        timestamp: Date.now() - 2419200000
    },

    // 🔥 POLÉMICO
    {
        id: 29,
        text: "Creo que varios profes tienen favoritismo y nadie se atreve a decirlo.",
        category: "polemico",
        icon: "🔥",
        votes: 678,
        timestamp: Date.now() - 2505600000
    },
    {
        id: 30,
        text: "La mitad de los que están aquí no deberían haber pasado el examen de admisión. Se nota.",
        category: "polemico",
        icon: "💀",
        votes: 234,
        timestamp: Date.now() - 2592000000
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
