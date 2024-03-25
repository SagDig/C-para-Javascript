function analiseCompetidor(){
    var code = document.getElementById("code").value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    document.getElementById("confCompetidor").textContent = "O competidor, " + code + ", com idade de " + age + ", com a altura " + height + ", e peso de " + weight;

}