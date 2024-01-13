
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 50044,
        lat: 11.1011,
        lng: 51.1498,
    },
};

/* console.table(persona); */

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
