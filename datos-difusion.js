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
    nombre: '',
    especie: 'perro',
    zona: 'Villa Alem',
    necesita: 'Tránsito Solidario o Adopción',
    urgente: true,
    historia: 'Perrito lleva años viviendo en Jujuy y Fortunata García, se encuentra en muy mal estado.',
    foto: 'hogar/transito/perritojujuy.png',
    telefono: '5493816301226'
  },
  {
    nombre: 'Pedro',
    especie: 'perro',
    zona: 'San Miguel de Tucumán',
    necesita: 'Adopción',
    urgente: false,
    historia: 'Perrito de 4-5 años, super cariñoso, dócil, compañero y social.',
    foto: 'hogar/adopcion/pedro.jpeg',
    telefono: '5493814429196'
  },
  {
    nombre: 'Pipa',
    especie: 'gato',
    zona: 'San Miguel de Tucumán',
    necesita: 'Adopción',
    urgente: false,
    historia: 'Gatita, un año aproximadamente, desparasitada y próxima a castrar. Es super buena y tranquila',
    foto: 'hogar/adopcion/pipa.jpeg',
    telefono: '5493816471513'
  },
  {
    nombre: 'Mila',
    especie: 'gato',
    zona: 'San Miguel de Tucumán',
    necesita: 'Adopción',
    urgente: false,
    historia: 'Gatita, aproximadamente un mes y medio. Come solita, es muy buena y dócil.',
    foto: 'hogar/adopcion/mila.jpeg',
    telefono: '5493816471513'
  },
  {
    nombre: 'Canelon',
    especie: 'perro',
    zona: 'San Miguel de Tucumán',
    necesita: 'Tránsito Solidario o Adopción',
    urgente: false,
    historia: 'Cachorro de 3 meses, desparasitado, nos hacemos cargo de sus gastos y lo necesario.',
    foto: 'hogar/transito/canelon.jpeg',
    telefono: '5493816265119'
  },
  {
    nombre: '',
    especie: 'perro',
    zona: 'Villa Carmela, barrio vial 2',
    necesita: 'Tránsito Solidario o Adopción',
    urgente: true,
    historia: 'Perrito caniche fue abandonado hace rato, se colabora con los gastos.',
    foto: 'hogar/transito/caniche.png',
    telefono: '5493816716669'
  }

];
