const input1 = document.getElementById('input1');
const botao = document.querySelector('.executa');
const resp = document.getElementById('resp');

const input2 = document.getElementById('input2');
const botao2 = document.querySelector('.executa2');
const resp2 = document.getElementById('resp2');

const input3 = document.getElementById('input3');
const botao3 = document.querySelector('.executa3');
const resp3 = document.getElementById('resp3');

const input4 = document.getElementById('input4');
const botao4 = document.querySelector('.executa4');
const resp4 = document.getElementById('resp4');

const texto5 = document.getElementById('input5');
const botao5 = document.querySelector('.executa5');
const resp5 = document.getElementById('resp5');
const procurar5 = document.getElementById('procurar5');
const substituir05 = document.getElementById('substituir');


const input6 = document.getElementById('input6');
const botao6 = document.querySelector('.executa6');
const resp6= document.getElementById('resp6');

const input7 = document.getElementById('input7');
const botao7 = document.querySelector('.executa7');
const resp7= document.getElementById('resp7');

const dataM = document.getElementById('datamais');
const dataL = document.getElementById('datamenos');
const botao8 = document.querySelector('.executa8');
const resp8= document.getElementById('resp8');


function inverterString() {
  const string = input1.value;

  let stringInvertida = '';
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  const conteudo = document.createTextNode(
    `O frase invertida é: ${stringInvertida}`
  );
  resp.textContent = '';
  resp.appendChild(conteudo);
}

botao.addEventListener('click', inverterString);


//2

const vogaisNegrito = function () {
  let string2 = input2.value;
  string2 = string2.toLowerCase();

  for (let i = 0; i < string2.length; i++) {
    if (
      string2[i] === 'a' ||
      string2[i] === 'e' ||
      string2[i] === 'i' ||
      string2[i] === 'o' ||
      string2[i] === 'u'
    )
      string2[i].bold();
  }

  const conteudo2 = document.createTextNode(
    `Frase com voigais em negrito negrito: ${string2}`
  );
  resp2.innerHTML = '';
  resp2.appendChild(conteudo2);
};

botao2.addEventListener('click', vogaisNegrito);

//3

const contarPalavras = function() {
  const string3 = input3.value;
  
  let arr = string3.split(' ');
  const countMap = Object.create(null);

  for (const element of arr) {
    if (!countMap[element]) {
      countMap[element] = 1;
    } else {
      countMap[element] += 1;
    }
  }
let countMapNew = String(countMap)
  const conteudo3 = document.createTextNode(
    `${ countMapNew}`
  );
  resp3.textContent = '';
  resp3.appendChild(conteudo3);
};


botao3.addEventListener('click', contarPalavras);

//4
function maiorOcorrencia() {

  let texto = input4.value;
  texto = texto.toLowerCase();
  var entrada = texto.split(' ');
  var maior = null;
  var ocorrenciasMaior = -1;

  for (var i = 0; i < entrada.length; i++) {
    var ocorrencias = 1;
    for (var t = i + 1; t < entrada.length; t++)
      if (entrada[i] == entrada[t]) ocorrencias++;

    if (ocorrencias > ocorrenciasMaior) {
      maior = entrada[i];
      ocorrenciasMaior = ocorrencias;
    }
  }
    
  const conteudo4 = document.createTextNode(`A paçlavra com maior ocorrência foi: ${maior} e ela apareceu ${ocorrenciasMaior} vezes`);
  resp4.textContent = '';
  resp4.appendChild(conteudo4);
};

botao4.addEventListener('click', maiorOcorrencia)

//5

function substituir() {
const procurar = procurar5.value
let string5 = texto5.value
const substituir5 = substituir05.value

  let arr = string5.split(' ');
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === procurar) arr[i] = substituir5;
  }
  const conteudo5 = document.createTextNode(`Frase trocada: ${arr.join(' ')} `);
  resp5.textContent = '';
  resp5.appendChild(conteudo5);

};

botao5.addEventListener('click', substituir)

//6

function diasDeVida() {
  const dataNascimento = input6.value
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = `${ano}-${mes}-${dia}`;
  const nascimento = dataNascimento.split('/');
  const dataNasc = `${nascimento[2]}-${nascimento[1]}-${nascimento[0]}`;

  const d2 = dataAtual;
  const d1 = dataNasc;
  const diffInMs = new Date(d2) - new Date(d1);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  const conteudo6 = document.createTextNode(
    `Dias de vida: ${diffInDays}`
  );
  resp6.textContent = '';
  resp6.appendChild(conteudo6);
};

botao6.addEventListener('click', diasDeVida);




//7
const dataExtenso = function () {
  const data = input7.value

  let arr = data.split('/');
  let mes = arr[1];
  let nomeMes;
  if (mes === '01') {
    nomeMes = 'Janeiro';
  } else if (mes === '02') {
    nomeMes = 'Fevereiro';
  } else if (mes === '03') {
    nomeMes = 'Março';
  } else if (mes === '04') {
    nomeMes = 'Abril';
  } else if (mes === '05') {
    nomeMes = 'Maio';
  } else if (mes === '06') {
    nomeMes = 'Junho';
  } else if (mes === '07') {
    nomeMes = 'Julho';
  } else if (mes === '08') {
    nomeMes = 'Agosto';
  } else if (mes === '09') {
    nomeMes = 'Setembro';
  } else if (mes === '10') {
    nomeMes = 'Outubro';
  } else if (mes === '11') {
    nomeMes = 'Novembro';
  } else if (mes === '12') {
    nomeMes = 'Dezembro';
  }

  let dataPorExtenso = `${arr[0]} de ${nomeMes} de ${arr[2]}`;


  const conteudo7 = document.createTextNode(
    `Data por extenso: ${dataPorExtenso}`
  );
  resp7.textContent = '';
  resp7.appendChild(conteudo7);
};

botao7.addEventListener('click', dataExtenso);

//8

  function diferencaSemanas() {
  const dataMaior = dataM.value
  const dataMenor= dataL.value
  const data1Split = dataMaior.split('/');
  const data1 = `${data1Split[2]}-${data1Split[1]}-${data1Split[0]}`;
  const d1 = data1;

  const data2Split = dataMenor.split('/');
  const data2 = `${data2Split[2]}-${data2Split[1]}-${data2Split[0]}`;
  const d2 = data2;

  const diffInMs = new Date(d1) - new Date(d2);
  const diffInWeeks = Math.trunc(diffInMs / (1000 * 60 * 60 * 24 * 7));
  

    const conteudo8 = document.createTextNode(
    `Diferença: ${diffInWeeks} semanas`
  );
  resp8.textContent = '';
  resp8.appendChild(conteudo8);
};

botao8.addEventListener('click', diferencaSemanas);

  