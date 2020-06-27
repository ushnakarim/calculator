function getNumber(num){
    console.log(num)
    var get = document.getElementById("get");
    get.value += num;
}
function clearGet() {
    var get = document.getElementById("get");
    get.value = ""
}
function geResult(){
    var get = document.getElementById("get");
    get.value = eval(get.value)
}