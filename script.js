const prompt = require('prompt-sync')();

//CONSTRUCAO DO VETOR GLOBAL
let hamburgueria = [];

//FUNCAO PARA EXIBIR O MENU

function exibirMenu(){
    console.log("\n Menu da hamburgueria ");
    console.log("1. Adicionar Hambúrguer ");
    console.log("2. Ver Hambúrgueres");
    console.log("3. Atualizar Hambúrguer ");
    console.log("4. Deletar  Hambúrguer");
    console.log("5. Sair ");
}

//ADICIONAR
function adicionarHamburguer(){
    const nome  = prompt('Nome do hambúrguer: ');
    const preco = prompt('Preço do hambúrguer: ');
    hamburgueria.push( { nome, preco } );
    console.log("Hambúrguer adicionado com sucesso!");
}

//LISTAR
function verHamburgueres(){
    if(hamburgueria.length === 0){
        console.log("Nenhum Hambúrguer encontrado!");
        return;
    }
    console.log("\n Lista de Hambúrgueres: ");
    hamburgueria.forEach( ( hamburguer, index)=>{
        console.log(`${index + 1 }. Nome: ${hamburguer.nome}, Preço: R$${hamburguer.preco}`);
    });
}

//ATUALIZAR
function atualizarHamburguer(){
    verHamburgueres();
    const index = parseInt(prompt('Escolha o número do hambúrguer'+
        'para atualizar ')) - 1;
    
    if(index < 0 || index >= hamburgueria.length){
        console.log('Número inválido.');
        return;
    }
    const novoNome = prompt("Novo nome do hambúrguer: ");
    const novoPreco = prompt("Novo preço do hambúrguer: ");
    hamburgueria[index] = { nome: novoNome, preco: novoPreco};
    console.log('Hambúrguer atualizado com sucesso!');

}
//DELETAR
function deletarHamburguer(){
    verHamburgueres();
    const index = parseInt(prompt('Escolha o número do hambúrguer'+
        ' para deletar ')) - 1;

    if(index < 0 || index >= hamburgueria.length){
        console.log('Número inválido.');
        return;
    }
    hamburgueria.splice(index, 1);
    console.log('Hambúrguer deletado com sucesso!');
}


module.exports = {

    prompt,
    exibirMenu,
    adicionarHamburguer,
    verHamburgueres,
    atualizarHamburguer,
    deletarHamburguer


 }

