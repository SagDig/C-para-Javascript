function calcularCirculo(){
    var pi = 3.141592;
    var raio = document.getElementById("raio").value;
    var total = pi * (raio * raio);

    document.getElementById("confArea").textContent = "O valor da área do circulo é " + total;
}