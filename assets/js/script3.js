let carrito = [];

// Función para agregar al carrito
function agregarAlCarrito(event) {
    const button = event.target;
    const producto = {
        id: button.getAttribute('data-id'),
        nombre: button.getAttribute('data-name'),
        precio: parseFloat(button.getAttribute('data-price')),
        imagen: button.getAttribute('data-image')
    };

    // Agregar el producto al carrito
    carrito.push(producto);
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Eliminar el producto por su índice
    actualizarCarrito();
}

// Función para actualizar el carrito en la interfaz
function actualizarCarrito() {
    const carritoDiv = document.getElementById('cart');
    if (!carritoDiv) return;

    // Limpiar el contenido actual del carrito
    carritoDiv.innerHTML = '';

    let total = 0;

    // Crear la lista de productos añadidos
    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.classList.add('cart-items');

        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="50">
            <p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;

        carritoDiv.appendChild(item);
        total += producto.precio;
    });

    // Actualizar el total en el carrito
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}

// Event listener para los botones de "Añadir al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', agregarAlCarrito);
});
