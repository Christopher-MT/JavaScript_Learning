//EJERCICIO FACIL
function getCity(people) {
    return people.direction?.city || "City not specified";
    
}

console.log(getCity({name: "carlos", direction: {town: "Santa Rosa De Osos"}}));
console.log(getCity({name: "Carlos", direction: {city: "Medellin"}}));

//EJERCICIO INTERMEDIO
