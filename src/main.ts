interface Grupo {
    nombre: string,
    año: number,
    activo: boolean,
    genero: string,
}

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const estiloNombre = "background-color:green; font-size:18px; font-weight: bold;";

const theBeatles: Grupo = {
    nombre: "%cThe Beatles",
    año: 1960,
    activo: true,
    genero: popRock

}

console.log(theBeatles.nombre, estiloNombre);
console.log("Año:", theBeatles.año, "Activo:", theBeatles.activo, "Género:", theBeatles.genero);

const queen: Grupo = {
    nombre: "%cQueen",
    año: 1970,
    activo: false,
    genero: rock
}

console.log(queen.nombre, estiloNombre);
console.log("Año:", queen.año, "Activo:", queen.activo, "Género:", queen.genero);

const acdc: Grupo = {
    nombre: "%cAC DC",
    año: 1973,
    activo: true,
    genero: hardRock
}
console.log(acdc.nombre, estiloNombre);
console.log("Año:", acdc.año, "Activo:", acdc.activo, "Género:", acdc.genero);

const ludwigVanBeethoven: Grupo = {
    nombre: "%cLudwig van Beethoven",
    año: 1770,
    activo: false,
    genero: clasica
}
console.log(ludwigVanBeethoven.nombre, estiloNombre);
console.log("Año:", ludwigVanBeethoven.año, "Activo:", ludwigVanBeethoven.activo, "Género:", ludwigVanBeethoven.genero);

const theRollingStones: Grupo = {
    nombre: "%cThe Rolling Stones",
    año: 1962,
    activo: true,
    genero: rock
}

console.log(theRollingStones.nombre,estiloNombre);
console.log("Año:",theRollingStones.año,"Activo:",theRollingStones.activo,"Género:",theRollingStones.genero);












