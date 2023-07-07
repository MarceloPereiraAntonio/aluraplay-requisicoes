import { conectApi } from "./conectApi.js";
const form = document.querySelector("[data-form]");

async function criarVideo(e){
    e.preventDefault();
    const img = document.querySelector("[data-img]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try{


        await  conectApi.criaVideo(titulo, descricao, url, img);

        window.location.href = "../pages/envio-concluido.html"

    } catch(e){
        alert(e);
    }
}

form.addEventListener("submit", e => criarVideo(e));