names = [];
function send() {
    var guest = document.getElementById("guests").value;
    names.push(guest);
    console.log(guest);
    console.log(names);
    var lenght = names.lenght;
    console.log(lenght);
    document.getElementById("mostrarNome").innerHTML = names.toString();
}

function show() {
    var i = names.join("<br>");
    console.log(names);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sortingButton").style.display = "block";

}

function sorting() {
    names.sort()
    var i = names.join("<br>");
    console.log(names);
    document.getElementById("sorted").innerHTML = i.toString();
}

function search() {
    var s = document.getElementById("s1").value;
    found = 0;
    var j;
    for(j = 0; j < names.length; j++){
        if (s == names[j]){
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = "Nome encontrado: " + found + " vez(es).";
}