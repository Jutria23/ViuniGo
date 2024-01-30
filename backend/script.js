const barriosPorCiudad = {
  Barranquilla: ["Barrio 1", "Barrio 2", "Barrio 3"],
  Montería: ["Barrio 4", "Barrio 5", "Barrio 6"],
  Cartagena: ["Barrio 7", "Barrio 8", "Barrio 9"],
  Medellín: ["Barrio 10", "Barrio 11", "Barrio 12"],
  Bogotá: ["Barrio 13", "Barrio 14", "Barrio 15"],
};

function mostrarBarrios(ciudad) {
  const barrios = barriosPorCiudad[ciudad];
  const barriosDiv = document.getElementById("barrios");
  let contenido = "";

  if (barrios) {
    barrios.forEach((barrio) => {
      contenido += `<div class="barrio" onclick="mostrarPensiones('${barrio}')"><p>${barrio}</p></div>`;
    });
  }

  barriosDiv.innerHTML = contenido;
}

function obtenerPensiones(barrio) {
  // Simulación de datos aleatorios para las pensiones de cada barrio
  const pensiones = {
    "Barrio 1": [
      {
        imagen: "/img/pension1.jpg",
        nombre: "Pensión 1",
        cupos: 5,
        tipoInquilino: "Estudiantes universitarios",
        servicios: "Internet, Lavandería",
        direccion: "Calle 123, Barrio 1",
        notasArrendatario: "Ambiente tranquilo, cerca de universidades",
      },
      {
        imagen: "/img/pension2.jpg",
        nombre: "Pensión 2",
        cupos: 8,
        tipoInquilino: "Estudiantes y profesionales",
        servicios: "Comida, transporte",
        direccion: "Carrera 456, Barrio 1",
        notasArrendatario: "Cerca de zonas comerciales",
      },
      // Agrega más pensiones para el Barrio 1 si es necesario
    ],
    "Barrio 2": [
      {
        imagen: "/img/pension3.jpg",
        nombre: "Pensión 3",
        cupos: 10,
        tipoInquilino: "Trabajadores",
        servicios: "Gimnasio, Parqueadero",
        direccion: "Avenida XYZ, Barrio 2",
        notasArrendatario: "Cerca de parques y áreas verdes",
      },
      {
        imagen: "/img/pension2.jpg",
        nombre: "Pensión 4",
        cupos: 6,
        tipoInquilino: "Estudiantes",
        servicios: "Seguridad, Limpieza",
        direccion: "Calle 789, Barrio 2",
        notasArrendatario: "Zona tranquila",
      },
      // Agrega más pensiones para el Barrio 2 si es necesario
    ],
    // Agrega más barrios con sus pensiones si es necesario
  };

  return pensiones[barrio] || [];
}

function mostrarPensiones(barrio) {
  console.log("Mostrar pensiones:", barrio); // Agregar este console.log
  const pensiones = obtenerPensiones(barrio);
  const pensionesDiv = document.getElementById("pensiones");
  let contenido = "";

  if (pensiones) {
    pensiones.forEach((pension, index) => {
      contenido += `<div class="imagen-pension" onclick="mostrarInformacionPension(${index}, '${barrio}')">
                          <img src="${pension.imagen}" alt="${pension.nombre}">
                      </div>`;
    });
  }

  pensionesDiv.innerHTML = contenido;
}

function mostrarInformacionPension(index, barrio) {
  const pension = obtenerPensiones(barrio)[index];
  const informacionPension = document.getElementById("informacion-pension");

  if (pension) {
    informacionPension.innerHTML = `
        <h2>Información de la pensión</h2>
        <p>Número de Cupos: ${pension.cupos}</p>
        <p>Tipo de Inquilino: ${pension.tipoInquilino}</p>
        <p>Servicios Ofrecidos: ${pension.servicios}</p>
        <p>Dirección: ${pension.direccion}</p>
        <p>Notas del Arrendatario: ${pension.notasArrendatario}</p>
        <!-- Puedes agregar más detalles de la pensión según tus necesidades -->
    `;
  }
}

function encontrarPension(nombrePension) {
  // Busca la pensión con el nombre correspondiente en todos los barrios
  const barrios = Object.keys(barriosPorCiudad);

  for (const barrio of barrios) {
    const pensiones = obtenerPensiones(barrio);
    const pensionEncontrada = pensiones.find(
      (pension) => pension.nombre === nombrePension
    );
    if (pensionEncontrada) {
      return pensionEncontrada;
    }
  }

  return null; // Si no se encuentra la pensión
}
const datos = [
  {
    nombre: "Pensión 1",
    imagen: "/img/pension1.jpg",
    ciudad: "Barranquilla",
    tipo: "Estudiantes",
    servicios: ["Internet", "Lavandería", "Comida"],
    direccion: "Calle 123, Barrio X",
    notasArrendatario: "Ambiente tranquilo, cercano a universidades",
  },
  {
    nombre: "Pensión 2",
    imagen: "/img/pension2.jpg",
    ciudad: "Medellín",
    tipo: "Profesionales",
    servicios: ["Gimnasio", "Parqueadero", "Seguridad"],
    direccion: "Carrera 456, Barrio Y",
    notasArrendatario: "Cerca de áreas comerciales y de entretenimiento",
  },
  {
    nombre: "Pensión 3",
    imagen: "/img/pension3.jpg",
    ciudad: "Cartagena",
    tipo: "Estudiantes",
    servicios: ["Internet", "Parqueadero", "Seguridad"],
    direccion: "Carrera 45, Barrio S",
    notasArrendatario: "Cerca de áreas comerciales y de entretenimiento",
  },
  {
    nombre: "Pensión 4",
    imagen: "/img/pension1.jpg",
    ciudad: "Bogotá",
    tipo: "Profesionales",
    servicios: ["Gimnasio", "Parqueadero", "Seguridad"],
    direccion: "Carrera 456, Barrio Y",
    notasArrendatario: "Cerca de áreas comerciales y de entretenimiento",
  },
  {
    nombre: "Pensión 5",
    imagen: "/img/pension2.jpg",
    ciudad: "Montería",
    tipo: "Estudiantes",
    servicios: ["Gimnasio", "Parqueadero", "Seguridad"],
    direccion: "Carrera 456, Barrio Y",
    notasArrendatario: "Cerca de áreas comerciales y de entretenimiento",
  },
  {
    nombre: "Pensión 6",
    imagen: "/img/pension3.jpg",
    ciudad: "Cali",
    tipo: "Profesionales",
    servicios: ["Gimnasio", "Parqueadero", "Seguridad"],
    direccion: "Carrera 456, Barrio Y",
    notasArrendatario: "Cerca de áreas comerciales y de entretenimiento",
  },
  {
    nombre: "Pensión 7",
    imagen: "/img/pension1.jpg",
    ciudad: "Santa Marta",
    tipo: "Estudiantes",
    servicios: ["Gimnasio", "Parqueadero", "Seguridad"],
    direccion: "Carrera 456, Barrio Y",
    notasArrendatario: "Cerca de áreas comerciales y de entretenimiento",
  },

  // Puedo seguir añadiendo más pensiones o ciudades si es necesario
];

function buscarPensiones(entradaUsuario) {
  // Filtrar datos basados en la entrada del usuario (nombre, ciudad, etc.)
  const resultados = datos.filter((pension) => {
    // Implementar la lógica de búsqueda, por ejemplo:
    return (
      pension.nombre.toLowerCase().includes(entradaUsuario.toLowerCase()) ||
      pension.ciudad.toLowerCase().includes(entradaUsuario.toLowerCase())
    );
  });

  return resultados;
}

function realizarBusqueda() {
  const busqueda = document.getElementById("busqueda").value.toLowerCase(); // Obtener el valor del campo de búsqueda en minúsculas

  // Realizar la lógica de búsqueda utilizando los datos
  const resultados = datos.filter((pension) => {
    // Puedes ajustar este criterio de búsqueda según tus necesidades
    return (
      pension.nombre.toLowerCase().includes(busqueda) ||
      pension.ciudad.toLowerCase().includes(busqueda)
    );
  });

  mostrarResultados(resultados); // Llamar a una función para mostrar los resultados
}

function mostrarResultados(resultados) {
  const resultadosDiv = document.getElementById("resultados-busqueda");
  let contenido = "";

  resultados.forEach((pension) => {
    contenido += `<div class="resultado-pension" onclick="mostrarInformacionPension('${pension}')">
                        <img  src="${pension.imagen}" alt="${pension.nombre}">
                        <p>${pension.nombre}</p>
                    </div>`;
  });

  resultadosDiv.innerHTML = contenido;
}
// Simulacion información de pensión
const informacionPensionSeleccionada = {
  precio: 500000,
  servicios: "Internet, Lavandería, Comida",
  barrio: "Nombre del Barrio",
  puntuacion: 4.5,
  comentarios: [
    "Muy buen servicio",
    "Cómodo y accesible",
    "Excelente ubicación",
  ],
  galeria: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
};

// Obtener elementos del DOM
const galeriaImagenes = document.getElementById("galeria-imagenes");
const informacionPension = document.querySelector(".informacion-pension");

// Función para mostrar la galería de imágenes
function mostrarGaleria() {
  const imagenes = informacionPensionSeleccionada.galeria;
  let contenido = "";

  imagenes.forEach((imagen) => {
    contenido += `<img src="${imagen}" alt="Imagen de la pensión">`;
  });

  galeriaImagenes.innerHTML = contenido;
}

// Función para mostrar la información detallada de la pensión
function mostrarInformacionPension() {
  const precio = informacionPensionSeleccionada.precio;
  const servicios = informacionPensionSeleccionada.servicios;
  const barrio = informacionPensionSeleccionada.barrio;
  const puntuacion = informacionPensionSeleccionada.puntuacion;
  const comentarios = informacionPensionSeleccionada.comentarios;

  const informacionHTML = `
        <h2>Información de la Pensión</h2>
        <p><strong>Precio:</strong> $${precio}</p>
        <p><strong>Servicios:</strong> ${servicios}</p>
        <p><strong>Barrio:</strong> ${barrio}</p>
        <p><strong>Puntuación:</strong> ${puntuacion}</p>
        <p><strong>Comentarios:</strong></p>
        <ul>${comentarios.map((comment) => `<li>${comment}</li>`).join("")}</ul>
        <!-- Otros detalles o secciones que desees mostrar -->
    `;

  informacionPension.innerHTML = informacionHTML;
}

// Mostrar la galería de imágenes y la información detallada al cargar la página
mostrarGaleria();
mostrarInformacionPension();

let slideIndex = 0;

function mostrarSlide() {
  const slides = document.querySelectorAll(".slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(mostrarSlide, 10000); // Cambia a la siguiente imagen después de 10 segundos
}

mostrarSlide();

// Conexio base de datos <----------------------------------------------------------------------------------------------------------------->
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/viunigoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", function () {
  console.log("Conexión exitosa a MongoDB");
});

const mongoose = require("mongoose");

const pensionSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
    enum: ["Estudiantes", "Profesionales", "Familias"],
  },
  direccion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  servicios: [String], // Un array de servicios que ofrece la pensión
  imagenes: [String], // Un array de rutas de imágenes relacionadas con la pensión
  puntuacion: {
    type: Number,
    default: 0, // Puedes establecer un valor predeterminado si no se proporciona
  },
  comentarios: [
    {
      usuario: String,
      comentario: String,
    },
  ],
  // Otros campos que puedas necesitar
});

const Pension = mongoose.model("Pension", pensionSchema);

module.exports = Pension;

<<<<<<< Updated upstream:js/script.js
const mongoose = require("mongoose");
const Pension = require("mongodb://localhost:27017/viunigoDB");

// Supongamos que tienes el ID de la pensión que deseas mostrar
const pensionId = "ID_DE_LA_PENSION_A_MOSTRAR";

// Conectar a la base de datos
mongoose.connect("mongodb://localhost:27017/viunigoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Encuentra la pensión en la base de datos usando el modelo
Pension.findById(pensionId, (err, pension) => {
  if (err) {
    console.error("Error al buscar la pensión:", err);
    // Manejar el error de alguna manera
    return;
  }

  // Muestra la información de la pensión
  console.log("Información de la pensión:");
  console.log("Nombre:", pension.nombre);
  console.log("Ciudad:", pension.ciudad);
  console.log("Tipo:", pension.tipo);
  console.log("Dirección:", pension.direccion);
  console.log("Precio:", pension.precio);
  console.log("Servicios:", pension.servicios);
  console.log("Imágenes:", pension.imagenes);
  console.log("Puntuación:", pension.puntuacion);

  if (pension.comentarios.length > 0) {
    console.log("Comentarios:");
    pension.comentarios.forEach((comentario, index) => {
      console.log(
        `  ${index + 1}. Usuario: ${comentario.usuario}, Comentario: ${
          comentario.comentario
        }`
      );
    });
  } else {
    console.log("No hay comentarios aún.");
  }

  // Cierra la conexión a la base de datos después de realizar la operación
  mongoose.connection.close();
});
=======
// Función para cambiar la imagen en el modal (anterior o siguiente)
function cambiarImagen(n) {
    const imagenes = document.getElementsByClassName('imagen-pequena');
    const imagenAmpliada = document.getElementById('imagen-ampliada');
    let indexActual = Array.from(imagenes).indexOf(document.activeElement);
    indexActual = (indexActual + n + imagenes.length) % imagenes.length;
    imagenAmpliada.src = imagenes[indexActual].src;
    imagenes[indexActual].focus();
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtenemos los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Enviamos la solicitud al servidor (simulado aquí)
    fakeLoginRequest(username, password)
      .then(response => {
        alert('Inicio de sesión exitoso. Token recibido: ' + response.token);
      })
      .catch(error => {
        alert('Error al iniciar sesión: ' + error.message);
      });
  });
  
  // Función simulada para hacer una solicitud de inicio de sesión al servidor
// Simulación de usuarios en el servidor (esto debería ser manejado en un backend real)
const usuarios = [
    { usuario: 'usuario1', contrasena: 'contrasena1' },
    { usuario: 'usuario2', contrasena: 'contrasena2' },
    // Agrega más usuarios según sea necesario
  ];
  
  // Ruta para el inicio de sesión
  app.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;
  
    // Verifica las credenciales
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);
  
    if (usuarioEncontrado) {
      // En un escenario real, generarías y devolverías un token JWT aquí
      res.json({ mensaje: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
  });
>>>>>>> Stashed changes:backend/script.js
