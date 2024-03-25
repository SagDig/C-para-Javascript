function calcularSalario(){
    var resp1 = 22;
    var hora = document.getElementById("hora").value;
    var valor = document.getElementById("valor").value;

    var resp2 = resp1 * hora * valor;

    document.getElementById("confSalario").textContent = "O salário mensal é de R$" + resp2;
}