var idadeGlobal

function age(){
    var age = document.getElementById("age").value;
    idadeGlobal = age;

    document.getElementById("confAge").textContent = "A idade do aluno é: " + age;
}