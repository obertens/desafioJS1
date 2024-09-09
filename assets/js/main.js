
var precio = 400000;
var cantidad = 0;
var precioSpan = document.querySelector(".precio-inicial");
var cantidadSpan = document.querySelector(".cantidad");
var totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;
totalSpan.innerHTML = cantidad * precio;

document.querySelector("#disminuir").setAttribute("onclick", `
    cantidad = (cantidad - 1 < 0) ? 0 : cantidad - 1;
    document.querySelector('.cantidad').innerHTML = cantidad;
    document.querySelector('.valor-total').innerHTML = cantidad * precio;`);

document.querySelector("#aumentar").setAttribute("onclick", `
    cantidad = cantidad + 1;
    document.querySelector('.cantidad').innerHTML = cantidad;
    document.querySelector('.valor-total').innerHTML = cantidad * precio;`);


