const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const image = document.querySelector(".image");
const botaoCopiar = document.getElementById('btn-copy');
const content = document.querySelector(".content");

function btnCriptografar(){  
    const textoCriptografado = criptografar(textArea.value);
    message.value = textoCriptografado;
    image.style.display = 'none';
    content.style.display = 'none';
    botaoCopiar.classList.remove('hidden');
    textArea.value = "";
}

function criptografar(stringCriptografada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"] ];
    stringCriptografada = stringCriptografada.toLowerCase();
    stringCriptografada = stringCriptografada.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            
        } 
    }
    return stringCriptografada;
}

function btnDescriptografar(){
    
    const textoDescriptografado = descriptografar(textArea.value);
    message.value = textoDescriptografado; 
    image.style.display = 'none';
    content.style.display = 'none';
    botaoCopiar.classList.remove('hidden');    
    textArea.value = "";
}

function descriptografar(stringDescriptografada){

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
stringDescriptografada = stringDescriptografada.toLowerCase();
stringDescriptografada = stringDescriptografada.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

for(let i = 0; i < matrizCodigo.length; i++){
    if (stringDescriptografada.includes(matrizCodigo[i][1])) {
        stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);            

    }
}  
return stringDescriptografada;      
}
  
function btnCopy(){
    message.select();
    document.execCommand('copy');
    alert('Texto Copiado');
    message.value = '';
    image.style.display = 'block';
    content.style.display = 'block';
    botaoCopiar.classList.add('hidden');
} 