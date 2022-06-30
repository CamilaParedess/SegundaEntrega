class producto {
    constructor(nombre, descripcion, unidades, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.unidades = unidades;
        this.precio = precio;
    }
}

//Variables globales.

let arrayProductos = [];
let formulario = document.querySelector("#formulario_producto");
let inputNombre = document.querySelector("#form_nombre");

let nombreI = formulario_producto.children[1].value;
let descripcionI = formulario_producto.children[3].value;
let unidadesI = parseInt(formulario_producto.children[5].value);
let precioI = parseInt(formulario_producto.children[7].value);

let contenedor = document.querySelector("#productoIngresado");
let mostrarTodos = document.querySelector("#mostrarTodos");
let parrafos = mostrarTodos.getElementsByTagName("p");
let bandera = false;

//Botones.

formulario.addEventListener('submit', agregarProductos);
btnMostrar.addEventListener('click', MostrarTodosProductos);

inputNombre.focus();

//Comprobar ingreso de datos en inputs.

function validarForm() {
    nombreI = formulario.children[1].value;
    descripcionI = formulario_producto.children[3].value;
    unidadesI = parseInt(formulario_producto.children[5].value);
    precioI = parseInt(formulario_producto.children[7].value);

    console.log(nombreI);
    console.log(descripcionI);
    console.log(unidadesI);
    console.log(precioI);

    if (nombreI == "" || descripcionI == "" || unidadesI == "" || precioI == "") {
        alert("¡Error! - Debe completar todos los campos para continuar");
        inputNombre.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}

//Ultimo objeto agregado.

function AgregarAlDom() {
    contenedor.innerHTML = `<h3> Último producto ingresado: </h3>
    <p><strong> Nombre: </strong> ${nombreI}</p>
    <p><strong> Descripción: </strong> ${descripcionI}</p>
    <p><strong> Cantidad: </strong> ${unidadesI}</p>
    <p><strong> Precio: </strong> ${precioI}</p>
    <hr>`;
}

// Agregar productos al array.

function agregarProductos(e) {
    e.preventDefault();
    validarForm();
    if (bandera == true) {
        let opcion = confirm("¿Desea agregar el producto?");
        if (opcion == true) {
            let formulario = e.target
            arrayProductos.push(new producto(nombreI, descripcionI, unidadesI, precioI));
        } else {
            alert("El producto no será agregado.") 
        }
        formulario_producto.children[1].value = "";
        formulario_producto.children[3].value = "";
        formulario_producto.children[5].value = "";
        formulario_producto.children[7].value = "";
        contenedor.innerHTML = "";
        AgregarAlDom();
        inputNombre.focus();
    } else {
        inputNombre.focus();
    }
}

// Mostrar todos los productos en dom.

function MostrarTodosProductos(e) {
    e.preventDefault();
    let i = 0;
    mostrarTodos.innerHTML = "<h3> Listado de todos los Productos:</h3>";
    for (const producto of arrayProductos) {
        mostrarTodos.innerHTML += `
        <p><strong>Nombre: </strong> ${producto.nombre}</p>
        <p><strong>Descripción: </strong> ${producto.descripcion}</p>
        <p><strong>Cantidad: </strong> ${producto.unidades}</p>
        <p><strong>Precio: </strong> ${producto.precio}</p>
        <hr>`;
    }
}

// Uso JSON.stringify para transformar un objeto js a un string en formato JSON.


const producto1 = { id: 2, producto: "Mascara de pestañas Maybelline" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON); 
console.log(typeof producto1);
console.log(typeof enJSON); 

localStorage.setItem("producto1", enJSON);


// Mostrar y almacenar en local storage usando JSON.strinfify en un array.

const productos = [{ id: 1, producto: "Mascara de pestañas Maybelline", precio: 2270 },
                { id: 2, producto: "Base de Maquillaje Liquida Ligera", precio: 3300 },
                { id: 3, producto: "Delineador de Cejas", precio: 2050 },
                { id: 4, producto: "Rubor Blush Paradise ", precio: 2700 }];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };


for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

guardarLocal("listaProductos", JSON.stringify(productos));


