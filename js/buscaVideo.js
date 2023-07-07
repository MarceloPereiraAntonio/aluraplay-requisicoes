import { conectApi } from "./conectApi.js";
import constroiCard from "./mostrarVideos.js";


async function buscaVideo(e){
    e.preventDefault();
    const dadosDaPesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectApi.buscaVideo(dadosDaPesquisa);

    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(e => lista.appendChild(constroiCard(e.titulo, e.descricao, e.url, e.imagem)));

    if(busca.length ==0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não há videos com esse titulo</h2>`
    }

}

const buttonBusca = document.querySelector('[data-botao-pesquisa]');

buttonBusca.addEventListener("click", e => buscaVideo(e))