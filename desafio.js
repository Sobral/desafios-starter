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

//
//Exercicio 4
//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {  // código aqui
  if(anos >= 7) { return "Jedi Master";}
  
  if(anos <= 6 && anos > 3) {return "Avançado";}

  if(anos <= 3 && anos > 1) { return "Intermediário";}
  else return "Iniciante";

  return 

}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

//
//5º exercício
//Dado o seguinte vetor de objetos:
//
var usuarios = [  
  {    nome: "Diego", habilidades: ["Javascript", "ReactJS", "Redux"]  },
  {    nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  }
]

//Escreva uma função que produza o seguinte resultado:
//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function retornaHabilidades(dados) {
  for(usuario of dados){
    const mensagem = `O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`;
    console.log(mensagem);
  }
}

retornaHabilidades(usuarios);