let apert = document.getElementById('botao');
var div = document.getElementById('secao');
var text = document.getElementById('turno');
let vencedor = 0;
let matriz = {
    x: [],
    circulo: []
};
var m = 0;

function checador(check, yes, marca) {
  
    if (check == 'x') {
        matriz.x.push(yes);
        marca.style.backgroundImage = "url('imagens/x.png')";
        text.innerHTML = "Agora é a vez do jogador 1 (O)";
    } else {
        matriz.circulo.push(yes);
        marca.style.backgroundImage = "url('imagens/circulo.png')";
        text.innerHTML = "Agora é a vez do jogador 2 (X)";
    }
    return (check, yes, marca);
}

function apertar() {
    apert.style.background = '#eeee00';
    apert.style.transition = '0.1s';
    apert.style.border = '2px solid black';
}

function jogar() {
    apert.style.background = 'aqua';
    apert.style.transition = '0.1s';
    apert.hidden = true;
    let audio = document.getElementById('audio')
    audio.play();
    img = document.getElementById('fundo');
    div.hidden = false;
    text.innerHTML = "Agora é a vez do jogador 1 (O)"
}

function xbola(yes) {
    if(vencedor == 1){}else
    {
    let marca = document.getElementById(yes);
    let x = matriz.x.indexOf(yes);
    let circulo = matriz.circulo.indexOf(yes);
    console.log(`soma ${matriz.circulo.length + matriz.x.length}`)

    //=================VERIFICAR SE ALGUM DOS DOIS JA FOI MARCADO=====================
    if (x != -1 || circulo != -1) {} //SE UM DELES JA FOI MARCADO, IGNORE O COMANDO
    else { //SENÃO, VERIFIQUE QUAL DELES NÃO FOI MARCADO AINDA
        if (m == 0) {
            if (circulo == -1) {
                if (circulo == -1 && x != -1) {} else {
                    checador('circulo', yes, marca)
                }
            } //SE O CIRCULO JA ESTIVER MARCADO, IGNORE A CHAMADA DE FUNÇÃO
            m++; //MODIFIQUE PARA O X
            let tal = `das bolas`;
            let a = matriz.circulo.indexOf('a');
            let b = matriz.circulo.indexOf('b');
            let c = matriz.circulo.indexOf('c');
            let d = matriz.circulo.indexOf('d');
            let e = matriz.circulo.indexOf('e');
            let f = matriz.circulo.indexOf('f');
            let g = matriz.circulo.indexOf('g');
            let h = matriz.circulo.indexOf('h');
            let i = matriz.circulo.indexOf('i');
            validacao(tal, a, b, c, d, e, f, g, h, i);

        } else {
            if (x == -1) {
                checador('x', yes, marca)
            } //SE O X JA ESTIVER MARCADO, IGNORE A CHAMADA DE FUNÇÃO
            m = 0;
            let tal = `dos paus`;
            let a = matriz.x.indexOf('a');
            let b = matriz.x.indexOf('b');
            let c = matriz.x.indexOf('c');
            let d = matriz.x.indexOf('d');
            let e = matriz.x.indexOf('e');
            let f = matriz.x.indexOf('f');
            let g = matriz.x.indexOf('g');
            let h = matriz.x.indexOf('h');
            let i = matriz.x.indexOf('i');
            validacao(tal, a, b, c, d, e, f, g, h, i);
        }
    }

    if (matriz.circulo.length + matriz.x.length >= 9 && vencedor != 1) {
        text.innerHTML = 'Empate!'
    }
}
}

//===================SENÃO, PROSSEGUIR OPERAÇÃO============================

function validacao(tal, a, b, c, d, e, f, g, h, i) {
    if (
        a != -1 && b != -1 && c != -1 ||
        d != -1 && e != -1 && f != -1 ||
        g != -1 && h != -1 && i != -1 ||

        a != -1 && d != -1 && g != -1 ||
        b != -1 && e != -1 && h != -1 ||
        c != -1 && f != -1 && i != -1 ||

        a != -1 && e != -1 && i != -1 ||
        c != -1 && e != -1 && g != -1) {

        vencedor++;
        text.innerHTML = `O jogador ${tal} venceu!`;
    } else {

    }
}

function recomecar() {
    location.reload();
}