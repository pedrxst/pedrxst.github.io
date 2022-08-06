const botao1 = document.querySelector(".executa01")


    const obtemValor = (seletor) => {
        const val = document.querySelector(seletor)
        let num = isNaN(parseFloat(val.value))? 0:parseFloat(val.value)
        val.value = ""
        return num
    }


    const escreveValor = (seletor, valor) => {
        const nodeConteudo = document.createTextNode(valor)
        document.querySelector(seletor).textContent = ""
        document.querySelector(seletor).appendChild(nodeConteudo)
    }

    const somar = (num1, num2) => num1 + num2

botao1.addEventListener("click", () => {
    
    const num1 = obtemValor("#quest1-v1")
    const num2 = obtemValor("#quest1-v2")

    escreveValor("#resp01", somar(num1, num2))
})

const botao2 = document.querySelector(".executa02")

const identificaMaiorNum = (num1, num2) => {
    let resp = ""
    if(num1>num2){
        resp = `O número ${num1} é maior que o número ${num2}`
    }
    else if (num2>num1){
        resp = `O número ${num2} é maior que o número ${num1}`
    }
    else {
        resp = `Os números são iguais`
    }
    return resp
}


botao2.addEventListener("click", () => {
    const num1 = obtemValor("#quest2-v1")
    const num2 = obtemValor("#quest2-v2")

    
    escreveValor("#resp02", identificaMaiorNum(num1, num2))
})

const botao3 = document.querySelector(".executa03")
    
const identificaPrimo = (num1) => {
    let primo = 0, aux, resp
    for(aux = 2;aux < num1; ++aux)
    {
        if (num1 % aux == 0)
        {
        ++primo
        aux = num1
        }    
    }
    
    if (primo == 0) {
    resp = `O número ${num1} é primo`
    }
    else {
        resp = `O número ${num1} não é primo`
    }
    return resp
}



botao3.addEventListener("click", () => {
const num1 = obtemValor("#quest3-v1")

escreveValor("#resp03", identificaPrimo(num1))
})

const botao4 = document.querySelector(".executa04")

    const calculaHipotenusa = (num1,num2) => {
        
        let hipo = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2))
        return hipo
    }

botao4.addEventListener("click", () => {
    const num1 = obtemValor("#quest4-v1")
    const num2 = obtemValor("#quest4-v2")
    
    escreveValor("#resp04", calculaHipotenusa(num1, num2))
})


const botao5 = document.querySelector(".executa05");

var result = document.getElementById("resp05");

botao5.addEventListener('click', salario);

function salario(){
  const i = obtemValor("#quest5-v1")
  const j = obtemValor("#quest5-v2")
    result.innerHTML = i * (1 + (j / 100));
}


const botao6 = document.querySelector(".executa06")
var result = document.getElementById("resp06");
botao6.addEventListener('click', precoCarro);

function precoCarro(){
  const custo = obtemValor("#quest6-v1")
  result.innerHTML = custo + (custo * 0.45) + (custo * 0.28);
}

const botao7 = document.querySelector(".executa07");
var result = document.getElementById("resp07");
botao7.addEventListener('click', salarioTotal);

function salarioTotal(){
  const  carrosVendidos = obtemValor("#quest7-v1");
  const   ValorVendas =obtemValor("#quest7-v2");
  const salarioFixo = obtemValor("#quest7-v3");
  const valorPorCarro =obtemValor("#quest7-v4");

  result.innerHTML = salarioFixo + (carrosVendidos * valorPorCarro)+ (ValorVendas*0.05);
}




const botao8 = document.querySelector(".executa08")
var result = document.getElementById("resp08");
botao8.addEventListener('click', fToC);

function fToC(){
  const graus = obtemValor("#quest8-v1");
  result.innerHTML = "Em Celsius: "+(graus - 32) * 5/9;
}

const botao9 = document.querySelector(".executa09")
var result = document.getElementById("resp09");
botao9.addEventListener('click', media);

function media(){
  const nota1 = obtemValor("#quest9-v1");
  const nota2 = obtemValor("#quest9-v2");
  const nota3 = obtemValor("#quest9-v3");

  
}

const botao10 = document.querySelector(".executa10")
var result = document.getElementById("resp10");
botao10.addEventListener('click', Macas);

function Macas(){
  const quantidade = obtemValor("#quest10-v1");
 if(quantidade < 12)
 result.innerHTML = "Valor: "+(quantidade * 1.3);
 else
 result.innerHTML = "Valor: "+(quantidade * 1);
 
}

