let apert = document.getElementById('botao');
var div = document.getElementById('secao');
var text = document.getElementById('turno');
let vencedor = 0;
var click = 0;
let matriz = {
    x: [],
    circulo: []
};
var m = 0;

if (localStorage.getItem('click') == 1) {
    noturno();
}

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

    if (vencedor == 1 || empate == 1) {} else {
        let marca = document.getElementById(yes);
        let x = matriz.x.indexOf(yes);
        let circulo = matriz.circulo.indexOf(yes);

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
                let tal = `1`;
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
                let tal = `2`;
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
            text.innerHTML = 'Deu velha!'
            var empate = 1;
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
        let audio = document.getElementById('audio2');
        audio.play();
    } else {
        if (matriz.circulo.length + matriz.x.length >= 9 && vencedor != 1) {} else {
            let audio = document.getElementById("audio3");
            audio.play();
        }
    }
    if (matriz.circulo.length + matriz.x.length >= 9 && vencedor != 1) {
        let audio = document.getElementById("audio4");
        audio.play();
    } else {

    }
}

function recomecar() {
    location.reload();
}

function noturno() {
    let corpo = document.getElementsByTagName('body')[0];
    let h1 = document.getElementById('turno');
    let not = document.getElementById('noturn');
    not.style.border = '5px solid green';
    if (click != 1) {
        click = 1;
    } else {
        click = 0;
    }
    if (click == 1) {

        for (let p = 0; p < 9; p++) {
            let divs = document.getElementsByTagName('div')[p];
            divs.style.backgroundColor = '#446699';
        }

        if (localStorage.getItem('click') == 1) {
            corpo.style.transition = '0s';
        }else{
            corpo.style.transition = '0.6s';
        }

        localStorage.setItem('click', 1);
        corpo.style.backgroundColor = '#222222'
        h1.style.color = '#ffffff';

    } else {
        localStorage.clear();
        corpo.style.transition = '0.6s';
        not.style.border = '5px solid green';
        for (let p = 0; p < 9; p++) {
            let divs = document.getElementsByTagName('div')[p];
            divs.style.backgroundColor = 'aqua';
        }
        corpo.style.backgroundColor = '#ecb367'
        h1.style.color = '#000000';
        not.style.border = '5px solid red';
        //location.reload();
    }
}