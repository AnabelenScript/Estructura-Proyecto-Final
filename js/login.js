//Login y registro de usuarios con listas entrelazadas
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
  }
  
  // Implementación de la lista enlazada para almacenar usuarios
  class LinkedList {
    constructor() {
        this.head = null;
    }
  
    // Método para agregar un nodo al final de la lista
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
  
    // Método para buscar un nodo por su valor
    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
  }
  
  // Crear una lista enlazada para almacenar usuarios
  const userList = new LinkedList();
  function toggleForm() {
            var loginForm = document.getElementById("loginForm");
            var registroForm = document.getElementById("registroForm");
  
            if (loginForm.style.display === "none") {
                loginForm.style.display = "block";
                registroForm.style.display = "none";
            } else {
                loginForm.style.display = "none";
                registroForm.style.display = "block";
            }
        }
  // Función para manejar el evento de registro
  document.getElementById("registrar").addEventListener('submit', function (event) {
    event.preventDefault();
    const newUsername = document.getElementById("registerUsername").value;
    const newPassword = document.getElementById("registerPassword").value;
  
    if (!userList.search(newUsername)) {
        userList.add(newUsername);
        // Aquí normalmente se almacenaría también la contraseña en un entorno real
        alert("Registro exitoso. Por favor, inicia sesión.");
    } else {
      alert("El usuario ya existe. Por favor, elija otro nombre de usuario.");
        return;
    }
  });
  
  // Función para manejar el evento de inicio de sesión
  document.getElementById("login").addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    if (userList.search(username)) {
        // Aquí normalmente se verificaría también la contraseña en un entorno real
        alert("Iniciando sesión con: " + username);
       window.location.href= "inicio.html";
    } else {
      alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }
  });
  
              