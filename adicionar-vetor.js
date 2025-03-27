//adicionar vetores em uma matriz

var matrizDeFrutas = ["Banana", "Maça", "Mamão"];

matrizDeFrutas.push("Abacate");

console.log(matrizDeFrutas.toString()); //console vai enviar a matriz ja convertida em string


//removendo vetores de uma matriz

var indexadorDoVetor = matrizDeFrutas.indexOf("Maça"); //aqui é feito uma busca pelo texto "maça" e se encotrado retorna o numero do vetor na matriz iniciando por 0 (vetor 1 = 0)

matrizDeFrutas.splice(indexadorDoVetor, 1) //aqui é retirado o vetor, ora antes encontrado na variavel indexadorDoVetor, sendo o numero 1 a indicação da quantidade de vetores; este mesmo metodo tambem é utilizado para substituir 

console.log(matrizDeFrutas.toString());