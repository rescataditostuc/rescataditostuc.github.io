/* =====================================================================
   ANIMALES EN ADOPCIÓN  (los que están en nuestro refugio)

   PARA SUMAR UNO: copiá un bloque { ... } entero, pegalo debajo del último y cambiá los datos.
   PARA SACAR UNO: borrá su bloque { ... } entero.
   OJO: si un texto lleva una comilla simple ( ' ), escribila con barra antes: \'
   Y entre un bloque { ... } y el siguiente siempre va una COMA.

   Plantilla para copiar:
     {
       nombre: 'Nombre',
       especie: 'gato',                      // 'perro' o 'gato'
       edad: '1 año aprox.',
       estado: 'En adopción',                // 'En adopción' o 'Urgente'
       etiquetas: ['Castrado', 'Vacunado'],  // las que quieras, entre comillas y separadas por coma
       historia: 'Dos líneas contando su historia.',
       foto: 'img/nombre.jpg',               // ruta de la foto
       telefono: CELU_VICTORIA               // quién atiende: CELU_VICTORIA, CELU_CELESTE o CELU_ROCIO
     },
   ===================================================================== */

const ANIMALES = [
  {
    nombre: 'Haniel',
    especie: 'gato',
    edad: '2 meses.',
    estado: 'En adopción',
    etiquetas: ['Hembra', 'Desparasitada', 'Tímida', 'Tranquila'],
    historia: 'Es una gatita un poco tímida, tranquila y muy pero muy dulce. Le gusta dormir acurrucada.',
    foto: 'rescatados/adopcion/haniel.jpeg',
    telefono: CELU_ROCIO
  },
  {
    nombre: 'Safarin',
    especie: 'gato',
    edad: '2 meses.',
    estado: 'En adopción',
    etiquetas: ['Macho', 'Desparasitado', 'Juguetón', 'Mimoso'],
    historia: 'Gatito muy mimoso y juguetón, ronronea mucho y le encana recibir cariño.',
    foto: 'rescatados/adopcion/safarin.jpeg',
    telefono: CELU_ROCIO
  },
  {
    nombre: 'Raziel',
    especie: 'gato',
    edad: '2 meses.',
    estado: 'En adopción',
    etiquetas: ['Hembra', 'Desparasitada', 'Juguetona', 'Mimosa', 'Tranquila'],
    historia: 'Ella es mimosa y juguetona pero también tiene su lado tranquilo. Es un amor y le encanta dormir abrazada',
    foto: 'rescatados/adopcion/raziel.jpeg',
    telefono: CELU_ROCIO
  },
  {
    nombre: 'Azrael',
    especie: 'gato',
    edad: '2 meses.',
    estado: 'En adopción',
    etiquetas: ['Macho', 'Desparasitado', 'Juguetón', 'Curioso', 'Tímido'],
    historia: 'Es un pequeño juguetón y curioso. Al principio es un poco tímido, pero entra en confianza y deja ver toda su dulzura.',
    foto: 'rescatados/adopcion/azrael.jpeg',
    telefono: CELU_ROCIO
  },
  {
    nombre: 'Querubina',
    especie: 'gato',
    edad: '2 meses.',
    estado: 'En adopción',
    etiquetas: ['Hembra', 'Desparasitada', 'Mimosa', 'Buena'],
    historia: 'Es una gatita muy mimosa y buena.Tiene una dulzura especial y disfruta mucho de recibir cariño.',
    foto: 'rescatados/adopcion/querubina.jpeg',
    telefono: CELU_ROCIO
  }
];
