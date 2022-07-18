let $ = (e, all = false) => {
    if( all === true ){
        return document.querySelectorAll(e);
    }else {
        return document.querySelector(e);
    }
}

let container = $(".in-contruction");
let containerP = $(".in-contruction p");
let messageChange = true;

container.onclick = () => {
    if( messageChange === true ){
        messageChange = false;
        containerP.innerHTML = "&#60;Tenha Paciência :3/&#62;";
    }else{
        messageChange = true;
        containerP.innerHTML = "&#60; Por Favor, Aguarde...<br>Site em construção /&#62;";
    }
}