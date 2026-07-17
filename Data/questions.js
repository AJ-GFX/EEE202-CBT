const questions = [

    {
        question: "Which of the following materials is strongly attracted by a magnetic field?",
        
        options: [
            "Copper",
            "Aluminium",
            "Iron",
            "Glass"
        ],

        answer: "Iron",

        explanation: "Iron is a ferromagnetic material and is strongly attracted to magnetic fields."
    },


    {
        question: "The SI unit of magnetic flux density is?",

        options: [
            "Weber",
            "Tesla",
            "Henry",
            "Ampere"
        ],

        answer: "Tesla",

        explanation: "Magnetic flux density is measured in Tesla (T)."
    },


    {
        question: "Which law describes the force between two current-carrying conductors?",

        options: [
            "Faraday's law",
            "Lenz's law",
            "Ampere's law",
            "Ohm's law"
        ],

        answer: "Ampere's law",

        explanation: "Ampere's law relates magnetic fields to electric currents."
    },

    {
        question: "Who first reported the existence of electromagnetism in 1820 by observing the deflection of a magnetic compass near a current-carrying conductor?",

        options: [
            "Michael Faraday",
            "Hans Christian Oersted",
            "James Clerk Maxwell",
            "Joseph Henry"
        ],

        answer: "Hans Christian Oersted",

        explanation: "Oersted discovered that an electric current produces a magnetic field capable of deflecting a compass needle."
    },

    {
        question: "According to Ampere's findings, a coil carrying electric current behaves like a:",

        options: [
            "Capacitor",
            "Resistor",
            "Magnet",
            "Transformer"
        ],

        answer: "Magnet",

        explanation: "Ampere showed that a current-carrying coil acts as a magnet and can attract or repel other coils."
    },

    {
        question: "Faraday's principle of induction states that:",

        options: [
            "A resistor stores electrical energy.",
            "A current is induced when a conductor moves relative to a magnetic field.",
            "Voltage is always equal to current.",
            "Electric current flows only through magnetic materials."
        ],

        answer: "A current is induced when a conductor moves relative to a magnetic field.",

        explanation: "Faraday demonstrated electromagnetic induction in 1831."
    },

    {
        question: "James Clerk Maxwell concluded that light is:",

        options: [
            "A stream of electrons",
            "An electrostatic force",
            "An electromagnetic wave",
            "A magnetic monopole"
        ],

        answer: "An electromagnetic wave",

        explanation: "Maxwell's equations showed that light is an electromagnetic disturbance propagated as waves."
    },

    {
        question: "A magnetic circuit is formed when:",

        options: [
            "Current flows through an open conductor.",
            "Magnetic flux lines form a complete closed path.",
            "The magnetic field is zero.",
            "Voltage is applied to a capacitor."
        ],

        answer: "Magnetic flux lines form a complete closed path.",

        explanation: "A magnetic circuit requires a closed path for magnetic flux."
    },

    {
        question: "One of the simplest forms of a magnetic circuit described in the material is a:",

        options: [
            "Copper plate",
            "Steel ring (toroid)",
            "Aluminium rod",
            "Parallel wire pair"
        ],

        answer: "Steel ring (toroid)",

        explanation: "The lecture notes describe a steel ring, called a toroid, as a simple magnetic circuit."
    },

    {
        question: "The magnetomotive force (mmf) produced by a coil is given by:",

        options: [
            "F = I/N",
            "F = IN",
            "F = N/I",
            "F = BA"
        ],

        answer: "F = IN",

        explanation: "Magnetomotive force equals the product of current and number of turns."
    },

    {
        question: "A coil has 250 turns carrying a current of 4 A. Determine the magnetomotive force.",

        options: [
            "62.5 A-turns",
            "246 A-turns",
            "1000 A-turns",
            "254 A-turns"
        ],

        answer: "1000 A-turns",

        explanation: "F = NI = 250 × 4 = 1000 A-turns."
    },

    {
        question: "The magnetic field strength, H, is defined as:",

        options: [
            "Flux per unit area",
            "Magnetomotive force per unit length",
            "Current per unit area",
            "Voltage per unit length"
        ],

        answer: "Magnetomotive force per unit length",

        explanation: "Magnetic field strength is given by H = F/l = NI/l."
    },

    {
        question: "A magnetic circuit has a magnetomotive force of 600 A-turns and a mean length of 2 m. Calculate the magnetic field strength.",

        options: [
            "1200 A/m",
            "300 A/m",
            "600 A/m",
            "200 A/m"
        ],

        answer: "300 A/m",

        explanation: "H = F/l = 600/2 = 300 A/m."
    },

    {
        question: "The ratio of magnetic flux density (B) to magnetic field strength (H) in free space is known as:",

        options: [
            "Relative permeability",
            "Permeability of free space",
            "Reluctance",
            "Magnetic reluctivity"
        ],

        answer: "Permeability of free space",

        explanation: "The permeability of free space (μ₀) is defined as the ratio B/H in a vacuum."
    },

    {
        question: "The permeability of free space (μ₀) is approximately equal to:",

        options: [
            "4π × 10⁻⁷ H/m",
            "8.85 × 10⁻¹² F/m",
            "3 × 10⁸ m/s",
            "1.6 × 10⁻¹⁹ C"
        ],

        answer: "4π × 10⁻⁷ H/m",

        explanation: "The lecture notes define μ₀ as 4π × 10⁻⁷ H/m."
    },

    {
        question: "Relative permeability (μr) is defined as the ratio of:",

        options: [
            "Current to voltage",
            "Flux density in a material to flux density in a vacuum for the same H",
            "Magnetic field strength to current",
            "Magnetomotive force to reluctance"
        ],

        answer: "Flux density in a material to flux density in a vacuum for the same H",

        explanation: "Relative permeability compares the flux density produced in a material with that produced in a vacuum under the same magnetic field strength."
    },

    {
        question: "The relative permeability of air is approximately:",

        options: [
            "0",
            "0.5",
            "1",
            "1000"
        ],

        answer: "1",

        explanation: "Air has a relative permeability very close to 1."
    },

    {
        question: "The relationship between magnetic flux density, permeability and magnetic field strength is:",

        options: [
            "B = μH",
            "B = H/μ",
            "H = μ/B",
            "μ = BH"
        ],

        answer: "B = μH",

        explanation: "Flux density is equal to permeability multiplied by magnetic field strength."
    },

    {
        question: "A magnetic material has a permeability of 5 × 10⁻⁴ H/m and is subjected to a magnetic field strength of 200 A/m. Determine the flux density.",

        options: [
            "0.01 T",
            "0.1 T",
            "1 T",
            "10 T"
        ],

        answer: "0.1 T",

        explanation: "B = μH = (5 × 10⁻⁴)(200) = 0.1 T."
    },

    {
        question: "Reluctance in a magnetic circuit is defined as:",

        options: [
            "The opposition to the flow of magnetic flux",
            "The opposition to electric current",
            "The ability to store electric charge",
            "The ability to produce voltage"
        ],

        answer: "The opposition to the flow of magnetic flux",

        explanation: "Reluctance is the magnetic equivalent of electrical resistance."
    },

    {
        question: "The SI unit of reluctance is:",

        options: [
            "Henry (H)",
            "Tesla (T)",
            "Ampere per Weber (A/Wb)",
            "Weber (Wb)"
        ],

        answer: "Ampere per Weber (A/Wb)",

        explanation: "Reluctance is measured in ampere per weber (A/Wb)."
    },

    {
        question: "According to the reluctance equation, increasing the length of a magnetic circuit while keeping all other parameters constant will:",

        options: [
            "Decrease reluctance",
            "Increase reluctance",
            "Have no effect on reluctance",
            "Reduce permeability"
        ],

        answer: "Increase reluctance",

        explanation: "Reluctance is directly proportional to the length of the magnetic path."
    },

    {
        question: "A magnetic circuit has a magnetomotive force of 300 A-turns and a magnetic flux of 0.015 Wb. Calculate its reluctance.",

        options: [
            "20,000 A/Wb",
            "2,000 A/Wb",
            "4,500 A/Wb",
            "5,000 A/Wb"
        ],

        answer: "20,000 A/Wb",

        explanation: "Reluctance S = F/Φ = 300/0.015 = 20,000 A/Wb."
    },
    
{
    question: "A transformer is primarily used to:",

    options: [
        "Store electrical energy",
        "Transfer electrical energy between circuits by electromagnetic induction",
        "Convert AC to DC",
        "Generate electrical energy"
    ],

    answer: "Transfer electrical energy between circuits by electromagnetic induction",

    explanation: "A transformer transfers electrical energy between circuits through electromagnetic induction."
},

{
    question: "According to the lecture note, a transformer can be used to:",

    options: [
        "Increase resistance permanently",
        "Insulate one circuit from another while allowing energy transfer",
        "Convert DC directly to AC",
        "Store magnetic flux indefinitely"
    ],

    answer: "Insulate one circuit from another while allowing energy transfer",

    explanation: "One important application of a transformer is electrical isolation while still transferring energy."
},

{
    question: "The voltage ratio of an ideal transformer is given by:",

    options: [
        "V₁/V₂ = N₁/N₂",
        "V₁/V₂ = N₂/N₁",
        "V₁V₂ = N₁N₂",
        "V₁ + V₂ = N₁ + N₂"
    ],

    answer: "V₁/V₂ = N₁/N₂",

    explanation: "The voltage ratio of an ideal transformer equals the turns ratio."
},

{
    question: "A transformer has 500 turns on the primary winding and 100 turns on the secondary winding. If the primary voltage is 240 V, determine the secondary voltage.",

    options: [
        "24 V",
        "48 V",
        "120 V",
        "1200 V"
    ],

    answer: "48 V",

    explanation: "V₂ = V₁ × (N₂/N₁) = 240 × (100/500) = 48 V."
},

{
    question: "An ideal transformer has 400 primary turns, 100 secondary turns, and a secondary current of 8 A. Determine the primary current.",

    options: [
        "2 A",
        "8 A",
        "16 A",
        "32 A"
    ],

    answer: "2 A",

    explanation: "Using I₁/I₂ = N₂/N₁, I₁ = 8 × (100/400) = 2 A."
}

];