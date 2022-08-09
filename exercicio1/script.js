const num = Number(prompt("Insira um número aqui:"))
//1. utilizando ifs aninhados

/* if(num % 2 ===0){
    console.log(num, "É divisível por 2.")
    if(num %3 ===0){
       console.log(num, "é divisível por 3.")
    }
}else console.log("Toma vergonha na cara e coloca o número direito!")*/

if(num%2 ===0 && num %3 ===0){
    console.log(num, "É divisível por 2 e 3.")    
}else{
    console.log(num,"Não é divisível por 2 e 3.")
}
// verifique se um número é divisível por 2 ou 3.

//ESTUDAR OPERADOR RELACIONAL. "E, OU"
// E=&&     OU=|| 

//2 - Utilizando um operador lógico para unir duas operações relacionais