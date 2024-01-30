function login(username, password) {
    // Simula una solicitud al servidor para iniciar sesión
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: username,
        contrasena: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.mensaje); // Muestra un mensaje de alerta (puedes cambiar esto según tus necesidades)
  
        // Redirige a la vista principal después del inicio de sesión exitoso
        if (data.mensaje === 'Inicio de sesión exitoso') {
          window.location.href = "principal.html";
        }
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
      });
  }
  
  // Uso de la función de inicio de sesión (simulado)
  login('usuario1', 'contrasena1');
  