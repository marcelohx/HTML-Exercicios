function bissexto(){
    var num1;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt(document.getElementById("num1").value);
    //realizando a operação
    if(num1 % 4 == 0 && num1 % 100 !=0 || num1 % 400 == 0){   //&& ano % 100 !=0 || ano % 400 == 0
       res = "O ano é bissexto"
    }else{
        res = "O ano não é bissexto"
    }
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function IMC(){
    var peso;
    var altura;
    var imc;
    var res;
    //Coletar os dados
    peso = parseInt(document.getElementById("peso").value);
    altura = parseInt(document.getElementById("altura").value);
    //realizando a operacao
    imc = peso / ((altura)^2);
    if(imc < 18.5){
        res = "Abaixo do peso";
    }else{
        if( imc <= 24.9){
               res = "Peso normal"
        }else{
                res = "Acima do peso"
        }
    }
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function verificar(){
    var num1;
    var res;
    //Coletando os dados
    num1 = parseInt(document.getElementById("num1").value);
    //realizando a operaçaõ
    if(num1 < 0){
        res = "O numero é negativo"
    }else{
        if(num1 == 0){
            res = "O numero é zero"
        }else{
            res= "O numero é positivo"
        }       
    }
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function verificarIdade(){
    var idade;
    var res;
    //Coletando os dados
    idade = parseInt(document.getElementById("idade").value);
    //realizando a operaçaõ
    if(idade < 18){
        res = "Menor de idade"
    }else{
        res= "Maior de idade"
    }       
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function maiorNumero(){
    var num1;
    var num2;
    var num3;
    var res;
    //Coletar os dados do formulario
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    num3 = parseInt(document.getElementById("num3").value);
    //realizando a operação
    if((num1 > num2) && (num1 > num3)){
         res = "O " + num1 + " é maior";
    }else{
        if((num2 > num3) && (num2 > num1)){
            res = "O " + num2 + " é maior";
        }else{
            res = "O " + num3 + " é maior";
        }
    }
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function mediaPonderada(){
    var nota1;
    var nota2;
    var nota3;
    var res;
    var peso1;
    var peso2;
    var peso3;
    //Coletar os dados do formulario
    nota1 = parseInt(document.getElementById("nota1").value);
    nota2 = parseInt(document.getElementById("nota2").value);
    nota3 = parseInt(document.getElementById("nota3").value);
    peso1 = parseInt(document.getElementById("peso1").value);
    peso2 = parseInt(document.getElementById("peso2").value);
    peso3 = parseInt(document.getElementById("peso3").value);
    //realizando a operação
    res = "A media ponderada do aluno é de: " + ((peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)) / (peso1 + peso2 + peso3);
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function aprovacaoDisciplina(){
    var nota1;
    var nota2;
    var res;


    //Coletar os dados do formulario
    nota1 = parseInt(document.getElementById("nota1").value);
    nota2 = parseInt(document.getElementById("nota2").value);
    //realizando a operação
    if((nota1 >= 7) && (nota2 >= 7)){
        res = "O aluno foi aprovado nas duas materias";
    }else{
        if((nota1 >= 7) && (nota2 <= 7) || (nota2 <= 7) && (nota2 >= 7)){
            res = "O aluno foi reprovado em uma das materias";
        }else{
            res = "O aluno foi reprovado em todas as materias";
        }
    }
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
    function imparesPares(){
    var num;
    var res;
    //Coletar os dados do formulario
    num = parseInt(document.getElementById("num").value);
    //realizando a operação
    if(num % 2 == 0){
        res = "O numero é par"
    }else{
        res = "O numero é impar"
    }
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function fatorial(){
    var num;
    var res = 1;
    //Coletar os dados do formulario
    num = parseInt(document.getElementById("num").value);
    //realizando a operação
    i = 1;
    while(num > i){
        res = res * num;
        num = num - 1;
    }
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function Fibonacci(){
    var num;
    var res; 
    var fib1;
    var fib2;
    var fib3;
    //Coletar os dados do formulario
    num = parseInt(document.getElementById("num").value);
    //realizando a operação
    res = "0 1";
        fib1 = 0;
        fib2 = 1;
        fib3 = 0;
    for (i = 1; i <= num - 2; i++)
    {
        fib3 = fib1 + fib2;
        res += " " + fib3;
        fib1 = fib2;
        fib2 = fib3;
    }//fim do for
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function mediaNotas(){
    var nota;
    var contador;
    var res;
    //Coletar os dados do formulario
    while(nota >= 0){
        nota += parseInt(document.getElementById("nota").value);
        contador = contador + 1;
    }
    //realizando a operação
    res = nota / contador;
    document.getElementById("resultado").innerHTML = res;//inserir usar o innerHTML
}
function Numeros(){
    var num1;
    var num2;
    var num3;
    var num4;
    var num5;
    var troca;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    num3 = parseInt(document.getElementById("num3").value);
    num4 = parseInt(document.getElementById("num4").value);
    num5 = parseInt(document.getElementById("num5").value);
    //trocando o primeiro pelo ultimo
    troca = num1;
    num1 = num5;
    num5 = troca;
    
}