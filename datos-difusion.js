/* =====================================================================
   ANIMALES EN DIFUSIÓN  (necesitan hogar, pero NO están en nuestro refugio)

   PARA SUMAR UNO: copiá un bloque { ... } entero, pegalo debajo del último y cambiá los datos.
   PARA SACAR UNO: borrá su bloque { ... } entero.
   OJO: si un texto lleva una comilla simple ( ' ), escribila con barra antes: \'
   Y entre un bloque { ... } y el siguiente siempre va una COMA.

   Plantilla para copiar:
     {
       nombre: 'Nombre',
       especie: 'perro',                     // 'perro' o 'gato'
       zona: 'Barrio Sur',                   // solo barrio o zona, nunca una dirección exacta
       necesita: 'Adopción',                 // 'Adopción', 'Tránsito' o 'Adopción o tránsito'
       urgente: false,                       // true o false (sin comillas)
       historia: 'Dos líneas contando su situación.',
       foto: 'img/nombre.jpg',
       telefono: '5493810000000'             // a quién escribir (con comillas)
     },
   ===================================================================== */

const DIFUSION = [
  {
    nombre: 'Lola',
    especie: 'perro',
    zona: 'Barrio Sur',
    necesita: 'Adopción',
    urgente: true,
    historia: 'La resguardó una vecina tras encontrarla desorientada. Tiene alrededor de 1 año, es súper dócil y se lleva bien con otros perros.',
    foto: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=70',
    telefono: '5493816301226'
  },
  {
    nombre: 'Simón',
    especie: 'gato',
    zona: 'Villa Luján',
    necesita: 'Tránsito',
    urgente: false,
    historia: 'Necesita un lugar seguro por unas semanas mientras termina su tratamiento veterinario y recupera peso.',
    foto: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=600&q=70',
    telefono: '5493816301226'
  }
];
