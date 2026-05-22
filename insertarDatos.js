import { initializeApp } from "firebase/app";
import { getFirestore, collection, writeBatch, doc } from "firebase/firestore";

//configuracion de firebase
const firebaseConfig = {
  apiKey: "AIzaSyBgDlRePpdCkCafOKXfioIw0xDY6wxnMBk",
  authDomain: "cocina-economica-buen-sazon.firebaseapp.com",
  projectId: "cocina-economica-buen-sazon",
  storageBucket: "cocina-economica-buen-sazon.firebasestorage.app",
  messagingSenderId: "727140143465",
  appId: "1:727140143465:web:04c4289ff485f69a56adf8",
  measurementId: "G-9SZ6447107"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const clientes = [
  { nombre: "Juan Pérez", correo: "juanperez@gmail.com" },
  { nombre: "Luis García", correo: "luisgarcia@hotmail.com" },
  { nombre: "Carlos López", correo: "carloslopez@yahoo.com" },
  { nombre: "Miguel Hernández", correo: "miguelhdez@gmail.com" },
  { nombre: "José Martínez", correo: "josemartinez@gmail.com" },
  { nombre: "Pedro González", correo: "pedrogonzalez@gmail.com" },
  { nombre: "Fernando Ramírez", correo: "fernandor@gmail.com" },
  { nombre: "Jorge Torres", correo: "jtorres@gmail.com" },
  { nombre: "Daniel Flores", correo: "danielflores@gmail.com" },
  { nombre: "Andrés Vargas", correo: "andresvargas@gmail.com" },

  { nombre: "Ricardo Castillo", correo: "rcastillo@gmail.com" },
  { nombre: "Manuel Rojas", correo: "manuelrojas@gmail.com" },
  { nombre: "Sergio Morales", correo: "smorales@hotmail.com" },
  { nombre: "David Reyes", correo: "davidreyes@gmail.com" },
  { nombre: "Alejandro Cruz", correo: "acruz@gmail.com" },
  { nombre: "Eduardo Ortiz", correo: "eduardoortiz@gmail.com" },
  { nombre: "Raúl Mendoza", correo: "raulmendoza@gmail.com" },
  { nombre: "Héctor Silva", correo: "hectorsilva@gmail.com" },
  { nombre: "Iván Castro", correo: "ivancastro@gmail.com" },
  { nombre: "Francisco Vega", correo: "franciscovega@gmail.com" },

  { nombre: "María López", correo: "marialopez@gmail.com" },
  { nombre: "Ana Gómez", correo: "anagomez@gmail.com" },
  { nombre: "Sofía Martínez", correo: "sofiamartinez@gmail.com" },
  { nombre: "Fernanda Ruiz", correo: "fernandar@gmail.com" },
  { nombre: "Valeria Díaz", correo: "valeriadiaz@gmail.com" },
  { nombre: "Diana Pérez", correo: "dianaperez@gmail.com" },
  { nombre: "Lucía Torres", correo: "luciatorres@gmail.com" },
  { nombre: "Paola Sánchez", correo: "paolasanchez@gmail.com" },
  { nombre: "Gabriela Romero", correo: "gabrielaromero@gmail.com" },
  { nombre: "Isabel Navarro", correo: "isabelnavarro@gmail.com" },

  { nombre: "Carlos Medina", correo: "cmedina@gmail.com" },
  { nombre: "Luis Herrera", correo: "luis.herrera@gmail.com" },
  { nombre: "Miguel Santos", correo: "msantos@gmail.com" },
  { nombre: "José Ruiz", correo: "joseruiz@gmail.com" },
  { nombre: "Pedro Aguilar", correo: "pedroaguilar@gmail.com" },
  { nombre: "Juan Soto", correo: "juansoto@gmail.com" },
  { nombre: "Fernando Luna", correo: "fernandoluna@gmail.com" },
  { nombre: "Daniel Cabrera", correo: "danielcabrera@gmail.com" },
  { nombre: "Ricardo Navarro", correo: "ricardonavarro@gmail.com" },
  { nombre: "Andrés Moreno", correo: "andresmoreno@gmail.com" },

  { nombre: "María Fernanda López", correo: "mfl@gmail.com" },
  { nombre: "Ana Sofía Reyes", correo: "asreyes@gmail.com" },
  { nombre: "Valeria Torres", correo: "vtorres@gmail.com" },
  { nombre: "Diana Castro", correo: "dcastro@gmail.com" },
  { nombre: "Paola Mendoza", correo: "pmendoza@gmail.com" },
  { nombre: "Sofía Vega", correo: "svega@gmail.com" },
  { nombre: "Lucía Morales", correo: "lmorales@gmail.com" },
  { nombre: "Gabriela Ortiz", correo: "gortiz@gmail.com" },
  { nombre: "Fernanda Cruz", correo: "fcruz@gmail.com" },
  { nombre: "Isabel Reyes", correo: "ireyes@gmail.com" },

  { nombre: "Carlos Rivas", correo: "crivas@gmail.com" },
  { nombre: "Luis Ortega", correo: "lortega@gmail.com" },
  { nombre: "Miguel Acosta", correo: "macosta@gmail.com" },
  { nombre: "José Campos", correo: "jcampos@gmail.com" },
  { nombre: "Pedro Blanco", correo: "pblanco@gmail.com" },
  { nombre: "Juan Navarro", correo: "jnavarro@gmail.com" },
  { nombre: "Fernando Salas", correo: "fsalas@gmail.com" },
  { nombre: "Daniel Pineda", correo: "dpineda@gmail.com" },
  { nombre: "Ricardo Vega", correo: "rvega@gmail.com" },
  { nombre: "Andrés Lara", correo: "alara@gmail.com" },

  { nombre: "María Torres", correo: "mtorres@gmail.com" },
  { nombre: "Ana Ruiz", correo: "aruiz@gmail.com" },
  { nombre: "Sofía Herrera", correo: "sherrera@gmail.com" },
  { nombre: "Valeria Ramos", correo: "vramos@gmail.com" },
  { nombre: "Diana Flores", correo: "dflores@gmail.com" },
  { nombre: "Paola Castillo", correo: "pcastillo@gmail.com" },
  { nombre: "Gabriela Soto", correo: "gsoto@gmail.com" },
  { nombre: "Lucía Medina", correo: "lmedina@gmail.com" },
  { nombre: "Fernanda Aguilar", correo: "faguilar@gmail.com" },
  { nombre: "Isabel Morales", correo: "imorales@gmail.com" },

  { nombre: "Carlos López Jr", correo: "carloslopezjr@gmail.com" },
  { nombre: "Luis García Jr", correo: "luisgarciajr@gmail.com" },
  { nombre: "Miguel Hernández Jr", correo: "miguelhdezjr@gmail.com" },
  { nombre: "José Martínez Jr", correo: "josemartinezjr@gmail.com" },
  { nombre: "Pedro González Jr", correo: "pedrogonzalezjr@gmail.com" }
];

// PLATILLOS
const platillos = [
  { nombre: "Pollo en chipotle", precio: 70 },
  { nombre: "Hígado encebollado", precio: 60 },
  { nombre: "Relleno negro", precio: 80 },
  { nombre: "Pavo mechado", precio: 80 },
  { nombre: "Escabeche oriental", precio: 75 },
  { nombre: "Potaje", precio: 65 },
  { nombre: "Puchero de 3 carnes", precio: 85 },
  { nombre: "Albóndigas", precio: 65 },
  { nombre: "Carne molida", precio: 65 },
  { nombre: "Picadillo", precio: 60 }
];

// BEBIDAS
const bebidas = [
  { nombre: "Coca-Cola 350ml", precio: 18 },
  { nombre: "Fanta 350ml", precio: 18 },
  { nombre: "Sprite 350ml", precio: 18 },
  { nombre: "Agua 600ml", precio: 15 },
  { nombre: "Jugo de Mango 400ml", precio: 35 }
];

// FECHA
function obtenerFecha() {
  const dia = Math.floor(Math.random() * 30) + 1;
  return `2026-05-${dia.toString().padStart(2, "0")}`;
}

// HORA
function obtenerHora() {
  const horas = ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];
  return horas[Math.floor(Math.random() * horas.length)];
}

// 🔥 FUNCIÓN PRINCIPAL
async function insertarDatos() {

  let batch = writeBatch(db);
  let contador = 0;

  for (let i = 0; i < 500; i++) {

    const cliente = clientes[Math.floor(Math.random() * clientes.length)];
    const platillo = platillos[Math.floor(Math.random() * platillos.length)];
    const bebida = bebidas[Math.floor(Math.random() * bebidas.length)];
    const cantidad = Math.floor(Math.random() * 4) + 1;

    const total = (platillo.precio + bebida.precio) * cantidad;

    const ref = doc(collection(db, "pedidos"));

    batch.set(ref, {
      cliente: cliente.nombre,
      usuario: cliente.correo,
      producto: platillo.nombre,
      bebida: bebida.nombre,
      precio: platillo.precio,
      precioBebida: bebida.precio,
      cantidad,
      total,
      fecha: obtenerFecha(),
      hora: obtenerHora()
    });

    contador++;

    // 🔥 Cada 450 operaciones ejecuta batch (evita límite 500)
    if (contador === 450) {
      await batch.commit();
      batch = writeBatch(db);
      contador = 0;
      console.log("Batch enviado...");
    }
  }

  // último batch
  if (contador > 0) {
    await batch.commit();
  }

  console.log("✅ 500 registros insertados correctamente");
}

insertarDatos();