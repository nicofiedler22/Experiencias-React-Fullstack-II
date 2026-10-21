// En este módulo definimos el listado inicial de productos de nuestra tienda "El Volcán".
// Agrupamos balones de gas y productos adicionales para Abastible, Gasco y Lipigas.

export const productosIniciales = [
  // Productos Abastible
  { id: 1, marca: 'abastible', categoria: 'gas', nombre: 'Balón Abastible 5 KG', peso: 5, precio: 10000, imagen: '/img/a5k.jpg', descripcion: 'Ideal para necesidades de menor consumo en el hogar.' },
  { id: 2, marca: 'abastible', categoria: 'gas', nombre: 'Balón Abastible 11 KG', peso: 11, precio: 20000, imagen: '/img/a11k.jpg', descripcion: 'Una alternativa práctica y rendidora para el hogar.' },
  { id: 3, marca: 'abastible', categoria: 'gas', nombre: 'Balón Abastible 15 KG', peso: 15, precio: 25000, imagen: '/img/a15k.jpg', descripcion: 'Opción estándar para hogares de consumo frecuente.' },
  { id: 4, marca: 'abastible', categoria: 'gas', nombre: 'Balón Abastible 45 KG', peso: 45, precio: 70000, imagen: '/img/a45k.jpg', descripcion: 'Para clientes y empresas con mayores necesidades de consumo.' },
  { id: 5, marca: 'abastible', categoria: 'extra', nombre: 'Calendario 2024', peso: 0, precio: 5000, imagen: '/img/calendario.jpg', descripcion: 'Lleva nuestro calendario de colección para recordar las mejores fechas.' },
  { id: 6, marca: 'abastible', categoria: 'extra', nombre: 'Vasito exclusivo Abastible', peso: 0, precio: 8000, imagen: '/img/vaso.jpg', descripcion: 'Vasito térmico para disfrutar de bebidas frías o calientes.' },

  // Productos Gasco
  { id: 7, marca: 'gasco', categoria: 'gas', nombre: 'Balón Gasco 5 KG', peso: 5, precio: 11000, imagen: '/img/g5k.png', descripcion: 'Balón liviano y fácil de transportar para camping o cocina menor.' },
  { id: 8, marca: 'gasco', categoria: 'gas', nombre: 'Balón Gasco 11 KG', peso: 11, precio: 21000, imagen: '/img/g11k.png', descripcion: 'Rendimiento equilibrado para la estufa o el calefón diario.' },
  { id: 9, marca: 'gasco', categoria: 'gas', nombre: 'Balón Gasco 15 KG', peso: 15, precio: 26000, imagen: '/img/g15k.png', descripcion: 'El formato predilecto para calefacción en época invernal.' },
  { id: 10, marca: 'gasco', categoria: 'gas', nombre: 'Balón Gasco 45 KG', peso: 45, precio: 71000, imagen: '/img/g45k.png', descripcion: 'Gran capacidad de carga y autonomía continua prolongada.' },
  { id: 11, marca: 'gasco', categoria: 'extra', nombre: 'Disfraz Flama Gasco', peso: 0, precio: 25000, imagen: '/img/corporeo.jpg', descripcion: 'Ten la alegría de la flama con este disfraz corpóreo original.' },
  { id: 12, marca: 'gasco', categoria: 'extra', nombre: 'Cupón exclusivo Gasco', peso: 0, precio: 6000, imagen: '/img/cupon.jpg', descripcion: 'Cupón con saldo promocional aplicable a tu siguiente pedido.' },

  // Productos Lipigas
  { id: 13, marca: 'lipigas', categoria: 'gas', nombre: 'Balón Lipigas 5 KG', peso: 5, precio: 12000, imagen: '/img/l5kg.jpg', descripcion: 'Carga compacta con el respaldo y sello de seguridad Lipigas.' },
  { id: 14, marca: 'lipigas', categoria: 'gas', nombre: 'Balón Lipigas 11 KG', peso: 11, precio: 22000, imagen: '/img/l11kg.jpg', descripcion: 'Excelente durabilidad para artefactos domésticos estándar.' },
  { id: 15, marca: 'lipigas', categoria: 'gas', nombre: 'Balón Lipigas 15 KG', peso: 15, precio: 27000, imagen: '/img/l15kg.jpg', descripcion: 'El cilindro más vendido para abastecimiento familiar.' },
  { id: 16, marca: 'lipigas', categoria: 'gas', nombre: 'Balón Lipigas 45 KG', peso: 45, precio: 72000, imagen: '/img/l45kg.jpg', descripcion: 'Máxima potencia para sistemas centrales comerciales y residenciales.' },
  { id: 17, marca: 'lipigas', categoria: 'extra', nombre: 'Peluche Perro Lipigas', peso: 0, precio: 4000, imagen: '/img/perro.jpg', descripcion: 'El compañero canino más querido y recordado de la televisión.' },
  { id: 18, marca: 'lipigas', categoria: 'extra', nombre: 'Carga 11 KG Plus', peso: 11, precio: 30000, imagen: '/img/extra.jpg', descripcion: 'Carga reforzada con válvula premium de alta eficiencia energética.' }
];