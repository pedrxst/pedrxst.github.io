'use strict';

let processarFilmes = function () {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const dados = JSON.parse(this.responseText);
    console.log(dados);
    for (let i = 0; i < dados.length; i++) {
      document.getElementById(
        `titulo${i + 1}`
      ).textContent = `Título: ${dados[i].titulo} `;
      document.getElementById(
        `resumo${i + 1}`
      ).textContent = `Resumo: ${dados[i].resumo} `;
      document
        .getElementById(`figura${i + 1}`)
        .setAttribute('src', `${dados[i].figura}`);
      document.getElementById(
        `classificacaoEtaria${i + 1}`
      ).textContent = `Classificação etária: ${dados[i].classificacao} `;
      let generos = document.getElementById(`generos${i + 1}`);

      for (let j = 0; j < dados[i].generos.length; j++) {
        generos.textContent += `${dados[i].generos[j]}, `;
      }
      document.getElementById(
        `titulosSemelhantes${i + 1}`
      ).textContent = `Títulos semelhantes: ${dados[i].titulosSemelhantes} `;
      let elenco = document.getElementById(`elenco${i + 1}`);
      elenco.textContent = 'Elenco: ';
      for (let j = 0; j < dados[i].elenco.length; j++) {
        elenco.textContent += `${dados[i].elenco[j]}, `;
      }
      let rating = document.getElementById(`rating${i + 1}`);
      rating.textContent = 'Rating: ';
      for (let j = 0; j < 1; j++) {
        rating.textContent += `${dados[i].opinioes[j].rating}`;
      }
      let descricao = document.getElementById(`descricao${i + 1}`);
      descricao.textContent = 'Descrição da avaliação: ';
      for (let j = 0; j < 1; j++) {
        descricao.textContent += `${dados[i].opinioes[j].descricao}`;
      }
    }
  };

  xhttp.open('GET', 'https://rafaelescalfoni.github.io/desenv_web/filmes.json');
  xhttp.send();
};
