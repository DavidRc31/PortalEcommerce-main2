// Variables globales para manejar el carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Manejo de productos dinámico
const products = [
    { id: 1, name: "Computador Portatil Hp 245 G7 Amd", price: 749900, img: "./assets/img/01-Computador Portatil Hp 245 G7 Amd A4 4 500 14 Win 10 pro.jpg" },
    { id: 2, name: "PORTÁTIL ACER AL14-31P-C0S2 INTEL N100", price: 985999, img: "./assets/img/02-PORTÁTIL ACER AL14-31P-C0S2 INTEL N100 - 8GB LPDDR5 - 256GB.jpg" },
    { id: 3, name: "PORTATIL ASUS INTEL CORE I5-1335U", price: 2399900, img: "./assets/img/03-PORTATIL ASUS INTEL CORE I5-1335U SSD 1TB RAM 40GB LED 14 FULL HD.jpg"},               
    { id: 4, name: "Portátil HP ENVY 13-BA1011LA", price: 1889900, img: "./assets/img/04-Portátil HP ENVY 13-BA1011LA.jpg" },
    { id: 5, name: "Portátil Asus M3604ya-mb158a", price: 2599000, img: "./assets/img/05-Portátil Asus M3604ya-mb158 R7-7730u.jpg" },
    { id: 6, name: "PORTATIL HP 15 EF2517LA AMD RYZEN", price: 1489999, img: "./assets/img/06-PORTATIL HP 15 EF2517LA AMD RYZEN.jpg" },
  ];
  
  // Agregar producto al carrito
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.dataset.id);
      const product = products.find(p => p.id === productId);
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${product.name} añadido al carrito.`);
    });
  });

// Función para añadir productos al carrito
//function addToCart(name, price) {
  //cart.push({ name, price });
  //localStorage.setItem('cart', JSON.stringify(cart));
  //alert(`${name} añadido al carrito.`);
//}

// Función para cargar los productos del carrito en carrito.html
function loadCartItems() {
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItemsContainer.innerHTML = ''; // Limpia el contenedor
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <p>${item.name} - $${item.price}</p>
      <button onclick="removeFromCart(${index})">Eliminar</button>
    `;
    cartItemsContainer.appendChild(div);
    total += parseFloat(item.price);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCartItems();
}

// Función para cargar el resumen de la compra en compra.html
function loadPurchaseDetails() {
  const purchaseDetails = document.querySelector('.purchase-details');
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
    purchaseDetails.appendChild(div);
    total += parseFloat(item.price);
  });

  const totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
  purchaseDetails.appendChild(totalDiv);
}

// Evento: añadir al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = button.dataset.price;
    addToCart(name, price);
  });
});

// Evento: proceder al pago
if (document.querySelector('.proceed-to-checkout')) {
  document.querySelector('.proceed-to-checkout').addEventListener('click', () => {
    window.location.href = 'compra.html';
  });
}

// Carga dinámica en las páginas
if (document.querySelector('.cart-items')) {
  loadCartItems();
}

if (document.querySelector('.purchase-details')) {
  loadPurchaseDetails();
}

//// redireccion 
function redirigirPagina(url) {
  window.location.href = url;
}

const elemento = document.querySelector('.product');
    const manio = document.querySelector('.manito');

    // Detectar cuando el ratón entra en el elemento
    elemento.addEventListener('mouseenter', function() {
      manio.style.display = 'block'; // Mostrar el "manio"
      console.log('aqui');
    });
