
function speak(line) {
    console.log(`El conjo ${this.type} dice ${line}`)
}

const conejoBlanco = {type: "blanco", speak};
const conejoHambriento = {type: "hambriento", speak};

conejoBlanco.speak(`oh, tengo sueño me voy a dormir`)
conejoHambriento.speak(`Tienes carne tengo mucha habre`)

