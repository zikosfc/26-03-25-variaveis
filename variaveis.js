//variaveis
var nomeDaVariavel = "Valor da Variável";

let nomeDaVariavelTemporaria = "Valor Temporario da Variável"; //let= temporaria, serve só ate o final do script, nao fica em lugar  nenhum (sai da memoria)

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variável"; //permanece na memoria mas nao da para alterar o valor

console.log("nomeDaVariavel:", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:",nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1","vetor2","vetor3","vetor4","vetor5"];

//console.log("matriz, vetor1:", matriz[0]);

for (let i = 0; i < matriz.length; i++) { //estrutura de repetição pré-definida, tendo inicio, meio e fim
    console.log ("matriz[" + i + "]:", matriz[i]);
}

class NomeDoObjeto {
    constructor(parametroUm, parametroDois) {
        //this.parametroUm = "valor Um";
        //this.parametroDois = "valor Dois";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
    }

    metodoMostrarParametros(parametroUm, parametroDois) {
        //this.parametroUm = "Valor 1";
        //this.parametroDois = "Valor 2";
        this.parametroDois = parametroUm;
        this.parametroDois = parametroDois;
        return this.parametroUm + " - " + this.parametroDois;
    }
}

const novoObjeto = new NomeDoObjeto();
console.log(novoObjeto.metodoMostrarParametros("um","dois"));



class santosFutebolClube {
    constructor(escudo, mundial, libertadores, brasileirao, cdb, paulistao, jogadores, tecnico, diretoria, torcedores, idolos, estadio, ct, pele) {
        this.escudo = escudo;
        this.mundial = mundial;
        this.libertadores = libertadores;
        this.brasileirao = brasileirao;
        this.cdb = cdb;
        this.paulistao = paulistao;
        this.jogadores = jogadores;
        this.tecnico = tecnico;
        this.diretoria = diretoria;
        this.torcedores = torcedores;
        this.idolos = idolos;
        this.estadio = estadio;
        this.ct = ct;
        this.pele = pele;
    }
    metodoMostrarSantos(escudo, mundial, libertadores, brasileirao, cdb, paulistao, jogadores, tecnico, diretoria, torcedores, idolos, estadio, ct, pele) { // declara os metodos que vai mostrar os parametros, mas nao as propriedades
        this.escudo = escudo;
        this.mundial = mundial;
        this.libertadores = libertadores;
        this.brasileirao = brasileirao;
        this.cdb = cdb;
        this.paulistao = paulistao;
        this.jogadores = jogadores;
        this.tecnico = tecnico;
        this.diretoria = diretoria;
        this.torcedores = torcedores;
        this.idolos = idolos;
        this.estadio = estadio;
        this.ct = ct;
        this.pele = pele;
    
        return escudo + " - " + mundial + " - " + libertadores + " - " + brasileirao + " - " + cdb + " - " + paulistao + " - " + jogadores + " - " + tecnico + " - " + diretoria + " - " + torcedores + " - " + idolos + " - " + estadio + " - " + ct + " - " + pele; // o return faz o metodo retornar o valor declarado apos o return
    }
}
const sfc = new santosFutebolClube(); //const = somente leitura
console.log(sfc.metodoMostrarSantos("escudo", "mundial","libertadores", "brasileirao", "cdb", "paulistao", "jogadores", "tecnico", "diretoria", "torcedores", "idolos", "estadio", "ct", "pele"));
