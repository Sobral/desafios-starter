//
// 1º exercício: Crie uma função que dado o objeto a seguir:

var endereco = {
  rua: "Rua dos pinheiros",  
  numero: 1293,  
  bairro: "Centro",  
  cidade: "São Paulo",  
  uf: "SP"
};

// Retorne o seguinte conteúdo:
const conteudo_01 = 'O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.';

function retornaConteudo(dados){
  const cidade_uf = `${dados.cidade} / ${dados.uf}`;
  const rua_completo = `"${dados.rua}" com nº ${dados.numero}.`
  return `O usuário mora em ${cidade_uf}, no bairro ${dados.bairro}, na rua ${rua_completo}`
}

//
//Exercicio 2
//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
//
function pares(x, y) {
  for(var i=x; i<= y; i++){
    const condicao = (i%2) == 0;
    if(condicao) {
      console.log(i);
    }
  }
}
pares(32,321);

//
//Exercicio 3
//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não.
//
function temHabilidade(skills) {
  const habilidade_procurada = "Javascript";
  const found = skills.some((skill)=>{
    return skill == habilidade_procurada;
  });
  return found;
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false