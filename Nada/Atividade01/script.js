function matricula(){
    var mat = document.getElementById("mat").value;
    var mens = document.getElementById("mens").value;

    document.getElementById("confMat").textContent = "O aluno de mátricula " + mat + " paga mensalidade de R$" + mens;
}