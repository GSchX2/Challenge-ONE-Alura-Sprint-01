const encriptadorBotão = document.querySelector(".encriptador");
encriptadorBotão.addEventListener('click', function() {
    const mostrarTextoCriptografado = document.querySelector(".texto-criptografado");

    mostrarTextoCriptografado.classList.add("texto-criptografado-ativo")
    mostrarTextoCriptografado.classList.remove("texto-criptografado")

    const textoInput = document.querySelector("textarea").value;
    mostrarTextoCriptografado.innerHTML = `
    <p class="resultado-criptografia">${textoInput}</p>
    <button>Copiar</button>`;
})

