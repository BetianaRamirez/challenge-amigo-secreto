
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración de una variable de tipo array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    // Captura el valor del campo de entrada con id 'amigo'
    const inputNombre = document.getElementById('amigo');
    // Elimina los espacios en blanco al inicio y al final del nombre ingresado
    const nombre = inputNombre.value.trim();

    // Validación para asegurarse de que el campo no esté vacío
    if (nombre === '') {
        // Muestra una alerta si el campo está vacío
        alert('Por favor, inserte un nombre.');
        return; // Sale de la función si el campo está vacío
    }

    // Agrega el nombre al array de amigos
    amigos.push(nombre);
    // Limpia el campo de entrada después de agregar el nombre
    inputNombre.value = '';
    // Llama a la función para mostrar la lista actualizada de amigos
    mostrarLista();
};

// Función para mostrar la lista de nombres
function mostrarLista() {
    // Obtiene el elemento de la lista con id 'listaAmigos'
    const lista = document.getElementById('listaAmigos');
    // Limpia la lista existente para evitar duplicados
    lista.innerHTML = '';

    // Itera sobre el array de amigos
    amigos.forEach((amigo) => {
        // Crea un nuevo elemento de lista <li> para cada amigo
        const li = document.createElement('li');
        // Establece el texto del elemento de lista con el nombre del amigo
        li.textContent = amigo;
        // Agrega el elemento de lista a la lista desordenada
        lista.appendChild(li);
    });
};

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validación para asegurarse de que haya amigos en la lista
    if (amigos.length === 0) {
        // Muestra una alerta si la lista de amigos está vacía
        alert('La lista de amigos está vacía.');
        return; // Sale de la función si la lista está vacía
    }

    // Genera un índice aleatorio basado en la longitud del array de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtiene el nombre del amigo secreto usando el índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio];
    // Muestra el nombre del amigo secreto en el elemento con id 'resultado'
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSecreto}`;
};