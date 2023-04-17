const encriptadorBotão = document.querySelector(".encriptador");
const descriptadorBotão = document.querySelector(".descriptador");

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
    
    const textodescriptografado = descriptografia(textoInput)
    
    resultadoCriptografia.innerHTML = textodescriptografado;
}

encriptadorBotão.addEventListener('click', function() {
    const isValid = validaçãoTexto();

    if (isValid) {
        sobreporCriptografia();
        mostrarTextoCriptografado();  
    }
})


descriptadorBotão.addEventListener('click', function() {
    const isValid = validaçãoTexto();

    if (isValid) {
        sobreporCriptografia();
        mostrarTextoDescriptografado(); 
    }  
})






/*

Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos. 

COLOCAR UMA LIXEIRA PARA FAZER RESET DO INPUT
# UM BOTÃO DE COLAR
*/