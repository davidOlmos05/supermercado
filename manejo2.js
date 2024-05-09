window.onload = function () {
    var form = document.getElementById("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        var N_productoInput = document.getElementById("N_producto");
        if (N_productoInput.value.trim() === "") {
            alert("digite el nombre del producto");
            return false;
        }

        //validacion de nombre
        var C_productoInput = document.getElementById("C_producto");
        if (C_productoInput.value.trim() === "") {
            alert("digite la cantidad del producto");
            return false;
        }

        //validacion de nombre
        var ProveedorInput = document.getElementById("Proveedor");
        if (ProveedorInput.value.trim() === "") {
            alert("digite el nombre del proveedor");
            return false;
        }
        var id_productoInput = document.getElementById("id_producto");
        if (id_productoInput.value.trim() === "") {
            alert("digite el id del producto");
            return false;
        }
    }
}