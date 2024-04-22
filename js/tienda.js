function openNav() {
    document.getElementById("sidebar").style.width = "350px";
    document.getElementById("overlay").style.display = "block";
    document.getElementsByClassName("open-btn")[0].style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
    document.getElementsByClassName("open-btn")[0].style.display = "block";
  }
  function openUser() {
    document.getElementById("userbar").style.width = "450px";
    document.getElementById("pantalla").style.display = "block";
    document.getElementsByClassName("abrir-user")[0].style.display = "none";
    document.getElementsByClassName("open-contacto")[0].style.display = "none";
  }
  
  function closeUser() {
    document.getElementById("userbar").style.width = "0";
    document.getElementById("pantalla").style.display = "none";
    document.getElementsByClassName("abrir-user")[0].style.display = "block";
    document.getElementsByClassName("open-contacto")[0].style.display = "block";
  }
  
  function openContacto() {
    document.getElementById("contactobar").style.width = "400px";
    document.getElementById("pantalla2").style.display = "block";
    document.getElementsByClassName("open-contacto")[0].style.display = "none";
    document.getElementsByClassName("abrir-user")[0].style.display = "none";
  }
  
  function closeContacto() {
    document.getElementById("contactobar").style.width = "0";
    document.getElementById("pantalla2").style.display = "none";
    document.getElementsByClassName("open-contacto")[0].style.display = "block";
    document.getElementsByClassName("abrir-user")[0].style.display = "block";
  }
  
  let products = [
    { id:1, name: "El abrazo", category: "esculturas", price: 15000 },
    { id:2, name: "Bici Doctor", category: "esculturas", price: 3000 },
    { id:3, name: "Cabeza de Indio", category: "esculturas", price: 28000 },
    { id:4, name: "Azul", category: "esculturas", price: 140000 },
    { id:5, name: "Filtro de carbón", category: "pintura", price: 25000 },
    { id:6, name: "Nadadora", category: "pintura", price: 12000 },
    { id:7, name: "Los pasteles", category: "pintura", price: 32000 },
    { id:8, name: "Pop!!!", category: "pintura", price: 15000 },
    { id:9, name: "Reflejos marinos", category: "fotografia", price: 5200 },
    {
      id:10, name: "RUN RUN EL NAGUAL SE FUE PA'L NORTE",
      category: "fotografia",
      price: 37200,
    },
    { id:11, name: "TOUCAN AU LEVER DU JOUR ", category: "fotografia", price: 3890 },
    {
      id:12, name: "PREPARÁNDOSE PARA LA VICTORIA",
      category: "fotografia",
      price: 4450,
    },
    { id:13, name: "-312947- ", category: "grabado", price: 49800 },
    { id:14, name: "TOTEM 1 ", category: "grabado", price: 67600 },
    {
      id:15, name: "DON'T LOSE A DIAMOND WHILE CHASING GLITTER - SCROOGE MCDUCK",
      category: "grabado",
      price: 30500,
    },
    { id:16, name: "UTOPIA", category: "grabado", price: 36500 },
  
    // Agrega más productos de esculturas según sea necesario
  ];
  
  function buscar() {
    let query = document.getElementById("buscar").value;
  
    if (query.trim() === "") {
      return;
    }
  
    let resultados = [];
    let resultadosContainer = document.getElementById("resultados");
    resultadosContainer.innerHTML = ""; // Limpiar resultados anteriores
  
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase().includes(query.toLowerCase())) {
        resultados.push(products[i]);
      }
    }
  
    // Agregar coincidencias como elementos de lista al HTML
    resultados.forEach((resultado) => {
      let li = document.createElement("li");
      li.textContent = resultado.name; // Suponiendo que cada producto tiene una propiedad "name"
      resultadosContainer.appendChild(li);
    });
  }
  
  // Función para mostrar productos de una categoría específica
  function imprimirEsculturas(category) {
 
    let filteredProducts = products.filter(
      (product) => product.category === "esculturas"
    );
   
    let escultura1div = document.getElementById("escultura1");
    let escultura2div = document.getElementById("escultura2");
    let escultura3div = document.getElementById("escultura3");
    let escultura4div = document.getElementById("escultura4");
    escultura1div.innerHTML = "";
    escultura1div.innerHTML += `<div>${filteredProducts[0].name} <br> $${filteredProducts[0].price}<br><br> <button onclick="addToCart('${filteredProducts[0].name}', ${filteredProducts[0].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;
   
    escultura2div.innerHTML = "";
    escultura2div.innerHTML += `<div>${filteredProducts[1].name} <br> $${filteredProducts[1].price}<br><br> <button onclick="addToCart('${filteredProducts[1].name}', ${filteredProducts[1].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;

    escultura3div.innerHTML = "";
    escultura3div.innerHTML += `<div>${filteredProducts[2].name} <br> $${filteredProducts[2].price}<br><br> <button onclick="addToCart('${filteredProducts[2].name}', ${filteredProducts[2].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;

    escultura4div.innerHTML = "";
    escultura4div.innerHTML += `<div>${filteredProducts[3].name} <br> $${filteredProducts[3].price}<br><br> <button onclick="addToCart('${filteredProducts[3].name}', ${filteredProducts[3].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;
  }
  
  
  
  function imprimirPinturas(category) {

    let filteredProducts = products.filter(
      (product) => product.category === "pintura"
    );
    let pintura1div = document.getElementById("pintura1");
    let pintura2div = document.getElementById("pintura2");
    let pintura3div = document.getElementById("pintura3");
    let pintura4div = document.getElementById("pintura4");
    pintura1div.innerHTML = "";
    pintura1div.innerHTML += `<div>${filteredProducts[0].name} <br> $${filteredProducts[0].price}<br><br> <button onclick="addToCart('${filteredProducts[0].name}', ${filteredProducts[0].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;
   
    pintura2div.innerHTML = "";
    pintura2div.innerHTML += `<div>${filteredProducts[1].name} <br> $${filteredProducts[1].price}<br><br> <button onclick="addToCart('${filteredProducts[1].name}', ${filteredProducts[1].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;

    pintura3div.innerHTML = "";
    pintura3div.innerHTML += `<div>${filteredProducts[2].name} <br> $${filteredProducts[2].price}<br><br> <button onclick="addToCart('${filteredProducts[2].name}', ${filteredProducts[2].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;

    pintura4div.innerHTML = "";
    pintura4div.innerHTML += `<div>${filteredProducts[3].name} <br> $${filteredProducts[3].price}<br><br> <button onclick="addToCart('${filteredProducts[3].name}', ${filteredProducts[3].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;
  }
  
  
  
  function imprimirFotografias(category) {
  
    let filteredProducts = products.filter(
      (product) => product.category === "fotografia"
    );
    let fotografia1div = document.getElementById("fotografia1");
    let fotografia2div = document.getElementById("fotografia2");
    let fotografia3div = document.getElementById("fotografia3");
    let fotografia4div = document.getElementById("fotografia4");
    
    fotografia1div.innerHTML = "";
    fotografia1div.innerHTML += `<div>${filteredProducts[0].name} <br> $${filteredProducts[0].price}<br><br> <button onclick="addToCart('${filteredProducts[0].name}', ${filteredProducts[0].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;
   
    fotografia2div.innerHTML = "";
    fotografia2div.innerHTML += `<div>${filteredProducts[1].name} <br> $${filteredProducts[1].price}<br><br> <button onclick="addToCart('${filteredProducts[1].name}', ${filteredProducts[1].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;

    fotografia3div.innerHTML = "";
    fotografia3div.innerHTML += `<div>${filteredProducts[2].name} <br> $${filteredProducts[2].price}<br><br> <button onclick="addToCart('${filteredProducts[2].name}', ${filteredProducts[2].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;

    fotografia4div.innerHTML = "";
    fotografia4div.innerHTML += `<div>${filteredProducts[3].name} <br> $${filteredProducts[3].price}<br><br> <button onclick="addToCart('${filteredProducts[3].name}', ${filteredProducts[3].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;
  }
  
  
  
  function imprimirGrabados(category) {
    let filteredProducts = products.filter(
      (product) => product.category === "grabado"
    );
    let grabado1div = document.getElementById("grabado1");
    let grabado2div = document.getElementById("grabado2");
    let grabado3div = document.getElementById("grabado3");
    let grabado4div = document.getElementById("grabado4");
    
    grabado1div.innerHTML = "";
    grabado1div.innerHTML += `<div>${filteredProducts[0].name} <br> $${filteredProducts[0].price}<br><br> <button onclick="addToCart('${filteredProducts[0].name}', ${filteredProducts[0].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;
   
    grabado2div.innerHTML = "";
    grabado2div.innerHTML += `<div>${filteredProducts[1].name} <br> $${filteredProducts[1].price}<br><br> <button onclick="addToCart('${filteredProducts[1].name}', ${filteredProducts[1].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;

    grabado3div.innerHTML = "";
    grabado3div.innerHTML += `<div>${filteredProducts[2].name} <br> $${filteredProducts[2].price}<br><br> <button onclick="addToCart('${filteredProducts[2].name}', ${filteredProducts[2].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;

    grabado4div.innerHTML = "";
    grabado4div.innerHTML += `<div>${filteredProducts[3].name} <br> $${filteredProducts[3].price}<br><br> <button onclick="addToCart('${filteredProducts[3].name}', ${filteredProducts[3].price})" style=" border:none; background:none;
    padding: 0; margin:0; cursor: pointer;" id="enlace" >Agregar al carrito</button></div><br><br><br><br><br><br><br><br><br><br>`;

  }
  //funcion para agregar las cosas al carrito
  
  
  
  
  function addToCart(name, price) {
    document.getElementById("liveToast").style.display="block";
    // Obtener el carrito desde el localStorage o crear uno nuevo si no existe
    // toast.removeAttribute('display');
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Verificar si el producto ya está en el carrito
    let found = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        found = true;
        break;
      }
    }
    // Si el producto no está en el carrito, agregarlo
    if (!found) {
      cart.push({ name, price, quantity: 1 });
    }
    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function closeToast(){
    document.getElementById("liveToast").style.display="none";
  }