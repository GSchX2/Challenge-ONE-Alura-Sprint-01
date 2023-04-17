const encriptadorBtn = document.querySelector(".encriptador");
const descriptadorBtn = document.querySelector(".descriptador");
const copiarBtn = document.querySelector(".copiar-textoCriptografado");

function sobreporCriptografia() {
    document.querySelector(".texto-criptografado").style.display = "none"; 
    
    if (document.querySelector(".texto-criptografado-ativo").style.display = "none") {
        document.querySelector(".texto-criptografado-ativo").attributes.removeNamedItem("style");
    }
}

function validaçãoTexto() {
    const textoInput = document.querySelector("textarea").value;
    const regex = /^[a-z0-9\s]+$/;

    if (!regex.test(textoInput)) {
        alert("As condições necessárias para a ação não foram satisfeitas: \n - Utilize apenas letras minúsculas \n - Não use acentuação \n - Não use caracteres especiais");
        return false;
    }
    return true;
}

function criptografia(text) {
    return text.replaceAll("e", "enter")
                .replaceAll("i", "imes")
                .replaceAll("a", "ai")
                .replaceAll("o", "ober")
                .replaceAll("u", "ufat");
}

function descriptografia(text) {
    return text.replaceAll("enter", "e")
                .replaceAll("imes", "i")
                .replaceAll("ai", "a")
                .replaceAll("ober", "o")
                .replaceAll("ufat", "u");
}

function mostrarTextoCriptografado() {
    const textoInput = document.querySelector("textarea").value;
    const resultadoCriptografia = document.querySelector(".resultado-criptografia");
    
    const textoCriptografado = criptografia(textoInput)
    
    resultadoCriptografia.innerHTML = textoCriptografado;
}

function mostrarTextoDescriptografado() {
    const textoInput = document.querySelector("textarea").value;
    const resultadoCriptografia = document.querySelector(".resultado-criptografia");
    
    const textoDescriptografado = descriptografia(textoInput)
    
    resultadoCriptografia.innerHTML = textoDescriptografado;
}

function copiarTexto() {
    // Pegando o campo de texto
    const textoCopiado = document.querySelector(".resultado-criptografia")

    // Selecionando o texto
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    // Copiando o texto selecionado
    navigator.clipboard.writeText(textoCopiado.value);

    // Alerta
    alert("Texto copiado");
    
    // Removendo a seleção do texto copiado
    textoCopiado.blur();

}

encriptadorBtn.addEventListener('click', function() {
    const isValid = validaçãoTexto();

    if (isValid) {
        sobreporCriptografia();
        mostrarTextoCriptografado();  
    }
})

descriptadorBtn.addEventListener('click', function() {
    const isValid = validaçãoTexto();

    if (isValid) {
        sobreporCriptografia();
        mostrarTextoDescriptografado(); 
    }  
})

copiarBtn.addEventListener('click', function() {
    copiarTexto();
})







/*
COLOCAR UMA LIXEIRA PARA FAZER RESET DO INPUT
# UM BOTÃO DE COLAR
*/