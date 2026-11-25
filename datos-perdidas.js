/* =====================================================================
   MASCOTAS PERDIDAS

   PARA SUMAR UNA: copiá un bloque { ... } entero, pegalo debajo del último y cambiá los datos.
   CUANDO APARECE: cambiá su estado a '¡Apareció!' (queda en la página con el cartel "Volvió a casa").
   PARA SACARLA: borrá su bloque { ... } entero.
   Si la lista queda vacía ( [] ) la página muestra un mensaje amable.
   OJO: si un texto lleva una comilla simple ( ' ), escribila con barra antes: \'
   Y entre un bloque { ... } y el siguiente siempre va una COMA.

   Plantilla para copiar:
     {
       nombre: 'Nombre',
       especie: 'perro',                     // 'perro' o 'gato'
       zona: 'Barrio Norte',                 // solo barrio o zona, nunca una dirección exacta
       fecha: '2026-11-22',                  // AAAA-MM-DD (año-mes-día)
       descripcion: 'Color, tamaño, collar, señas particulares.',
       estado: 'Se busca',                   // 'Se busca' o '¡Apareció!'
       foto: 'img/nombre.jpg',
       telefono: '5493810000000'             // solo hace falta si se busca (con comillas)
     },
   ===================================================================== */

const MASCOTAS_PERDIDAS = [
  {
    nombre: 'Rocco',
    especie: 'perro',
    zona: 'Barrio Norte',
    fecha: '2026-11-22',
    descripcion: 'Mestizo mediano color marrón claro, tiene collar azul gastado y una manchita blanca en el pecho.',
    estado: 'Se busca',
    foto: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=70',
    telefono: '5493816301226'
  },
  {
    nombre: 'Nala',
    especie: 'gato',
    zona: 'Yerba Buena',
    fecha: '2026-11-18',
    descripcion: 'Gata carey de pelo corto, muy dócil. Llevaba chapita plateada con forma de corazón.',
    estado: '¡Apareció!',
    foto: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=70'
  }
];
