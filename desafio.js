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

console.log(retornaConteudo(endereco));