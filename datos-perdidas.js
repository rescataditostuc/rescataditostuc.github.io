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
    nombre: 'Preco',
    especie: 'gato',
    zona: 'LAMADRID 2913.',
    fecha: '2026-11-24',
    descripcion: 'Es naranja, responde al nombre de Preco.',
    estado: 'Se busca',
    foto: 'perdidos/preco.png',
    telefono: '5493814157809'
  },
  {
    nombre: ' Copito',
    especie: 'perro',
    zona: 'CIUDADELA(Amador Lucero 446)',
    fecha: '2026-11-26',
    descripcion: 'Caniche macho castrado de 6 años. Tenia pelo cortito al perderse.',
    estado: 'Se busca',
    foto: 'perdidos/copito.png',
    telefono: '5493816337641'
  }
]

