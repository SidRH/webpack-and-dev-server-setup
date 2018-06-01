let sum = (a,b) => {
    return(a+b);
}

console.log(sum(2,50));


let result = sum(20,2);
let fun = () => {
    let par = document.createElement("h4");
    let parText = document.createTextNode(result);
    par.appendChild(parText);
    document.body.appendChild(par);
}
fun();
