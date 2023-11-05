function clique(num) {
    var numero = document.getElementById("numerovisor").innerHTML;
    document.getElementById("numerovisor").innerHTML = numero + num;

}
function reset(num) {
    document.getElementById("numerovisor").innerHTML = ''
}

function resultado(num) {
    var numero = document.getElementById("numerovisor").innerHTML;
    if(numero)
    {document.getElementById("numerovisor").innerHTML = eval(numero)}
}