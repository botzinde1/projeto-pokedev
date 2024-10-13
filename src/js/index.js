const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener('click',()=>{

        esconderCartaoPokedev();

        const idpokedevSelecionado = mostrarCartaoPokedev(pokedev);

        desativarPokedevNaListagem();

        ativarPokedevSelecionadoNaListagem(idpokedevSelecionado);
    })
})

function ativarPokedevSelecionadoNaListagem(idpokedevSelecionado) {
    const pokedvSelecionadoNaListagem = document.getElementById(idpokedevSelecionado);
    pokedvSelecionadoNaListagem.classList.add('ativo');
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector('.ativo');
    pokedevAtivoNaListagem.classList.remove('ativo');
}

function mostrarCartaoPokedev(pokedev) {
    const idpokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = 'cartao-' + idpokedevSelecionado;
    const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    CartaoPokedevParaAbrir.classList.add('aberto');
    return idpokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector('.aberto');
    cartaoPokedevAberto.classList.remove('aberto');
}
