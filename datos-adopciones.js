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
    nombre: 'Mishi',
    especie: 'gato',
    edad: '1 año aprox.',
    estado: 'Urgente',
    etiquetas: ['Castrada', 'Vacunada', 'Tranquila'],
    historia: 'Rescatada de un baldío. Ronronea apenas la acariciás y se adapta fácil a vivir en departamento.',
    foto: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=70',
    telefono: CELU_CELESTE
  },
  {
    nombre: 'Ramón',
    especie: 'gato',
    edad: '4 años aprox.',
    estado: 'En adopción',
    etiquetas: ['Castrado', 'Vacunado', 'Se lleva con gatos'],
    historia: 'Pasó años en la calle y ahora busca un rincón calentito. Es sereno, cariñoso y muy agradecido.',
    foto: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=70',
    telefono: CELU_ROCIO
  },
  {
    nombre: 'Olivia',
    especie: 'gato',
    edad: '5 meses aprox.',
    estado: 'En adopción',
    etiquetas: ['Vacunada', 'Desparasitada', 'Juguetona'],
    historia: 'La encontramos solita bajo la lluvia. Ama jugar con pelotitas y dormir a upa.',
    foto: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=600&q=70',
    telefono: CELU_VICTORIA
  },
  {
    nombre: 'Tito',
    especie: 'gato',
    edad: '2 años aprox.',
    estado: 'Urgente',
    etiquetas: ['Castrado', 'Vacunado', 'Mimoso'],
    historia: 'Es súper compañero y tranquilo. Busca un hogar seguro con protecciones en ventanas o balcón.',
    foto: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=600&q=70',
    telefono: CELU_CELESTE
  }
];
